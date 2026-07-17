"use client";

import { useState, useEffect } from "react";
import { Check, CheckCheck } from "lucide-react";

type Message = {
  id: number;
  text: string;
  from: "guest" | "manual" | "auto";
  delay: number;
  time: string;
};

const MESSAGES: Message[] = [
  { id: 1, text: "Hi! Do you have a 2BR villa available for Aug 15–20? What's the rate?", from: "guest", delay: 0, time: "11:47 PM" },
  { id: 2, text: "Thanks for your message! 🌴 We have a beautiful 2BR villa available Aug 15–20. Rate: $280/night. Want me to send photos and more details?", from: "auto", delay: 2000, time: "11:47 PM" },
  { id: 3, text: "Yes please! How many guests maximum?", from: "guest", delay: 4500, time: "11:48 PM" },
  { id: 4, text: "The villa accommodates up to 4 guests comfortably, with a private pool, daily breakfast, and airport transfer included. Shall I hold the dates while you check availability?", from: "auto", delay: 6500, time: "11:48 PM" },
];

export default function WhatsAppDemo() {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  const [typing, setTyping] = useState(false);
  const [responseTime, setResponseTime] = useState<number | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!started) return;

    const timers: ReturnType<typeof setTimeout>[] = [];

    MESSAGES.forEach((msg, idx) => {
      if (msg.from !== "guest") {
        timers.push(
          setTimeout(() => setTyping(true), msg.delay - 800)
        );
      }

      timers.push(
        setTimeout(() => {
          setTyping(false);
          setVisibleMessages((prev) => [...prev, msg.id]);
          if (msg.from === "auto" && idx === 1) {
            setResponseTime(8);
          }
        }, msg.delay)
      );
    });

    return () => timers.forEach(clearTimeout);
  }, [started]);

  return (
    <div className="relative">
      {/* Outer glow */}
      <div className="absolute -inset-4 bg-gradient-to-br from-teal-ghost/40 to-transparent rounded-3xl blur-2xl" />

      <div className="relative bg-white rounded-3xl border border-border shadow-card-hover overflow-hidden max-w-sm mx-auto">
        {/* WhatsApp-style header */}
        <div className="bg-teal-deep px-5 py-4 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-sm font-semibold">VM</span>
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold text-sm">Villa Matahari</div>
            <div className="flex items-center gap-1.5">
              <span className="live-dot" style={{ width: 6, height: 6 }} />
              <span className="text-white/70 text-xs">online</span>
            </div>
          </div>
          <div className="badge badge-live text-xs">
            <span className="live-dot" style={{ width: 5, height: 5 }} />
            Automated
          </div>
        </div>

        {/* Messages area */}
        <div className="bg-[#ECE5DD] px-4 py-5 min-h-[320px] flex flex-col gap-2 relative">
          {/* Watermark */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          {MESSAGES.map((msg) =>
            visibleMessages.includes(msg.id) ? (
              <div
                key={msg.id}
                className={`flex ${msg.from === "guest" ? "justify-start" : "justify-end"} animate-slide-in`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3.5 py-2.5 shadow-sm ${
                    msg.from === "guest"
                      ? "bg-white text-ink rounded-tl-sm"
                      : "bg-[#DCF8C6] text-ink rounded-tr-sm"
                  }`}
                >
                  {msg.from === "auto" && (
                    <div className="text-[10px] font-semibold text-teal-deep mb-1 flex items-center gap-1">
                      <span className="live-dot" style={{ width: 5, height: 5 }} />
                      Automated reply
                    </div>
                  )}
                  <p className="text-[13px] leading-relaxed">{msg.text}</p>
                  <div className="flex items-center justify-end gap-1 mt-1">
                    <span className="text-[10px] text-subtle">{msg.time}</span>
                    {msg.from !== "guest" && (
                      <CheckCheck size={12} className="text-[#4FC3F7]" />
                    )}
                  </div>
                </div>
              </div>
            ) : null
          )}

          {typing && (
            <div className="flex justify-end">
              <div className="bg-[#DCF8C6] rounded-xl rounded-tr-sm px-4 py-3 shadow-sm">
                <div className="flex gap-1 items-center h-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-subtle animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-subtle animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-subtle animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Response time callout */}
        {responseTime !== null && (
          <div className="px-5 py-4 bg-teal-mist border-t border-teal-ghost flex items-center justify-between animate-fade-in">
            <div className="text-xs text-subtle">Automated response time</div>
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-teal-deep" />
              <span className="text-sm font-bold text-teal-deep">
                {responseTime} seconds
              </span>
            </div>
          </div>
        )}

        {/* Manual comparison */}
        <div className="px-5 py-3 bg-red-50 border-t border-red-100 flex items-center justify-between">
          <div className="text-xs text-red-400">Without automation</div>
          <div className="flex items-center gap-1.5">
            <Check size={12} className="text-red-400" />
            <span className="text-sm font-medium text-red-400">~4 hours</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Zap({ size, className }: { size: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}
