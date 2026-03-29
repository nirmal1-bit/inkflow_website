import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  Download,
  MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact MoreSpace",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.08),transparent_30%),linear-gradient(180deg,#faf8f5_0%,#f8f7ff_100%)] text-ink px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[34px] border border-accent/10 bg-[rgba(250,248,245,0.9)] shadow-[0_26px_80px_rgba(26,26,46,0.08)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <section className="relative p-6 sm:p-10 lg:p-12 xl:p-14 border-b lg:border-b-0 lg:border-r border-accent/10 bg-[linear-gradient(180deg,rgba(79,70,229,0.12),rgba(250,248,245,0.94))]">
              <div className="absolute -top-28 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-rose-brand/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="badge mb-5">Contact</div>
                <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl leading-tight text-ink max-w-xl">
                  MoreSpace contact.
                  <br />
                  Clean, direct, fast.
                </h1>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/60 leading-relaxed">
                  Official contact page for MoreSpace (Nirmal Chhetri). Reach
                  out for support, feedback, or business inquiries.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <a
                    className="group rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_46px_rgba(79,70,229,0.12)]"
                    href="mailto:morespacenirmal@gmail.com?subject=MoreSpace%20App%20—%20Support"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)] transition-transform duration-300 group-hover:scale-105">
                        <Mail size={20} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Email
                        </p>
                        <p className="mt-1 font-medium text-ink break-all">
                          morespacenirmal@gmail.com
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="group rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_46px_rgba(79,70,229,0.12)]"
                    href="tel:+9779764344777"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)] transition-transform duration-300 group-hover:scale-105">
                        <Phone size={20} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Phone
                        </p>
                        <p className="mt-1 font-medium text-ink">
                          +977 9764344777
                        </p>
                      </div>
                    </div>
                  </a>

                  <a
                    className="group rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/25 hover:shadow-[0_18px_46px_rgba(79,70,229,0.12)]"
                    href="https://www.facebook.com/nirmal.chhetri.785941"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)] transition-transform duration-300 group-hover:scale-105">
                        <Globe size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Facebook
                        </p>
                        <p className="mt-1 font-medium text-ink">
                          Profile link
                        </p>
                      </div>
                    </div>
                  </a>

                  <div className="rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)]">
                        <MapPin size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Location
                        </p>
                        <p className="mt-1 font-medium text-ink">
                          Mid-Baneshwor, Kathmandu, Nepal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="p-6 sm:p-10 lg:p-12 xl:p-14 bg-[linear-gradient(180deg,rgba(238,242,255,0.62),rgba(250,248,245,0.96))]">
              <div className="sticky top-6 space-y-6">
                <div className="rounded-[28px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-6 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                    Quick actions
                  </p>
                  <div className="mt-5 flex flex-col gap-3">
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-5 py-4 text-sm font-semibold text-sand shadow-[0_14px_32px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca]"
                      href="mailto:morespacenirmal@gmail.com?subject=MoreSpace%20App%20—%20Inquiry"
                    >
                      <MessageCircle size={16} />
                      Email me
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent/15 bg-accent-soft px-5 py-4 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-[rgba(79,70,229,0.12)]"
                      href="tel:+9779764344777"
                    >
                      <Phone size={16} />
                      Call / WhatsApp
                    </a>
                    <a
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-accent/15 bg-accent-soft px-5 py-4 text-sm font-semibold text-accent transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-[rgba(79,70,229,0.12)]"
                      href="data:text/vcard;charset=utf-8,BEGIN%3AVCARD%0AVERSION%3A3.0%0AFN%3ANirmal%20Chhetri%0AORG%3AMoreSpace%0AEMAIL%3Amorespacenirmal%40gmail.com%0ATEL%3A%2B9779764344777%0AADR%3A%3B%3BMid-Baneshwor%3BKathmandu%3B%3B%3ANepal%0AEND%3AVCARD"
                      download="MoreSpace-Nirmal.vcf"
                    >
                      <Download size={16} />
                      Download vCard
                    </a>
                  </div>
                </div>

                <div className="rounded-[28px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-6 shadow-[0_12px_36px_rgba(79,70,229,0.06)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                    Notes
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/70 list-disc pl-5">
                    <li>This is the official contact page for MoreSpace.</li>
                    <li>Email and phone are provided for direct support.</li>
                    <li>
                      Social links are included as secondary contact options.
                    </li>
                  </ul>
                </div>

                <div className="rounded-[28px] border border-accent/10 bg-[linear-gradient(135deg,rgba(79,70,229,0.12),rgba(250,248,245,0.92))] p-6 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                    Developer
                  </p>
                  <p className="mt-3 text-2xl font-serif text-ink">
                    Nirmal Chhetri
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink/65">
                    MoreSpace is built to keep contact simple, fast, and easy to
                    verify.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
