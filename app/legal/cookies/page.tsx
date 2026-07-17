import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Cookies Policy — Zali2Bali",
  "Zali2Bali cookies policy — we use Cloudflare Analytics, a cookie-free, privacy-friendly analytics tool. No tracking cookies are used on this website.",
  "/legal/cookies"
);

export default function CookiesPage() {
  return (
    <section className="pt-36 pb-24 bg-paper">
      <div className="container-content max-w-prose">
        <div className="eyebrow mb-5">Legal</div>
        <h1 className="text-display-lg text-ink mb-3">Cookies Policy</h1>
        <p className="text-sm text-subtle mb-12">Last updated: January 2025</p>

        <div className="prose-content flex flex-col gap-8 text-body-md text-subtle">
          <section>
            <h2 className="text-display-sm text-ink mb-3">Short version</h2>
            <p>
              zali2bali.com does not use tracking cookies. We measure site
              traffic using Cloudflare Web Analytics, which is cookie-free
              by design and does not collect or store any personal data
              about individual visitors.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Cloudflare Analytics</h2>
            <p>
              Cloudflare Web Analytics uses a lightweight JavaScript beacon
              to measure aggregate site performance and traffic — page
              views, load times, and general visitor counts. It does not use
              cookies, does not use any client-side state or persistent
              identifiers, and does not track individual users across
              sessions or across other websites. No cookie consent banner is
              required as a result.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">No tracking cookies</h2>
            <p>
              We do not set advertising cookies, retargeting pixels, or
              cross-site tracking cookies on this website. If that changes
              in the future, this policy will be updated and a consent
              mechanism will be added before any such cookie is set.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Essential functionality</h2>
            <p>
              This site is a static export with no login system and no
              server-side session state, so it does not require essential
              or functional cookies to operate.
            </p>
          </section>

          <section>
            <h2 className="text-display-sm text-ink mb-3">Third-party services</h2>
            <p>
              If you submit an inquiry through our contact form, that
              submission may be processed by GoHighLevel (our CRM provider),
              which is bound by its own privacy and data-handling terms. See
              our{" "}
              <a href="/legal/privacy" className="text-teal-deep hover:underline">
                Privacy Policy
              </a>{" "}
              for details on how form submissions are used.
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
