import { Redis } from "@upstash/redis";

/**
 * Marketplace installs inject KV_REST_API_* (legacy Vercel KV naming);
 * a direct Upstash setup injects UPSTASH_REDIS_REST_*. Support both,
 * and return null when neither is configured so the site degrades gracefully.
 */
export function getRedis(): Redis | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token =
    process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}
