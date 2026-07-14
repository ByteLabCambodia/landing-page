"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useLang } from "./LangProvider";

const RobotModel = dynamic(() => import("./RobotModel"), { ssr: false });

/**
 * Pinned, scroll-scrubbed hero (~2 viewports tall).
 * Renders the real 3D robot model (draggable) alongside the headline;
 * the headline fades out as the user scrolls through the pin.
 *
 * Entrance animations are CSS-only (.hero-rise) so the headline paints
 * before hydration — with framer-motion `initial`, the SSR HTML ships with
 * opacity:0 and LCP waits on the full JS bundle.
 */
export default function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const still = !!prefersReduced;
  const ref = useRef<HTMLElement>(null);

  // Mount the three.js canvas only once the main thread is idle, keeping
  // the ~1MB+ 3D bundle and its HDR environment off the critical path.
  const [showModel, setShowModel] = useState(false);
  useEffect(() => {
    const start = () => setShowModel(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(start, { timeout: 2500 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(start, 1500);
    return () => window.clearTimeout(id);
  }, []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Text fades only in the drive phase
  const contentOpacity = useTransform(scrollYProgress, [0.55, 1], [1, still ? 1 : 0]);
  const contentY = useTransform(scrollYProgress, [0.55, 1], [0, still ? 0 : 80]);

  return (
    <section ref={ref} id="top" className={still ? "relative" : "relative h-[220vh]"}>
      <div className="sticky top-0 flex h-svh flex-col justify-start overflow-hidden bg-white text-ink md:justify-center">
        {/* graph-paper texture, like an engineering notebook */}
        <svg className="absolute inset-0 size-full opacity-60" aria-hidden="true">
          <defs>
            <pattern id="hero-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 H 0 V 32" fill="none" stroke="var(--brand-line)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-6 px-5 pt-20 pb-24 md:grid-cols-[1fr_1.1fr] md:gap-4 md:px-8 md:pt-10 md:pb-10">
          <motion.div style={{ opacity: contentOpacity, y: contentY }}>
            <p className="mb-6 font-mono text-sm tracking-widest text-slate uppercase">
              ByteLab · Robotics education · Cambodia
            </p>

            <h1 className="font-display text-5xl leading-[1.05] font-bold sm:text-6xl lg:text-7xl">
              {t.hero.words.map((word, i) => (
                <span
                  key={word}
                  className="hero-rise block"
                  style={{ animationDelay: `${0.15 + i * 0.35}s` }}
                >
                  {i === 2 ? (
                    /* the one emphasized word — primary navy, used nowhere else in the headline */
                    <span className="text-primary">
                      {word}
                      <span className="cursor-blink ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.1em] bg-primary" />
                    </span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            <p
              className="hero-rise mt-6 max-w-xl text-lg text-slate md:text-xl"
              style={{ animationDelay: "1.3s" }}
            >
              {t.hero.tagline}
            </p>

            <div
              className="hero-rise mt-8 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "1.55s" }}
            >
              <a
                href="#contact"
                className="rounded-full bg-primary px-8 py-4 font-rigid text-base font-semibold text-white shadow-lg shadow-primary/20 transition-transform hover:scale-105 hover:bg-primary-deep"
              >
                {t.hero.cta}
              </a>
              <a
                href="#what-we-do"
                className="rounded-full border-2 border-blue px-8 py-4 font-rigid text-base font-semibold text-blue transition-colors hover:bg-blue hover:text-white"
              >
                {t.nav.whatWeDo}
              </a>
            </div>
          </motion.div>

          {showModel ? (
            <RobotModel still={still} />
          ) : (
            /* same box as RobotModel's wrapper so the canvas mounts without layout shift */
            <div className="relative mx-auto aspect-square w-full max-w-130" aria-hidden="true" />
          )}
        </div>

        {/* Scroll-down cue */}
        <motion.div
          style={{ opacity: contentOpacity }}
          className="absolute inset-x-0 bottom-6 z-10 flex flex-col items-center gap-2 text-slate"
        >
          <span className="font-mono text-xs tracking-widest uppercase">{t.hero.scrollCue}</span>
          <svg className="scroll-cue" width="18" height="26" viewBox="0 0 18 26" fill="none" aria-hidden="true">
            <rect x="1" y="1" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="9" cy="8" r="2.5" fill="var(--brand-blue)" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
