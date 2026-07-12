import type { Metadata } from "next";
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

export default function Home() {
  return (
    <LangProvider>
      <SmoothScroll>
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
          <Partners />
          <AboutTeaser />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </LangProvider>
  );
}
