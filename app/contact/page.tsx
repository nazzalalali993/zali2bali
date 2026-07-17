import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import ContactForm from "@/components/sections/contact-form";
import { Clock, MessageSquare, CheckCircle } from "lucide-react";

export const metadata: Metadata = pageMetadata(
  "Book a Free Automation Audit — Zali2Bali",
  "Book a 30-minute Free Automation Audit. We map your current inquiry flow and calculate your missed-booking cost using your own numbers — before you spend anything.",
  "/contact"
);

const WHAT_HAPPENS = [
  { step: "01", title: "We map your current flow", desc: "Walk us through how a guest inquiry arrives and what happens to it. 5 minutes." },
  { step: "02", title: "We calculate your cost", desc: "Using your weekly inquiry volume and average booking value, we quantify what slow response is actually costing you per month." },
  { step: "03", title: "We show you the system", desc: "We describe what a built automation would look like for your specific operation — no generic pitch." },
  { step: "04", title: "You decide", desc: "If it makes sense, we send a proposal within 24 hours. If it doesn't fit, we say so." },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="eyebrow mb-5 animate-on-scroll">Book an audit</div>
              <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
                30 minutes.
                <br />
                Your real numbers.
                <br />
                No pitch until then.
              </h1>
              <p className="text-body-lg text-subtle mb-10 animate-on-scroll">
                The Free Automation Audit is not a sales call. It&apos;s a structured
                conversation that ends with a number — the monthly cost of your
                current response time — calculated using your own inquiry volume
                and booking value. That number is yours regardless of whether you
                sign anything.
              </p>

              <div className="stagger-children flex flex-col gap-5">
                {WHAT_HAPPENS.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-9 h-9 rounded-xl bg-teal-ghost flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold text-teal-deep">{item.step}</span>
                    </div>
                    <div>
                      <div className="font-medium text-ink mb-0.5">{item.title}</div>
                      <div className="text-sm text-subtle">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-5 rounded-xl bg-teal-mist border border-teal-ghost animate-on-scroll">
                <div className="flex items-center gap-2 mb-2">
                  <span className="live-dot" />
                  <span className="text-sm font-medium text-teal-deep">Founding Partner slots available</span>
                </div>
                <p className="text-sm text-subtle">
                  We&apos;re onboarding our first five Founding Partners — 30% off setup
                  in exchange for case study access. If you manage villas in Bali,
                  mention this in your message.
                </p>
              </div>
            </div>

            {/* Right: form */}
            <div className="animate-on-scroll">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <hr className="section-divider" />

      {/* Quick facts */}
      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="stagger-children grid sm:grid-cols-3 gap-8 max-w-3xl">
            {[
              { icon: Clock, label: "30 minutes", sub: "Standard audit length" },
              { icon: MessageSquare, label: "WhatsApp welcome", sub: "Prefer to start on WA? Message us directly." },
              { icon: CheckCircle, label: "No commitment", sub: "The audit is free. The proposal follows only if you want it." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex flex-col gap-2">
                  <Icon size={20} className="text-teal-deep mb-1" />
                  <div className="font-semibold text-ink">{item.label}</div>
                  <div className="text-sm text-subtle">{item.sub}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
