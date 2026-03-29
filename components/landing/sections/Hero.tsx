import { ArrowRight, Bell, Clock3 } from "lucide-react";
import { HeatmapGrid, PlayStoreButton } from "../ui";

function TaskCard({
  title,
  subtitle,
  dot,
  accent,
  icon,
}: {
  title: string;
  subtitle: string;
  dot: string;
  accent?: string;
  icon?: "clock" | "bell";
}) {
  return (
    <div className="rounded-xl px-3 py-2.5 border border-accent/10 shadow-sm flex items-center gap-2 bg-[rgba(248,247,255,0.9)] hover:bg-accent-soft/80 hover:-translate-y-0.5 hover:shadow-md">
      <div className="task-dot" style={{ background: dot }} />
      <div className="flex-1 min-w-0">
        <p className="font-sans text-[10px] font-semibold text-ink truncate">
          {title}
        </p>
        <p className="font-mono text-[7px] text-ink/40 tracking-wider">
          {subtitle}
        </p>
      </div>
      {icon ? (
        <div
          className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 ${accent === "rose" ? "bg-red-50" : "bg-accent/10"}`}
        >
          {icon === "clock" ? (
            <Clock3 size={8} className="text-accent" strokeWidth={2.5} />
          ) : (
            <Bell size={8} className="text-red-500" strokeWidth={2.5} />
          )}
        </div>
      ) : null}
    </div>
  );
}

function HabitGrid() {
  return <HeatmapGrid id="mini-grid" cols={13} rows={4} />;
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full blob"
        style={{
          background:
            "radial-gradient(circle, rgba(79,70,229,0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blob2"
        style={{
          background:
            "radial-gradient(circle, rgba(232,93,138,0.09) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 ruled opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center py-20">
        <div className="flex flex-col gap-6">
          <div className="badge" id="hero-badge">
            <span>✦</span> From Paper to Action
          </div>

          <h1
            id="hero-h1"
            className="font-serif text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-ink"
          >
            Digitize your
            <br />
            <span className="shimmer-text">handwritten</span>
            <br />
            life.
          </h1>

          <p
            id="hero-p"
            className="font-sans text-lg text-ink/55 leading-relaxed max-w-md"
          >
            Snap a photo of any handwritten note. Inklist&apos;s AI extracts
            every task, sets alarms, and organizes them by category — instantly.
          </p>

          <div id="hero-cta" className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-sand font-bold text-sm shadow-[0_10px_30px_rgba(79,70,229,0.22)] transition-all duration-300 hover:from-[#4338ca] hover:to-[#4f46e5] hover:shadow-[0_18px_42px_rgba(79,70,229,0.32)] hover:-translate-y-1"
            >
              <PlayStoreButton label="Download on Play Store" />
            </a>
            <a
              href="#how"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-2xl border border-accent/20 bg-accent-soft text-accent font-semibold text-sm shadow-[0_8px_22px_rgba(79,70,229,0.08)] transition-all duration-300 hover:border-accent/35 hover:bg-[rgba(79,70,229,0.12)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.14)] hover:-translate-y-0.5"
            >
              See how it works
              <ArrowRight size={16} />
            </a>
          </div>

          <div id="hero-social" className="flex items-center gap-4 pt-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-sand bg-gradient-to-br from-accent to-accent-light" />
              <div className="w-8 h-8 rounded-full border-2 border-sand bg-gradient-to-br from-rose-brand to-pink-400" />
              <div className="w-8 h-8 rounded-full border-2 border-sand bg-gradient-to-br from-green-brand to-emerald-400" />
              <div className="w-8 h-8 rounded-full border-2 border-sand bg-gradient-to-br from-amber-400 to-orange-400" />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-sm">★★★★★</span>
                <span className="font-mono text-xs text-ink/40 ml-1">4.9</span>
              </div>
              <p className="text-xs text-ink/45 font-sans">
                Loved by students &amp; professionals
              </p>
            </div>
          </div>
        </div>

        <div
          id="hero-phone"
          className="flex justify-center items-center relative"
        >
          <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-accent/20 orbit" />
          <div className="absolute w-[440px] h-[440px] rounded-full border border-dashed border-accent/10 orbit-slow" />

          <div className="absolute w-[340px] h-[340px] animate-[orbit_10s_linear_infinite]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
          </div>
          <div className="absolute w-[340px] h-[340px] animate-[orbit_10s_linear_infinite] [animation-delay:-5s]">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-rose-brand shadow-lg shadow-rose-brand/50" />
          </div>

          <div className="phone-shell card-float z-10">
            <div className="phone-notch" />
            <div className="w-full h-full pt-8 pb-4 px-4 flex flex-col gap-3 overflow-hidden bg-[linear-gradient(180deg,#F8F7FF_0%,#EEF2FF_100%)]">
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-6 h-6 rounded-lg flex items-center justify-center soft-pulse"
                    style={{
                      background: "linear-gradient(135deg,#5B52F0,#312E81)",
                    }}
                  >
                    <span className="text-sand text-[10px] font-bold">✒</span>
                  </div>
                  <span className="font-serif text-xs text-ink font-bold">
                    <span className="text-accent">Ink</span>List
                  </span>
                </div>
                <span className="font-mono text-[8px] text-ink/30">
                  9:41 AM
                </span>
              </div>

              <div className="flex items-center gap-1.5 bg-accent/8 border border-accent/15 rounded-full px-2.5 py-1 w-fit mx-auto">
                <div className="w-1.5 h-1.5 rounded-full bg-accent pulse-ring" />
                <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[8px] text-accent font-bold tracking-wider">
                  ⚡ AI sorted 4 tasks
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <TaskCard
                  title="Study for finals exam"
                  subtitle="EDUCATION • 🔴 URGENT"
                  dot="#ef4444"
                  icon="clock"
                />
                <TaskCard
                  title="Client proposal due"
                  subtitle="WORK • 🔴 URGENT"
                  dot="#4F46E5"
                  icon="bell"
                  accent="rose"
                />
                <TaskCard
                  title="Team standup 9:00 AM"
                  subtitle="WORK • 🟡 NORMAL"
                  dot="#8CA0D7"
                />
                <TaskCard
                  title="Buy groceries"
                  subtitle="PERSONAL • 🟢 LOW"
                  dot="#7FB800"
                />
              </div>

              <div className="rounded-xl p-2.5 border border-accent/10 mt-auto bg-[rgba(238,242,255,0.86)]">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-[8px] text-ink/60 font-bold">
                    HABIT ACTIVITY
                  </span>
                  <span className="font-sans text-[8px] text-green-brand font-semibold">
                    🔥 23 day streak
                  </span>
                </div>
                <HabitGrid />
              </div>
            </div>
          </div>

          <div
            className="absolute -left-8 top-16 rounded-2xl shadow-xl border border-accent/10 px-4 py-3 card-float2 hidden lg:block bg-[rgba(248,247,255,0.92)]"
            style={{ maxWidth: 160 }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div className="w-6 h-6 rounded-lg bg-accent-soft flex items-center justify-center text-accent text-xs font-bold">
                AI
              </div>
              <span className="font-sans text-[10px] font-bold text-ink">
                AI Powered
              </span>
            </div>
            <p className="font-sans text-[9px] text-ink/50 leading-relaxed">
              Smart categorization from your handwriting
            </p>
          </div>

          <div
            className="absolute -right-8 bottom-20 rounded-2xl shadow-xl border border-accent/10 px-4 py-3 card-float hidden lg:block bg-[rgba(248,247,255,0.92)]"
            style={{ maxWidth: 160 }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center"
                style={{ background: "rgba(127,184,0,0.1)" }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#7FB800"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <span className="font-sans text-[10px] font-bold text-ink">
                Progress
              </span>
            </div>
            <div className="flex items-end gap-1">
              <span
                className="font-mono text-xl font-bold"
                style={{ color: "#7FB800" }}
              >
                87%
              </span>
              <span className="font-sans text-[9px] text-ink/40 mb-1">
                completion rate
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        id="scroll-ind"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
      >
        <span className="font-mono text-[10px] tracking-widest text-ink">
          SCROLL
        </span>
        <div className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent" />
      </div>
    </section>
  );
}
