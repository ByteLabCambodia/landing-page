"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Milestone timeline. [Replace placeholder years/titles in strings.ts.] */
export default function Achievements() {
  const { t } = useLang();

  return (
    <section id="achievements" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.achievements.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-rigid text-4xl font-bold text-ink md:text-5xl">
            {t.achievements.title}
          </h2>
        </Reveal>

        <ol className="relative mt-14 border-l-2 border-line pl-8 md:pl-12">
          {t.achievements.items.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <li className="relative pb-12 last:pb-0">
                {/* node on the timeline */}
                <span
                  className={`absolute top-1 -left-[41px] grid size-4 place-items-center rounded-full ring-4 ring-white md:-left-[57px] ${
                    i % 2 === 0 ? "bg-primary" : "bg-blue"
                  }`}
                />
                <p className="font-mono text-sm text-slate">{a.year}</p>
                <h3 className="mt-1 font-rigid text-xl font-bold text-ink md:text-2xl">
                  {a.title}
                </h3>
                <p className="mt-2 max-w-xl text-slate">{a.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
