import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Services & Pricing — Zali2Bali",
  "Foundation, Growth, and Scale packages for Bali villa management automation. Setup fee funds the build; monthly retainer funds ongoing optimization. No lock-in.",
  "/services"
);

const PACKAGES = [
  {
    name: "Foundation",
    target: "5–15 villas, currently managing everything manually on WhatsApp",
    setup: "$900",
    retainer: "$350/mo",
    highlight: false,
    features: [
      "WhatsApp auto-reply and FAQ handling",
      "Lead capture from WhatsApp + Instagram into CRM",
      "Basic lead pipeline (New → Contacted → Booked → Lost)",
      "Monthly performance snapshot",
      "Email/WhatsApp support — 48-hour response",
    ],
  },
  {
    name: "Growth",
    target: "15–40 villas, ready to scale bookings rather than just manage them",
    setup: "$1,800",
    retainer: "$600/mo",
    highlight: true,
    recommended: true,
    features: [
      "Everything in Foundation",
      "Full lead qualification — dates, party size, budget",
      "Automated routing to the right staff member",
      "Booking confirmation sequences",
      "Abandoned-inquiry follow-up automation",
      "Post-stay review request automation",
      "Unified CRM dashboard — WhatsApp + Instagram + website",
      "Monthly 30-minute strategy call",
      "Priority support — same-day response",
    ],
  },
  {
    name: "Scale",
    target: "40+ villas or portfolios wanting full digital transformation and direct lead generation",
    setup: "$3,500",
    retainer: "$1,200/mo",
    highlight: false,
    features: [
      "Everything in Growth",
      "Paid lead generation (Meta Ads / Google Ads)",
      "Custom booking-enabled website integrated with CRM",
      "Advanced workflows: repeat-guest reactivation, dynamic upsells",
      "Owner reporting automation",
      "Dedicated account manager",
      "Quarterly business review with performance-to-revenue reporting",
    ],
  },
];

const ADD_ONS = [
  { name: "Paid Lead Generation", price: "$300/mo", desc: "Meta or Google Ads campaigns driving direct bookings to your own channel." },
  { name: "Custom Booking Website", price: "$1,200–$3,000", desc: "Booking-enabled website integrated with the CRM and automation stack." },
  { name: "Additional Automation Workflow", price: "$150–$400", desc: "Single additional workflow built and integrated into your existing system." },
  { name: "Staff Training Session", price: "$250", desc: "Additional live training session for new team members." },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Services</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            Three tiers. One model.
            <br />
            Zero lock-in.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Setup fee funds the build. Monthly retainer funds ongoing
            optimization. 30 days&apos; written notice cancels the retainer
            at any time. We don&apos;t need lock-in — we need the system to
            work well enough that you don&apos;t want to cancel.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Packages */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="stagger-children grid md:grid-cols-3 gap-6">
            {PACKAGES.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-7 border flex flex-col gap-6 ${
                  pkg.highlight
                    ? "bg-teal-deep border-teal-deep text-white"
                    : "bg-white border-border"
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge badge-teal">Recommended</span>
                  </div>
                )}

                <div>
                  <div className={`eyebrow mb-3 ${pkg.highlight ? "!text-teal-ghost" : ""}`}>
                    {pkg.name}
                  </div>
                  <div className="flex items-end gap-2 mb-0.5">
                    <span className={`text-4xl font-extrabold tracking-tight ${pkg.highlight ? "text-white" : "text-ink"}`}>
                      {pkg.setup}
                    </span>
                    <span className={`text-sm mb-1 ${pkg.highlight ? "text-white/60" : "text-subtle"}`}>
                      setup
                    </span>
                  </div>
                  <div className={`text-sm ${pkg.highlight ? "text-white/70" : "text-subtle"}`}>
                    + {pkg.retainer} retainer
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-subtle"}`}>
                  {pkg.target}
                </p>

                <ul className="flex flex-col gap-2.5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-teal-light" : "text-teal-deep"}`}
                      />
                      <span className={pkg.highlight ? "text-white/85" : "text-ink"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className={
                    pkg.highlight
                      ? "btn-secondary !bg-white/10 !border-white/20 !text-white hover:!bg-white/20 justify-center"
                      : "btn-secondary justify-center"
                  }
                >
                  Get started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Founding Partner */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto">
          <div className="card-feature animate-on-scroll">
            <div className="badge badge-teal mb-5">Founding Partner Program</div>
            <h2 className="text-display-md text-ink mb-4">
              First 5 clients. Best terms we&apos;ll ever offer.
            </h2>
            <p className="text-body-md text-subtle mb-6">
              Zali2Bali is building its first five client case studies. Those
              clients get 30% off the setup fee on any package in exchange for
              case study access, a written or video testimonial, and one referral
              introduction to another villa company.
            </p>
            <p className="text-body-md text-subtle mb-6">
              This is selective — we&apos;re looking for operators who are
              genuinely motivated to track and share their before/after data, not
              clients who want a discount. The right Founding Partner ends up in
              our results page, our proposals, and our outreach. That exposure
              has value beyond the pricing.
            </p>
            <Link href="/contact" className="btn-primary">
              Apply for Founding Partner status
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Add-ons */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">Add-ons</div>
            <h2 className="text-display-md text-ink">
              Extend without upgrading tiers.
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 gap-5">
            {ADD_ONS.map((addon) => (
              <div key={addon.name} className="card flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-semibold text-ink mb-1">{addon.name}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{addon.desc}</p>
                </div>
                <div className="text-sm font-semibold text-teal-deep flex-shrink-0">{addon.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Payment terms */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="eyebrow mb-4">Payment terms</div>
          <h2 className="text-display-md text-ink mb-8">Simple and fair.</h2>
          <div className="flex flex-col gap-4">
            {[
              { term: "Setup fee split", detail: "50% on signing, 50% on launch. You pay for the build as it's delivered." },
              { term: "Retainer timing", detail: "Monthly, billed in advance from the launch date. Not from the contract date." },
              { term: "Cancellation", detail: "30 days' written notice. No penalty, no lock-in, no long minimum commitment." },
              { term: "Currency", detail: "All pricing is in USD — matching how Bali's hospitality market already invoices internationally." },
            ].map((item) => (
              <div key={item.term} className="flex gap-6 py-4 border-b border-border last:border-0">
                <div className="w-40 flex-shrink-0 text-sm font-medium text-ink">{item.term}</div>
                <div className="text-sm text-subtle">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
