import type { Metadata } from "next";

const SITE_URL = "https://zali2bali.com";
const SITE_NAME = "Zali2Bali";
const DEFAULT_TITLE = "Zali2Bali — AI Automation for Bali's Tourism & Hospitality Industry";
const DEFAULT_DESCRIPTION =
  "Zali2Bali builds AI automation systems that help Bali villa management companies stop losing bookings to slow response times. WhatsApp automation, CRM, and lead systems built for hospitality.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AI automation Bali",
    "villa management software",
    "WhatsApp automation",
    "CRM for villa management",
    "booking recovery",
    "hospitality automation Indonesia",
    "AI startup Bali",
    "tourism technology",
    "lead generation Bali",
    "GoHighLevel implementation",
  ],
  authors: [{ name: "Zali2Bali", url: SITE_URL }],
  creator: "Zali2Bali",
  publisher: "Zali2Bali",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Zali2Bali — AI Automation for Bali's Hospitality Industry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [`${SITE_URL}/og-image.png`],
    creator: "@zali2bali",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.json",
  alternates: { canonical: SITE_URL },
};

export function pageMetadata(
  title: string,
  description: string,
  path: string = ""
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
    },
    alternates: { canonical: `${SITE_URL}${path}` },
  };
}

/* ─── JSON-LD Structured Data ─── */

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.png`,
    width: 512,
    height: 512,
  },
  description: DEFAULT_DESCRIPTION,
  foundingDate: "2024",
  foundingLocation: {
    "@type": "Place",
    name: "Bali, Indonesia",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bali",
      addressCountry: "ID",
    },
  },
  areaServed: [
    { "@type": "Place", name: "Bali, Indonesia" },
    { "@type": "Place", name: "Indonesia" },
    { "@type": "Place", name: "Southeast Asia" },
  ],
  knowsAbout: [
    "AI Automation",
    "WhatsApp Business API",
    "CRM Systems",
    "Villa Management Technology",
    "Hospitality Automation",
    "GoHighLevel",
    "Lead Generation",
  ],
  sameAs: [
    "https://www.linkedin.com/company/zali2bali",
    "https://www.instagram.com/zali2bali",
  ],
};

export const softwareCompanySchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Zali2Bali Booking Recovery System",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp",
  description:
    "AI-powered WhatsApp automation and CRM system that recovers lost bookings for villa management companies by ensuring instant guest response, automatic lead qualification, and multi-channel inquiry tracking.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "350",
    highPrice: "1200",
    offerCount: "3",
  },
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
};

export const faqSchema = (
  faqs: Array<{ question: string; answer: string }>
) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
