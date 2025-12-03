import portraitImage from "@/assets/cbw-lifestyle.jpg";

export const AboutFounder = () => {
  return (
    <section id="about" className="cbw-section border-t border-border/70 bg-background" aria-label="About Crowned by William">
      <div className="cbw-shell gap-10 lg:grid lg:grid-cols-[1.05fr,0.95fr] lg:items-stretch">
        <div className="relative overflow-hidden border border-border bg-[radial-gradient(circle_at_top,_hsl(var(--surface-highlight))_0,_hsl(var(--background))_55%)] p-6 shadow-elevated-soft md:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_0%,rgba(255,255,255,0.16),transparent_55%)] opacity-80" />
          <div className="relative z-10 space-y-5">
            <p className="cbw-tag">The Founder</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.16em] uppercase">This isn&apos;t about flexing.</h2>

            <p className="text-sm leading-relaxed text-muted-foreground">
              William didn&apos;t set out to build a brand. He set out to solve a problem. In Dallas, where status is worn,
              not spoken, he saw people settling for soulless, mass-produced pieces from factories that didn&apos;t care.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              So he picked up tools. Learned the craft. Started designing pieces that felt like they belonged to a
              person—not a trend cycle. Today, Crowned by William is the private call athletes, founders, and
              tastemakers make when they&apos;re done with average.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Every chain. Every pendant. Every watch. Hand-selected stones. Custom settings. Built to outlast outfits,
              outlast seasons, outlast owners.
            </p>

            <div className="mt-4 space-y-3 text-xs text-muted-foreground">
              <p className="tracking-[0.26em] uppercase text-foreground">Mission</p>
              <p>
                Build pieces that feel inevitable on the person wearing them—luxury that looks like it was always meant to
                be there.
              </p>
            </div>

            <div className="mt-4 grid gap-4 text-xs md:grid-cols-3">
              <div>
                <p className="mb-1 tracking-[0.22em] uppercase text-muted-foreground">Craftsmanship</p>
                <p>Wax molds, hand-setting, microscopic inspections—old-world technique, new-world silhouettes.</p>
              </div>
              <div>
                <p className="mb-1 tracking-[0.22em] uppercase text-muted-foreground">Materials</p>
                <p>18K golds, platinum, conflict-free stones, and moissanite options for clients who prioritize ethics.</p>
              </div>
              <div>
                <p className="mb-1 tracking-[0.22em] uppercase text-muted-foreground">Values</p>
                <p>Quality. Integrity. Exclusivity. One client at a time. One piece at a time.</p>
              </div>
            </div>
          </div>
        </div>

        <aside className="relative mt-6 overflow-hidden border border-border bg-secondary/40 shadow-elevated-soft md:mt-0">
          <img
            src={portraitImage}
            alt="Founder of Crowned by William wearing a diamond timepiece in a tailored suit"
            loading="lazy"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-between px-6 pb-5 pt-10 text-xs text-muted-foreground">
            <div>
              <p className="tracking-[0.26em] uppercase text-foreground">Crowned by William</p>
              <p>Dallas, Texas · By appointment only.</p>
            </div>
            <p className="self-end text-[0.7rem] uppercase tracking-[0.22em] text-gold-soft">Legacy, not labels.</p>
          </div>
        </aside>
      </div>
    </section>
  );
};
