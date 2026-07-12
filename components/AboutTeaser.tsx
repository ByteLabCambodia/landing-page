"use client";

import Link from "next/link";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/**
 * Compact card linking to the full /about page (team + milestones).
 * Keeps the landing page focused on services/conversion while still
 * surfacing "who we are" for anyone who wants the fuller story.
 */
export default function AboutTeaser() {
  const { t } = useLang();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <Link
            href="/about"
            className="group grid gap-8 rounded-3xl border border-line bg-mist p-8 transition-colors hover:border-primary/40 md:grid-cols-[1fr_auto] md:items-center md:p-12"
          >
            <div>
              <p className="font-mono text-sm tracking-widest text-primary-deep uppercase">
                {t.about.teaser.eyebrow}
              </p>
              <h2 className="mt-3 font-rigid text-2xl font-bold text-ink md:text-3xl">
                {t.about.teaser.title}
              </h2>
              <p className="mt-2 max-w-xl text-slate">{t.about.teaser.body}</p>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-rigid text-sm font-semibold whitespace-nowrap text-white transition-colors group-hover:bg-primary-deep">
              {t.about.teaser.cta}
              <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
