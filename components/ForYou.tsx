"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Audience tabs: Students / Parents / Schools / Partners. */
export default function ForYou() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const prefersReduced = useReducedMotion();
  const audience = t.forYou.audiences[active];

  return (
    <section id="for-you" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.forYou.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl font-bold text-ink md:text-5xl">{t.forYou.title}</h2>
        </Reveal>

        <Reveal delay={0.2}>
          <div role="tablist" aria-label={t.forYou.eyebrow} className="mt-10 flex flex-wrap gap-2">
            {t.forYou.audiences.map((a, i) => (
              <button
                key={a.label}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={`relative rounded-full px-5 py-2.5 font-display text-sm font-semibold transition-colors ${
                  i === active ? "text-white" : "text-slate hover:text-primary"
                }`}
              >
                {i === active && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={prefersReduced ? { duration: 0 } : { type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative">{a.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 min-h-44 rounded-3xl border border-line bg-mist p-8 md:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReduced ? undefined : { opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="font-display text-2xl font-bold text-ink md:text-3xl">
                {audience.title}
              </h3>
              <p className="mt-3 max-w-2xl text-lg text-slate">{audience.body}</p>
              <a
                href="#contact"
                className="mt-6 inline-block font-mono text-sm text-blue-deep underline decoration-blue decoration-2 underline-offset-4 hover:text-primary"
              >
                {t.nav.cta} →
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
