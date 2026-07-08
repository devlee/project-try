"use client";

import { useSyncExternalStore } from "react";
import type { Locale } from "@/lib/types";
import { ui } from "@/lib/i18n";

const TRIED_EVENT = "tried-update";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(TRIED_EVENT, callback);
  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(TRIED_EVENT, callback);
  };
}

/**
 * Check-in stub: stores state in localStorage and shows a seeded count.
 * Phase 2 replaces this with a real backend counter.
 */
export function TriedButton({
  slug,
  locale,
  seedCount,
}: {
  slug: string;
  locale: Locale;
  seedCount: number;
}) {
  const storageKey = `tried:${slug}`;
  const tried = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(storageKey) === "1",
    () => false,
  );

  function checkIn() {
    localStorage.setItem(storageKey, "1");
    window.dispatchEvent(new Event(TRIED_EVENT));
  }

  const count = seedCount + (tried ? 1 : 0);

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={checkIn}
        disabled={tried}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
          tried
            ? "cursor-default bg-emerald-100 text-emerald-700"
            : "bg-accent text-white shadow-sm hover:bg-accent-deep active:scale-95"
        }`}
      >
        {tried ? `✓ ${ui.tried.done[locale]}` : `🙌 ${ui.tried.button[locale]}`}
      </button>
      {count > 0 && (
        <span className="text-xs text-ink-faint">
          {count} {ui.tried.count[locale]}
        </span>
      )}
    </div>
  );
}
