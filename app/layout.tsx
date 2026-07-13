import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Google_Sans } from "next/font/google";
import localFont from "next/font/local";
import {
  SITE_URL,
  SITE_NAME,
  SITE_ALT_NAME,
  SITE_SEO_TITLE,
  SITE_DESCRIPTION,
  SOCIAL_LINKS,
} from "@/lib/site";
import "./globals.css";

// Display face — ByteLab brand font (headlines only, single weight)
const byteLab = localFont({
  src: "../public/fonts/Byte-Lab-Regular.ttf",
  variable: "--font-bytelab",
  weight: "400",
});


const rigid = localFont({
  src: [
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_Thin.otf", weight: "100", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_ExtraLight.otf", weight: "200", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_Light.otf", weight: "300", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_Regular.otf", weight: "400", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_SemiBold.otf", weight: "600", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_Bold.otf", weight: "700", style: "normal" },
    { path: "../public/fonts/Rigid_Square/fonnts.com-Rigid_Square_ExtraBold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-rigid",
});
// Body face
const plex = IBM_Plex_Sans({
  variable: "--font-plex",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Utility face — eyebrows, labels, small data
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

// Khmer support — falls back automatically when Khmer text renders.
// adjustFontFallback off: Next.js has no built-in metrics for Google Sans,
// so it can't generate a size-matched fallback anyway (silences build warning).
const khmer = Google_Sans({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_SEO_TITLE,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "ByteLab",
    "Byte Lab",
    "robotics Cambodia",
    "robotics education Cambodia",
    "robot kits Cambodia",
    "school robotics",
    "STEM education Cambodia",
    "Robocon Cambodia",
    "learning platform",
    "Phnom Penh",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_SEO_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/OG_preview.jpg",
        width: 1200,
        height: 630,
        alt: SITE_SEO_TITLE,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_SEO_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/OG_preview.jpg"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  appleWebApp: {
    title: SITE_NAME,
  },
};

// Structured data that tells Google the official site name ("ByteLab" /
// "Byte Lab") and links the site to its social profiles. Rendered once,
// site-wide. https://developers.google.com/search/docs/appearance/site-names
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    alternateName: SITE_ALT_NAME,
    url: SITE_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE_NAME,
    alternateName: SITE_ALT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/web-app-manifest-512x512.png`,
    description: SITE_DESCRIPTION,
    sameAs: SOCIAL_LINKS,
    address: {
      "@type": "PostalAddress",
      addressCountry: "KH",
    },
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${byteLab.variable} ${rigid.variable} ${plex.variable} ${plexMono.variable} ${khmer.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
