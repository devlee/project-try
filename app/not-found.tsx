import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-5 text-center">
      <p className="text-7xl font-bold tracking-tight text-accent">404</p>
      <div className="space-y-1">
        <p className="text-lg font-semibold">这一页我们还没试过</p>
        <p className="text-sm text-ink-soft">
          We haven&apos;t tried this page yet.
        </p>
      </div>
      <div className="flex gap-3">
        <Link
          href="/zh"
          className="rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-deep"
        >
          回到今日一试
        </Link>
        <Link
          href="/en"
          className="rounded-full border border-line px-5 py-2 text-sm font-semibold text-ink-soft transition-colors hover:border-accent hover:text-accent"
        >
          Today&apos;s Try
        </Link>
      </div>
    </div>
  );
}
