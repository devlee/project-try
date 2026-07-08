import { notFound } from "next/navigation";
import { locales, isLocale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <div className="flex min-h-screen flex-col" lang={locale === "zh" ? "zh-CN" : "en"}>
      <Header locale={locale} />
      <main className="mx-auto w-full max-w-4xl flex-1 px-5">{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
