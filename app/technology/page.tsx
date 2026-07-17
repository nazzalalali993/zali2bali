import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Server, Brain, Workflow, Lock, Globe, Database } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Technology — Zali2Bali",
  "Zali2Bali builds on a cloud-native, AI-augmented technology stack designed for reliability, compliance, and scale across Bali's hospitality and tourism sector.",
  "/technology"
);

const STACK_LAYERS = [
  {
    icon: Brain,
    category: "AI & Intelligence",
    items: [
      { name: "Amazon Bedrock", role: "Foundation model access for natural-language guest qualification and FAQ handling — via AWS-managed API, not self-hosted inference.", status: "Planned" },
      { name: "LLM-powered agents", role: "Conversation flows that understand free-form guest text, extract intent, and route accordingly — not keyword matching.", status: "In use" },
      { name: "Knowledge base RAG", role: "Per-client FAQ and property-policy knowledge bases that ground every AI response. No improvised answers on pricing or policy.", status: "In use" },
    ],
  },
  {
    icon: Workflow,
    category: "Automation & Integration",
    items: [
      { name: "GoHighLevel (GHL)", role: "CRM, workflow automation, and pipeline management for every client. Master-snapshot model: built once, cloned per client via GHL's native snapshot feature.", status: "In use" },
      { name: "WhatsApp Business API", role: "Official BSP integration — not the consumer app. Enables multi-agent routing, automation, and webhook connectivity that the free app cannot provide.", status: "In use" },
      { name: "Make.com / n8n", role: "Middleware for complex cross-platform workflows — connecting WhatsApp, CRM, Instagram, and custom webhook endpoints.", status: "In use" },
      { name: "Meta Graph API", role: "Instagram DM integration to unify social and messaging inquiries into a single CRM pipeline.", status: "In use" },
    ],
  },
  {
    icon: Server,
    category: "Cloud Infrastructure (AWS)",
    items: [
      { name: "Amazon EC2 / ECS", role: "Compute for webhook handlers and automation middleware as client count scales beyond what serverless alone handles efficiently.", status: "Planned" },
      { name: "AWS Lambda", role: "Event-driven serverless functions for AI model calls, CRM webhooks, and per-client automation triggers. Scales to zero between guest inquiries.", status: "Planned" },
      { name: "Amazon S3 + CloudFront", role: "Static asset delivery and media storage for client booking websites. CDN distribution ensures fast load times for international guests.", status: "Planned" },
      { name: "Amazon RDS", role: "Relational database for multi-tenant client metadata, audit logging, and performance reporting as the client base grows.", status: "Planned" },
      { name: "Amazon SES", role: "Transactional email for automated booking confirmations, follow-up sequences, and monthly performance reports to clients.", status: "Planned" },
      { name: "AWS CloudWatch", role: "Monitoring and alerting for automation failures, unusual response-time spikes, and per-client system health.", status: "Planned" },
      { name: "AWS Secrets Manager", role: "Secure credential storage for per-client WhatsApp BSP tokens, API keys, and CRM integration credentials.", status: "Planned" },
      { name: "Amazon Route 53", role: "DNS management for client booking websites and the Zali2Bali platform domain.", status: "Planned" },
      { name: "AWS IAM", role: "Fine-grained access control between service components — no shared credentials, no over-permissioned roles.", status: "Planned" },
      { name: "Amazon ECR", role: "Container registry for Docker images used in automation middleware and webhook processing services.", status: "Planned" },
    ],
  },
  {
    icon: Globe,
    category: "Delivery & Web",
    items: [
      { name: "Cloudflare Pages", role: "Static hosting and global CDN for the Zali2Bali website and client booking sites. Workers for edge-side logic.", status: "In use" },
      { name: "Next.js 15", role: "Framework for all web properties — server components, static generation, and edge-compatible deployment.", status: "In use" },
      { name: "Cloudflare R2", role: "Object storage for media assets without egress costs — important for a multi-client model with villa photography.", status: "In use" },
    ],
  },
  {
    icon: Lock,
    category: "Security & Compliance",
    items: [
      { name: "WhatsApp official BSP", role: "All WhatsApp integration uses an officially registered BSP — no third-party workaround tools that risk account suspension.", status: "In use" },
      { name: "Data isolation", role: "Every client runs in a separate GHL sub-account. No cross-client data access, no shared credentials.", status: "In use" },
      { name: "Credential management", role: "AWS Secrets Manager for API keys; no credentials in code repositories or environment variables in production.", status: "Planned" },
    ],
  },
  {
    icon: Database,
    category: "Data & Analytics",
    items: [
      { name: "Cloudflare Analytics", role: "Privacy-friendly website analytics without cookie consent requirements — important for Bali's international guest base.", status: "In use" },
      { name: "GHL Reporting", role: "Per-client monthly performance dashboards — response time, inquiry volume, lead-to-booking conversion.", status: "In use" },
      { name: "AirDNA market data", role: "Referenced for market sizing, competitor occupancy benchmarking, and client audit conversations.", status: "In use" },
    ],
  },
];

const ARCHITECTURE_PRINCIPLES = [
  { title: "One master, many clones", body: "The GoHighLevel master snapshot is the single most important architectural decision. Build once, clone per client. No bespoke builds that depend entirely on the founder's memory." },
  { title: "Official channels only", body: "We don't build on workaround tools that evade platform detection. Every WhatsApp integration uses an official BSP. Workarounds create technical debt that becomes a client-retention risk." },
  { title: "AI as copilot, human as pilot", body: "AI handles the immediate-response and qualification layer. Humans handle anything involving payment, complaint resolution, or judgment the model shouldn't be trusted with alone." },
  { title: "Isolation over convenience", body: "Every client is a separate sub-account. Shared infrastructure is convenient — until one misconfiguration touches every client simultaneously." },
  { title: "Documented over tribal", body: "Every workflow is built with a Build Brief, every client delivery runs a QA checklist, every process has a written SOP. The system should survive a founder being unavailable." },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Technology</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            Cloud-native.
            <br />
            AI-augmented.
            <br />
            Built to hand off.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Every technology decision at Zali2Bali is made against one filter:
            does this work as well for client number fifty as it does for client
            number one? That question eliminates a lot of attractive shortcuts.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Architecture principles */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Architecture principles</div>
            <h2 className="text-display-lg text-ink">
              Not tool choices. Constraints.
            </h2>
          </div>
          <div className="stagger-children grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ARCHITECTURE_PRINCIPLES.map((p) => (
              <div key={p.title} className="card-feature">
                <h3 className="font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-sm text-subtle leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Reference architecture diagram */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="max-w-prose mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">Reference architecture</div>
            <h2 className="text-display-lg text-ink mb-4">
              How a guest inquiry becomes a booked stay.
            </h2>
            <p className="text-body-md text-subtle">
              Every client&apos;s system is a configuration of this architecture, not
              a one-off build. Tier differences determine which layers are active
              and how sophisticated each step is.
            </p>
          </div>

          <div className="bg-ink rounded-2xl p-8 lg:p-12 overflow-x-auto animate-on-scroll">
            <div className="min-w-[560px]">
              {[
                { label: "Guest message", channels: ["WhatsApp", "Instagram DM", "Website form"], color: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
                { label: "API layer", channels: ["WhatsApp BSP (official)", "Meta Graph API", "Webhook"], color: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
                { label: "Intelligence layer", channels: ["Amazon Bedrock LLM", "Knowledge base RAG", "Intent classification"], color: "bg-teal-500/20 text-teal-300 border-teal-500/30", note: "Growth/Scale" },
                { label: "Automation layer", channels: ["GoHighLevel Workflows", "Make.com / n8n", "AWS Lambda"], color: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
                { label: "CRM & data", channels: ["GHL Sub-account (per client)", "Contact + Opportunity created", "Task assigned to staff"], color: "bg-green-500/20 text-green-300 border-green-500/30" },
                { label: "Output", channels: ["Instant guest reply", "Staff notification", "Booking confirmation"], color: "bg-teal-500/20 text-teal-300 border-teal-500/30" },
              ].map((layer, i, arr) => (
                <div key={layer.label} className="relative">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-1">
                    <div className="w-36 flex-shrink-0">
                      <span className="text-xs text-white/30 font-mono uppercase tracking-wider">
                        {String(i + 1).padStart(2, "0")} {layer.label}
                      </span>
                      {layer.note && (
                        <div className="mt-0.5">
                          <span className="text-[10px] text-teal-light font-medium">{layer.note}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 flex-1">
                      {layer.channels.map((ch) => (
                        <span key={ch} className={`text-xs px-2.5 py-1 rounded border ${layer.color} font-mono`}>
                          {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="ml-[10px] sm:ml-[142px] w-px h-6 bg-white/10 flex items-center justify-center mb-1">
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

      {/* Stack layers */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-14 animate-on-scroll">
            <div className="eyebrow mb-4">Technology stack</div>
            <h2 className="text-display-lg text-ink">
              What we build with and why.
            </h2>
          </div>

          <div className="flex flex-col gap-14">
            {STACK_LAYERS.map((layer) => {
              const Icon = layer.icon;
              return (
                <div key={layer.category} className="animate-on-scroll">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-8 h-8 rounded-lg bg-teal-ghost flex items-center justify-center">
                      <Icon size={16} className="text-teal-deep" />
                    </div>
                    <h3 className="font-semibold text-ink text-lg">{layer.category}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {layer.items.map((item) => (
                      <div key={item.name} className="card flex gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1.5">
                            <span className="font-medium text-sm text-ink">{item.name}</span>
                            <span className={`badge text-xs ${item.status === "In use" ? "badge-live" : "badge-neutral"}`}>
                              {item.status === "In use" && <span className="live-dot" style={{ width: 5, height: 5 }} />}
                              {item.status}
                            </span>
                          </div>
                          <p className="text-xs text-subtle leading-relaxed">{item.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* AWS section */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto">
          <div className="animate-on-scroll">
            <div className="eyebrow mb-4">Why AWS</div>
            <h2 className="text-display-lg text-ink mb-6">
              AWS is the infrastructure layer that scales with the business,
              not ahead of it.
            </h2>
            <div className="flex flex-col gap-5 text-body-md text-subtle">
              <p>
                Zali2Bali starts small by design — serving individual villa
                management companies in Bali. But the architecture is built
                for the second phase, where dozens of clients run simultaneously
                with automated delivery, and the founder&apos;s attention isn&apos;t the
                binding constraint on each build.
              </p>
              <p>
                AWS solves that transition point cleanly. Lambda means webhook
                processing costs nothing between guest inquiries and scales
                automatically during peak season. Bedrock means we get
                production-grade foundation model access without managing GPU
                infrastructure. RDS and Secrets Manager mean the multi-tenant
                data model is sound before the client base reaches the size
                where a shared-credential incident would be catastrophic.
              </p>
              <p>
                The planned AWS integration isn&apos;t infrastructure for its own
                sake — it&apos;s the specific services that solve the specific
                bottlenecks that emerge at 20, 50, and 100 clients. We know
                what those bottlenecks are because we designed the delivery
                process first and the infrastructure second.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="container-content text-center max-w-xl mx-auto animate-on-scroll">
          <h2 className="text-display-md text-ink mb-4">
            Infrastructure built for scale. Delivered at startup speed.
          </h2>
          <p className="text-body-lg text-subtle mb-8">
            Every client system goes live in under two weeks and runs on the
            same architecture we use for Zali2Bali itself.
          </p>
          <Link href="/contact" className="btn-primary">
            Talk to us
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
