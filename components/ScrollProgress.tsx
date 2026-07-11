"use client";

import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

/**
 * Minimal reading-progress indicator: a hairline that fills along the
 * bottom edge of the header as the user scrolls.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useReducedMotion();
  const smooth = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  const progress = prefersReduced ? scrollYProgress : smooth;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-16 z-60 h-px origin-left bg-primary"
      style={{ scaleX: progress }}
    />
  );
}
