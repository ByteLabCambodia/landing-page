"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * Trust strip. [partner logos here] — replace each placeholder tile with a
 * real logo: <Image src="/logos/name.svg" alt="Partner name" ... />
 */
export default function Partners() {
  const { t } = useLang();

  return (
    <section className="border-y border-line bg-mist py-16">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="text-center font-mono text-sm tracking-widest text-slate uppercase">
            {t.partners.eyebrow}
          </p>
          <p className="mt-2 text-center text-slate">{t.partners.line}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="grid h-20 place-items-center rounded-xl border border-dashed border-line bg-white font-mono text-xs text-slate/70"
              >
                {t.partners.placeholder}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
