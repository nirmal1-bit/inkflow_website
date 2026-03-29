import type { Metadata } from "next";
import { Mail, Trash2, ShieldAlert, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Account",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(79,70,229,0.08),transparent_30%),linear-gradient(180deg,#faf8f5_0%,#f8f7ff_100%)] text-ink px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-[34px] border border-accent/10 bg-[rgba(250,248,245,0.92)] shadow-[0_26px_80px_rgba(26,26,46,0.08)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <section className="relative p-6 sm:p-10 lg:p-12 xl:p-14 border-b lg:border-b-0 lg:border-r border-accent/10 bg-[linear-gradient(180deg,rgba(79,70,229,0.12),rgba(250,248,245,0.94))]">
              <div className="absolute -top-28 -right-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
              <div className="absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-rose-brand/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="badge mb-5">Account Deletion</div>
                <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl leading-tight text-ink max-w-xl">
                  Delete your account.
                  <br />
                  Remove your data.
                </h1>
                <p className="mt-5 max-w-xl text-base sm:text-lg text-ink/60 leading-relaxed">
                  If you want your InkFlow account and associated data deleted,
                  contact us by email with your registered Google account or
                  used Gmail address and a short deletion request.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)]">
                        <Mail size={20} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Email
                        </p>
                        <a
                          className="mt-1 block font-medium text-ink break-all hover:text-accent transition-colors"
                          href="mailto:morespacenirmal@gmail.com"
                        >
                          morespacenirmal@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[24px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-5 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent text-sand shadow-[0_12px_28px_rgba(79,70,229,0.22)]">
                        <ShieldAlert size={20} />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-ink/40">
                          Response
                        </p>
                        <p className="mt-1 font-medium text-ink">
                          Within a reasonable time frame
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
                    What to include
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/70 list-disc pl-5">
                    <li>
                      Your registered Google account or Gmail email used in the
                      app
                    </li>
                    <li>A short statement requesting account deletion</li>
                    <li>
                      Any relevant details that help identify your account
                    </li>
                  </ul>
                </div>

                <div className="rounded-[28px] border border-accent/10 bg-[rgba(250,248,245,0.92)] p-6 shadow-[0_12px_36px_rgba(79,70,229,0.06)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                    Policy note
                  </p>
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/10 bg-accent-soft p-4 text-sm leading-7 text-ink/70">
                    <FileText size={18} className="mt-1 shrink-0 text-accent" />
                    <p>
                      Data that must be retained for legal or administrative
                      purposes will be kept as described in the Privacy Policy.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-accent/10 bg-[linear-gradient(135deg,rgba(79,70,229,0.12),rgba(250,248,245,0.92))] p-6 shadow-[0_12px_36px_rgba(79,70,229,0.08)]">
                  <p className="text-xs uppercase tracking-[0.24em] text-accent font-semibold">
                    Next step
                  </p>
                  <p className="mt-3 text-2xl font-serif text-ink">
                    Send an email request
                  </p>
                  <p className="mt-2 text-sm leading-7 text-ink/65">
                    We will process your request and delete your account and
                    associated data once verified.
                  </p>
                  <a
                    className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-accent px-5 py-3 text-sm font-semibold text-sand shadow-[0_14px_32px_rgba(79,70,229,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4338ca]"
                    href="mailto:morespacenirmal@gmail.com?subject=InkFlow%20Account%20Deletion%20Request"
                  >
                    <Trash2 size={16} />
                    Request deletion
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
