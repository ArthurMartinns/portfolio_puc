import type { Locale } from "@/lib/types";

export function formatMonthYear(isoMonth: string, locale: Locale): string {
  const [year, month] = isoMonth.split("-").map(Number);
  const date = new Date(year, month - 1, 1);
  return new Intl.DateTimeFormat(locale === "pt" ? "pt-BR" : "en-US", {
    month: "short",
    year: "numeric",
  }).format(date);
}
