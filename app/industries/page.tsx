import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home, Compass, UtensilsCrossed, Building2 } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Industries — Zali2Bali",
  "Zali2Bali serves Bali's hospitality economy — starting with villa management as the beachhead market, expanding to tour operators, restaurants and hotels, and real estate.",
  "/industries"
);

const INDUSTRIES = [
  {
    icon: Home,
    name: "Villa Management",
    phase: "Primary — beachhead market",
    phaseStyle: "badge-live",
    scope: "5–40 villas per operator",
    problem:
      "Villa management companies run guest inquiries through the free WhatsApp Business app — no automation, no routing, no visibility into which conversations become bookings. Response delays of hours are normal, and every hour of delay measurably increases the chance a guest books elsewhere.",
    solution:
      "The Booking Recovery System puts instant WhatsApp response, AI-powered lead qualification, and a unified CRM pipeline behind the same WhatsApp number guests already use — so no inquiry sits unanswered overnight.",
    why:
      "Bali hosts over 84,000 short-term rental listings generating roughly $1.1B in annual revenue, with average occupancy around 53% against 85%+ for well-automated operators. No dominant automation vendor serves this market today. That gap, combined with founder-level domain knowledge of the villa segment, makes it the clearest starting point.",
  },
  {
    icon: Compass,
    name: "Tourism & Activity Operators",
    phase: "Phase 2",
    phaseStyle: "badge-neutral",
    scope: "Tour operators, activity & experience providers",
    problem:
      "Activity and tour operators face the same WhatsApp-driven inquiry pattern as villas — guests asking about availability, pricing, and group size across scattered channels — but with even tighter booking windows, since most inquiries arrive within days of the activity itself.",
    solution:
      "The same automation and CRM architecture built for villas — WhatsApp API, AI qualification, unified pipeline — adapted for activity scheduling, group-size handling, and weather-dependent rebooking flows.",
    why:
      "Tour and activity operators share Bali's tourism customer base and the exact same technology gap as villa managers, making this the most natural adjacent vertical once the villa playbook is proven and repeatable.",
  },
  {
    icon: UtensilsCrossed,
    name: "Restaurants & Hotels",
    phase: "Phase 3",
    phaseStyle: "badge-neutral",
    scope: "Independent restaurants and boutique hotels",
    problem:
      "Restaurant reservations and hotel direct-booking inquiries both suffer the same manual-WhatsApp bottleneck, compounded by third-party platform commissions (OTAs for hotels, reservation apps for restaurants) that erode margin on every booking.",
    solution:
      "WhatsApp reservation automation paired with a direct-booking channel — reducing dependence on commission-charging platforms while keeping the guest experience as fast and familiar as messaging a friend.",
    why:
      "Restaurants and boutique hotels round out Bali's core hospitality economy, and both categories are large enough, and currently underserved enough, to support a dedicated go-to-market motion once the CRM and automation core is fully productized.",
  },
  {
    icon: Building2,
    name: "Real Estate",
    phase: "Phase 4",
    phaseStyle: "badge-neutral",
    scope: "Villa sales, land, and long-term rental agencies",
    problem:
      "Bali's real estate and long-term rental market runs on the same fragmented WhatsApp-and-spreadsheet workflow as short-term villa management, but with longer sales cycles and higher-value transactions where a missed follow-up can cost tens of thousands of dollars, not one night's booking.",
    solution:
      "CRM pipelines and automated follow-up sequences adapted for longer, multi-touch real estate sales cycles — qualification, document handoff, and viewing scheduling routed through the same WhatsApp-first architecture.",
    why:
      "Real estate is the furthest adjacency from the original villa-management thesis, requiring the most workflow adaptation — positioned as a later-phase expansion once the core platform and delivery process are fully mature.",
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Industries</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            Built for Bali&apos;s hospitality economy.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Every industry we serve shares the same root problem: guest and
            client inquiries arrive on WhatsApp, and the business has no
            automation, no routing, and no CRM behind that number. We&apos;re
            starting with villa management and expanding outward in a
            deliberate sequence.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {INDUSTRIES.map((ind, i) => {
        const Icon = ind.icon;
        return (
          <div key={ind.name}>
            <section className={`section-pad ${i % 2 === 0 ? "bg-white" : "bg-paper"}`}>
              <div className="container-content">
                <div className="grid lg:grid-cols-[minmax(0,340px)_1fr] gap-12 lg:gap-16">
                  <div className="animate-on-scroll">
                    <div className="w-11 h-11 rounded-xl bg-teal-ghost flex items-center justify-center mb-5">
                      <Icon size={20} className="text-teal-deep" />
                    </div>
                    <span className={`badge ${ind.phaseStyle} mb-4`}>
                      {ind.phaseStyle === "badge-live" && <span className="live-dot" style={{ width: 5, height: 5 }} />}
                      {ind.phase}
                    </span>
                    <h2 className="text-display-md text-ink mb-2">{ind.name}</h2>
                    <p className="text-sm text-subtle">{ind.scope}</p>
                  </div>

                  <div className="stagger-children grid sm:grid-cols-3 gap-5">
                    <div className="card-feature">
                      <div className="eyebrow mb-3">Problem</div>
                      <p className="text-sm text-subtle leading-relaxed">{ind.problem}</p>
                    </div>
                    <div className="card-feature">
                      <div className="eyebrow mb-3">Solution</div>
                      <p className="text-sm text-subtle leading-relaxed">{ind.solution}</p>
                    </div>
                    <div className="card-feature">
                      <div className="eyebrow mb-3">Why this industry</div>
                      <p className="text-sm text-subtle leading-relaxed">{ind.why}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <hr className="section-divider" />
          </div>
        );
      })}

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            Villa management, today. What&apos;s next, by design.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            If you operate in Bali&apos;s hospitality economy and don&apos;t
            see your category listed yet, reach out anyway — the roadmap
            moves with client demand.
          </p>
          <Link href="/contact" className="btn-primary !bg-white !text-teal-deep hover:!bg-teal-ghost">
            Talk to us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
