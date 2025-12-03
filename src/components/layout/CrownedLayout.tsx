import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

interface CrownedLayoutProps {
  children: ReactNode;
}

export const CrownedLayout = ({ children }: CrownedLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed inset-x-0 top-0 z-40 flex h-[var(--nav-height)] items-center transition-all duration-300 ${scrolled ? "bg-background/90 backdrop-blur border-b border-border" : "bg-gradient-to-b from-background/80 via-background/40 to-transparent"}`}
      >
        <div className="cbw-shell flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center border border-border/80 bg-secondary/40 text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              CBW
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display text-sm tracking-[0.28em] text-muted-foreground uppercase">Crowned by</span>
              <span className="font-display text-lg tracking-[0.24em]">WILLIAM</span>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.24em] md:flex">
            <a href="#collections" className="story-link text-muted-foreground hover:text-foreground">
              Collections
            </a>
            <a href="#custom" className="story-link text-muted-foreground hover:text-foreground">
              Custom Studio
            </a>
            <a href="#about" className="story-link text-muted-foreground hover:text-foreground">
              The Story
            </a>
            <a href="#gallery" className="story-link text-muted-foreground hover:text-foreground">
              Gallery
            </a>
            <a href="#contact" className="story-link text-muted-foreground hover:text-foreground">
              Visit the Vault
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="hidden text-[0.68rem] uppercase tracking-[0.2em] md:inline-flex">
              Dallas, TX
            </Button>
            <Button
              variant="hero"
              size="sm"
              asChild
              className="text-[0.7rem] uppercase tracking-[0.22em]"
            >
              <a href="#contact">Commission Your Legacy</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-[calc(var(--nav-height)_+_1.5rem)]">{children}</main>

      <footer className="border-t border-border bg-background/95">
        <div className="cbw-shell flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Crowned by William. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Luxury Pieces With Purpose.</p>
        </div>
      </footer>
    </div>
  );
};
