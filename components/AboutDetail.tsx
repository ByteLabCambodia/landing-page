"use client";

import { LangProvider, useLang } from "./LangProvider";
import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";
import Achievements from "./Achievements";
import Team from "./Team";

/** About Us page: the story (milestones) and the people (team). */
export default function AboutDetail() {
  return (
    <LangProvider>
      <SmoothScroll>
        <ScrollProgress />
        <Header />
        <main>
          <AboutHero />
          <Achievements />
          <Team />
        </main>
        <Footer />
      </SmoothScroll>
    </LangProvider>
  );
}

function AboutHero() {
  const { t } = useLang();
  return (
    <section className="border-b border-line bg-mist pt-28 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.about.hero.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="font-display text-4xl font-bold text-ink md:text-6xl">
            {t.about.hero.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate">{t.about.hero.body}</p>
        </Reveal>
      </div>
    </section>
  );
}
