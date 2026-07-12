import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono, Google_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/site";
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

// Khmer support — falls back automatically when Khmer text renders
const khmer = Google_Sans({
  variable: "--font-khmer",
  subsets: ["khmer"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "ByteLab — Imagine. Build. Innovate.",
  description:
    "Hands-on robotics education in Cambodia: robot car kits, a digital learning platform, project-based programs, and R&D.",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
