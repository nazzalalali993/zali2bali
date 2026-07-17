import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageSquare, BarChart3, Clock, Globe, Target } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Solutions — Zali2Bali",
  "WhatsApp automation, CRM pipelines, AI lead qualification, and direct booking growth systems built specifically for Bali villa management companies.",
  "/solutions"
);

const SOLUTIONS = [
  {
    id: "whatsapp",
    icon: MessageSquare,
    tag: "Core",
    title: "WhatsApp Automation",
    headline: "Instant response. Every inquiry. Every hour.",
    body: [
      "The WhatsApp Business app is a chat tool, not a booking system. It has no automation, no routing, and no visibility into which conversations become revenue.",
      "Zali2Bali builds on the official WhatsApp Business API — the same underlying platform, with automation and CRM capabilities layered on top. Guests message the same number they already have. The experience from the guest's side doesn't change. The experience on your end changes entirely.",
    ],
    features: [
      "Instant auto-reply to every inquiry — 24/7, no missed messages",
      "FAQ handling for pricing, availability, and house rules",
      "Multi-agent routing to the right staff member",
      "Booking confirmation and pre-arrival sequences",
      "Post-stay review request automation",
    ],
    tiers: "Foundation / Growth / Scale",
  },
  {
    id: "crm",
    icon: BarChart3,
    tag: "Core",
    title: "CRM & Lead Pipelines",
    headline: "Every inquiry in one place. Nothing falls through.",
    body: [
      "WhatsApp. Instagram DMs. Website contact forms. They're all different channels producing the same business problem: leads getting lost across three different apps, with no visibility into what's working.",
      "We build a unified CRM pipeline that pulls every inquiry source into one dashboard — so your team sees every lead, tracks every conversation, and never manually wonders whether someone followed up.",
    ],
    features: [
      "Unified inbox: WhatsApp + Instagram + website forms",
      "Visual pipeline: New → Qualified → Quote sent → Booked → Stayed",
      "Automated stage progression based on conversation events",
      "Monthly performance report: response time, conversion, volume",
      "Staff task assignment and notification automation",
    ],
    tiers: "Foundation / Growth / Scale",
  },
  {
    id: "ai-automation",
    icon: Clock,
    tag: "Growth / Scale",
    title: "AI Lead Qualification",
    headline: "Your team only handles guests who are ready to book.",
    body: [
      "Basic auto-reply handles FAQ. AI qualification handles the leads that need more than a canned response — guests asking complex questions about dates, pricing, group size, and availability in natural language.",
      "The AI layer extracts intent, qualifies against your booking criteria, and routes a complete lead brief to your team. Staff time goes to conversations that are actually ready to convert, not to extracting basic details from every inquiry.",
    ],
    features: [
      "Natural language understanding — not keyword matching",
      "Qualification against dates, party size, and budget",
      "Per-client knowledge base with your policies, rates, and FAQs",
      "Graceful human handoff for anything the AI shouldn't handle alone",
      "No AI improvisation on pricing, availability, or complaints",
    ],
    tiers: "Growth / Scale",
  },
  {
    id: "lead-generation",
    icon: Target,
    tag: "Scale",
    title: "Direct Booking Growth",
    headline: "Less OTA dependence. More direct revenue.",
    body: [
      "OTAs take 15–25% commission on every booking. A villa booking at $280/night through an OTA generates $210–238 in your pocket. The same booking through your own direct channel generates $280.",
      "The Scale tier includes paid lead generation (Meta and Google Ads) and a custom booking-enabled website, designed to build a direct channel alongside, not instead of, your OTA presence.",
    ],
    features: [
      "Meta Ads campaigns targeting villa-seeking travelers",
      "Google Ads for high-intent search terms",
      "Custom booking website integrated with the CRM and automation system",
      "SEO-optimized villa pages to reduce long-term paid spend",
      "Performance reporting: cost-per-booking vs OTA commission comparison",
    ],
    tiers: "Scale",
  },
  {
    id: "web",
    icon: Globe,
    tag: "Add-on",
    title: "Booking Website",
    headline: "A website that's actually part of the booking system.",
    body: [
      "Most villa websites are digital brochures — they show photos and then send guests to an OTA to book. That's a $40–70 per night leakage on every booking they generate.",
      "We build booking-enabled websites integrated directly into the CRM and WhatsApp automation — so a guest who finds you through Google can book, get a confirmation, receive pre-arrival communication, and be followed up post-stay, all without leaving your system.",
    ],
    features: [
      "Built in GoHighLevel's website builder — one platform, not two",
      "Integrated directly with the CRM pipeline and automation",
      "Property portfolio pages optimized for search",
      "Direct inquiry form feeding into WhatsApp automation",
      "Fast-loading globally via Cloudflare CDN",
    ],
    tiers: "Scale / Add-on",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Solutions</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            Systems that convert inquiries into bookings.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Every solution is built from the same foundation: your guests
            already know how to use WhatsApp. We make your operation capable
            of handling what that WhatsApp number generates.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Solutions */}
      {SOLUTIONS.map((sol, i) => {
        const Icon = sol.icon;
        return (
          <div key={sol.id}>
            <section id={sol.id} className={`section-pad ${i % 2 === 0 ? "bg-white" : "bg-paper"}`}>
              <div className="container-content">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div className="animate-on-scroll">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                        <Icon size={17} className="text-teal-deep" />
                      </div>
                      <span className="badge badge-teal">{sol.tag}</span>
                    </div>
                    <h2 className="text-display-md text-ink mb-3">{sol.title}</h2>
                    <p className="text-display-sm text-subtle mb-6" style={{ fontWeight: 400 }}>
                      {sol.headline}
                    </p>
                    {sol.body.map((para, j) => (
                      <p key={j} className="text-body-md text-subtle mb-4 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="animate-on-scroll">
                    <div className="card-feature">
                      <div className="eyebrow mb-4">What&apos;s included</div>
                      <ul className="flex flex-col gap-3 mb-6">
                        {sol.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5 text-sm">
                            <Zap size={14} className="text-teal-deep mt-0.5 flex-shrink-0" />
                            <span className="text-ink">{f}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="pt-4 border-t border-border">
                        <span className="text-xs text-subtle">Available in: </span>
                        <span className="text-xs font-medium text-teal-deep">{sol.tiers}</span>
                      </div>
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
            See which solution fits your operation.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a free audit and we&apos;ll map your current process, calculate
            what slow response is costing you, and recommend the right tier.
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

function Zap({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
