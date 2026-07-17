import type { Metadata } from "next";
import { Clock } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import EmailCapture from "@/components/sections/email-capture";

export const metadata: Metadata = pageMetadata(
  "Case Studies — Zali2Bali",
  "Zali2Bali is onboarding its first Founding Partners. Case studies with real booking-recovery results are coming in Q2 2025 — get notified when they're published.",
  "/case-studies"
);

export default function CaseStudiesPage() {
  return (
    <section className="pt-36 pb-28 bg-paper">
      <div className="container-content max-w-xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-teal-ghost flex items-center justify-center mx-auto mb-6 animate-on-scroll">
          <Clock size={22} className="text-teal-deep" />
        </div>
        <div className="eyebrow mb-5 animate-on-scroll">Case Studies</div>
        <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
          We are onboarding our first Founding Partners.
        </h1>
        <p className="text-body-xl text-subtle mb-10 animate-on-scroll">
          Case studies coming in Q2 2025. Real response-time, conversion,
          and booking-recovery numbers from the first five villa management
          companies running the Booking Recovery System.
        </p>
        <div className="card-feature animate-on-scroll">
          <h2 className="font-semibold text-ink mb-1">Get notified when results are published</h2>
          <p className="text-sm text-subtle mb-6">
            No spam — just an email when the first case studies go live.
          </p>
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}
