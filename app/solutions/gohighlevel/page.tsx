import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Copy, GitBranch } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "GoHighLevel Implementation — Zali2Bali",
  "White-label GoHighLevel implementation — a master snapshot cloned per client, with pipeline stages, workflows, and automations built once and configured, not rebuilt.",
  "/solutions/gohighlevel"
);

const PIPELINE_STAGES = ["New Inquiry", "Contacted", "Qualified", "Quote Sent", "Booked", "Stayed"];

export default function GoHighLevelPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Solutions — GoHighLevel</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            GoHighLevel, white-labeled and built to scale.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            GoHighLevel is the CRM, workflow, and automation platform behind
            every Zali2Bali client. We don&apos;t rebuild it from scratch for
            each one — we run a master snapshot model that makes delivery
            fast and consistent.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* White-label implementation */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                  <Layers size={17} className="text-teal-deep" />
                </div>
                <span className="badge badge-teal">Core infrastructure</span>
              </div>
              <h2 className="text-display-lg text-ink mb-4">
                White-label GHL implementation.
              </h2>
              <div className="flex flex-col gap-4 text-body-md text-subtle">
                <p>
                  Your team sees a branded, dedicated system — not a
                  generic third-party dashboard. GoHighLevel runs entirely
                  behind the scenes as infrastructure, while the client
                  experience is built around your CRM pipeline, WhatsApp
                  number, and reporting.
                </p>
                <p>
                  This gives you enterprise-grade CRM and automation
                  capability without the cost or complexity of a custom-built
                  platform.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="card-feature">
                <div className="eyebrow mb-4">What&apos;s included</div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Dedicated, isolated GHL sub-account per client",
                    "Custom domain and branded client-facing views",
                    "Unified inbox — WhatsApp, Instagram, and website",
                    "Automated pipeline progression and staff tasking",
                    "Monthly performance reporting built in",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Layers size={14} className="text-teal-deep mt-0.5 flex-shrink-0" />
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

      {/* Master snapshot -> clone model */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Copy size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Master snapshot → clone per client</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            Build once. Clone in minutes.
          </h2>
          <p className="text-body-md text-subtle mb-4">
            Every workflow, pipeline stage, automation, and custom field is
            engineered once inside a master GoHighLevel account. GHL&apos;s
            native snapshot feature clones that entire configuration into a
            fresh, isolated sub-account for every new client — turning what
            would otherwise be weeks of manual setup into a delivery that
            happens in minutes.
          </p>
          <p className="text-body-md text-subtle">
            Per-client work is then configuration — property details,
            pricing, staff routing — not re-engineering the underlying
            automation logic. That&apos;s what makes a two-week launch
            timeline realistic, and what keeps quality consistent from
            client one to client fifty.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Pipeline stages / workflows */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-10 animate-on-scroll">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <GitBranch size={17} className="text-teal-deep" />
            </div>
            <div>
              <div className="eyebrow mb-1">Pipeline stages, workflows, automations</div>
              <h2 className="text-display-lg text-ink">The standard pipeline.</h2>
            </div>
          </div>
          <div className="animate-on-scroll overflow-x-auto">
            <div className="flex items-center gap-2 min-w-[640px]">
              {PIPELINE_STAGES.map((stage, i) => (
                <div key={stage} className="flex items-center gap-2 flex-1">
                  <div className="card flex-1 text-center py-4">
                    <span className="text-sm font-medium text-ink">{stage}</span>
                  </div>
                  {i < PIPELINE_STAGES.length - 1 && (
                    <ArrowRight size={16} className="text-subtle flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-subtle mt-6 max-w-prose">
            Each stage transition can trigger automated actions — a
            confirmation message, a staff task, a follow-up sequence —
            defined once in the master snapshot and active for every client
            from day one.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            See the master snapshot in action.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a free audit and we&apos;ll walk you through exactly how the
            pipeline maps to your current process.
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
