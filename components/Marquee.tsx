"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useLang } from "./LangProvider";

/**
 * Scroll-driven marquee: two giant text rows that slide in opposite
 * directions as the user scrolls past — the page's speedometer.
 * Row 1: the brand verbs (solid ink, verbs' final word in blue).
 * Row 2: what ByteLab teaches (outlined text).
 */
export default function Marquee() {
  const { t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", prefersReduced ? "0%" : "-18%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-18%", prefersReduced ? "-18%" : "0%"]);

  const row1 = t.hero.words.join(" ");
  const row2 = ["Robotics", "IoT", "Coding", "STEM"].join(" · ") + " · ";

  return (
    <div ref={ref} aria-hidden="true" className="overflow-hidden border-y border-line bg-white py-8 md:py-10">
      <motion.div style={{ x: x1 }} className="whitespace-nowrap">
        {Array.from({ length: 4 }).map((_, i) => (
          <span
            key={i}
            className="mr-10 inline-block font-display text-5xl font-bold tracking-tight text-ink md:text-7xl"
          >
            {row1.split(" ").map((w, j) => (
              <span key={j} className={j === 2 ? "text-primary" : ""}>
                {w}{" "}
              </span>
            ))}
          </span>
        ))}
      </motion.div>
      <motion.div style={{ x: x2 }} className="mt-3 whitespace-nowrap">
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="inline-block font-display text-4xl font-bold tracking-tight text-transparent md:text-6xl"
            style={{ WebkitTextStroke: "1.5px var(--brand-blue)" }}
          >
            {row2}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
