import type { ReactNode } from "react";
import { SectionTitle } from "../ui";

function PhoneFrame({
  width,
  height,
  rotate = 0,
  children,
}: {
  width: number;
  height: number;
  rotate?: number;
  children: ReactNode;
}) {
  return (
    <div
      className="phone-shell"
      style={{ width, height, transform: `rotate(${rotate}deg)` }}
    >
      <div
        className="phone-notch"
        style={{ width: width * 0.3, height: Math.max(18, height * 0.05) }}
      />
      {children}
    </div>
  );
}

export function Demo() {
  return (
    <section id="demo" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <SectionTitle
          badge="App Preview"
          title={
            <>
              See InkFlow
              <br />
              <span className="grad">in action.</span>
            </>
          }
          description="A glimpse of the onboarding experience — available now on Google Play."
        />
      </div>

      <div className="flex items-end justify-center gap-6 flex-wrap">
        <div className="reveal-left flex-shrink-0">
          <div
            className="phone-shell"
            style={{ width: 200, height: 400, transform: "rotate(-5deg)" }}
          >
            <div className="phone-notch" style={{ width: 60, height: 20 }} />
            <div className="w-full h-full pt-6 px-4 pb-4 flex flex-col items-center justify-center gap-4 bg-[linear-gradient(160deg,#FAF8F5_55%,#EEF2FF_100%)]">
              <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-dashed border-accent/30 bg-[rgba(79,70,229,0.06)] text-[28px]">
                ✒️
              </div>
              <div className="text-center">
                <p className="font-serif text-[16px] text-ink leading-tight">
                  Digitize your
                  <br />
                  thoughts.
                </p>
                <p className="font-sans text-[9px] text-ink/45 mt-1.5 leading-relaxed">
                  Write freely on paper.
                  <br />
                  Turn it into tasks instantly.
                </p>
              </div>
              <div className="w-full rounded-xl py-2.5 flex items-center justify-center bg-accent text-sand hover:bg-accent-light">
                <span className="font-sans text-[10px] font-bold">
                  Continue ✦
                </span>
              </div>
            </div>
          </div>
          <p className="text-center font-mono text-[9px] text-ink/30 mt-3 tracking-wider">
            WELCOME
          </p>
        </div>

        <div className="reveal flex-shrink-0 z-10">
          <PhoneFrame width={220} height={450}>
            <div className="w-full h-full pt-7 px-4 pb-4 flex flex-col gap-3 bg-[linear-gradient(180deg,#F8F7FF_0%,#EEF2FF_100%)]">
              <div className="flex items-center gap-1.5">
                <div
                  className="w-5 h-5 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg,#5B52F0,#312E81)",
                  }}
                >
                  <span className="text-sand text-[10px] font-bold">✒</span>
                </div>
                <span className="font-serif text-[11px] text-ink">
                  <span className="text-accent">Ink</span>Flow
                </span>
              </div>
              <div className="font-mono text-[8px] tracking-[2px] text-accent/60">
                STEP 02
              </div>
              <p className="font-serif text-[15px] text-ink leading-tight">
                Automatic
                <br />
                structure.
              </p>
              <div className="flex flex-col gap-1.5 mt-1">
                {[
                  ["Study for finals", "EDUCATION", "bg-red-400", "🔴"],
                  ["Client proposal", "WORK", "bg-accent", "🔴"],
                  ["Team standup", "WORK", "bg-[#8CA0D7]", "🟡"],
                  ["Buy groceries", "PERSONAL", "bg-green-brand", "🟢"],
                ].map(([title, category, dotClass, status]) => (
                  <div
                    key={title}
                    className="rounded-xl px-3 py-2 border border-accent/10 bg-[rgba(250,248,245,0.92)] flex items-center gap-2 hover:bg-accent-soft/70 transition-all"
                  >
                    <div
                      className={`w-2 h-2 rounded-full flex-shrink-0 ${dotClass}`}
                    />
                    <div className="flex-1">
                      <p className="font-sans text-[9px] font-semibold text-ink">
                        {title}
                      </p>
                      <p className="font-mono text-[7px] text-ink/40">
                        {category}
                      </p>
                    </div>
                    <span className="text-[8px]">{status}</span>
                  </div>
                ))}
              </div>
              <div className="mt-auto w-full rounded-xl py-2 flex items-center justify-center bg-accent text-sand hover:bg-accent-light">
                <span className="font-sans text-[10px] font-bold">
                  Continue ✦
                </span>
              </div>
            </div>
          </PhoneFrame>
          <p className="text-center font-mono text-[9px] text-ink/30 mt-3 tracking-wider">
            AI ORGANIZE
          </p>
        </div>

        <div className="reveal-right flex-shrink-0">
          <PhoneFrame width={200} height={400} rotate={5}>
            <div className="w-full h-full pt-6 px-4 pb-4 flex flex-col gap-3 bg-[linear-gradient(180deg,#F6FCF0_0%,#EEF6E1_100%)]">
              <div
                className="font-mono text-[8px] tracking-[2px]"
                style={{ color: "#7FB800" }}
              >
                STEP 03
              </div>
              <p className="font-serif text-[14px] text-ink leading-tight">
                Track
                <br />
                consistency.
              </p>
              <div className="rounded-xl p-3 shadow-sm border border-green-brand/15 bg-[rgba(246,252,240,0.9)]">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[8px] text-ink/60">
                    HABIT ACTIVITY
                  </span>
                  <span
                    className="font-sans text-[8px]"
                    style={{ color: "#7FB800" }}
                  >
                    🔥 23 days
                  </span>
                </div>
                <div className="flex flex-wrap gap-[2px]">
                  {Array.from({ length: 44 }, (_, index) => {
                    const colors = [
                      "rgba(127,184,0,0.15)",
                      "rgba(127,184,0,0.4)",
                      "rgba(127,184,0,0.7)",
                      "#7FB800",
                    ];
                    const active = (index * 17 + (index % 3) * 7 + 3) % 10 > 3;
                    const level = (index * 13 + 1) % 4;
                    return (
                      <div
                        key={index}
                        className="h-3 w-3 rounded-[2px] flex-shrink-0"
                        style={{
                          background: active
                            ? colors[level]
                            : "rgba(26,26,46,0.06)",
                        }}
                      />
                    );
                  })}
                </div>
                <div className="flex items-center justify-between mt-3 pt-2 border-t border-ink/8">
                  <div className="text-center">
                    <p
                      className="font-mono text-[13px] font-bold"
                      style={{ color: "#7FB800" }}
                    >
                      23
                    </p>
                    <p className="font-sans text-[7px] text-ink/40">Streak</p>
                  </div>
                  <div className="text-center">
                    <p className="font-mono text-[13px] font-bold text-ink">
                      87%
                    </p>
                    <p className="font-sans text-[7px] text-ink/40">Rate</p>
                  </div>
                  <div className="text-center">
                    <p
                      className="font-mono text-[13px] font-bold"
                      style={{ color: "#E85D8A" }}
                    >
                      142
                    </p>
                    <p className="font-sans text-[7px] text-ink/40">Tasks</p>
                  </div>
                </div>
              </div>
              <div
                className="mt-auto w-full rounded-xl py-2 flex items-center justify-center text-sand"
                style={{ background: "#7FB800" }}
              >
                <span className="font-sans text-[10px] font-bold">
                  Continue ✦
                </span>
              </div>
            </div>
          </PhoneFrame>
          <p className="text-center font-mono text-[9px] text-ink/30 mt-3 tracking-wider">
            HABITS
          </p>
        </div>
      </div>
    </section>
  );
}
