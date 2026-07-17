import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Globe, Link2, Cloud } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Web Development — Zali2Bali",
  "Booking-enabled websites integrated directly with your CRM and automation — built on GoHighLevel and delivered on Cloudflare's global edge network.",
  "/solutions/web-development"
);

export default function WebDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Solutions — Web Development</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            A website that&apos;s part of the booking system, not a brochure.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Most villa websites show photos and send guests to an OTA to
            book — a $40–70 per night leakage on every booking they
            generate. We build websites that keep the booking, and the
            revenue, on your own channel.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Booking-enabled websites */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                  <Globe size={17} className="text-teal-deep" />
                </div>
                <span className="badge badge-teal">Scale / Add-on</span>
              </div>
              <h2 className="text-display-lg text-ink mb-4">
                Booking-enabled websites.
              </h2>
              <div className="flex flex-col gap-4 text-body-md text-subtle">
                <p>
                  A guest who finds you through Google can book directly,
                  get an instant confirmation, receive pre-arrival
                  communication, and be followed up post-stay — all without
                  ever leaving your system or landing on a third-party
                  platform.
                </p>
                <p>
                  Property portfolio pages are built and optimized for
                  search, so the website itself becomes a lead-generation
                  asset over time, not just a static digital brochure.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="card-feature">
                <div className="eyebrow mb-4">What&apos;s included</div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Direct inquiry and booking forms, no OTA redirect",
                    "Property portfolio pages optimized for search",
                    "Instant booking confirmation and pre-arrival sequences",
                    "Post-stay follow-up automation built in",
                    "Fast-loading globally via Cloudflare CDN",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Globe size={14} className="text-teal-deep mt-0.5 flex-shrink-0" />
                      <span className="text-ink">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Integrated with CRM */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Link2 size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Integrated with CRM and automation</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            One platform, not two.
          </h2>
          <p className="text-body-md text-subtle mb-4">
            The website isn&apos;t a separate system bolted onto your
            automation stack — it&apos;s built directly on the same
            GoHighLevel infrastructure as your CRM pipeline and WhatsApp
            automation. A direct inquiry form on the website feeds straight
            into the same WhatsApp automation workflow as a WhatsApp
            message, landing in the same unified pipeline.
          </p>
          <p className="text-body-md text-subtle">
            That means no double data entry, no separate login, and no
            reconciling leads across disconnected tools.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Built on GHL + Cloudflare */}
      <section className="section-pad bg-white">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Cloud size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Built on GoHighLevel + Cloudflare</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            Fast, global, and connected by default.
          </h2>
          <p className="text-body-md text-subtle">
            Sites are built in GoHighLevel&apos;s website builder — the same
            platform running your CRM — and delivered globally through
            Cloudflare&apos;s CDN and edge network, so international guests
            get fast load times regardless of where they&apos;re browsing
            from.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            Stop paying OTA commission on bookings you could keep direct.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a free audit and we&apos;ll show you what a booking-enabled
            website would look like for your portfolio.
          </p>
          <Link href="/contact" className="btn-primary !bg-white !text-teal-deep hover:!bg-teal-ghost">
            Book a free audit
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
