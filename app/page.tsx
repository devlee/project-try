import { redirect } from "next/navigation";

// Locale detection happens in middleware; this is the fallback.
export default function RootPage() {
  redirect("/zh");
}
