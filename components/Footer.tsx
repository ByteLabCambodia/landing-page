"use client";

import Logo from "./Logo";
import { useLang } from "./LangProvider";

export default function Footer() {
  const { t } = useLang();

  const links = [
    { href: "/#mission", label: t.nav.mission },
    { href: "/#what-we-do", label: t.nav.whatWeDo },
    { href: "/about", label: t.nav.about },
    { href: "/#for-you", label: t.nav.forYou },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-line bg-white py-12">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-3 md:px-8">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-slate">{t.footer.blurb}</p>
        </div>
        <nav aria-label={t.footer.quickLinks}>
          <p className="font-mono text-xs tracking-widest text-slate uppercase">
            {t.footer.quickLinks}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-slate hover:text-primary">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-mono text-xs tracking-widest text-slate uppercase">
            {t.footer.social}
          </p>
          {/* [social links] — swap hrefs for real profiles */}
          <ul className="mt-4 flex gap-4">
            {["Facebook", "YouTube", "Telegram"].map((s) => (
              <li key={s}>
                <a href="#" className="text-sm text-blue-deep hover:text-primary">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-line px-5 pt-6 md:px-8">
        <p className="font-mono text-xs text-slate/70">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
