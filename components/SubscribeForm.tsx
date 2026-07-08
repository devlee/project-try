"use client";

import { useState } from "react";
import type { Locale } from "@/lib/types";
import { ui } from "@/lib/i18n";

/**
 * Newsletter sign-up. Wire BUTTONDOWN_USERNAME after creating the account;
 * until then submissions are held in localStorage so early interest isn't lost.
 */
const BUTTONDOWN_USERNAME = "";

export function SubscribeForm({ locale }: { locale: Locale }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    if (BUTTONDOWN_USERNAME) return; // let the form POST to Buttondown
    e.preventDefault();
    const pending = JSON.parse(localStorage.getItem("pending-subscribers") ?? "[]");
    pending.push({ email, at: new Date().toISOString() });
    localStorage.setItem("pending-subscribers", JSON.stringify(pending));
    setDone(true);
  }

  if (done) {
    return (
      <p className="text-sm font-medium text-emerald-700">
        ✓ {locale === "zh" ? "收到！上线第一天你会第一个知道。" : "Got it! You'll be the first to know."}
      </p>
    );
  }

  return (
    <form
      action={
        BUTTONDOWN_USERNAME
          ? `https://buttondown.com/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`
          : undefined
      }
      method="post"
      onSubmit={handleSubmit}
      className="flex w-full max-w-md gap-2"
    >
      <input
        type="email"
        name="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={ui.subscribe.placeholder[locale]}
        className="min-w-0 flex-1 rounded-full border border-line bg-white px-4 py-2 text-sm outline-none transition-colors focus:border-accent"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper transition-colors hover:bg-accent"
      >
        {ui.subscribe.button[locale]}
      </button>
    </form>
  );
}
