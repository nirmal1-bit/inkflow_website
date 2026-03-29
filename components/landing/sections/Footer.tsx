import { LogoMark } from "../ui";

export function Footer() {
  return (
    <footer className="border-t border-accent/10 py-12 px-6 bg-[rgba(248,247,255,0.65)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2.5">
          <LogoMark compact />
          <span className="font-serif text-lg">
            <span className="text-accent">Ink</span>
            <span className="text-ink">List</span>
          </span>
        </a>

        <p className="font-sans text-sm text-ink/45">
          Digitize your handwritten life.
        </p>

        <div className="flex items-center gap-6 font-sans text-sm text-ink/45">
          <a href="/contact" className="hover:text-accent transition-colors">
            Contact
          </a>
          <a
            href="/deleteAccount"
            className="hover:text-accent transition-colors"
          >
            Delete Account
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
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noreferrer"
            className="hover:text-accent transition-colors"
          >
            Play Store
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-ink/5 text-center">
        <p className="font-mono text-[10px] text-ink/25 tracking-widest">
          © 2025 INKLIST. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
}
