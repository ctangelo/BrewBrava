"use client";

import { useState } from "react";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

export interface ContactFormCopy {
  labels: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
  };
  placeholders: {
    name: string;
    company: string;
    phone: string;
    email: string;
    message: string;
  };
  submitLabel: string;
  requiredError: string;
  emailError: string;
  disclaimer: string;
  success: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm({ copy }: { copy: ContactFormCopy }) {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);


  const requiredFields: (keyof FormState)[] = ["name", "company", "phone", "email", "message"];

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: event.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError(null);

    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!form[field]?.trim()) {
        newErrors[field] = copy.requiredError;
      }
    });

    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = copy.emailError;
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          phone: form.phone,
          email: form.email,
          message: form.message,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Send failed");
      }

      setSubmitted(true);
      setForm(initialState);
    } catch (err: any) {
      setSubmitError(err?.message || "Send failed");
      setSubmitted(false);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="glow-border rounded-2xl bg-surface/80 p-6 shadow-soft">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">{copy.labels.name} *</label>
            <input
              value={form.name}
              onChange={handleChange("name")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder={copy.placeholders.name}
            />
            {errors.name && <span className="text-xs text-accent">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">{copy.labels.company} *</label>
            <input
              value={form.company}
              onChange={handleChange("company")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder={copy.placeholders.company}
            />
            {errors.company && <span className="text-xs text-accent">{errors.company}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">{copy.labels.phone} *</label>
            <input
              value={form.phone}
              onChange={handleChange("phone")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder={copy.placeholders.phone}
            />
            {errors.phone && <span className="text-xs text-accent">{errors.phone}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">{copy.labels.email} *</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder={copy.placeholders.email}
            />
            {errors.email && <span className="text-xs text-accent">{errors.email}</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">{copy.labels.message} *</label>
          <textarea
            value={form.message}
            onChange={handleChange("message")}
            className="h-28 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
            placeholder={copy.placeholders.message}
          />
          {errors.message && <span className="text-xs text-accent">{errors.message}</span>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-2 w-full rounded-full bg-accent px-6 py-3 text-center text-black font-semibold shadow-soft transition hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(211,139,38,0.35)]"
        >
          {loading ? "Sending..." : copy.submitLabel}
        </button>
        <p className="text-xs text-gray-400">{copy.disclaimer}</p>
        {submitError && (
          <div className="rounded-lg border border-red-500/40 bg-red-500/10 px-3 py-2 text-sm text-red-200">
            {submitError}
          </div>
        )}
        {submitted && !Object.keys(errors).length && (
          <div className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent">
            {copy.success}
          </div>
        )}
      </form>
    </div>
  );
}
