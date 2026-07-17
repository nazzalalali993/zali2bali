import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata(
  "Careers — Zali2Bali",
  "Join Zali2Bali. We're building AI automation infrastructure for Bali's tourism and hospitality industry.",
  "/careers"
);

const FUTURE_ROLES = [
  {
    title: "Business Development Manager",
    type: "Full-time · Bali, Indonesia",
    desc: "Own the full client-acquisition motion — prospecting, outreach, discovery calls, proposal coordination, and referral generation. Deep familiarity with Bali's villa management ecosystem preferred.",
  },
  {
    title: "Technical Delivery Lead",
    type: "Full-time · Bali, Indonesia · Remote",
    desc: "Own the technical delivery of client automation systems — GoHighLevel configuration, WhatsApp BSP integration, AI workflow design, and QA. Experience with no-code/low-code automation platforms required.",
  },
];

export default function CareersPage() {
  return (
    <>
      <section className="pt-36 pb-20 bg-paper">
        <div className="container-content max-w-prose">
          <div className="eyebrow mb-5 animate-on-scroll">Careers</div>
          <h1 className="text-display-xl text-ink mb-6 animate-on-scroll">
            We&apos;re early.
            <br />
            Join before it&apos;s obvious.
          </h1>
          <p className="text-body-xl text-subtle animate-on-scroll">
            Zali2Bali is pre-revenue and building fast. The first hires here
            get meaningful equity-adjacent upside, real ownership of entire
            functions, and a front-row seat to building something in one of
            the world&apos;s most distinctive markets.
          </p>
        </div>
      </section>

      <hr className="section-divider" />

      <section className="section-pad bg-white">
        <div className="container-content">
          <div className="max-w-prose mb-12 animate-on-scroll">
            <div className="eyebrow mb-4">Open roles</div>
            <h2 className="text-display-md text-ink">
              No open positions right now.
            </h2>
            <p className="text-body-md text-subtle mt-4">
              We hire when the revenue supports it — not before. The two roles
              below are what we&apos;re building toward. If you think you&apos;re one of
              them, reach out anyway.
            </p>
          </div>

          <div className="stagger-children flex flex-col gap-5 max-w-2xl">
            {FUTURE_ROLES.map((role) => (
              <div key={role.title} className="card-feature">
                <div className="badge badge-neutral mb-4">Coming soon</div>
                <h3 className="font-semibold text-ink text-lg mb-1">{role.title}</h3>
                <p className="text-sm text-subtle mb-3">{role.type}</p>
                <p className="text-sm text-subtle leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 animate-on-scroll">
            <p className="text-body-md text-subtle mb-4">
              Want to be considered early? Send us a note.
            </p>
            <Link href="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
