"use client";

import { motion, useReducedMotion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import { useLang } from "./LangProvider";

/**
 * Pinned, scroll-scrubbed hero (~2 viewports tall).
 * Phase 1 (0 → 0.45 of the pin): the robot car kit ASSEMBLES itself —
 *   wheels roll in, the controller board drops on, the sensor mast mounts —
 *   with blueprint part-labels that fade as each part clicks into place.
 * Phase 2 (0.55 → 1): wheels spin up and the finished car DRIVES OFF
 *   while the headline fades.
 * The plug-&-play story, told entirely by the user's scroll.
 */
export default function Hero() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();
  const still = !!prefersReduced;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  // Text fades only in the drive phase
  const contentOpacity = useTransform(scrollYProgress, [0.55, 0.9], [1, still ? 1 : 0]);
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
                <motion.span
                  key={word}
                  className="block"
                  initial={still ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.35, duration: 0.7, ease: [0.21, 0.65, 0.35, 1] }}
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
                </motion.span>
              ))}
            </h1>

            <motion.p
              className="mt-6 max-w-xl text-lg text-slate md:text-xl"
              initial={still ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.7 }}
            >
              {t.hero.tagline}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-4"
              initial={still ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55, duration: 0.7 }}
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
            </motion.div>
          </motion.div>

          <AssemblyScene progress={scrollYProgress} still={still} />
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

/* ================= Assembly scene ================= */

function AssemblyScene({ progress, still }: { progress: MotionValue<number>; still: boolean }) {
  // helper: a part travels from its exploded pose to 0 during [a, b] of the pin
  const part = (a: number, b: number, from: number) =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useTransform(progress, [a, b], [still ? 0 : from, 0]);

  // exploded → assembled
  const chassisY = part(0.0, 0.3, -40);
  const wheelLX = part(0.05, 0.35, -135);
  const wheelLY = part(0.05, 0.35, 55);
  const wheelRX = part(0.08, 0.38, 135);
  const wheelRY = part(0.08, 0.38, 55);
  const wheelInRotate = part(0.05, 0.38, -200);
  const boardY = part(0.15, 0.45, -130);
  const mastY = part(0.2, 0.48, -110);
  const mastX = part(0.2, 0.48, 40);
  const eyesX = part(0.12, 0.42, 95);

  // labels visible while exploded, gone once assembled
  const labelOpacity = useTransform(progress, [0, 0.08, 0.42], [still ? 0 : 1, 1, 0]);
  // assembled flash: baseline pulse when everything clicks in
  const clickScale = useTransform(progress, [0.46, 0.5, 0.54], [1, still ? 1 : 1.03, 1]);

  // drive phase
  const carX = useTransform(progress, [0.55, 1], [0, still ? 0 : 460]);
  const wheelSpin = useTransform(progress, [0.5, 1], [0, still ? 0 : 900]);
  const trackDash = useTransform(progress, [0.5, 1], [0, still ? 0 : -420]);
  const speedLinesOpacity = useTransform(progress, [0.55, 0.65], [0, still ? 0 : 1]);
  const speedLinesX = useTransform(progress, [0.55, 1], [0, still ? 0 : 200]);

  const wheelStyle = { transformBox: "fill-box", transformOrigin: "center" } as const;

  return (
    <motion.div
      initial={still ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative mx-auto w-full max-w-130"
    >
      <svg viewBox="0 0 560 430" className="w-full" aria-hidden="true">
        {/* ground track */}
        <line x1="0" y1="352" x2="560" y2="352" stroke="var(--brand-line)" strokeWidth="2" />
        <motion.line
          x1="0" y1="352" x2="560" y2="352"
          stroke="var(--brand-blue)" strokeWidth="2.5" strokeDasharray="16 24"
          style={{ strokeDashoffset: trackDash }}
        />

        {/* part labels (exploded state) */}
        <motion.g style={{ opacity: labelOpacity }} fontFamily="var(--font-plex-mono)" fontSize="13" fill="var(--brand-slate)">
          <path d="M120 120h-60" stroke="var(--brand-line)" strokeWidth="1.5" strokeDasharray="3 5" />
          <text x="6" y="115">controller</text>
          <path d="M92 330h-40" stroke="var(--brand-line)" strokeWidth="1.5" strokeDasharray="3 5" />
          <text x="6" y="318">motor ×2</text>
          <path d="M452 96h46" stroke="var(--brand-line)" strokeWidth="1.5" strokeDasharray="3 5" />
          <text x="452" y="84">sensor</text>
          <path d="M512 240h30" stroke="var(--brand-line)" strokeWidth="1.5" strokeDasharray="3 5" />
          <text x="470" y="226">vision</text>
          <text x="24" y="44" fill="var(--brand-primary-deep)" fontWeight="600">plug &amp; play — no soldering</text>
        </motion.g>

        {/* speed lines behind the car in the drive phase */}
        <motion.g style={{ opacity: speedLinesOpacity, x: speedLinesX }} stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round">
          <line x1="20" y1="230" x2="90" y2="230" strokeOpacity="0.7" />
          <line x1="0" y1="262" x2="86" y2="262" strokeOpacity="0.45" />
          <line x1="34" y1="294" x2="96" y2="294" strokeOpacity="0.25" />
        </motion.g>

        {/* ================= THE CAR ================= */}
        <motion.g style={{ x: carX, scale: clickScale, ...wheelStyle }}>
          {/* soft flat ground shadow */}
          <ellipse cx="280" cy="352" rx="160" ry="8" fill="var(--brand-mist)" />

          {/* chassis — flat filled */}
          <motion.g style={{ y: chassisY }}>
            <rect x="130" y="228" width="300" height="82" rx="20" fill="var(--brand-primary)" />
            <rect x="130" y="228" width="300" height="82" rx="20" fill="none" stroke="var(--brand-primary-deep)" strokeWidth="2" />
            {/* deck stripe + vents */}
            <rect x="150" y="244" width="120" height="10" rx="5" fill="white" fillOpacity="0.35" />
            <path d="M370 250v40M386 250v40M402 250v40" stroke="white" strokeOpacity="0.4" strokeWidth="4" strokeLinecap="round" />
            {/* ByteLab wordmark on the side */}
            <text x="278" y="262" fontFamily="var(--font-bytelab)" fontWeight="700" fontSize="20" fill="white">
              Byte<tspan fill="var(--brand-blue)">Lab</tspan>
            </text>
          </motion.g>

          {/* controller board — drops from above */}
          <motion.g style={{ y: boardY }}>
            <rect x="168" y="180" width="104" height="48" rx="10" fill="var(--brand-mist)" stroke="var(--brand-blue-deep)" strokeWidth="2.5" />
            <rect x="182" y="194" width="22" height="22" rx="4" fill="var(--brand-blue-deep)" />
            <path d="M216 198h40M216 210h28" stroke="var(--brand-blue-deep)" strokeWidth="3" strokeLinecap="round" />
            {/* pins */}
            <path d="M186 180v-10M206 180v-10M226 180v-10M246 180v-10" stroke="var(--brand-blue-deep)" strokeWidth="3" strokeLinecap="round" />
            {/* status LED */}
            <circle cx="256" cy="216" r="4" fill="var(--brand-blue)" />
          </motion.g>

          {/* sensor mast — slides in from upper right */}
          <motion.g style={{ y: mastY, x: mastX }}>
            <rect x="352" y="150" width="10" height="78" rx="5" fill="var(--brand-ink)" />
            <circle cx="357" cy="132" r="20" fill="var(--brand-blue)" />
            <circle cx="357" cy="132" r="8" fill="white" />
            {/* signal arcs */}
            <path d="M384 112a44 44 0 010 44" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" fill="none" />
            <path d="M400 100a64 64 0 010 66" stroke="var(--brand-blue)" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.5" fill="none" />
          </motion.g>

          {/* vision module — slides in from the right */}
          <motion.g style={{ x: eyesX }}>
            <rect x="416" y="244" width="40" height="52" rx="10" fill="var(--brand-ink)" />
            <circle cx="436" cy="260" r="8" fill="var(--brand-blue)" />
            <circle cx="436" cy="282" r="8" fill="white" />
          </motion.g>

          {/* wheels — roll in from the sides, spin in the drive phase */}
          {[196, 366].map((cx, i) => (
            <motion.g key={cx} style={{ x: i === 0 ? wheelLX : wheelRX, y: i === 0 ? wheelLY : wheelRY }}>
              <motion.g style={{ ...wheelStyle, rotate: wheelInRotate }}>
                <motion.g style={{ ...wheelStyle, rotate: wheelSpin }}>
                  <circle cx={cx} cy="310" r="44" fill="var(--brand-ink)" />
                  <circle cx={cx} cy="310" r="30" fill="white" />
                  <path
                    d={`M${cx} 284v52M${cx - 26} 310h52M${cx - 18} 292l36 36M${cx - 18} 328l36-36`}
                    stroke="var(--brand-ink)" strokeWidth="5" strokeLinecap="round"
                  />
                  <circle cx={cx} cy="310" r="9" fill="var(--brand-blue)" />
                </motion.g>
              </motion.g>
            </motion.g>
          ))}
        </motion.g>

        {/* dimension line (stays put; hidden on small screens) */}
        <g className="hidden md:block">
          <path d="M130 394h300M130 386v16M430 386v16" stroke="var(--brand-slate)" strokeWidth="1.5" />
          <text x="252" y="418" fontFamily="var(--font-plex-mono)" fontSize="13" fill="var(--brand-slate)">
            BL-01 · v1.0
          </text>
        </g>
      </svg>
    </motion.div>
  );
}
