"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Media panel for each offering card. One slot per offering:
 *
 *  0 — KIT (3D): auto-rotating CSS 3D placeholder.
 *      [TODO: replace with a real 3D model of the robot car.]
 *      Recommended: export a .glb from your CAD tool and render it with
 *      Google's <model-viewer> (one script tag, camera-controls +
 *      auto-rotate) or @react-three/fiber for scroll-linked rotation.
 *      Lazy-load it (next/dynamic, ssr: false) so it doesn't block paint.
 *
 *  1 — E-LEARNING (video): flat browser frame.
 *      [TODO: drop a short muted screen-capture of the platform in
 *      /public/media/platform.mp4 and swap the placeholder <div> for:
 *      <video src="/media/platform.mp4" autoPlay muted loop playsInline
 *             poster="/media/platform.jpg" />]
 *
 *  2 — PROJECTS (photos): three-tile collage, tiles stagger on reveal.
 *      [TODO: replace tiles with real workshop/build photos via <Image>.]
 *
 *  3 — R&D (blueprint): SVG schematic that draws itself on scroll into
 *      view. Works as-is; swap for real prototype footage if you have it.
 */
export default function MediaSlot({ index }: { index: number }) {
  switch (index) {
    case 0:
      return <Kit3D />;
    case 1:
      return <VideoFrame />;
    case 2:
      return <PhotoCollage />;
    default:
      return <Blueprint />;
  }
}

/* ---- 0: 3D kit placeholder (CSS 3D cube robot) ---- */
function Kit3D() {
  const faces = [
    "rotateY(0deg) translateZ(50px)",
    "rotateY(90deg) translateZ(50px)",
    "rotateY(180deg) translateZ(50px)",
    "rotateY(270deg) translateZ(50px)",
    "rotateX(90deg) translateZ(50px)",
    "rotateX(-90deg) translateZ(50px)",
  ];
  return (
    <div className="grid h-full min-h-56 place-items-center bg-mist" style={{ perspective: "600px" }}>
      <div className="spin-3d relative size-25">
        {faces.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 rounded-lg border-2 border-primary/40 bg-white/80"
            style={{ transform: t }}
          >
            {i === 0 && (
              <svg viewBox="0 0 100 100" className="size-full" aria-hidden="true">
                <rect x="22" y="34" width="56" height="26" rx="7" fill="none" stroke="var(--brand-primary)" strokeWidth="3" />
                <circle cx="36" cy="68" r="8" fill="none" stroke="var(--brand-blue)" strokeWidth="3" />
                <circle cx="64" cy="68" r="8" fill="none" stroke="var(--brand-blue)" strokeWidth="3" />
                <line x1="50" y1="34" x2="50" y2="22" stroke="var(--brand-primary)" strokeWidth="3" />
                <circle cx="50" cy="19" r="3.5" fill="var(--brand-primary)" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <span className="absolute bottom-3 font-mono text-xs text-slate">[3D model of the kit goes here]</span>
    </div>
  );
}

/* ---- 1: e-learning video frame ---- */
function VideoFrame() {
  return (
    <div className="grid h-full min-h-56 place-items-center bg-mist p-6">
      <div className="w-full max-w-70 overflow-hidden rounded-xl border border-line bg-white">
        {/* browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="size-2 rounded-full bg-line" />
          <span className="ml-2 h-3 flex-1 rounded-full bg-mist" />
        </div>
        {/* video area — see [TODO] at the top of this file */}
        <div className="grid aspect-video place-items-center bg-mist">
          <span className="grid size-12 place-items-center rounded-full bg-blue text-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
          </span>
        </div>
        <p className="px-3 py-2 font-mono text-[10px] text-slate">[platform demo video]</p>
      </div>
    </div>
  );
}

/* ---- 2: project photo collage with staggered reveal ---- */
function PhotoCollage() {
  const prefersReduced = useReducedMotion();
  const tiles = [
    { label: "[workshop photo]", cls: "col-span-2 aspect-[2/1]" },
    { label: "[build photo]", cls: "aspect-square" },
    { label: "[team photo]", cls: "aspect-square" },
  ];
  return (
    <div className="grid h-full min-h-56 content-center gap-3 bg-mist p-6">
      <div className="grid grid-cols-2 gap-3">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.label}
            initial={prefersReduced ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className={`grid place-items-center rounded-xl border border-dashed border-blue/40 bg-white font-mono text-[10px] text-slate ${tile.cls}`}
          >
            {tile.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---- 3: self-drawing R&D blueprint ---- */
function Blueprint() {
  const prefersReduced = useReducedMotion();
  const draw = (delay: number) => ({
    initial: prefersReduced ? undefined : { pathLength: 0 },
    whileInView: { pathLength: 1 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 1.4, delay, ease: "easeInOut" as const },
  });
  return (
    <div className="grid h-full min-h-56 place-items-center bg-mist">
      <svg width="220" height="180" viewBox="0 0 220 180" fill="none" aria-hidden="true">
        {/* chassis outline */}
        <motion.rect x="45" y="60" width="130" height="55" rx="10" stroke="var(--brand-blue)" strokeWidth="2" {...draw(0)} />
        {/* wheels */}
        <motion.circle cx="75" cy="130" r="16" stroke="var(--brand-primary)" strokeWidth="2" {...draw(0.5)} />
        <motion.circle cx="145" cy="130" r="16" stroke="var(--brand-primary)" strokeWidth="2" {...draw(0.65)} />
        {/* sensor + antenna */}
        <motion.path d="M110 60V38M110 38h26" stroke="var(--brand-blue)" strokeWidth="2" {...draw(0.9)} />
        <motion.circle cx="141" cy="38" r="5" stroke="var(--brand-primary)" strokeWidth="2" {...draw(1.1)} />
        {/* dimension lines, blueprint-style */}
        <motion.path d="M45 152h130M45 147v10M175 147v10" stroke="var(--brand-slate)" strokeWidth="1" {...draw(1.2)} />
        <motion.path d="M188 60v55M183 60h10M183 115h10" stroke="var(--brand-slate)" strokeWidth="1" {...draw(1.3)} />
      </svg>
      <span className="absolute bottom-3 font-mono text-xs text-slate">prototype v0.3</span>
    </div>
  );
}
