import { LandingPage } from "@/components/landing/LandingPage";
import { siteConfig, siteUrl } from "@/lib/site";

export const metadata = {
  title: "Digitize Your Handwritten Life",
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: siteConfig.name,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Android",
  description: siteConfig.description,
  url: siteUrl.origin,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteUrl.origin,
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LandingPage />
    </>
  );
}
