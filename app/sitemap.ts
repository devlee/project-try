import type { MetadataRoute } from "next";
import { getAllTries } from "@/lib/tries";

const BASE = "https://triedforyou.com";

function bilingual(path: string, lastModified?: string) {
  return {
    url: `${BASE}/zh${path}`,
    lastModified: lastModified ? new Date(lastModified) : new Date(),
    alternates: {
      languages: {
        zh: `${BASE}/zh${path}`,
        en: `${BASE}/en${path}`,
      },
    },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const latest = getAllTries()[0]?.date;
  return [
    bilingual("", latest),
    bilingual("/tries", latest),
    bilingual("/about"),
    ...getAllTries().map((card) =>
      bilingual(`/tries/${card.slug}`, card.date),
    ),
  ];
}
