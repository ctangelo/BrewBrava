import fs from 'node:fs/promises';
import path from 'node:path';
import { cache } from 'react';
import type { CmsContent } from '@/types/cms';

const cmsPath = path.join(process.cwd(), 'content', 'cms.json');

export const getCmsContent = cache(async (): Promise<CmsContent> => {
  const raw = await fs.readFile(cmsPath, 'utf-8');
  return JSON.parse(raw) as CmsContent;
});
