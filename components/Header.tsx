"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import Logo from "./Logo";
import { useLang } from "./LangProvider";

/**
 * Sticky header: transparent over the hero, gains a solid white
 * background with a hairline border once the user scrolls.
 */
export default function Header() {
  const { t, lang, setLang } = useLang();
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => scrollY.on("change", (y) => setSolid(y > 40)), [scrollY]);

  const links = [
    { href: "/#mission", label: t.nav.mission },
    { href: "/#what-we-do", label: t.nav.whatWeDo },
    { href: "/#for-you", label: t.nav.forYou },
    { href: "/#contact", label: t.nav.contact },
    { href: "/about", label: t.nav.about },
  ];

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || menuOpen
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" aria-label="ByteLab home">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono text-sm text-slate transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <LangToggle lang={lang} setLang={setLang} />
          <Link
            href="/#contact"
            className="rounded-full bg-primary px-5 py-2 font-display text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-primary-deep"
          >
            {t.nav.cta}
          </Link>
        </nav>

        {/* Mobile: lang + burger */}
        <div className="flex items-center gap-3 md:hidden">
          <LangToggle lang={lang} setLang={setLang} />
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="grid size-10 place-items-center rounded-lg text-ink"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {menuOpen ? (
                <path d="M4 4l14 14M18 4L4 18" />
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="border-t border-line bg-white px-5 pt-2 pb-5 md:hidden" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block border-b border-line py-3 font-mono text-sm text-slate"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block rounded-full bg-primary px-5 py-3 text-center font-display text-sm font-semibold text-white"
          >
            {t.nav.cta}
          </Link>
        </nav>
      )}
    </motion.header>
  );
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: "en" | "km";
  setLang: (l: "en" | "km") => void;
}) {
  return (
    <button
      onClick={() => setLang(lang === "en" ? "km" : "en")}
      aria-label={lang === "en" ? "Switch to Khmer" : "Switch to English"}
      className="rounded-full border border-line px-3 py-1 font-mono text-xs text-slate transition-colors hover:border-blue hover:text-blue"
    >
      {lang === "en" ? "ខ្មែរ" : "EN"}
    </button>
  );
}
