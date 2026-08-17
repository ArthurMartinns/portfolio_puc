"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/context/language-context";
import { dictionary, siteConfig } from "@/data/content";
import { LanguageToggle } from "@/components/language-toggle";
import { ThemeToggle } from "@/components/theme-toggle";
import { MenuIcon, CloseIcon } from "@/components/icons";

const navItems = [
  { href: "/", key: "about" as const },
  { href: "/projetos", key: "projects" as const },
  { href: "/experiencias", key: "experience" as const },
  { href: "/contato", key: "contact" as const },
];

function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? parts[0]?.[1] ?? "")).toUpperCase();
}

export function Header() {
  const { locale } = useLanguage();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-surface font-mono text-xs font-semibold text-accent">
            {initials(siteConfig.name)}
          </span>
          <span className="text-base font-semibold tracking-tight">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 px-3 py-5 font-mono text-xs font-medium tracking-wide uppercase transition-colors ${
                  active
                    ? "border-accent text-accent"
                    : "border-transparent text-muted hover:border-border hover:text-foreground"
                }`}
              >
                {dictionary.nav[item.key][locale]}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-md border border-border md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 pt-2 md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md border-l-2 px-3 py-2.5 font-mono text-xs font-medium tracking-wide uppercase transition-colors ${
                    active
                      ? "border-accent bg-accent-soft text-accent"
                      : "border-transparent text-muted hover:text-foreground"
                  }`}
                >
                  {dictionary.nav[item.key][locale]}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 flex items-center gap-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  );
}
