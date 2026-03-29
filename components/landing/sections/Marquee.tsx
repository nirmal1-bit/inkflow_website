import { stripItems } from "../data";
import { SectionDivider } from "../ui";

function Strip() {
  const items = [...stripItems, ...stripItems];

  return (
    <div className="flex items-center gap-8 whitespace-nowrap">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="font-mono text-xs text-ink/40 tracking-widest uppercase whitespace-nowrap flex items-center gap-8">
          <span>{item}</span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/30 flex-shrink-0" />
        </span>
      ))}
    </div>
  );
}

export function Marquee() {
  return (
    <>
      <SectionDivider />
      <div className="py-6 overflow-hidden" style={{ background: "rgba(79,70,229,0.04)" }}>
        <div className="strip-scroll">
          <Strip />
          <Strip />
        </div>
      </div>
      <SectionDivider />
    </>
  );
}
