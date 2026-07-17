import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Roadmap — Zali2Bali",
  "Zali2Bali's roadmap — from founding in Bali through Founding Partner case studies, vertical expansion, a productized SaaS tier, and regional growth across Southeast Asia.",
  "/roadmap"
);

const TIMELINE = [
  {
    year: "2026 — Q1",
    status: "completed",
    event: "Founded in Bali",
    detail: "Zali2Bali is founded to serve Bali's villa management market — identified as the clearest, most urgent automation opportunity in the island's tourism economy.",
  },
  {
    year: "2026 — Q2/Q3",
    status: "completed",
    event: "Product & systems built",
    detail: "Core automation architecture designed and tested. GoHighLevel master snapshot built. WhatsApp BSP integration validated. Website launched.",
  },
  {
    year: "2026 — NOW",
    status: "current",
    event: "Founding Partner program open",
    detail: "Onboarding our first five Founding Partners — villa management companies in Bali who get 30% off setup in exchange for case study access and one referral.",
  },
  {
    year: "2026 — Q4",
    status: "upcoming",
    event: "First case studies published",
    detail: "Before/after data from Founding Partners published: response time improvement, inquiry-to-booking conversion lift, and monthly recovered revenue.",
  },
  {
    year: "2027 — Q1",
    status: "upcoming",
    event: "Vertical expansion",
    detail: "Proven playbook extends to tour operators and activity companies — same WhatsApp-driven inquiry pattern, same automation approach.",
  },
  {
    year: "2027 — Q3",
    status: "upcoming",
    event: "Restaurants & hotels",
    detail: "Expansion into F&B and boutique hotels across Bali. CRM and WhatsApp automation adapted for reservation and table booking flows.",
  },
  {
    year: "2028",
    status: "future",
    event: "Product layer & regional expansion",
    detail: "Productized SaaS tier for smaller operators. Geographic expansion to Lombok, Yogyakarta, and other Indonesian tourism hubs.",
  },
  {
    year: "Future",
    status: "future",
    event: "Operating system for SEA tourism",
    detail: "The default infrastructure layer for tourism and hospitality businesses across Southeast Asia.",
  },
];

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Roadmap</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            From one market to an operating system.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Zali2Bali is built deliberately, one proven step at a time —
            starting narrow with villa management in Bali, then expanding
            only once the playbook is validated with real client results.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-content max-w-3xl mx-auto">
          <div className="relative pl-10 border-l-2 border-border flex flex-col gap-12 stagger-children">
            {TIMELINE.map((m) => (
              <div key={m.year} className="relative">
                <div
                  className={`absolute -left-[2.9rem] w-6 h-6 rounded-full bg-white flex items-center justify-center ${
                    m.status === "future" ? "border-2 border-border" : "border-2 border-teal-deep"
                  }`}
                >
                  {m.status === "completed" && (
                    <div className="w-2 h-2 rounded-full bg-teal-deep" />
                  )}
                  {m.status === "current" && <span className="live-dot" />}
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="eyebrow">{m.year}</div>
                  {m.status === "current" && (
                    <span className="badge badge-teal ml-2">Now</span>
                  )}
                </div>
                <h2 className="text-display-sm text-ink mb-2">{m.event}</h2>
                <p className="text-body-md text-subtle leading-relaxed">{m.detail}</p>
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
            Get in early. This is the ground floor.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Founding Partners today are the case studies and referral network
            that power every phase that follows.
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
