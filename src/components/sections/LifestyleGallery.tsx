import watchImage from "@/assets/cbw-watch-royale.jpg";
import chainImage from "@/assets/cbw-chain-iced.jpg";
import lifestyleImage from "@/assets/cbw-lifestyle.jpg";

const galleryItems = [
  {
    image: watchImage,
    label: "Vault timepieces in motion",
  },
  {
    image: lifestyleImage,
    label: "Clients, courtside to boardroom",
  },
  {
    image: chainImage,
    label: "Gold links, diamond heavy",
  },
  {
    image: lifestyleImage,
    label: "Night drives, iced wrists",
  },
  {
    image: watchImage,
    label: "Studio-lit macro details",
  },
  {
    image: chainImage,
    label: "Chains built to hold stories",
  },
];

export const LifestyleGallery = () => {
  return (
    <section id="gallery" className="cbw-section border-t border-border/70 bg-background" aria-label="Lifestyle gallery">
      <div className="cbw-shell gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="space-y-3">
            <p className="cbw-tag">Gallery</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.16em] uppercase">
              Culture, courtside to late night.
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Instagram energy, gallery discipline. Product, lifestyle, and behind-the-scenes imagery curated to feel like
              you just stumbled into a private feed.
            </p>
          </div>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p className="tracking-[0.26em] uppercase text-foreground">@crownedbywilliam</p>
            <p>22 posts · 17K followers · 227 following</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 md:auto-rows-[220px] lg:auto-rows-[260px]">
          {galleryItems.map((item, index) => (
            <figure
              key={`${item.label}-${index}`}
              className="group relative overflow-hidden bg-secondary/40"
            >
              <img
                src={item.image}
                alt={`${item.label} from Crowned by William luxury jewelry gallery`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-background/95 via-background/20 to-transparent px-4 pb-4 text-[0.7rem] text-muted-foreground">
                <span className="max-w-xs leading-snug">{item.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-border/70 pt-5 text-xs text-muted-foreground">
          <p>See more customs, client fits, and behind-the-scenes work on Instagram.</p>
          <button
            type="button"
            className="text-[0.7rem] uppercase tracking-[0.24em] text-gold-soft underline-offset-4 hover:underline"
          >
            Follow the journey
          </button>
        </div>
      </div>
    </section>
  );
};
