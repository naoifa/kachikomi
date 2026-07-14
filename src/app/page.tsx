import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";
import { faqs, services } from "@/lib/content";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Solution } from "@/components/sections/solution";
import { Features } from "@/components/sections/features";
import { Benefits } from "@/components/sections/benefits";
import { Evidence } from "@/components/sections/evidence";
import { Flow } from "@/components/sections/flow";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function buildJsonLd() {
  const orgId = `${siteConfig.url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteConfig.name,
        url: siteConfig.url,
        email: siteConfig.email,
        description: siteConfig.description,
        slogan: siteConfig.tagline,
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: "ja",
        publisher: { "@id": orgId },
      },
      {
        "@type": "ItemList",
        name: "提供サービス",
        itemListElement: services.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: service.title,
            description: service.body,
            provider: { "@id": orgId },
            areaServed: "JP",
          },
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };
}

export default function HomePage() {
  const jsonLd = buildJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <Benefits />
      <Evidence />
      <Flow />
      <Pricing />
      <Faq />
      <FinalCta />
      <Contact />
    </>
  );
}
