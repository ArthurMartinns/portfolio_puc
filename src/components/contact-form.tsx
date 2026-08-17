"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/context/language-context";
import { dictionary } from "@/data/content";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const { locale } = useLanguage();
  const copy = dictionary.contact;

  const [values, setValues] = useState({ name: "", email: "", message: "", company: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (!values.name.trim()) next.name = copy.errorRequired[locale];
    if (!values.email.trim()) next.email = copy.errorRequired[locale];
    else if (!EMAIL_REGEX.test(values.email.trim())) next.email = copy.errorEmail[locale];
    if (!values.message.trim()) next.message = copy.errorRequired[locale];
    else if (values.message.trim().length < 10) next.message = copy.errorMinLength[locale];
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("success");
      setValues({ name: "", email: "", message: "", company: "" });
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-sm border border-border bg-surface px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* honeypot field, hidden from real users */}
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={(e) => setValues((v) => ({ ...v, company: e.target.value }))}
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
          {copy.formName[locale]}
        </label>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          className={inputClass}
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
          {copy.formEmail[locale]}
        </label>
        <input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          className={inputClass}
        />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wide text-muted">
          {copy.formMessage[locale]}
        </label>
        <textarea
          id="message"
          rows={5}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          className={`${inputClass} resize-none`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {status === "sending" ? copy.formSending[locale] : copy.formSubmit[locale]}
      </button>

      {status === "success" && <p className="text-sm text-emerald-500">{copy.formSuccess[locale]}</p>}
      {status === "error" && <p className="text-sm text-red-500">{copy.formError[locale]}</p>}
    </form>
  );
}
