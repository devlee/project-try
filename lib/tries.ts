import type { TryCard } from "@/lib/types";
import { notebooklm } from "@/content/tries/notebooklm";
import { elevenlabs } from "@/content/tries/elevenlabs";
import { suno } from "@/content/tries/suno";

const cards: TryCard[] = [notebooklm, elevenlabs, suno];

/** All try cards, newest first. */
export function getAllTries(): TryCard[] {
  return [...cards].sort((a, b) => b.date.localeCompare(a.date));
}

/** The most recent card — "today's try". */
export function getLatestTry(): TryCard {
  return getAllTries()[0];
}

export function getTryBySlug(slug: string): TryCard | undefined {
  return cards.find((c) => c.slug === slug);
}
