"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * Mission statement with a scroll-scrubbed reveal: each word fades from
 * faint to full ink as the paragraph moves through the viewport, so the
 * sentence "types itself" under the reader's scroll.
 */
export default function Mission() {
  const { t } = useLang();
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.35"],
  });

  const words = t.mission.statement.split(" ");
  const highlights = t.mission.highlights;

  return (
    <section id="mission" className="scroll-mt-16 bg-white py-28 md:py-44">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="mb-8 font-mono text-sm tracking-widest text-slate uppercase">
            {t.mission.eyebrow}
          </p>
        </Reveal>
        <p
          ref={ref}
          className="font-rigid text-3xl leading-snug font-semibold sm:text-4xl md:text-5xl"
        >
          {words.map((word, i) => (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[i / words.length, (i + 1) / words.length]}
              highlighted={highlights.some((h) => word.includes(h))}
              disabled={!!prefersReduced}
            >
              {word}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
  highlighted,
  disabled,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  highlighted: boolean;
  disabled: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <motion.span
      style={disabled ? undefined : { opacity }}
      className={`inline-block whitespace-pre ${highlighted ? "text-primary" : "text-ink"}`}
    >
      {children}{" "}
    </motion.span>
  );
}
