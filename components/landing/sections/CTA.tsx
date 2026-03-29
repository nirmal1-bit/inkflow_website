import { PlayStoreButton } from "../ui";

export function CTA() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center reveal">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-[28px] mb-8 relative"
          style={{
            background: "linear-gradient(135deg,#5B52F0,#312E81)",
            boxShadow: "0 16px 48px rgba(79,70,229,0.35)",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
          <div className="cta-ring" />
        </div>

        <h2 className="font-serif text-5xl lg:text-6xl text-ink leading-[1.1] mb-5">
          Your paper notes.
          <br />
          <span className="shimmer-text">Finally organized.</span>
        </h2>
        <p className="font-sans text-ink/50 text-lg leading-relaxed max-w-xl mx-auto mb-10">
          Download InkFlow for free on Google Play and turn every scribble into
          a structured, alarm-ready task list in seconds.
        </p>

        <a
          href="https://play.google.com/store"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-3 px-8 py-5 rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-sand font-bold text-base shadow-[0_10px_30px_rgba(79,70,229,0.22)] transition-all duration-300 hover:from-[#4338ca] hover:to-[#4f46e5] hover:shadow-[0_18px_42px_rgba(79,70,229,0.32)] hover:-translate-y-1 active:translate-y-0"
        >
          <PlayStoreButton label="Get on Google Play — It's Free" />
        </a>

        <p className="font-mono text-[10px] text-ink/30 tracking-widest mt-6">
          ANDROID ONLY · MORE PLATFORMS COMING SOON
        </p>
      </div>
    </section>
  );
}
