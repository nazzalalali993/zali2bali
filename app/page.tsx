import Link from "next/link";
import { ArrowRight, Zap, BarChart3, Clock, MessageSquare, CheckCircle, Globe } from "lucide-react";
import type { Metadata } from "next";
import { softwareCompanySchema, faqSchema } from "@/lib/metadata";
import WhatsAppDemo from "@/components/sections/whatsapp-demo";

export const metadata: Metadata = {
  title: "Zali2Bali — AI Automation for Bali's Villa Management Companies",
  description:
    "Bali villa companies lose bookings because guest messages go unanswered for hours. Zali2Bali builds WhatsApp automation and CRM systems that respond instantly, qualify leads automatically, and recover revenue on autopilot.",
};

const STATS = [
  { value: "84,000+", label: "Villa listings in Bali", sub: "AirDNA, 2025" },
  { value: "<5 min", label: "Target response time", sub: "vs. hours manually" },
  { value: "30%", label: "Booking lift potential", sub: "from faster replies" },
  { value: "14 days", label: "Live from signing", sub: "typical build timeline" },
];

const FEATURES = [
  {
    icon: MessageSquare,
    title: "WhatsApp automation",
    description:
      "Instant auto-reply to every guest inquiry — 24/7, in English and Bahasa Indonesia. No missed messages, no overnight gaps.",
  },
  {
    icon: BarChart3,
    title: "Unified CRM pipeline",
    description:
      "WhatsApp, Instagram, and website inquiries in one dashboard. Track every lead from first message to confirmed booking.",
  },
  {
    icon: Clock,
    title: "Lead qualification",
    description:
      "AI qualifies guests on dates, party size, and budget before handing off to your team — so staff only handle ready-to-book inquiries.",
  },
  {
    icon: Zap,
    title: "Automated follow-up",
    description:
      "Abandoned inquiries get re-engaged automatically. Post-stay review requests send themselves. Revenue leaks get sealed.",
  },
  {
    icon: Globe,
    title: "Direct booking growth",
    description:
      "Scale tier includes paid lead generation and a custom booking website to reduce OTA commission dependence.",
  },
  {
    icon: CheckCircle,
    title: "Built and optimized for you",
    description:
      "This isn't a SaaS tool you configure yourself. We build the system around your operation and optimize it monthly under retainer.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "Audit",
    title: "Free Automation Audit",
    desc: "We map your current inquiry flow and calculate exactly how much slow response time is costing you — in dollars per month, using your own numbers.",
  },
  {
    step: "Build",
    title: "Custom system build",
    desc: "We configure your WhatsApp automation, CRM pipeline, and integrations around your specific operation. Two weeks from signed contract to live system.",
  },
  {
    step: "Launch",
    title: "Go live + train your team",
    desc: "Your team gets a one-hour walkthrough. The system handles what it handles; your staff handles what only humans can.",
  },
  {
    step: "Optimize",
    title: "Monthly retainer optimization",
    desc: "Every month we review your response-time data, conversion metrics, and build whatever comes next. The system gets better as your portfolio grows.",
  },
];

const FAQS = [
  {
    question: "We already use WhatsApp Business — why do we need this?",
    answer:
      "The WhatsApp Business app has no automation, no multi-agent routing, and no CRM. This builds on top of the same WhatsApp your guests already message — it doesn't replace WhatsApp, it makes it capable of handling your inquiry volume without manual intervention.",
  },
  {
    question: "How quickly can this be live?",
    answer:
      "From signed contract to a fully live system is typically 12–14 days. Larger Scale-tier builds may take up to 3 weeks.",
  },
  {
    question: "What if WhatsApp changes its policies?",
    answer:
      "We work through official WhatsApp Business API providers with strong compliance postures. Monitoring platform policy is part of what the monthly retainer covers — you don't have to track it yourself.",
  },
  {
    question: "Will my staff need extensive training?",
    answer:
      "No. Training takes under an hour because the system sits on top of WhatsApp rather than replacing how your team already works. Staff access their own CRM dashboard and flag anything the automation shouldn't handle.",
  },
];

export default function HomePage() {
  const faqStructuredData = faqSchema(FAQS);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareCompanySchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(15,110,86,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(15,110,86,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Radial highlight */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(15,110,86,0.09) 0%, transparent 70%)",
          }}
        />

        <div className="container-content relative z-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: copy */}
            <div>
              <div className="badge badge-teal mb-6 animate-on-scroll">
                <span className="live-dot" />
                Now taking Founding Partners
              </div>

              <h1 className="text-display-2xl text-ink mb-6 animate-on-scroll" style={{ animationDelay: "80ms" }}>
                Bali villa companies lose{" "}
                <span className="gradient-text">bookings</span> every night.
                <br />
                We stop that.
              </h1>

              <p className="text-body-xl text-subtle mb-8 max-w-xl animate-on-scroll" style={{ animationDelay: "160ms" }}>
                Guests message three competing villa companies at once and book
                whoever replies first. Zali2Bali builds the WhatsApp automation
                and CRM systems that make sure that&apos;s always you.
              </p>

              <div className="flex flex-wrap gap-3 animate-on-scroll" style={{ animationDelay: "240ms" }}>
                <Link href="/contact" className="btn-primary">
                  Book a free audit
                  <ArrowRight size={16} />
                </Link>
                <Link href="/solutions" className="btn-secondary">
                  See how it works
                </Link>
              </div>

              <p className="text-sm text-subtle mt-5 animate-on-scroll" style={{ animationDelay: "300ms" }}>
                Free 30-minute audit. No commitment. We quantify your missed-booking
                cost using your own numbers before you spend a dollar.
              </p>
            </div>

            {/* Right: live demo */}
            <div className="animate-on-scroll" style={{ animationDelay: "200ms" }}>
              <WhatsAppDemo />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── Stats ─── */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="stagger-children grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <div className="stat-number">{stat.value}</div>
                <div className="text-sm font-medium text-ink">{stat.label}</div>
                <div className="text-xs text-subtle">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── Problem ─── */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="max-w-prose mx-auto text-center mb-16 animate-on-scroll">
            <div className="eyebrow mb-4">The problem</div>
            <h2 className="text-display-lg text-ink mb-5">
              Speed wins the booking.
              <br />
              Manual processes don&apos;t scale.
            </h2>
            <p className="text-body-lg text-subtle">
              A guest messages five villa companies on WhatsApp. They book the
              one that replies in under three minutes. Most managers reply in
              three hours — or miss it entirely if it came in overnight.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              {
                label: "Without automation",
                items: [
                  "Guest messages at 11pm",
                  "No reply until morning",
                  "Competitor replied in 4 minutes",
                  "Booking lost",
                ],
                bad: true,
              },
              {
                label: "The transition point",
                items: [
                  "84,000+ listings on Airbnb alone",
                  "Average response: hours",
                  "Guests send 3–5 simultaneous inquiries",
                  "Speed is the actual differentiator",
                ],
                neutral: true,
              },
              {
                label: "With Zali2Bali",
                items: [
                  "Guest messages at 11pm",
                  "Auto-reply within 10 seconds",
                  "Lead qualified and routed",
                  "Booking confirmed",
                ],
                good: true,
              },
            ].map((col) => (
              <div
                key={col.label}
                className={`p-8 bg-white ${col.good ? "border-t-2 border-teal-deep" : ""}`}
              >
                <div
                  className={`text-xs font-semibold uppercase tracking-widest mb-5 ${
                    col.good
                      ? "text-teal-deep"
                      : col.bad
                      ? "text-red-500"
                      : "text-subtle"
                  }`}
                >
                  {col.label}
                </div>
                <ul className="flex flex-col gap-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span
                        className={`mt-0.5 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold ${
                          col.good
                            ? "bg-teal-ghost text-teal-deep"
                            : col.bad
                            ? "bg-red-50 text-red-400"
                            : "bg-mist text-subtle"
                        }`}
                      >
                        {col.good ? "✓" : col.bad ? "✗" : "→"}
                      </span>
                      <span className={col.bad ? "text-subtle line-through" : "text-ink"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── Features ─── */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">What we build</div>
            <h2 className="text-display-lg text-ink">
              A system that handles bookings while your team sleeps.
            </h2>
          </div>

          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card-feature">
                  <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center mb-5">
                    <Icon size={18} className="text-teal-deep" />
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{feature.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── How it works ─── */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="max-w-prose mx-auto text-center mb-16 animate-on-scroll">
            <div className="eyebrow mb-4">Process</div>
            <h2 className="text-display-lg text-ink mb-4">
              Audit to live in under two weeks.
            </h2>
            <p className="text-body-lg text-subtle">
              We calculate your missed-booking cost first. You only decide on a
              package after you know what the status quo is actually costing you.
            </p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-border z-0" />

            <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {HOW_IT_WORKS.map((phase, i) => (
                <div key={phase.step} className="flex flex-col gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-border flex items-center justify-center shadow-card flex-shrink-0">
                    <span className="text-xs font-bold uppercase tracking-wider text-teal-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <div className="eyebrow mb-1">{phase.step}</div>
                    <h3 className="font-semibold text-ink mb-2">{phase.title}</h3>
                    <p className="text-sm text-subtle leading-relaxed">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center animate-on-scroll">
            <Link href="/contact" className="btn-primary">
              Start with a free audit
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── Packages teaser ─── */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Pricing</div>
            <h2 className="text-display-lg text-ink mb-4">
              Three tiers. One goal: more bookings.
            </h2>
            <p className="text-body-lg text-subtle">
              Setup fee funds the build. Monthly retainer pays for ongoing
              optimization. Cancel with 30 days&apos; notice — no lock-in.
            </p>
          </div>

          <div className="stagger-children grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Foundation",
                price: "$900",
                retainer: "$350/mo",
                desc: "WhatsApp auto-reply, basic CRM, and monthly reporting for villa companies managing 5–15 properties.",
                features: ["WhatsApp auto-reply + FAQ", "Lead capture into CRM", "Monthly performance report", "48-hour support"],
                cta: "Get started",
                highlight: false,
              },
              {
                name: "Growth",
                price: "$1,800",
                retainer: "$600/mo",
                desc: "Full automation including lead qualification, follow-up sequences, and monthly strategy calls. The recommended default.",
                features: ["Everything in Foundation", "Lead qualification + routing", "Booking confirmation automation", "Abandoned-inquiry follow-up", "Monthly strategy call", "Same-day support"],
                cta: "Most popular",
                highlight: true,
              },
              {
                name: "Scale",
                price: "$3,500",
                retainer: "$1,200/mo",
                desc: "Complete growth engine including paid lead generation and a custom booking website to reduce OTA dependence.",
                features: ["Everything in Growth", "Paid lead generation", "Custom booking website", "Dedicated account manager", "Quarterly business review"],
                cta: "Get started",
                highlight: false,
              },
            ].map((pkg) => (
              <div
                key={pkg.name}
                className={`relative rounded-2xl p-7 border flex flex-col gap-5 transition-all duration-200 hover:-translate-y-1 ${
                  pkg.highlight
                    ? "bg-teal-deep border-teal-deep text-white shadow-lg"
                    : "bg-white border-border hover:border-teal-ghost hover:shadow-card-hover"
                }`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="badge badge-teal text-xs">Recommended</span>
                  </div>
                )}
                <div>
                  <div className={`text-xs font-semibold uppercase tracking-widest mb-3 ${pkg.highlight ? "text-teal-ghost" : "text-subtle"}`}>
                    {pkg.name}
                  </div>
                  <div className="flex items-end gap-2 mb-1">
                    <span className={`text-3xl font-800 tracking-tight ${pkg.highlight ? "text-white" : "text-ink"}`} style={{ fontWeight: 800 }}>
                      {pkg.price}
                    </span>
                    <span className={`text-sm mb-1 ${pkg.highlight ? "text-white/60" : "text-subtle"}`}>setup</span>
                  </div>
                  <div className={`text-sm ${pkg.highlight ? "text-white/70" : "text-subtle"}`}>
                    + {pkg.retainer} retainer
                  </div>
                </div>

                <p className={`text-sm leading-relaxed ${pkg.highlight ? "text-white/80" : "text-subtle"}`}>
                  {pkg.desc}
                </p>

                <ul className="flex flex-col gap-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle
                        size={14}
                        className={`mt-0.5 flex-shrink-0 ${pkg.highlight ? "text-teal-light" : "text-teal-deep"}`}
                      />
                      <span className={pkg.highlight ? "text-white/80" : "text-ink"}>
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
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>

          <p className="text-sm text-subtle text-center mt-8 animate-on-scroll">
            First 5 clients receive <strong className="text-ink">Founding Partner pricing</strong> — 30% off the setup fee in exchange for a case study and one referral.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── FAQ ─── */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto">
          <div className="text-center mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">FAQ</div>
            <h2 className="text-display-md text-ink">Common questions</h2>
          </div>
          <div className="stagger-children flex flex-col gap-px rounded-2xl overflow-hidden border border-border">
            {FAQS.map((faq, i) => (
              <details key={i} className="group bg-white">
                <summary className="flex justify-between items-center gap-4 cursor-pointer px-7 py-5 font-medium text-ink hover:bg-mist transition-colors list-none">
                  <span>{faq.question}</span>
                  <span className="text-subtle text-xl font-light flex-shrink-0 group-open:rotate-45 transition-transform duration-150">+</span>
                </summary>
                <div className="px-7 pb-6 text-sm text-subtle leading-relaxed border-t border-border">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* ─── CTA ─── */}
      <section className="section-pad bg-teal-deep relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.05) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(43,196,148,0.15) 0%, transparent 50%)",
          }}
        />
        <div className="container-content relative z-10 text-center max-w-2xl mx-auto">
          <div className="badge badge-teal !bg-white/10 !text-white !border-white/20 mx-auto mb-6">
            <span className="live-dot !bg-teal-light" />
            Founding Partner spots available
          </div>
          <h2 className="text-display-lg text-white mb-5">
            Stop guessing what slow response costs you.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a 30-minute audit and we&apos;ll calculate your missed-booking cost
            using your own numbers. No pitch until you&apos;ve seen the number.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="btn-primary !bg-white !text-teal-deep hover:!bg-teal-ghost"
            >
              Book a free audit
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/solutions"
              className="btn-secondary !border-white/20 !text-white hover:!bg-white/10"
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
