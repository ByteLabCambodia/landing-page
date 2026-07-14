import type { Metadata } from "next";
import AboutDetail from "@/components/AboutDetail";
import { strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: "About Us",
  description: strings.en.about.hero.body,
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Us",
    description: strings.en.about.hero.body,
    url: "/about",
    images: ["/OG_preview.jpg"],
  },
};

export default function AboutPage() {
  return <AboutDetail />;
}
