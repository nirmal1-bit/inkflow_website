"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { LogoMark, PlayStoreButton } from "../ui";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 nav-glass border-b border-black/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark />
          <span className="font-serif text-xl tracking-tight">
            <span className="text-accent">Ink</span>
            <span className="text-ink">List</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-ink/60">
          <a href="/contact" className="hover:text-accent transition-colors">
            Contact
          </a>
          <a
            href="/privacyPolicy"
            className="hover:text-accent transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/termsConditions"
            className="hover:text-accent transition-colors"
          >
            Terms &amp; Conditions
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-sand text-sm font-semibold shadow-[0_8px_24px_rgba(79,70,229,0.22)] transition-all duration-300 hover:from-[#4338ca] hover:to-[#4f46e5] hover:shadow-[0_14px_34px_rgba(79,70,229,0.32)] hover:-translate-y-0.5"
          >
            <PlayStoreButton label="Get on Play Store" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="md:hidden p-2 rounded-lg hover:bg-accent/10 hover:text-accent"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={`${open ? "flex" : "hidden"} md:hidden flex-col px-6 pb-4 gap-3 font-sans text-sm font-medium`}
      >
        <a
          href="/contact"
          onClick={() => setOpen(false)}
          className="py-2 text-ink/70"
        >
          Contact
        </a>
        <a
          href="/privacyPolicy"
          onClick={() => setOpen(false)}
          className="py-2 text-ink/70"
        >
          Privacy Policy
        </a>
        <a
          href="/termsConditions"
          onClick={() => setOpen(false)}
          className="py-2 text-ink/70"
        >
          Terms &amp; Conditions
        </a>
        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer"
          className="group mt-2 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-sand font-semibold shadow-[0_8px_24px_rgba(79,70,229,0.22)] transition-all duration-300 hover:from-[#4338ca] hover:to-[#4f46e5] hover:shadow-[0_14px_34px_rgba(79,70,229,0.32)]"
        >
          <PlayStoreButton label="Get on Play Store" />
        </a>
      </div>
    </nav>
  );
}
