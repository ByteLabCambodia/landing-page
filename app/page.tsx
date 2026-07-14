import type { Metadata } from "next";
import { strings } from "@/lib/strings";
import { getPartnerLogos } from "@/lib/partners";
import { LangProvider } from "@/components/LangProvider";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/ScrollProgress";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Mission from "@/components/Mission";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import Impact from "@/components/Impact";
import Testimonials from "@/components/Testimonials";
import ForYou from "@/components/ForYou";
import Partners from "@/components/Partners";
import AboutTeaser from "@/components/AboutTeaser";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// FAQ rich-result markup, built from the visible FAQ section so it always
// matches on-page content (a Google requirement). Placeholder answers
// (still wrapped in [brackets]) are excluded until they have real copy.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: strings.en.faq.items
    .filter((item) => !item.a.includes("["))
    .map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
};

export default function Home() {
  return (
    <LangProvider>
      <SmoothScroll>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <Marquee />
          <Mission />
          <WhatWeDo />
          <WhyUs />
          <Impact />
          <Testimonials />
          <ForYou />
          {/* Partners section hidden for now — uncomment to show again. */}
          {/* <Partners logos={getPartnerLogos()} /> */}
          <AboutTeaser />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LangProvider>
  );
}
