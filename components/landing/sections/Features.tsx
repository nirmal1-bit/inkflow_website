import { Activity, Bell, Camera, LayoutGrid, UserCheck, Zap } from "lucide-react";
import { features } from "../data";
import { SectionTitle } from "../ui";

const icons = {
  camera: Camera,
  zap: Zap,
  "layout-grid": LayoutGrid,
  bell: Bell,
  activity: Activity,
  "user-check": UserCheck,
} as const;

export function Features() {
  return (
    <section id="features" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <SectionTitle
          badge="Features"
          title={<>Everything your notes<br /><span className="grad">deserve.</span></>}
          description="Built for the way your brain actually works — messy, fast, and always on the move."
        />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((feature, index) => {
          const Icon = icons[feature.icon as keyof typeof icons];
          return (
            <article key={feature.title} className="feat-card p-7 reveal" style={{ animationDelay: `${index * 50}ms` }}>
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${
                  feature.tone === "accent-soft"
                    ? "bg-accent-soft"
                    : feature.tone === "rose"
                      ? "bg-[rgba(232,93,138,0.1)]"
                      : feature.tone === "green"
                        ? "bg-[rgba(127,184,0,0.1)]"
                        : feature.tone === "amber"
                          ? "bg-amber-50"
                          : feature.tone === "indigo"
                            ? "bg-[rgba(99,102,241,0.1)]"
                            : "bg-[rgba(26,26,46,0.06)]"
                }`}
              >
                <Icon size={20} className={feature.iconColor} />
              </div>
              <h3 className="font-serif text-xl text-ink mb-2">{feature.title}</h3>
              <p className="font-sans text-sm text-ink/50 leading-relaxed">{feature.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
