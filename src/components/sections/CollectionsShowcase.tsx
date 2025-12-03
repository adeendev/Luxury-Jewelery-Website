import { Button } from "@/components/ui/button";
import watchImage from "@/assets/cbw-watch-royale.jpg";
import chainImage from "@/assets/cbw-chain-iced.jpg";
import lifestyleImage from "@/assets/cbw-lifestyle.jpg";

const pieces = [
  {
    name: "Royal Hour VVS Timepiece",
    category: "TIMEPIECES",
    price: "$58,000",
    image: watchImage,
    sizeClass: "md:col-span-7 md:row-span-2",
  },
  {
    name: "Obsidian Cuban Link",
    category: "CHAINS",
    price: "$24,500",
    image: chainImage,
    sizeClass: "md:col-span-5 md:row-span-1",
  },
  {
    name: "Midnight Clientele",
    category: "LIFESTYLE",
    price: "Private Collection",
    image: lifestyleImage,
    sizeClass: "md:col-span-5 md:row-span-1",
  },
];

const categories = ["TIMEPIECES", "CHAINS", "PENDANTS", "ICED CREATIONS", "BESPOKE"];

export const CollectionsShowcase = () => {
  return (
    <section id="collections" className="cbw-section border-t border-border/70 bg-background" aria-label="Signature jewelry collections">
      <div className="cbw-shell gap-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="space-y-4 md:max-w-xl">
            <p className="cbw-tag">Vault Collections</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.16em] uppercase">
              Curated like a private gallery.
            </h2>
            <p className="max-w-lg text-sm text-muted-foreground">
              No endless grids. No factory pieces. Every Crowned by William creation is staged like art—lit, composed, and
              presented to be chosen, not scrolled past.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-[0.68rem] font-medium uppercase tracking-[0.26em] text-muted-foreground">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                className={`relative px-3 py-1 transition-colors hover:text-foreground ${category === "TIMEPIECES" ? "text-foreground" : ""}`}
              >
                <span className="story-link">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:auto-rows-[180px] lg:auto-rows-[220px]">
          {pieces.map((piece) => (
            <article
              key={piece.name}
              className={`group relative overflow-hidden border border-border/80 bg-secondary/40 shadow-elevated-soft backdrop-blur-sm ${piece.sizeClass}`}
            >
              <div className="relative h-full w-full overflow-hidden">
                <img
                  src={piece.image}
                  alt={`${piece.name} luxury jewelry piece from Crowned by William`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-95" />
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.25)_48%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-1 px-5 pb-4 pt-8 text-xs">
                <div className="flex items-center justify-between text-[0.65rem] uppercase tracking-[0.28em] text-muted-foreground">
                  <span>{piece.category}</span>
                  <span>{piece.price}</span>
                </div>
                <h3 className="text-sm font-medium tracking-[0.14em] text-foreground uppercase">
                  {piece.name}
                </h3>
                <span className="mt-2 self-start rounded-none bg-background/70 px-2 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-gold-soft shadow-gold-soft/40">
                  Quick View
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            Looking for something louder, colder, rarer? The Vault holds limited drops and one-of-one customs that never
            make it online.
          </p>
          <Button variant="subtle" size="sm" className="text-[0.68rem] uppercase tracking-[0.22em]">
            Request a private viewing
          </Button>
        </div>
      </div>
    </section>
  );
};
