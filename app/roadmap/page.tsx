import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Roadmap — Zali2Bali",
  "Zali2Bali's roadmap — from founding in Bali through Founding Partner case studies, vertical expansion, a productized SaaS tier, and regional growth across Southeast Asia.",
  "/roadmap"
);

const MILESTONES = [
  {
    date: "2024",
    title: "Founded in Bali, core product designed",
    detail: "Zali2Bali is founded to serve Bali's villa management market. The core product architecture — WhatsApp API, GoHighLevel master snapshot, AI qualification layer — is designed around one thesis: guest response speed is the single biggest lever on villa revenue.",
    status: "Done",
  },
  {
    date: "2025 Q1",
    title: "Founding Partner program launched",
    detail: "The first five clients are onboarded under the Founding Partner program — 30% off setup in exchange for case study access, testimonials, and referral introductions.",
    status: "Done",
  },
  {
    date: "2025 Q3",
    title: "First case studies published",
    detail: "Results from the initial Founding Partner cohort are documented and published — response time, conversion, and booking-recovery numbers drawn from real client data.",
    status: "In progress",
  },
  {
    date: "2026 Q1",
    title: "Expansion to tour operators and restaurants",
    detail: "The proven villa-management playbook extends to tour and activity operators, and to restaurants — industries sharing the same WhatsApp-driven inquiry pattern.",
    status: "Planned",
  },
  {
    date: "2026 Q3",
    title: "GoHighLevel SaaS productized tier",
    detail: "A self-serve, productized tier launches on top of the GoHighLevel master-snapshot architecture — lowering the entry point for smaller operators who don't need a fully bespoke build.",
    status: "Planned",
  },
  {
    date: "2027",
    title: "Regional expansion — Lombok, Yogyakarta",
    detail: "The delivery model expands beyond Bali into other Indonesian tourism hubs with the same underlying gap: high tourism volume, low automation maturity.",
    status: "Planned",
  },
  {
    date: "Future",
    title: "Operating system for Southeast Asia tourism",
    detail: "The long-term vision: the default infrastructure layer that hospitality and tourism businesses across Southeast Asia run their guest communication and CRM on.",
    status: "Vision",
  },
];

const STATUS_STYLE: Record<string, string> = {
  Done: "badge-live",
  "In progress": "badge-teal",
  Planned: "badge-neutral",
  Vision: "badge-neutral",
};

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
            {MILESTONES.map((m) => (
              <div key={m.date} className="relative">
                <div className="absolute -left-[2.9rem] w-6 h-6 rounded-full bg-white border-2 border-teal-deep flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-teal-deep" />
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <div className="eyebrow">{m.date}</div>
                  <span className={`badge text-xs ${STATUS_STYLE[m.status]}`}>
                    {m.status === "Done" && <span className="live-dot" style={{ width: 5, height: 5 }} />}
                    {m.status}
                  </span>
                </div>
                <h2 className="text-display-sm text-ink mb-2">{m.title}</h2>
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
