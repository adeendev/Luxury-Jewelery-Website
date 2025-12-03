import { Button } from "@/components/ui/button";

const metals = ["18K Yellow Gold", "18K Rose Gold", "18K White Gold", "Platinum", "Sterling Silver"];
const stones = ["VVS Diamonds", "VS Diamonds", "SI Diamonds", "Moissanite"];

export const CustomStudio = () => {
  return (
    <section
      id="custom"
      className="cbw-section bg-[radial-gradient(circle_at_top,_hsl(var(--surface-highlight))_0,_hsl(var(--background))_55%)]"
      aria-label="Custom jewelry studio"
    >
      <div className="cbw-shell gap-10 lg:gap-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4 md:max-w-xl">
            <p className="cbw-tag">Custom Studio</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.16em] uppercase">
              Your vision. Our obsession.
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              From inspiration photos to hand-set stones, the Crowned by William studio turns ideas into heirlooms. Five
              deliberate steps. Zero templates. Only pieces built to outlast trends—and owners.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3 text-xs text-muted-foreground">
            <span className="tracking-[0.26em] uppercase">5-step journey</span>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((step) => (
                <span
                  key={step}
                  className={`h-1.5 w-7 ${step === 1 ? "bg-gold-soft" : "bg-secondary"}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-5 rounded-none border border-border bg-secondary/40 p-6 shadow-elevated-soft backdrop-blur md:p-8">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">The Brief</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="vision">
                  Step 1 · Vision
                </label>
                <textarea
                  id="vision"
                  rows={4}
                  placeholder="Tell William what you see: a flooded AP, a signature pendant, a family crest reimagined..."
                  className="min-h-[120px] w-full border border-border bg-background/60 px-3 py-2 text-sm outline-none ring-offset-background placeholder:text-muted-foreground/60 focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="upload">
                  Upload Inspiration
                </label>
                <div className="flex h-full flex-col items-center justify-center border border-dashed border-border/80 bg-background/40 px-3 py-4 text-center text-[0.7rem] text-muted-foreground">
                  <p className="mb-1 tracking-[0.2em] uppercase">Drag &amp; drop</p>
                  <p className="text-xs">Screenshots, saved posts, sketches—anything that tells the story.</p>
                  <Button variant="subtle" size="sm" className="mt-3 text-[0.68rem] uppercase tracking-[0.22em]">
                    Browse files
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid gap-4 pt-3 md:grid-cols-2">
              <div className="space-y-3">
                <p className="cbw-input-label">Step 2 · Metal</p>
                <div className="grid grid-cols-2 gap-2 text-[0.7rem]">
                  {metals.map((metal) => (
                    <button
                      key={metal}
                      type="button"
                      className={`flex items-center justify-between border px-3 py-2 text-left transition-colors hover:border-gold-soft hover:text-foreground ${
                        metal === "18K White Gold"
                          ? "border-gold-soft bg-secondary/60 text-foreground"
                          : "border-border bg-background/60 text-muted-foreground"
                      }`}
                    >
                      <span>{metal}</span>
                      {metal === "18K White Gold" && <span className="h-2 w-2 rounded-full bg-gold-soft" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <p className="cbw-input-label">Step 3 · Stones</p>
                <div className="grid gap-2 text-[0.7rem]">
                  {stones.map((stone, index) => (
                    <button
                      key={stone}
                      type="button"
                      className={`flex items-center justify-between border px-3 py-2 text-left transition-colors hover:border-gold-soft hover:text-foreground ${
                        index === 0
                          ? "border-gold-soft bg-secondary/60 text-foreground"
                          : "border-border bg-background/60 text-muted-foreground"
                      }`}
                    >
                      <span>{stone}</span>
                      {index === 0 && (
                        <span className="text-[0.6rem] uppercase tracking-[0.24em] text-gold-soft">Preferred</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-4 rounded-none border border-border bg-secondary/40 p-6 shadow-elevated-soft backdrop-blur md:p-7">
            <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Estimate · Live</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between border-b border-border/70 pb-2">
                <span className="text-muted-foreground">Base design</span>
                <span>$8,500</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/70 pb-2">
                <span className="text-muted-foreground">Stones · VVS1 set</span>
                <span>$34,000</span>
              </div>
              <div className="flex items-center justify-between border-b border-border/70 pb-2">
                <span className="text-muted-foreground">Labor · 87 hours</span>
                <span>$6,800</span>
              </div>
              <div className="flex items-center justify-between pt-2 text-sm font-semibold">
                <span className="tracking-[0.18em] uppercase">Estimated investment</span>
                <span className="text-gold-soft">$49,300</span>
              </div>
              <p className="pt-1 text-[0.7rem] text-muted-foreground">
                Final pricing confirmed after consultation. Every custom is quoted with transparency—no surprise add-ons,
                no corners cut.
              </p>
            </div>

            <div className="space-y-3 border-t border-border/70 pt-4">
              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Timeline</p>
              <p className="text-sm">
                Current lead time: <span className="text-gold-soft">4–6 weeks</span> from approved design to delivery.
              </p>
              <Button variant="hero" size="lg" className="w-full text-[0.7rem] uppercase tracking-[0.24em]">
                Request consultation
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
