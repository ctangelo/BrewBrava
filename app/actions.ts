'use server';

import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

const leadSchema = z.object({
  locale: z.string().min(2),
  name: z.string().min(2),
  phone: z.string().min(3),
  email: z.string().email(),
  format: z.string().min(2),
  volume: z.string().min(1),
  comment: z.string().optional(),
  consent: z.boolean().refine((val) => val, 'consent_required')
});

export async function submitB2BLead(formData: FormData) {
  const payload = {
    locale: formData.get('locale'),
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    format: formData.get('format'),
    volume: formData.get('volume'),
    comment: formData.get('comment'),
    consent: formData.get('consent') === 'on'
  };

  const parseResult = leadSchema.safeParse(payload);

  if (!parseResult.success) {
    const errors = parseResult.error.issues.map((issue) => issue.path.join('.') || issue.code);
    return { success: false, errors } as const;
  }

  const leadsDir = path.join(process.cwd(), '.data');
  const leadsFile = path.join(leadsDir, 'b2b-leads.json');
  await fs.mkdir(leadsDir, { recursive: true });

  const existing = await fs
    .readFile(leadsFile, 'utf-8')
    .then((value) => JSON.parse(value) as unknown[])
    .catch(() => [] as unknown[]);

  existing.push({ ...parseResult.data, createdAt: new Date().toISOString() });
  await fs.writeFile(leadsFile, JSON.stringify(existing, null, 2));

  return { success: true } as const;
}
