"use client";

import { SubmitEvent, useState } from "react";
import { FaFacebookF, FaTelegramPlane, FaInstagram, FaLinkedinIn, FaTiktok } from "react-icons/fa";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

/** Closing CTA: flat light section, contact form (submits to /api/contact — email + Telegram) + details. */
export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: data,
    });

    if (res.ok) {
      setSent(true);
      form.reset();
    } else {
      setError(true);
    }
  }

  const inputCls =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-slate/60 focus:border-primary focus:outline-none";

  return (
    <section id="contact" className="scroll-mt-16 bg-mist py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <p className="mb-4 font-mono text-sm tracking-widest text-primary-deep uppercase">
            {t.contact.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="max-w-2xl font-rigid text-4xl font-bold text-ink md:text-6xl">
            {t.contact.title}
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-xl text-lg text-slate">{t.contact.body}</p>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_1fr]">
          {/* Form */}
          <Reveal delay={0.25}>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-3xl border border-line bg-white p-6 md:p-8"
            >
              <label className="sr-only" htmlFor="name">{t.contact.form.name}</label>
              <input id="name" name="name" required placeholder={t.contact.form.name} className={inputCls} />

              <label className="sr-only" htmlFor="email">{t.contact.form.email}</label>
              <input id="email" name="email" type="email" required placeholder={t.contact.form.email} className={inputCls} />

              <label className="sr-only" htmlFor="message">{t.contact.form.message}</label>
              <textarea id="message" name="message" required rows={5} placeholder={t.contact.form.message} className={inputCls} />

              <button
                type="submit"
                className="mt-2 rounded-full bg-primary px-8 py-4 font-rigid text-base font-semibold text-white transition-colors hover:bg-primary-deep"
              >
                {t.contact.form.submit}
              </button>
              {sent && (
                <p role="status" className="font-mono text-sm text-primary-deep">
                  {t.contact.form.sent}
                </p>
              )}
              {error && (
                <p role="alert" className="font-mono text-sm text-red-600">
                  Something went wrong — please try again or email us directly.
                </p>
              )}
            </form>
          </Reveal>

          {/* Direct details — replace the [placeholders] with real info */}
          <Reveal delay={0.35}>
            <dl className="flex flex-col gap-6">
              <div>
                <dt className="font-mono text-xs tracking-widest text-slate uppercase">
                  {t.contact.details.emailLabel}
                </dt>
                <dd className="mt-1 text-lg text-ink">{t.contact.details.email}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-widest text-slate uppercase">
                  {t.contact.details.phoneLabel}
                </dt>
                <dd className="mt-1 text-lg text-ink">{t.contact.details.phone}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-widest text-slate uppercase">
                  {t.contact.details.locationLabel}
                </dt>
                <dd className="mt-1 text-lg text-ink">{t.contact.details.location}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs tracking-widest text-slate uppercase">
                  {t.contact.details.socialLabel}
                </dt>
                {/* [social links] — swap hrefs for real profiles */}
                <dd className="mt-2 flex flex-wrap gap-3">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/bytelabkhfb", Icon: FaFacebookF },
                    { label: "Telegram", href: "https://t.me/bytelabkh", Icon: FaTelegramPlane },
                    { label: "Instagram", href: "https://www.instagram.com/bytelabkh/", Icon: FaInstagram },
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/bytelabkh", Icon: FaLinkedinIn },
                    { label: "TikTok", href: "https://www.tiktok.com/@bytelabkh", Icon: FaTiktok },
                  ].map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex size-10 items-center justify-center rounded-full border border-blue text-blue-deep transition-colors hover:bg-blue hover:text-white"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
