import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, Share2, Workflow } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Automation — Zali2Bali",
  "WhatsApp Business API automation, unified across WhatsApp, Instagram, and website channels, connected with Make.com and n8n workflows.",
  "/solutions/automation"
);

const CHANNELS = [
  { name: "WhatsApp", desc: "Instant auto-reply, FAQ handling, and multi-agent routing on the official Business API." },
  { name: "Instagram", desc: "DMs pulled into the same unified pipeline via the Meta Graph API — no separate inbox." },
  { name: "Website", desc: "Contact forms and booking widgets feed directly into WhatsApp automation and the CRM." },
];

export default function AutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Solutions — Automation</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            One automation layer. Every channel your guests use.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            The WhatsApp Business app is a chat tool, not a booking system.
            We build on the official WhatsApp Business API — the same
            underlying platform, with real automation and CRM capability
            layered on top.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* WhatsApp Business API */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                  <MessageSquare size={17} className="text-teal-deep" />
                </div>
                <span className="badge badge-teal">Core</span>
              </div>
              <h2 className="text-display-lg text-ink mb-4">
                WhatsApp Business API automation.
              </h2>
              <div className="flex flex-col gap-4 text-body-md text-subtle">
                <p>
                  Guests message the same number they already have — the
                  experience on their side doesn&apos;t change. On your end,
                  it changes entirely: instant auto-reply, FAQ handling,
                  multi-agent routing, and booking confirmation sequences,
                  all running automatically, 24/7.
                </p>
                <p>
                  Because it runs on an officially registered Business
                  Solution Provider (BSP), there&apos;s no risk of the account
                  suspension that comes with third-party workaround tools
                  built on the consumer app.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="card-feature">
                <div className="eyebrow mb-4">What&apos;s automated</div>
                <ul className="flex flex-col gap-3">
                  {[
                    "Instant auto-reply to every inquiry — no missed messages",
                    "FAQ handling for pricing, availability, house rules",
                    "Multi-agent routing to the right staff member",
                    "Booking confirmation and pre-arrival sequences",
                    "Post-stay review request automation",
                  ].map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <MessageSquare size={14} className="text-teal-deep mt-0.5 flex-shrink-0" />
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

      {/* Multi-channel */}
      <section className="section-pad bg-paper">
        <div className="container-content">
          <div className="flex items-center gap-3 mb-14 animate-on-scroll">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Share2 size={17} className="text-teal-deep" />
            </div>
            <div>
              <div className="eyebrow mb-1">Multi-channel workflow</div>
              <h2 className="text-display-lg text-ink">WhatsApp + Instagram + website, unified.</h2>
            </div>
          </div>
          <div className="stagger-children grid sm:grid-cols-3 gap-5">
            {CHANNELS.map((ch) => (
              <div key={ch.name} className="card-feature">
                <h3 className="font-semibold text-ink mb-2">{ch.name}</h3>
                <p className="text-sm text-subtle leading-relaxed">{ch.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Make.com / n8n */}
      <section className="section-pad bg-white">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <Workflow size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Make.com / n8n integration</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            The middleware that connects everything else.
          </h2>
          <p className="text-body-md text-subtle mb-4">
            Not every workflow fits cleanly inside GoHighLevel&apos;s native
            automation builder. For complex, cross-platform logic — custom
            webhook endpoints, third-party API calls, or conditional
            branching across systems — we use Make.com or n8n as connective
            middleware.
          </p>
          <p className="text-body-md text-subtle">
            This keeps the core CRM logic clean inside GoHighLevel while
            still supporting the more elaborate integrations that a growing
            operation eventually needs.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            Ready to stop losing bookings overnight?
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a free audit and we&apos;ll map your current inquiry flow
            across every channel you use.
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
