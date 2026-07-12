"use client";

import Link from "next/link";
import { LangProvider, useLang } from "./LangProvider";
import SmoothScroll from "./SmoothScroll";
import ScrollProgress from "./ScrollProgress";
import Header from "./Header";
import Footer from "./Footer";
import Reveal from "./Reveal";
import MediaSlot from "./MediaSlot";

/** Detail page for one service (index into whatWeDo.items). */
export default function ServiceDetail({ index }: { index: number }) {
  return (
    <LangProvider>
      <SmoothScroll>
        <ScrollProgress />
        <Header />
        <ServiceBody index={index} />
        <Footer />
      </SmoothScroll>
    </LangProvider>
  );
}

function ServiceBody({ index }: { index: number }) {
  const { t } = useLang();
  const item = t.whatWeDo.items[index];
  const chipBlue = index % 2 === 1;

  return (
    <main>
      {/* Hero */}
      <section className="border-b border-line bg-mist pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <Link
              href="/#what-we-do"
              className="font-mono text-sm text-blue-deep hover:text-primary"
            >
              ← {t.whatWeDo.backToServices}
            </Link>
          </Reveal>
          <div className="mt-8 grid items-center gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <Reveal delay={0.05}>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-mono text-xs tracking-wide ring-1 ring-line ${
                    chipBlue ? "text-blue-deep" : "text-primary-deep"
                  }`}
                >
                  <span className={`size-1.5 rounded-full ${chipBlue ? "bg-blue" : "bg-primary"}`} />
                  {item.tag}
                </span>
              </Reveal>
              <Reveal delay={0.12}>
                <h1 className="mt-5 font-rigid text-4xl font-bold text-ink md:text-6xl">
                  {item.title}
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-slate">{item.detail.intro}</p>
              </Reveal>
              <Reveal delay={0.28}>
                <Link
                  href="/#contact"
                  className="mt-8 inline-block rounded-full bg-primary px-7 py-3.5 font-rigid text-sm font-semibold text-white transition-colors hover:bg-primary-deep"
                >
                  {t.nav.cta}
                </Link>
              </Reveal>
            </div>
            <Reveal delay={0.2} y={40}>
              <div className="relative h-72 overflow-hidden rounded-3xl border border-line bg-white shadow-xl shadow-ink/5 md:h-96">
                <MediaSlot index={index} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {item.detail.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-line bg-white p-7 md:p-9">
                  <span
                    className={`grid size-9 place-items-center rounded-xl bg-mist font-mono text-sm ${
                      i % 2 === 0 ? "text-primary-deep" : "text-blue-deep"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="mt-4 font-rigid text-xl font-bold text-ink md:text-2xl">
                    {f.title}
                  </h2>
                  <p className="mt-2 text-slate">{f.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Who it's for */}
          <Reveal delay={0.1}>
            <p className="mx-auto mt-16 max-w-2xl text-center font-rigid text-2xl font-semibold text-ink md:text-3xl">
              {item.detail.audience}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="/#contact"
                className="inline-block rounded-full bg-primary px-8 py-4 font-rigid text-base font-semibold text-white transition-colors hover:bg-primary-deep"
              >
                {t.nav.cta}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
