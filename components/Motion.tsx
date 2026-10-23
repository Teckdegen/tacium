"use client";

import { useEffect } from "react";

// Everything below the hero fades up as it scrolls into view, staggered
// among siblings. Stats count up from zero the first time they appear.
const REVEAL = [
  ".section .title", ".section .sub", ".row-head", ".card", ".case", ".stats > div",
  ".eyebrow", ".cmp", ".flow-card", ".cmd", ".works-with", ".feat-list li", ".feat-stage", ".faq details",
  ".cta h2", ".cta p", ".cta .cmd", ".footer-col", ".footer-brand",
].join(",");

function countUp(el: HTMLElement) {
  const target = el.textContent ?? "";
  const start = performance.now();
  const dur = 1200;
  const tick = (now: number) => {
    const p = Math.min(1, (now - start) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = target.replace(/\d+/g, (n) => String(Math.round(Number(n) * eased)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const header = document.querySelector(".nav");
    const onScroll = () => header?.classList.toggle("scrolled", window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (reduced) return () => window.removeEventListener("scroll", onScroll);

    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL));
    els.forEach((el) => {
      const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
      const idx = Math.max(0, siblings.indexOf(el));
      el.style.setProperty("--d", `${Math.min(idx, 6) * 80}ms`);
      el.classList.add("reveal");
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("in");
          el.querySelectorAll<HTMLElement>("b[data-count]").forEach(countUp);
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
