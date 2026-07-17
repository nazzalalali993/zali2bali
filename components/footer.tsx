import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

const FOOTER_LINKS = {
  Solutions: [
    { label: "AI Automation", href: "/solutions#ai-automation" },
    { label: "WhatsApp Systems", href: "/solutions#whatsapp" },
    { label: "CRM & Pipelines", href: "/solutions#crm" },
    { label: "Lead Generation", href: "/solutions#lead-generation" },
    { label: "Website Development", href: "/services#web" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Technology", href: "/technology" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Service", href: "/legal/terms" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="container-content py-16">
        {/* Top */}
        <div className="flex flex-col lg:flex-row gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:w-72 flex-shrink-0">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-teal-deep flex items-center justify-center">
                <span className="text-white font-bold text-sm tracking-tight">Z2</span>
              </div>
              <span className="font-semibold text-white tracking-tight">Zali2Bali</span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-5 max-w-xs">
              AI automation systems that help Bali&apos;s villa management companies
              recover bookings, respond instantly, and scale without hiring.
            </p>
            <div className="flex flex-col gap-2.5 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <MapPin size={13} />
                <span>Bali, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={13} />
                <a href="mailto:hello@zali2bali.com" className="hover:text-white transition-colors">
                  hello@zali2bali.com
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {Object.entries(FOOTER_LINKS).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">
                  {section}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Zali2Bali. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="live-dot" style={{ width: 6, height: 6 }} />
            <span className="text-xs text-white/30">Systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
