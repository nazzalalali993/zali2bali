"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    // Immediately make all animate-on-scroll elements visible
    // This is the primary mechanism - CSS is the fallback
    const makeVisible = () => {
      document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
        el.classList.add("is-visible");
      });
    };

    // Run immediately
    makeVisible();

    // Also run after a small delay for any dynamically added elements
    const timer = setTimeout(makeVisible, 100);

    // Also use IntersectionObserver as progressive enhancement
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
      );

      document.querySelectorAll(".animate-on-scroll, .stagger-children").forEach((el) => {
        observer.observe(el);
      });

      return () => {
        clearTimeout(timer);
        observer.disconnect();
      };
    }

    return () => clearTimeout(timer);
  }, []);

  return null;
}
