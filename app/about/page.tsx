import type { Metadata } from "next";
import AboutDetail from "@/components/AboutDetail";
import { strings } from "@/lib/strings";

export const metadata: Metadata = {
  title: "About Us — ByteLab",
  description: strings.en.about.hero.body,
};

export default function AboutPage() {
  return <AboutDetail />;
}
