"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { Marquee } from "./sections/Marquee";
import { Features } from "./sections/Features";
import { HowItWorks } from "./sections/HowItWorks";
import { Demo } from "./sections/Demo";
import { Audience } from "./sections/Audience";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

export function LandingPage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set("#hero-badge", { opacity: 0, y: 20 });
      gsap.set("#hero-h1", { opacity: 0, y: 30 });
      gsap.set("#hero-p", { opacity: 0, y: 20 });
      gsap.set("#hero-cta", { opacity: 0, y: 20 });
      gsap.set("#hero-social", { opacity: 0, y: 16 });
      gsap.set("#hero-phone", { opacity: 0, x: 50 });
      gsap.set("#scroll-ind", { opacity: 0 });

      gsap
        .timeline({ delay: 0.2 })
        .fromTo(
          "#hero-badge",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        )
        .fromTo(
          "#hero-h1",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          "#hero-p",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          "#hero-cta",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          "#hero-social",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          "#hero-phone",
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration: 0.9, ease: "power3.out" },
          "-=0.8",
        )
        .fromTo(
          "#scroll-ind",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2",
        );

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.set(el, { opacity: 0, y: 32 });
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-left").forEach((el) => {
        gsap.set(el, { opacity: 0, x: -40 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-right").forEach((el) => {
        gsap.set(el, { opacity: 0, x: 40 });
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal-scale").forEach((el, index) => {
        gsap.set(el, { opacity: 0, scale: 0.88 });
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((el, index) => {
        gsap.from(el, {
          opacity: 0,
          x: -30,
          duration: 0.6,
          delay: index * 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });

      gsap.to("#scan-mockup", {
        y: -30,
        scrollTrigger: {
          trigger: "#how",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      const onScroll = () => {
        const nav = document.querySelector("nav");
        if (!nav) return;
        nav.style.borderBottomColor =
          window.scrollY > 20 ? "rgba(79,70,229,0.14)" : "rgba(79,70,229,0.08)";
      };

      window.addEventListener("scroll", onScroll);
      window.addEventListener("pageshow", onScroll);
      onScroll();

      requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pageshow", onScroll);
      };
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.05),transparent_30%),linear-gradient(180deg,#faf8f5_0%,#f8f7ff_100%)] text-ink"
    >
      <div className="noise-overlay fixed inset-0 z-0 pointer-events-none" />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Features />
        <div className="sep max-w-5xl mx-auto" />
        <HowItWorks />
        <div className="sep max-w-5xl mx-auto" />
        <Demo />
        <div className="sep max-w-5xl mx-auto" />
        <Audience />
        <div className="sep max-w-5xl mx-auto" />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
