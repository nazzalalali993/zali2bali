"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Company", href: "/company" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "AI Automation", href: "/solutions#ai-automation", desc: "Intelligent systems that qualify and respond" },
      { label: "WhatsApp Systems", href: "/solutions#whatsapp", desc: "Instant guest response, automated" },
      { label: "CRM & Pipelines", href: "/solutions#crm", desc: "Unified lead tracking across channels" },
      { label: "Lead Generation", href: "/solutions#lead-generation", desc: "Direct booking growth systems" },
    ],
  },
  { label: "Technology", href: "/technology" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        scrolled
          ? "bg-paper/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-teal-deep flex items-center justify-center flex-shrink-0 transition-transform duration-150 group-hover:scale-105">
              <span className="text-white font-bold text-sm tracking-tight">Z2</span>
            </div>
            <span className="font-semibold text-base tracking-tight text-ink">
              Zali2Bali
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative">
                  <button
                    className={cn(
                      "flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                      openDropdown === link.label
                        ? "text-teal-deep bg-teal-mist"
                        : "text-subtle hover:text-ink hover:bg-mist"
                    )}
                    onClick={() =>
                      setOpenDropdown(
                        openDropdown === link.label ? null : link.label
                      )
                    }
                    onBlur={() =>
                      setTimeout(() => setOpenDropdown(null), 150)
                    }
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={cn(
                        "transition-transform duration-150",
                        openDropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-2 w-72 bg-white border border-border rounded-xl shadow-lg p-2 z-50">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex flex-col gap-0.5 px-3 py-2.5 rounded-lg hover:bg-teal-mist group transition-colors"
                        >
                          <span className="text-sm font-medium text-ink group-hover:text-teal-deep">
                            {child.label}
                          </span>
                          <span className="text-xs text-subtle">{child.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 rounded-md text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-teal-deep bg-teal-mist"
                      : "text-subtle hover:text-ink hover:bg-mist"
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-subtle hover:text-ink transition-colors"
            >
              Book audit
            </Link>
            <Link href="/contact" className="btn-primary text-sm py-2 px-4">
              Get started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-subtle hover:text-ink hover:bg-mist transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-paper border-t border-border">
          <div className="container-content py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className={cn(
                    "block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "text-teal-deep bg-teal-mist"
                      : "text-ink hover:bg-mist"
                  )}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-3 mt-1 flex flex-col gap-0.5">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 rounded-md text-sm text-subtle hover:text-ink hover:bg-mist transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2">
              <Link href="/contact" className="btn-primary justify-center">
                Book a Free Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
