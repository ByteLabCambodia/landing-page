"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";
import type { PartnerLogo } from "@/lib/partners";

/**
 * Trust strip. Logos are read from public/partners on the server (see
 * lib/partners.ts) and passed in — add a file to that folder to add a logo.
 */
export default function Partners({ logos }: { logos: PartnerLogo[] }) {
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
          {logos.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {logos.map((logo) => (
                <div
                  key={logo.src}
                  className="relative grid h-20 w-40 place-items-center rounded-xl border border-line bg-white px-4"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain p-3"
                  />
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </Reveal>
      </div>
    </section>
  );
}
