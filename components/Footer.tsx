import Link from "next/link";
import type { Locale } from "@/lib/types";
import { ui } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="mt-auto border-t border-line">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-5 py-8 text-center text-xs text-ink-faint">
        <p>
          triedforyou.com · {ui.footer.rights[locale]} ·{" "}
          <Link
            href={`/${locale}/about`}
            className="underline decoration-line underline-offset-2 hover:text-accent"
          >
            Built by AI
          </Link>
        </p>
      </div>
    </footer>
  );
}
