"use client";

import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Why choose us — four reasons in a staggered grid. */
export default function WhyUs() {
  const { t } = useLang();

  const icons = [
    // Cambodia / local
    <path key="0" d="M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 14.4 7.2 16.9l.9-5.4L4.2 7.7l5.4-.8z" />,
    // hands-on / wrench
    <path key="1" d="M14.7 6.3a4 4 0 00-5.4 5.4l-6 6L6 20.4l6-6a4 4 0 005.4-5.4l-2.8 2.8-2.7-2.7z" />,
    // ecosystem / grid
    <path key="2" d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z" />,
    // educator / book
    <path key="3" d="M4 5a2 2 0 012-2h13v16H6a2 2 0 00-2 2zM8 7h7" />,
  ];

  return (
    <section id="why-us" className="scroll-mt-16 bg-white py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.whyUs.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-display text-4xl font-bold text-ink md:text-5xl">
            {t.whyUs.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.whyUs.reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-line bg-white p-7 transition-colors hover:border-primary/40 md:p-9">
                <span
                  className={`grid size-11 place-items-center rounded-xl bg-mist ${
                    i % 2 === 0 ? "text-primary" : "text-blue"
                  }`}
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {icons[i]}
                  </svg>
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink md:text-2xl">
                  {r.title}
                </h3>
                <p className="mt-2 text-slate">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
