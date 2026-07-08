"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/types";

export function LangSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "/";
  const other: Locale = locale === "zh" ? "en" : "zh";
  const target = pathname.replace(/^\/(zh|en)/, `/${other}`);

  return (
    <Link
      href={target}
      className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft transition-colors hover:border-accent hover:text-accent"
    >
      {other === "zh" ? "中文" : "EN"}
    </Link>
  );
}
