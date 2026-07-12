"use client";

import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import { useLang } from "./LangProvider";

// TODO: replace with the real inbox for the mailto handler
const CONTACT_EMAIL = "hello@bytelab.example"; // [email]

/** Closing CTA: flat light section, contact form (mailto stub) + details. */
export default function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // Stub handler: opens the visitor's email app pre-filled.
    // Swap for a real endpoint (e.g. Formspree, API route) when ready.
    const subject = encodeURIComponent(`ByteLab inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(`${data.get("message")}\n\nReply to: ${data.get("email")}`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
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
                <dd className="mt-2 flex gap-3">
                  {["Facebook", "YouTube", "Telegram"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="rounded-full border border-blue px-4 py-2 text-sm text-blue-deep transition-colors hover:bg-blue hover:text-white"
                    >
                      {s}
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
