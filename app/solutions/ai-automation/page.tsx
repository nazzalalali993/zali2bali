import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, BookOpen, ShieldAlert } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "AI Automation — Zali2Bali",
  "AI systems that qualify villa booking inquiries in natural language, grounded in a per-client knowledge base, with strict guardrails around payments and complaints.",
  "/solutions/ai-automation"
);

const FEATURES = [
  "Natural language understanding — not keyword matching",
  "Qualification against your dates, party size, and budget criteria",
  "Per-client knowledge base with your policies, rates, and FAQs",
  "Graceful human handoff for anything the AI shouldn't handle alone",
  "No AI improvisation on pricing, availability, or complaints",
];

export default function AIAutomationPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Solutions — AI Automation</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            AI that qualifies bookings, not a chatbot that guesses.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Basic auto-reply handles FAQ. Our AI layer handles the leads that
            need more than a canned response — guests asking complex,
            natural-language questions about dates, pricing, group size, and
            availability.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Villa booking qualification */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="animate-on-scroll">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
                  <Brain size={17} className="text-teal-deep" />
                </div>
                <span className="badge badge-teal">Growth / Scale</span>
              </div>
              <h2 className="text-display-lg text-ink mb-4">
                Villa booking qualification, built for real conversations.
              </h2>
              <div className="flex flex-col gap-4 text-body-md text-subtle">
                <p>
                  The AI layer extracts intent from free-form guest text,
                  qualifies it against your booking criteria, and routes a
                  complete lead brief to your team — dates, party size,
                  budget, and any special requests already extracted.
                </p>
                <p>
                  Staff time goes to conversations that are actually ready
                  to convert, not to manually extracting basic details from
                  every single inquiry that comes in.
                </p>
              </div>
            </div>
            <div className="animate-on-scroll">
              <div className="card-feature">
                <div className="eyebrow mb-4">What&apos;s included</div>
                <ul className="flex flex-col gap-3">
                  {FEATURES.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Brain size={14} className="text-teal-deep mt-0.5 flex-shrink-0" />
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

      {/* Knowledge base RAG */}
      <section className="section-pad bg-paper">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <BookOpen size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Knowledge base RAG approach</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            Every answer is grounded. Nothing is improvised.
          </h2>
          <p className="text-body-md text-subtle mb-4">
            Every client gets a dedicated knowledge base — property details,
            house rules, pricing, cancellation policy, and common FAQs — that
            the AI retrieves from before generating any response. This is a
            retrieval-augmented generation (RAG) approach: the model answers
            from your actual, current documentation, not from general
            training knowledge.
          </p>
          <p className="text-body-md text-subtle">
            If a question falls outside the knowledge base, the system
            hands off to a human rather than guessing. That boundary is
            deliberate — a wrong answer about pricing or availability costs
            more trust than a slightly slower human response.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Guardrails */}
      <section className="section-pad bg-white">
        <div className="container-content max-w-prose mx-auto animate-on-scroll">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center">
              <ShieldAlert size={17} className="text-teal-deep" />
            </div>
            <div className="eyebrow">Guardrails</div>
          </div>
          <h2 className="text-display-md text-ink mb-4">
            AI as copilot. Human as pilot.
          </h2>
          <div className="flex flex-col gap-4 text-body-md text-subtle">
            <p>
              The AI layer never handles payments. It never processes
              refunds, discounts, or price negotiation. Any conversation
              that touches money is routed to a staff member.
            </p>
            <p>
              The AI layer never handles complaints. Guest dissatisfaction
              requires judgment, empathy, and often case-by-case discretion
              that no model should be trusted with unsupervised — those
              conversations are flagged and routed to a human immediately.
            </p>
            <p>
              These aren&apos;t soft preferences — they&apos;re hard rules
              enforced in the workflow logic itself, not just in the AI&apos;s
              instructions.
            </p>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* CTA */}
      <section className="section-pad bg-teal-deep">
        <div className="container-content text-center max-w-xl mx-auto">
          <h2 className="text-display-md text-white mb-4">
            See what AI qualification would look like for your villas.
          </h2>
          <p className="text-body-lg text-white/70 mb-8">
            Book a free audit and we&apos;ll show you real qualification
            examples using your own property details.
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
