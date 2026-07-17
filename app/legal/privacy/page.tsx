import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Privacy Policy — Zali2Bali",
  "Zali2Bali privacy policy — how we collect, use, and protect personal information.",
  "/legal/privacy"
);

export default function PrivacyPage() {
  return (
    <section className="pt-36 pb-24 bg-paper">
      <div className="container-content max-w-prose">
        <div className="eyebrow mb-5">Legal</div>
        <h1 className="text-display-lg text-ink mb-3">Privacy Policy</h1>
        <p className="text-sm text-subtle mb-12">Last updated: January 2025</p>

        <div className="prose-content flex flex-col gap-8 text-body-md text-subtle">
          <section>
            <h2 className="text-display-sm text-ink mb-3">Overview</h2>
            <p>
              Zali2Bali (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates zali2bali.com. This policy
              describes what information we collect, how we use it, and the
              choices you have regarding your information.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Information we collect</h2>
            <p className="mb-3">
              <strong className="text-ink">Information you provide:</strong> When
              you contact us through our website or book an audit, we collect
              your name, email address, WhatsApp number, company name, and any
              additional details you include in your message.
            </p>
            <p>
              <strong className="text-ink">Usage data:</strong> We use Cloudflare
              Analytics, a privacy-friendly analytics tool that does not use
              cookies and does not track individual users across sites.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">How we use your information</h2>
            <ul className="list-disc list-inside flex flex-col gap-2 ml-2">
              <li>To respond to your audit request and follow up on our conversation</li>
              <li>To send the proposal and any follow-up communications you requested</li>
              <li>To improve our website and services based on aggregate usage patterns</li>
            </ul>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Data sharing</h2>
            <p>
              We do not sell, rent, or share your personal information with third
              parties for marketing purposes. We may use service providers (such
              as GoHighLevel for CRM) to process information on our behalf, and
              these providers are bound by confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Client data</h2>
            <p>
              Data belonging to your guests and customers that we access in the
              course of building your automation system is processed solely to
              deliver the agreed service. It is never used for Zali2Bali&apos;s own
              marketing or shared with any third party outside the agreed service
              scope.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your
              personal information by contacting us at{" "}
              <a href="mailto:privacy@zali2bali.com" className="text-teal-deep hover:underline">
                privacy@zali2bali.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Contact</h2>
            <p>
              Questions about this policy:{" "}
              <a href="mailto:privacy@zali2bali.com" className="text-teal-deep hover:underline">
                privacy@zali2bali.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
