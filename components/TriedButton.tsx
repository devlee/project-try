"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
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
 * Check-in backed by the /api/tried counter (Upstash Redis).
 * localStorage prevents duplicate check-ins from the same browser.
 */
export function TriedButton({
  slug,
  locale,
}: {
  slug: string;
  locale: Locale;
}) {
  const storageKey = `tried:${slug}`;
  const tried = useSyncExternalStore(
    subscribe,
    () => localStorage.getItem(storageKey) === "1",
    () => null,
  );
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(`/api/tried/${slug}`)
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, [slug]);

  async function checkIn() {
    localStorage.setItem(storageKey, "1");
    window.dispatchEvent(new Event(TRIED_EVENT));
    setCount((c) => (c === null ? c : c + 1));
    try {
      const res = await fetch(`/api/tried/${slug}`, { method: "POST" });
      const data = await res.json();
      if (typeof data.count === "number") setCount(data.count);
    } catch {
      // Optimistic update already applied; the counter is best-effort.
    }
  }

  const isTried = tried === true;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={checkIn}
        disabled={tried !== false}
        className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
          isTried
            ? "cursor-default bg-emerald-100 text-emerald-700"
            : "bg-accent text-white shadow-sm hover:bg-accent-deep active:scale-95 disabled:opacity-60"
        }`}
      >
        {isTried ? `✓ ${ui.tried.done[locale]}` : `🙌 ${ui.tried.button[locale]}`}
      </button>
      {count !== null && count > 0 && (
        <span className="text-xs text-ink-faint">
          {count} {ui.tried.count[locale]}
        </span>
      )}
    </div>
  );
}
