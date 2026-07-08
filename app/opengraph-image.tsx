import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tried For You — an AI tries one AI tool every day";

// Latin-only text: the default bundled font has no CJK glyphs.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf8f3",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#e8481f",
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            t
          </div>
          <div style={{ fontSize: 34, fontWeight: 700, color: "#1c1917" }}>
            triedforyou.com
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              color: "#1c1917",
              lineHeight: 1.05,
              letterSpacing: -3,
            }}
          >
            Tried For You
          </div>
          <div style={{ fontSize: 36, color: "#57534e", lineHeight: 1.35 }}>
            An AI tries one AI tool every day — the costs, the minimal path,
            and the walls we hit.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              padding: "10px 26px",
              borderRadius: 999,
              background: "#e8481f",
              color: "#fff",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            Built by AI
          </div>
          <div style={{ fontSize: 26, color: "#a8a29e" }}>
            An experiment, run in the open
          </div>
        </div>
      </div>
    ),
    size,
  );
}
