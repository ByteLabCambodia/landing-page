"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Impact stats with count-up animation. [Update numbers in strings.ts.] */
export default function Impact() {
  const { t } = useLang();

  return (
    <section id="impact" className="scroll-mt-16 border-y border-line bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.impact.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-rigid text-4xl font-bold text-ink md:text-5xl">
            {t.impact.title}
          </h2>
        </Reveal>
        {/* [remove this line once real figures are in] */}
        <Reveal delay={0.15}>
          <p className="mt-3 font-mono text-xs text-slate">{t.impact.line}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {t.impact.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="rounded-3xl border border-line bg-white p-6 md:p-8">
                <p className={`font-rigid text-4xl font-bold md:text-5xl ${i % 2 === 0 ? "text-primary" : "text-blue"}`}>
                  <CountUp target={s.value} />
                  {s.suffix}
                </p>
                <p className="mt-2 text-sm text-slate md:text-base">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUp({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();
  const [value, setValue] = useState(prefersReduced ? target : 0);

  useEffect(() => {
    if (!inView || prefersReduced) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, prefersReduced]);

  return <span ref={ref}>{value.toLocaleString()}</span>;
}
