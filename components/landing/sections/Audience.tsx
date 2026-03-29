import { audienceCards } from "../data";
import { SectionTitle } from "../ui";

export function Audience() {
  return (
    <section className="py-28 px-6 max-w-6xl mx-auto">
      <div className="reveal mb-16">
        <SectionTitle badge="Who it's for" title={<>Built for real life.</>} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {audienceCards.map((card) => (
          <article key={card.title} className="feat-card p-8 text-center reveal-scale" style={{ borderTop: `3px solid ${card.border}` }}>
            <div className="text-4xl mb-4">{card.emoji}</div>
            <h3 className="font-serif text-xl text-ink mb-2">{card.title}</h3>
            <p className="font-sans text-sm text-ink/50 leading-relaxed">{card.description}</p>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              <span className={`pill text-[10px] font-mono px-3 py-1 font-bold ${card.pillClass}`}>{card.pillLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
