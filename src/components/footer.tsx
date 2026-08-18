"use client";

import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "@/components/icons";

export function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  const links = [
    { href: `mailto:${siteConfig.email}`, label: "Email", icon: MailIcon },
    { href: `https://wa.me/${siteConfig.whatsapp}`, label: "WhatsApp", icon: WhatsappIcon },
    { href: siteConfig.linkedin, label: "LinkedIn", icon: LinkedinIcon },
    { href: siteConfig.github, label: "GitHub", icon: GithubIcon },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <div className="text-center font-mono text-xs text-muted sm:text-left">
          <p>
            © {year} {siteConfig.name}. {dictionary.footer.rights[locale]}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={label}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
