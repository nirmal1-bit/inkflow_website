import { steps } from "../data";
import { SectionTitle } from "../ui";

export function HowItWorks() {
  return (
    <section id="how" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <SectionTitle
          badge="How it works"
          title={
            <>
              Three steps.
              <br />
              <span className="grad">Zero friction.</span>
            </>
          }
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-0">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative pl-14 pb-10 step-line reveal-left"
            >
              <div
                className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg z-10"
                style={{
                  background:
                    step.tone === "accent"
                      ? "#4F46E5"
                      : step.tone === "rose"
                        ? "#E85D8A"
                        : "#7FB800",
                  boxShadow:
                    step.tone === "accent"
                      ? "0 6px 18px rgba(79,70,229,0.3)"
                      : step.tone === "rose"
                        ? "0 6px 18px rgba(232,93,138,0.3)"
                        : "0 6px 18px rgba(127,184,0,0.3)",
                }}
              >
                <span className="font-mono text-sand text-xs font-bold">
                  {step.number}
                </span>
              </div>
              <div>
                <span
                  className="font-mono text-[10px] tracking-[3px] uppercase"
                  style={{
                    color:
                      step.tone === "accent"
                        ? "rgba(79,70,229,0.6)"
                        : step.tone === "rose"
                          ? "#E85D8A"
                          : "#7FB800",
                  }}
                >
                  {step.label}
                </span>
                <h3 className="font-serif text-2xl text-ink mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-ink/50 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center reveal-right" id="scan-mockup">
          <div className="relative" style={{ width: 260, height: 340 }}>
            <div className="absolute inset-0 rounded-3xl shadow-2xl border border-accent/10 overflow-hidden p-[28px_24px] bg-[linear-gradient(180deg,#FAF8F5_0%,#EEF2FF_100%)]">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 27px, rgba(79,70,229,0.08) 28px)",
                  backgroundPosition: "0 28px",
                }}
              />

              <div className="relative z-10 flex flex-col gap-3 mt-2">
                <div className="font-mono text-xs text-ink/70 leading-[27px]">
                  Study for exam tmrw
                </div>
                <div className="font-mono text-xs text-ink/50 leading-[27px]">
                  #urgent call mom 6pm
                </div>
                <div className="font-mono text-xs text-ink/40 leading-[27px]">
                  buy groceries
                </div>
                <div className="font-mono text-xs text-ink/50 leading-[27px]">
                  #alarm team mtg 9am
                </div>
                <div className="font-mono text-xs text-ink/35 leading-[27px]">
                  finish proposal
                </div>
              </div>

              <div className="scan-line absolute inset-x-0" style={{ top: 12 }}>
                <div
                  className="h-[2px] w-full"
                  style={{
                    background:
                      "linear-gradient(90deg,transparent,#4F46E5,#4F46E5,transparent)",
                    boxShadow: "0 0 8px rgba(79,70,229,0.6)",
                  }}
                />
              </div>

              <div
                className="absolute top-3 left-3 w-5 h-5"
                style={{
                  borderTop: "2px solid #4F46E5",
                  borderLeft: "2px solid #4F46E5",
                  borderRadius: "2px 0 0 0",
                }}
              />
              <div
                className="absolute top-3 right-3 w-5 h-5"
                style={{
                  borderTop: "2px solid #4F46E5",
                  borderRight: "2px solid #4F46E5",
                  borderRadius: "0 2px 0 0",
                }}
              />
              <div
                className="absolute bottom-3 left-3 w-5 h-5"
                style={{
                  borderBottom: "2px solid #4F46E5",
                  borderLeft: "2px solid #4F46E5",
                  borderRadius: "0 0 0 2px",
                }}
              />
              <div
                className="absolute bottom-3 right-3 w-5 h-5"
                style={{
                  borderBottom: "2px solid #4F46E5",
                  borderRight: "2px solid #4F46E5",
                  borderRadius: "0 0 2px 0",
                }}
              />
            </div>

            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full px-5 py-2.5 flex items-center gap-2 shadow-xl whitespace-nowrap z-20 bg-accent text-sand">
              <div className="w-2 h-2 rounded-full bg-green-brand animate-pulse" />
              <span className="font-mono text-[10px] font-bold tracking-widest">
                5 TASKS EXTRACTED
              </span>
            </div>

            <div
              className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl -z-10"
              style={{ background: "rgba(79,70,229,0.08)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
