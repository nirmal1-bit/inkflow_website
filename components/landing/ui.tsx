import type { ReactNode } from "react";
import { PencilLine } from "lucide-react";

type SectionTitleProps = {
  badge: string;
  title: ReactNode;
  description?: string;
  centered?: boolean;
};

export function SectionTitle({
  badge,
  title,
  description,
  centered = true,
}: SectionTitleProps) {
  return (
    <div className={centered ? "text-center" : "text-left"}>
      <div className="badge mb-4">✦ {badge}</div>
      <h2 className="font-serif text-4xl lg:text-5xl text-ink leading-tight">
        {title}
      </h2>
      {description ? (
        <p className="font-sans text-ink/50 mt-4 max-w-lg mx-auto leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function SectionDivider() {
  return <div className="sep max-w-5xl mx-auto" />;
}

export function LogoMark({ compact = false }: { compact?: boolean }) {
  const size = compact ? "w-8 h-8 rounded-[10px]" : "w-9 h-9 rounded-[12px]";
  const iconSize = compact ? 14 : 18;

  return (
    <div
      className={`${size} flex items-center justify-center relative`}
      style={{
        background: "linear-gradient(135deg,#5B52F0,#312E81)",
        boxShadow: "0 6px 18px rgba(79,70,229,0.35)",
      }}
    >
      <PencilLine size={iconSize} strokeWidth={2.2} className="text-sand" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-accent-light border-2 border-sand" />
    </div>
  );
}

export function PlayStoreButton({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <span className={`group inline-flex items-center gap-3 ${className}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sand shadow-sm ring-1 ring-accent/20 overflow-hidden shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:bg-accent-light group-hover:shadow-[0_10px_20px_rgba(79,70,229,0.22)]">
        <img
          src="/playstore.png"
          alt="Google Play"
          className="h-5 w-5 object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </span>
      <span className="leading-tight transition-transform duration-300 group-hover:translate-x-0.5">
        {label}
      </span>
    </span>
  );
}

export function HeatmapGrid({
  id,
  cols,
  rows,
}: {
  id: string;
  cols: number;
  rows: number;
}) {
  const cells = Array.from({ length: cols * rows }, (_, index) => {
    const active = (index * 17 + (index % 3) * 7 + 3) % 10 > 3;
    const level = (index * 13 + 1) % 4;
    const colors = [
      "rgba(127,184,0,0.15)",
      "rgba(127,184,0,0.4)",
      "rgba(127,184,0,0.7)",
      "#7FB800",
    ];
    return active ? colors[level] : "rgba(26,26,46,0.06)";
  });

  return (
    <div id={id} className="flex flex-wrap gap-[2px] w-full">
      {cells.map((background, index) => (
        <div
          key={`${id}-${index}`}
          className="h-3 w-3 rounded-[2px] flex-shrink-0"
          style={{ background }}
        />
      ))}
    </div>
  );
}
