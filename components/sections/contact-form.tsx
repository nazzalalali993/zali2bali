"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    company: "",
    whatsapp: "",
    email: "",
    villas: "",
    message: "",
    foundingPartner: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // In production: POST to your API endpoint / Formspree / GHL form
    await new Promise((res) => setTimeout(res, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="card-feature text-center py-12">
        <div className="w-14 h-14 rounded-full bg-teal-ghost flex items-center justify-center mx-auto mb-5">
          <Check size={24} className="text-teal-deep" />
        </div>
        <h2 className="text-display-sm text-ink mb-3">We&apos;ll be in touch.</h2>
        <p className="text-body-md text-subtle">
          Thanks, {form.name.split(" ")[0]}. We typically respond within a few
          hours — usually on WhatsApp, since that&apos;s what we&apos;re building for.
        </p>
      </div>
    );
  }

  return (
    <div className="card-feature">
      <h2 className="font-semibold text-ink text-lg mb-1">Book a free audit</h2>
      <p className="text-sm text-subtle mb-6">
        We&apos;ll reply within 4 hours — often on WhatsApp.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <Field label="Your name" required>
            <input
              type="text"
              required
              placeholder="Wayan Sutama"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </Field>
          <Field label="Company / villa name">
            <input
              type="text"
              placeholder="Villa Matahari Bali"
              value={form.company}
              onChange={(e) => setForm({ ...form, company: e.target.value })}
            />
          </Field>
        </div>

        <Field label="WhatsApp number" required>
          <input
            type="tel"
            required
            placeholder="+62 812 3456 7890"
            value={form.whatsapp}
            onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
          />
        </Field>

        <Field label="Email address">
          <input
            type="email"
            placeholder="hello@yourvilla.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </Field>

        <Field label="How many villas do you manage?">
          <select
            value={form.villas}
            onChange={(e) => setForm({ ...form, villas: e.target.value })}
          >
            <option value="">Select range</option>
            <option value="1-4">1–4 villas</option>
            <option value="5-14">5–14 villas</option>
            <option value="15-39">15–39 villas</option>
            <option value="40+">40+ villas</option>
          </select>
        </Field>

        <Field label="Anything specific you want to cover?">
          <textarea
            rows={3}
            placeholder="e.g. We use WhatsApp but miss overnight inquiries. We manage 12 villas in Seminyak."
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </Field>

        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={form.foundingPartner}
            onChange={(e) => setForm({ ...form, foundingPartner: e.target.checked })}
            className="mt-1 w-4 h-4 accent-teal-deep"
          />
          <span className="text-sm text-subtle leading-relaxed">
            I&apos;m interested in the{" "}
            <strong className="text-ink">Founding Partner program</strong> — 30% off
            setup in exchange for a case study.
          </span>
        </label>

        <button
          type="submit"
          disabled={state === "submitting"}
          className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state === "submitting" ? "Sending..." : "Book my free audit"}
          {state !== "submitting" && <ArrowRight size={16} />}
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-ink">
        {label}
        {required && <span className="text-teal-deep ml-0.5">*</span>}
      </label>
      <style jsx>{`
        div :global(input),
        div :global(select),
        div :global(textarea) {
          width: 100%;
          padding: 0.625rem 0.875rem;
          border: 1px solid #E5E5E3;
          border-radius: 8px;
          font-size: 0.9375rem;
          color: #0A0A0A;
          background: #FAFAF9;
          outline: none;
          transition: border-color 0.15s ease, box-shadow 0.15s ease;
          font-family: inherit;
          resize: vertical;
        }
        div :global(input::placeholder),
        div :global(textarea::placeholder) {
          color: #9CA3AF;
        }
        div :global(input:focus),
        div :global(select:focus),
        div :global(textarea:focus) {
          border-color: #0F6E56;
          box-shadow: 0 0 0 3px rgba(15,110,86,0.1);
        }
        div :global(select) {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236B7280' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 0.875rem center;
          padding-right: 2.5rem;
          cursor: pointer;
        }
      `}</style>
      {children}
    </div>
  );
}
