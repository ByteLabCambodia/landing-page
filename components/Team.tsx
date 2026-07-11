"use client";

import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * The 8 people behind ByteLab.
 * [Replace names/roles in strings.ts and swap the initial-avatar for real
 *  photos: <Image src="/team/name.jpg" alt="" fill className="object-cover" />]
 */
export default function Team() {
  const { t } = useLang();
  const prefersReduced = useReducedMotion();

  return (
    <section id="team" className="scroll-mt-16 border-y border-line bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.team.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            {t.team.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-slate">{t.team.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6">
          {t.team.members.map((m, i) => (
            <motion.div
              key={i}
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              className="rounded-3xl border border-line bg-white p-5 text-center"
            >
              {/* photo placeholder — swap for <Image> */}
              <div
                className={`mx-auto grid size-20 place-items-center rounded-full font-display text-2xl font-bold md:size-24 ${
                  i % 2 === 0 ? "bg-mist text-primary-deep" : "bg-mist text-blue-deep"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="mt-4 font-display font-semibold text-ink">{m.name}</p>
              <p className="mt-1 text-sm text-slate">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
