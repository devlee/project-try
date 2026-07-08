import { NextRequest, NextResponse } from "next/server";
import { getRedis } from "@/lib/redis";
import { getTryBySlug } from "@/lib/tries";

function keyFor(slug: string) {
  return `tried-count:${slug}`;
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!getTryBySlug(slug)) {
    return NextResponse.json({ error: "unknown try" }, { status: 404 });
  }
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null });
  const count = (await redis.get<number>(keyFor(slug))) ?? 0;
  return NextResponse.json({ count });
}

export async function POST(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  if (!getTryBySlug(slug)) {
    return NextResponse.json({ error: "unknown try" }, { status: 404 });
  }
  const redis = getRedis();
  if (!redis) return NextResponse.json({ count: null });
  const count = await redis.incr(keyFor(slug));
  return NextResponse.json({ count });
}
