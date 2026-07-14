"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * The 8 people behind ByteLab.
 * Names, roles, bios, and expertise live in strings.ts (EN/KM);
 * the language-independent bits below are index-matched to that array.
 *
 * The photos have transparent gaps around the hair — left unfilled on
 * purpose so the card background shows through. `color` is each photo's
 * backdrop color sampled from the image, used as the role-text accent.
 */
const memberMeta = [
  {
    image: "/profile/Chhoeun_Reaksa.png",
    color: "#7A9451",
  },
  {
    image: "/profile/Pun_Solita.png",
    color: "#2E5A1B",
  },
  {
    image: "/profile/Meng_Oudom.png",
    color: "#8849F8",
  },
  {
    image: "/profile/Gnep_Vandara.png",
    color: "#CA5C0B",
  },
  {
    image: "/profile/Hoy-Seiha.png",
    color: "#696D76",
  },
  {
    image: "/profile/Sophat_Sophanna.png",
    color: "#810100",
  },
  {
    image: "/profile/Chheng_Maraviraktep.png",
    color: "#028291",
  },
  {
    image: "/profile/Cheang_Thornsopanha.png",
    color: "#250751",
  },
];

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
          <h2 className="max-w-2xl font-rigid text-4xl font-bold text-ink md:text-5xl">
            {t.team.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-slate">{t.team.intro}</p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {t.team.members.map((m, i) => {
            const meta = memberMeta[i];
            return (
              <motion.div
                key={i}
                initial={prefersReduced ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
                className="group flex flex-col"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
                  <Image
                    src={meta.image}
                    alt={m.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col pt-5">
                  <p className="font-rigid font-semibold text-ink">{m.name}</p>
                  <p className="mt-0.5 text-sm font-medium" style={{ color: meta.color }}>
                    {m.role}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate">{m.description}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {m.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-white/60 px-2.5 py-0.5 text-xs text-slate"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
