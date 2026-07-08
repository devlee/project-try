import Link from "next/link";
import type { Locale } from "@/lib/types";
import { ui } from "@/lib/i18n";
import { LangSwitch } from "@/components/LangSwitch";

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-5">
        <Link href={`/${locale}`} className="flex items-baseline gap-2">
          <span className="text-lg font-bold tracking-tight text-accent">
            try<span className="text-ink">.</span>
          </span>
          <span className="text-sm font-semibold tracking-tight">
            {ui.brand[locale]}
          </span>
        </Link>
        <nav className="flex items-center gap-4 text-sm text-ink-soft">
          <Link
            href={`/${locale}/tries`}
            className="transition-colors hover:text-accent"
          >
            {ui.nav.archive[locale]}
          </Link>
          <Link
            href={`/${locale}/about`}
            className="hidden transition-colors hover:text-accent sm:inline"
          >
            {ui.nav.about[locale]}
          </Link>
          <LangSwitch locale={locale} />
        </nav>
      </div>
    </header>
  );
}
