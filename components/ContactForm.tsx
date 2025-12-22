"use client";

import { useState } from "react";

interface FormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const requiredFields: (keyof FormState)[] = ["name", "company", "phone", "email", "message"];

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [field]: event.target.value });
    setErrors({ ...errors, [field]: "" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newErrors: Record<string, string> = {};

    requiredFields.forEach((field) => {
      if (!form[field]?.trim()) {
        newErrors[field] = "Обязательное поле";
      }
    });

    const emailRegex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (form.email && !emailRegex.test(form.email)) {
      newErrors.email = "Некорректный email";
    }

    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <div className="glow-border rounded-2xl bg-surface/80 p-6 shadow-soft">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Имя *</label>
            <input
              value={form.name}
              onChange={handleChange("name")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder="Ваше имя"
            />
            {errors.name && <span className="text-xs text-accent">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Заведение / Компания *</label>
            <input
              value={form.company}
              onChange={handleChange("company")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder="Название заведения"
            />
            {errors.company && <span className="text-xs text-accent">{errors.company}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Телефон / WhatsApp *</label>
            <input
              value={form.phone}
              onChange={handleChange("phone")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder="+84 ..."
            />
            {errors.phone && <span className="text-xs text-accent">{errors.phone}</span>}
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              className="rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-xs text-accent">{errors.email}</span>}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm text-gray-300">Сообщение *</label>
          <textarea
            value={form.message}
            onChange={handleChange("message")}
            className="h-28 rounded-lg border border-white/10 bg-white/5 px-3 py-3 text-sm text-white outline-none focus:border-accent"
            placeholder="Расскажите, как вам удобно сотрудничать"
          />
          {errors.message && <span className="text-xs text-accent">{errors.message}</span>}
        </div>
        <button
          type="submit"
          className="mt-2 w-full rounded-full bg-accent px-6 py-3 text-center text-black font-semibold shadow-soft transition hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(211,139,38,0.35)]"
        >
          Отправить заявку
        </button>
        <p className="text-xs text-gray-400">Мы ответим в течение 1 рабочего дня.</p>
        {submitted && !Object.keys(errors).length && (
          <div className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-sm text-accent">
            Заявка сохранена. Мы свяжемся с вами — проверьте корректность контактов.
          </div>
        )}
      </form>
    </div>
  );
}
