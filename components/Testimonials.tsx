"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Quote cards. [Replace placeholder quotes/names in strings.ts.] */
export default function Testimonials() {
  const { t } = useLang();

  return (
    <section id="testimonials" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.testimonials.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-rigid text-4xl font-bold text-ink md:text-5xl">
            {t.testimonials.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.testimonials.quotes.map((q, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-line bg-mist p-7 md:p-8">
                <span
                  aria-hidden="true"
                  className={`font-rigid text-5xl leading-none ${i % 2 === 0 ? "text-primary" : "text-blue"}`}
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-slate">{q.quote}</blockquote>
                <figcaption className="mt-6">
                  <p className="font-rigid font-semibold text-ink">{q.name}</p>
                  <p className="text-sm text-slate">{q.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
