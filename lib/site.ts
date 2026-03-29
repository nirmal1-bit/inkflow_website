export const siteConfig = {
  name: "InkFlow",
  description:
    "InkFlow turns handwritten notes into organized, actionable tasks with AI-powered scanning, reminders, and habit tracking.",
  keywords: [
    "InkFlow",
    "handwriting OCR",
    "AI task extraction",
    "productivity app",
    "note to task",
    "reminder app",
    "habit tracker",
  ],
} as const;

function normalizeSiteUrl(value: string) {
  return value.startsWith("http://") || value.startsWith("https://")
    ? value
    : `https://${value}`;
}

export function getSiteUrl() {
  const configuredUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.VERCEL_URL ??
    "http://localhost:3000";

  return new URL(normalizeSiteUrl(configuredUrl));
}

export const siteUrl = getSiteUrl();
