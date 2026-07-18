import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, Eye, Zap, Shield, Users, TrendingUp } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Company — Zali2Bali",
  "Zali2Bali is an AI automation company built to solve one specific, expensive problem: Bali villa management companies are losing bookings every night because guest inquiries go unanswered for hours.",
  "/company"
);

const VALUES = [
  {
    icon: Target,
    title: "Specialists, not generalists",
    desc: "We do one thing: AI automation for Bali's tourism and property businesses. Specialization is what justifies premium pricing and deep client trust.",
  },
  {
    icon: Zap,
    title: "Outcomes over outputs",
    desc: "We don't sell WhatsApp automation. We sell recovered bookings. Every conversation, every proposal, and every monthly report stays anchored to that.",
  },
  {
    icon: Shield,
    title: "Built to last",
    desc: "We choose compliance-forward infrastructure, document everything as a reusable system, and refuse to build on platforms that depend on policy workarounds.",
  },
  {
    icon: Users,
    title: "Clients as partners",
    desc: "The Founding Partner program isn't just a pricing mechanism — it's an operating philosophy. Client results are our results.",
  },
  {
    icon: TrendingUp,
    title: "Recurring revenue, recurring value",
    desc: "Setup fees fund the build; retainers fund continuous improvement. We're not motivated to set-and-forget — our revenue depends on your system working.",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    desc: "We calculate the cost of your status quo using your own numbers before we ever mention price. We'd rather lose a deal than overstate what we can deliver.",
  },
];

const TIMELINE = [
  {
    year: "2026 — Q1",
    event: "Founded in Bali",
    detail: "Zali2Bali is founded to serve Bali's villa management market — identified as the clearest, most urgent automation opportunity in the island's tourism economy.",
  },
  {
    year: "2026 — Q2/Q3",
    event: "Product & systems built",
    detail: "Core automation architecture designed and tested. GoHighLevel master snapshot built. WhatsApp BSP integration validated. Website launched.",
  },
  {
    year: "2026 — NOW",
    event: "Founding Partner program open",
    detail: "Onboarding our first five Founding Partners — 30% off setup in exchange for case study access and one referral. Spots are limited.",
    current: true,
  },
  {
    year: "2026 — Q4",
    event: "First case studies published",
    detail: "Before/after data from Founding Partners published: response time improvement and monthly recovered revenue.",
  },
  {
    year: "2027",
    event: "Vertical expansion",
    detail: "Proven playbook extends to tour operators, restaurants, and hotels across Bali.",
  },
  {
    year: "2028+",
    event: "Operating system for SEA tourism",
    detail: "The default infrastructure layer for tourism and hospitality businesses across Southeast Asia.",
  },
];

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Company</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            Built in Bali.
            <br />
            Built for Bali.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Zali2Bali is an AI automation company with one starting thesis:
            Bali&apos;s 84,000+ villa listings compete on speed of response, and
            most of them are losing that race on a spreadsheet and a WhatsApp
            Business app.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Mission / Vision */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="animate-on-scroll">
              <div className="eyebrow mb-4">Mission</div>
              <h2 className="text-display-md text-ink mb-5">
                Help Bali&apos;s tourism and property businesses stop losing revenue
                to slow, manual, disconnected processes.
              </h2>
              <p className="text-body-md text-subtle">
                By building AI-powered systems that capture leads, respond
                instantly, and convert more bookings without more headcount — we
                give villa operators the infrastructure that was previously only
                accessible to large hospitality chains.
              </p>
            </div>
            <div className="animate-on-scroll">
              <div className="eyebrow mb-4">Vision</div>
              <h2 className="text-display-md text-ink mb-5">
                Become the operating system behind Bali&apos;s tourism economy.
              </h2>
              <p className="text-body-md text-subtle">
                The default infrastructure layer that local villa, hospitality,
                and service businesses run on — so that Bali operators can
                compete on guest experience, not manual process management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Why Bali */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll">
              <div className="eyebrow mb-4">Why Bali</div>
              <h2 className="text-display-lg text-ink mb-6">
                The market is large. The automation gap is wider.
              </h2>
              <div className="flex flex-col gap-5 text-body-md text-subtle">
                <p>
                  Bali recorded nearly 7 million foreign tourist arrivals in
                  2025 — an increase of 10% over the prior year. The island
                  hosts over 84,000 short-term rental listings, with villas
                  making up the large majority. Total rental revenue hit
                  roughly $1.1 billion.
                </p>
                <p>
                  Yet average occupancy sits around 53%, while professionally
                  managed, well-automated villas routinely hit 80–90%. That
                  performance gap has nothing to do with location — it&apos;s
                  entirely about how the business is operated.
                </p>
                <p>
                  No dominant automation vendor serves this market today.
                  Most operators are running on the free WhatsApp Business
                  app and a spreadsheet. That&apos;s the gap Zali2Bali was built
                  to fill — before a well-funded competitor notices it.
                </p>
              </div>
            </div>

            <div className="stagger-children grid grid-cols-2 gap-4">
              {[
                { value: "6.95M", label: "Foreign arrivals, 2025", sub: "BPS Bali" },
                { value: "84,000+", label: "Short-term listings", sub: "AirDNA" },
                { value: "$1.1B", label: "Total rental revenue", sub: "2025 estimate" },
                { value: "53%", label: "Average occupancy", sub: "vs 85% automated" },
              ].map((stat) => (
                <div key={stat.label} className="card">
                  <div className="stat-number text-2xl mb-1">{stat.value}</div>
                  <div className="text-sm font-medium text-ink">{stat.label}</div>
                  <div className="text-xs text-subtle mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Values */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Operating principles</div>
            <h2 className="text-display-lg text-ink">
              Not a vibe. A decision filter.
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="card-feature">
                  <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center mb-5">
                    <Icon size={17} className="text-teal-deep" />
                  </div>
                  <h3 className="font-semibold text-ink mb-2">{val.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Roadmap timeline */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto">
          <div className="mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">Roadmap</div>
            <h2 className="text-display-lg text-ink">Where we&apos;re going.</h2>
          </div>
          <div className="relative pl-8 border-l-2 border-border flex flex-col gap-10 stagger-children">
            {TIMELINE.map((item) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[2.375rem] w-5 h-5 rounded-full bg-white border-2 border-teal-deep flex items-center justify-center">
                  {item.current ? (
                    <span className="live-dot" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-teal-deep" />
                  )}
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="eyebrow">{item.year}</div>
                  {item.current && <span className="badge badge-teal">Now</span>}
                </div>
                <h3 className="font-semibold text-ink mb-1">{item.event}</h3>
                <p className="text-sm text-subtle leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            We&apos;re early. That&apos;s the point.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Founding Partners get 30% off setup in exchange for case study
            access. There are five slots. If you manage villas in Bali, this is
            the best time to start.
          </p>
          <Link href="/contact" className="btn-primary !bg-white !text-teal-deep hover:!bg-teal-ghost">
            Apply for Founding Partner
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
