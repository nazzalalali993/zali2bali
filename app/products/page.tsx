import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Search, Hammer, Rocket, TrendingUp } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "The Booking Recovery System — Zali2Bali",
  "The Booking Recovery System is Zali2Bali's AI-powered WhatsApp automation and CRM product for villa management companies — currently in beta for Founding Partners only.",
  "/products"
);

const HOW_IT_WORKS = [
  { icon: Search, step: "01", title: "Audit", desc: "We map your current inquiry flow and calculate what slow response is costing you in missed bookings, using your own numbers." },
  { icon: Hammer, step: "02", title: "Build", desc: "We configure your WhatsApp automation, CRM pipeline, and workflows from the master snapshot — tailored to your properties and process." },
  { icon: Rocket, step: "03", title: "Launch", desc: "Your system goes live, your team is trained, and every guest inquiry starts flowing through the new pipeline within two weeks." },
  { icon: TrendingUp, step: "04", title: "Optimize", desc: "We monitor response time, conversion, and volume monthly — tuning automation and qualification logic as real conversations come in." },
];

const TIERS = [
  {
    name: "Foundation",
    tag: "Instant response layer",
    target: "5–15 villas running everything manually on WhatsApp",
    features: [
      "24/7 WhatsApp auto-reply and FAQ handling",
      "Lead capture from WhatsApp + Instagram into CRM",
      "Basic pipeline: New → Contacted → Booked → Lost",
      "Monthly performance snapshot",
    ],
  },
  {
    name: "Growth",
    tag: "Qualification + conversion layer",
    target: "15–40 villas ready to scale bookings, not just manage them",
    highlight: true,
    features: [
      "Everything in Foundation",
      "AI-powered lead qualification — dates, party size, budget",
      "Automated staff routing and booking confirmation sequences",
      "Unified CRM dashboard across every channel",
    ],
  },
  {
    name: "Scale",
    tag: "Growth + direct-booking layer",
    target: "40+ villas or portfolios wanting full digital transformation",
    features: [
      "Everything in Growth",
      "Paid lead generation (Meta Ads / Google Ads)",
      "Custom booking-enabled website integrated with CRM",
      "Dedicated account manager and quarterly business review",
    ],
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="flex items-center gap-2 mb-5 animate-on-scroll">
            <span className="badge badge-live">
              <span className="live-dot" style={{ width: 5, height: 5 }} />
              Beta — Founding Partners Only
            </span>
          </div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            The Booking Recovery System
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            One product, three tiers: AI-powered WhatsApp automation and CRM
            built specifically for Bali villa management companies. It turns
            every guest inquiry — WhatsApp, Instagram, or website — into a
            tracked, qualified, instantly-answered conversation, without
            requiring you to hire another staff member.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Description */}
      <section className="section-pad bg-white">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="eyebrow mb-4">What it is</div>
          <h2 className="text-display-lg text-ink mb-6">
            Not a chatbot. A recovery system for the bookings you&apos;re
            already losing.
          </h2>
          <div className="flex flex-col gap-5 text-body-md text-subtle">
            <p>
              Every villa management company loses bookings the same way:
              a guest messages on WhatsApp at 11pm, nobody replies until the
              next morning, and by then the guest has already booked
              somewhere else. The Booking Recovery System closes that gap.
            </p>
            <p>
              It runs on the official WhatsApp Business API, layered with
              GoHighLevel CRM workflows and — from Growth tier up — an AI
              qualification layer that understands natural-language guest
              questions about dates, pricing, and availability. Every
              conversation lands in one pipeline your team can see and act on.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Tiers as product features */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Product tiers</div>
            <h2 className="text-display-lg text-ink">
              Foundation. Growth. Scale.
            </h2>
          </div>
          <div className="stagger-children grid md:grid-cols-3 gap-6">
            {TIERS.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl p-7 border flex flex-col gap-5 ${
                  tier.highlight
                    ? "bg-teal-deep border-teal-deep text-white"
                    : "bg-white border-border"
                }`}
              >
                <div>
                  <div className={`eyebrow mb-2 ${tier.highlight ? "!text-teal-ghost" : ""}`}>
                    {tier.name}
                  </div>
                  <div className={`text-sm font-medium mb-3 ${tier.highlight ? "text-white/80" : "text-teal-deep"}`}>
                    {tier.tag}
                  </div>
                  <p className={`text-sm leading-relaxed ${tier.highlight ? "text-white/80" : "text-subtle"}`}>
                    {tier.target}
                  </p>
                </div>
                <ul className="flex flex-col gap-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${tier.highlight ? "text-teal-light" : "text-teal-deep"}`}
                      />
                      <span className={tier.highlight ? "text-white/85" : "text-ink"}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center animate-on-scroll">
            <Link href="/services" className="text-sm font-medium text-teal-deep hover:underline">
              See full pricing and add-ons on the Services page →
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* How it works */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">How it works</div>
            <h2 className="text-display-lg text-ink">
              From audit to live system in under two weeks.
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.step} className="card-feature">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                      <Icon size={17} className="text-teal-deep" />
                    </div>
                    <span className="text-xs font-mono text-subtle">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{item.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            Beta access is limited to Founding Partners.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            We&apos;re onboarding five villa management companies before this
            opens more broadly. Founding Partners get 30% off setup in
            exchange for case study access.
          </p>
          <Link href="/contact" className="btn-primary !bg-white !text-teal-deep hover:!bg-teal-ghost">
            Apply for Founding Partner status
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
