"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { ContactForm } from "@/components/contact-form";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "@/components/icons";

export default function ContactPage() {
  const { locale } = useLanguage();
  const copy = dictionary.contact;

  const channels = [
    { href: `mailto:${siteConfig.email}`, label: "Email", value: siteConfig.email, icon: MailIcon },
    { href: `https://wa.me/${siteConfig.whatsapp}`, label: "WhatsApp", value: "WhatsApp", icon: WhatsappIcon },
    { href: siteConfig.linkedin, label: "LinkedIn", value: "LinkedIn", icon: LinkedinIcon },
    { href: siteConfig.github, label: "GitHub", value: "GitHub", icon: GithubIcon },
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="font-mono text-accent">{"// "}</span>
          {copy.title[locale]}
        </h1>
        <p className="mt-3 text-base text-muted">{copy.subtitle[locale]}</p>
      </header>

      <div className="mt-14 grid gap-12 sm:grid-cols-5 sm:gap-16">
        <div className="sm:col-span-2">
          <div className="flex flex-col gap-3">
            {channels.map(({ href, label, value, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="flex items-center gap-3 rounded-sm border border-border bg-surface px-4 py-3.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
              >
                <span className="flex h-9 w-9 flex-none items-center justify-center rounded-sm border border-border bg-accent-soft text-accent">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="block font-mono text-xs uppercase tracking-wide text-muted">{label}</span>
                  {value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="sm:col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
