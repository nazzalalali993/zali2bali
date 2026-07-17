import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Cloud } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Architecture — Zali2Bali",
  "How Zali2Bali's automation architecture works — the guest-message-to-CRM flow, the GoHighLevel master snapshot model, the planned AWS stack, and the Cloudflare edge layer.",
  "/architecture"
);

const FLOW = [
  { label: "Guest Message", channels: ["WhatsApp", "Instagram DM", "Website form"], color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { label: "WhatsApp BSP", channels: ["Official Business Solution Provider", "No workaround tools"], color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { label: "GoHighLevel Workflow", channels: ["Trigger fires on inbound message", "Contact + Opportunity created"], color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { label: "AI Layer", channels: ["Amazon Bedrock LLM", "Knowledge base RAG", "Intent + qualification"], color: "bg-teal-500/20 text-teal-300 border-teal-500/30", note: "Growth/Scale" },
  { label: "CRM Update", channels: ["Pipeline stage updated", "Lead brief attached to contact"], color: "bg-green-500/20 text-green-300 border-green-500/30" },
  { label: "Staff Notification", channels: ["Instant guest reply sent", "Task assigned to staff member"], color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
];

const GHL_POINTS = [
  { title: "One master snapshot", body: "Every workflow, pipeline stage, automation, and custom field is built once in a master GoHighLevel account — never rebuilt from scratch per client." },
  { title: "Clone per client", body: "GHL's native snapshot feature clones the entire master configuration into a fresh, isolated sub-account for every new client in minutes, not days." },
  { title: "Configure, don't rebuild", body: "Delivery work per client is configuration — property details, pricing, staff assignment — not re-engineering the automation logic itself." },
  { title: "Isolated by design", body: "Every client runs in a separate GHL sub-account. No cross-client data access, no shared credentials, no single misconfiguration touching every client at once." },
];

const AWS_STACK = [
  { name: "Amazon Bedrock", role: "Foundation model access for guest qualification and FAQ handling" },
  { name: "AWS Lambda", role: "Event-driven serverless functions for AI calls and CRM webhooks" },
  { name: "Amazon SES", role: "Transactional email for confirmations and monthly reports" },
  { name: "Amazon RDS", role: "Relational database for multi-tenant metadata and reporting" },
  { name: "Amazon S3", role: "Media storage for client booking website assets" },
  { name: "Amazon CloudFront", role: "CDN distribution for fast international guest load times" },
  { name: "AWS CloudWatch", role: "Monitoring and alerting for automation failures" },
  { name: "AWS Secrets Manager", role: "Secure storage for per-client BSP tokens and API keys" },
];

const CF_EDGE = [
  { name: "Cloudflare Pages", role: "Static hosting and global CDN for this site and client sites" },
  { name: "Cloudflare Workers", role: "Edge-side logic close to the guest, not a distant origin server" },
  { name: "Cloudflare R2", role: "Object storage for media without egress costs" },
  { name: "Cloudflare Analytics", role: "Privacy-friendly, cookie-free traffic analytics" },
];

export default function ArchitecturePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Architecture</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            One system. Built once. Cloned per client.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Every client&apos;s automation is a configuration of the same
            reference architecture — not a bespoke, one-off build. That&apos;s
            what makes the system reliable at client number one and client
            number fifty alike.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Flow diagram */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">Standard automation flow</div>
            <h2 className="text-display-lg text-ink mb-4">
              How a guest message becomes a staff notification.
            </h2>
            <p className="text-body-md text-subtle">
              Six steps, running in seconds, for every inquiry on every
              client system.
            </p>
          </div>

          <div className="bg-ink rounded-2xl p-8 lg:p-12 overflow-x-auto animate-on-scroll">
            <div className="min-w-[600px]">
              {FLOW.map((step, i, arr) => (
                <div key={step.label} className="relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-1">
                    <div className="w-44 flex-shrink-0">
                      <span className="text-xs text-white/30 font-mono uppercase tracking-wider">
                        {String(i + 1).padStart(2, "0")} {step.label}
                      </span>
                      {step.note && (
                        <div className="mt-0.5">
                          <span className="text-[10px] text-teal-light font-medium">{step.note}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      {step.channels.map((ch) => (
                        <span key={ch} className={`text-xs px-2.5 py-1 rounded border ${step.color} font-mono`}>
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-[10px] sm:ml-[182px] w-px h-6 bg-white/10 flex items-center justify-center mb-1">
                      <div className="absolute w-1.5 h-1.5 rounded-full bg-white/20" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* GHL master snapshot */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                  <Layers size={17} className="text-teal-deep" />
                </div>
                <span className="badge badge-teal">Core architecture decision</span>
              </div>
              <h2 className="text-display-lg text-ink mb-4">
                The GoHighLevel master snapshot model.
              </h2>
              <p className="text-body-md text-subtle">
                This is the single most important architectural decision
                behind Zali2Bali: build the entire automation system once,
                as a master template, and clone it per client rather than
                rebuilding it from scratch every time.
              </p>
            </div>
            <div className="stagger-children grid sm:grid-cols-2 gap-5">
              {GHL_POINTS.map((p) => (
                <div key={p.title} className="card-feature">
                  <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                  <p className="text-sm text-subtle leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* AWS stack */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Planned AWS stack</div>
            <h2 className="text-display-lg text-ink">
              Infrastructure for the next phase of scale.
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {AWS_STACK.map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-medium text-sm text-ink">{item.name}</span>
                  <span className="badge badge-neutral text-xs">Planned</span>
                </div>
                <p className="text-xs text-subtle leading-relaxed">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Cloudflare edge */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-14 animate-on-scroll">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Cloud size={17} className="text-teal-deep" />
            </div>
            <div>
              <div className="eyebrow mb-1">Cloudflare edge</div>
              <h2 className="text-display-lg text-ink">Delivery layer, live today.</h2>
            </div>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CF_EDGE.map((item) => (
              <div key={item.name} className="card">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-medium text-sm text-ink">{item.name}</span>
                  <span className="badge badge-live text-xs">
                    <span className="live-dot" style={{ width: 5, height: 5 }} />
                    In use
                  </span>
                </div>
                <p className="text-xs text-subtle leading-relaxed">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-content text-center max-w-xl mx-auto animate-on-scroll">
          <h2 className="text-display-md text-ink mb-4">
            Want the deeper technical breakdown?
          </h2>
          <p className="text-body-lg text-subtle mb-8">
            See the full technology stack, architecture principles, and
            security model.
          </p>
          <Link href="/technology" className="btn-primary">
            View technology stack
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
