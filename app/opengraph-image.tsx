import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background:
          "radial-gradient(circle at top left, rgba(79,70,229,0.24), transparent 38%), linear-gradient(180deg, #faf8f5 0%, #eef2ff 100%)",
        color: "#111827",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
        }}
      >
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 24,
            background: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            fontWeight: 700,
          }}
        >
          ✒
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700 }}>{siteConfig.name}</div>
          <div style={{ fontSize: 18, color: "rgba(17,24,39,0.72)" }}>
            Handwritten notes to organized action
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          maxWidth: 860,
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "12px 18px",
            borderRadius: 999,
            background: "rgba(79,70,229,0.12)",
            color: "#4f46e5",
            fontSize: 24,
            fontWeight: 700,
          }}
        >
          AI-powered handwriting OCR
        </div>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.02,
            fontWeight: 800,
            letterSpacing: -2,
          }}
        >
          Digitize your handwritten life.
        </div>
        <div
          style={{
            fontSize: 28,
            lineHeight: 1.4,
            color: "rgba(17,24,39,0.72)",
          }}
        >
          Scan notes, extract tasks, set reminders, and keep your habits on
          track.
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
