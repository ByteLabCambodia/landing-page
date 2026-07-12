"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import MediaSlot from "./MediaSlot";
import { useLang } from "./LangProvider";
import { serviceSlugs } from "@/lib/services";

/**
 * Core section: each service gets a large band (~80vh) with scroll-driven
 * animation — media parallaxes, text slides in from its side, and a ghost
 * index number drifts behind. Clicking a band opens /services/<slug>.
 */
export default function WhatWeDo() {
  const { t } = useLang();

  return (
    <section id="what-we-do" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 pt-24 md:px-8 md:pt-32">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.whatWeDo.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-rigid text-4xl font-bold text-ink md:text-5xl">
            {t.whatWeDo.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-slate">{t.whatWeDo.intro}</p>
        </Reveal>
      </div>

      {t.whatWeDo.items.map((item, i) => (
        <ServiceBand key={item.title} item={item} index={i} explore={t.whatWeDo.explore} />
      ))}
    </section>
  );
}

type Item = {
  tag: string;
  title: string;
  body: string;
  points: readonly string[];
};

function ServiceBand({
  item,
  index,
  explore,
}: {
  item: Item;
  index: number;
  explore: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const href = `/services/${serviceSlugs[index]}`;
  const flip = index % 2 === 1; // alternate media side
  const chipBlue = flip;

  // Scroll-driven motion across the band's time on screen: the media rises
  // faster than the page (parallax) and tilts upright as it passes center,
  // while the ghost number sinks the opposite way at its own speed.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const mediaY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [130, -130]);
  const mediaRotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    prefersReduced ? [0, 0, 0] : [flip ? -4 : 4, 0, flip ? 3 : -3],
  );
  const ghostY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [-80, 160]);
  const ghostOpacity = useTransform(scrollYProgress, [0, 0.45, 1], [0, 1, 0]);

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden border-y border-line ${
        flip ? "bg-white" : "bg-mist"
      } py-20 md:py-0`}
    >
      {/* ghost index number drifting behind the content */}
      <motion.span
        aria-hidden="true"
        style={{ y: ghostY, opacity: ghostOpacity }}
        className={`pointer-events-none absolute top-8 font-rigid text-[11rem] leading-none font-bold text-ink/5 select-none md:text-[19rem] ${
          flip ? "right-4" : "left-4"
        }`}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 md:min-h-[80vh] md:grid-cols-2 md:gap-16 md:px-8 md:py-24">
        {/* Text — slides in from its side */}
        <motion.div
          initial={prefersReduced ? false : { opacity: 0, x: flip ? 48 : -48 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
          className={flip ? "md:order-2" : ""}
        >
          <span
            className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-mono text-xs tracking-wide ring-1 ring-line ${
              chipBlue ? "text-blue-deep" : "text-primary-deep"
            }`}
          >
            <span className={`size-1.5 rounded-full ${chipBlue ? "bg-blue" : "bg-primary"}`} />
            {item.tag}
          </span>

          <h3 className="mt-6 font-rigid text-3xl font-bold text-ink md:text-5xl">
            <Link href={href} className="transition-colors hover:text-primary">
              {item.title}
            </Link>
          </h3>
          <p className="mt-5 max-w-lg text-lg text-slate">{item.body}</p>

          <ul className="mt-7 flex flex-wrap gap-2">
            {item.points.map((p, j) => (
              <motion.li
                key={p}
                initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: 0.3 + j * 0.1, duration: 0.4 }}
                className="rounded-full border border-line bg-white px-3 py-1 text-sm text-slate"
              >
                {p}
              </motion.li>
            ))}
          </ul>

          <Link
            href={href}
            className="group mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-rigid text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
          >
            {explore}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>

        {/* Media — parallax + clickable */}
        <motion.div style={{ y: mediaY, rotate: mediaRotate }} className={flip ? "md:order-1" : ""}>
          <Link href={href} aria-label={item.title} className="group block">
            <div className="relative h-72 overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-ink/5 transition-transform duration-300 group-hover:scale-[1.02] md:h-96">
              <MediaSlot index={index} />
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
