import type { TryCard } from "@/lib/types";
import { notebooklm } from "@/content/tries/notebooklm";
import { elevenlabs } from "@/content/tries/elevenlabs";
import { suno } from "@/content/tries/suno";
import { canva } from "@/content/tries/canva";
import { perplexity } from "@/content/tries/perplexity";

const cards: TryCard[] = [notebooklm, elevenlabs, suno, canva, perplexity];

/** Build-day date in Beijing time; cards dated later stay hidden until the next deploy. */
function todayInShanghai(): string {
  return new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Shanghai" });
}

/** All published try cards, newest first. Future-dated drafts are excluded. */
export function getAllTries(): TryCard[] {
  const today = todayInShanghai();
  return cards
    .filter((card) => card.date <= today)
    .sort((a, b) => b.date.localeCompare(a.date));
}

/** The most recent card — "today's try". */
export function getLatestTry(): TryCard {
  return getAllTries()[0];
}

export function getTryBySlug(slug: string): TryCard | undefined {
  return getAllTries().find((c) => c.slug === slug);
}
