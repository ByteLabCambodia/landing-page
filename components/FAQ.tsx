"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Q&A accordion. */
export default function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);
  const prefersReduced = useReducedMotion();

  return (
    <section id="faq" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.faq.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-rigid text-4xl font-bold text-ink md:text-5xl">{t.faq.title}</h2>
        </Reveal>

        <div className="mt-12 divide-y divide-line rounded-3xl border border-line">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8"
                >
                  <span className={`font-rigid font-semibold ${isOpen ? "text-primary-deep" : "text-ink"}`}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={prefersReduced ? { duration: 0 } : { duration: 0.2 }}
                    className={`shrink-0 font-rigid text-xl ${isOpen ? "text-primary" : "text-blue"}`}
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReduced ? false : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReduced ? undefined : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-slate md:px-8">{item.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
