import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Terms of Service — Zali2Bali",
  "Zali2Bali terms of service for automation, CRM, and AI system delivery.",
  "/legal/terms"
);

export default function TermsPage() {
  return (
    <section className="pt-36 pb-24 bg-paper">
      <div className="container-content max-w-prose">
        <div className="eyebrow mb-5">Legal</div>
        <h1 className="text-display-lg text-ink mb-3">Terms of Service</h1>
        <p className="text-sm text-subtle mb-12">Last updated: January 2025</p>

        <div className="flex flex-col gap-8 text-body-md text-subtle">
          {[
            {
              title: "Services",
              body: "Zali2Bali provides AI automation, WhatsApp integration, CRM implementation, and related digital services as described in each client's signed proposal. The specific scope, deliverables, and timeline are defined per engagement.",
            },
            {
              title: "Payment terms",
              body: "Setup fees are billed 50% on contract signing and 50% on system launch. Monthly retainers are billed in advance from the launch date. All fees are in USD. Payment is due within 7 days of invoice.",
            },
            {
              title: "Cancellation",
              body: "Monthly retainers may be cancelled with 30 days' written notice. Setup fees are non-refundable after the build has commenced. Work completed prior to cancellation is payable in full.",
            },
            {
              title: "Intellectual property",
              body: "Zali2Bali retains ownership of proprietary methodologies, frameworks, and reusable system components. Clients own their own data, brand assets, and customer information. Custom workflows built specifically for a client are considered a deliverable and become the client's property on final payment.",
            },
            {
              title: "Third-party platforms",
              body: "Service delivery depends on third-party platforms including GoHighLevel, WhatsApp Business API, and Meta. Zali2Bali is not responsible for downtime, policy changes, or service interruptions caused by these platforms. We will notify clients promptly of any platform-level changes that affect their system.",
            },
            {
              title: "Confidentiality",
              body: "Both parties agree to keep confidential all non-public information shared in the course of the engagement. Client business data is never used for Zali2Bali's own marketing or shared with third parties outside the agreed service scope.",
            },
            {
              title: "Limitation of liability",
              body: "Zali2Bali's liability is limited to the total fees paid in the three months preceding a claim. We are not liable for indirect or consequential damages, including lost bookings or revenue that cannot be directly attributed to a verifiable system failure on our part.",
            },
            {
              title: "Governing law",
              body: "These terms are governed by the laws of Indonesia. Disputes will first be addressed through good-faith negotiation before any formal proceedings.",
            },
            {
              title: "Contact",
              body: "Legal or contractual questions: legal@zali2bali.com",
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-display-sm text-ink mb-3">{section.title}</h2>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
