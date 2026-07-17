"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

type FormState = "idle" | "submitting" | "success";

export default function EmailCapture() {
  const [state, setState] = useState<FormState>("idle");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // In production: POST to your API endpoint / Formspree / GHL form
    await new Promise((res) => setTimeout(res, 900));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="flex items-center gap-3 justify-center text-sm text-teal-deep font-medium">
        <Check size={18} />
        <span>You&apos;re on the list — we&apos;ll email you when results are published.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
      <input
        type="email"
        required
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-2.5 rounded-lg border border-border bg-white text-sm text-ink outline-none focus:border-teal-deep transition-colors"
      />
      <button
        type="submit"
        disabled={state === "submitting"}
        className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {state === "submitting" ? "Submitting..." : "Notify me"}
        {state !== "submitting" && <ArrowRight size={16} />}
      </button>
    </form>
  );
}
