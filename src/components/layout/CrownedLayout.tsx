import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface CrownedLayoutProps {
  children: ReactNode;
}

const navLinks = [
  { id: "collections", href: "#collections", label: "Pieces" },
  { id: "custom", href: "#custom", label: "Custom" },
  { id: "about", href: "#about", label: "Story" },
  { id: "gallery", href: "#gallery", label: "Gallery" },
  { id: "contact", href: "#contact", label: "Contact" },
];

export const CrownedLayout = ({ children }: CrownedLayoutProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0.35,
      },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href) as HTMLElement | null;
    if (target) {
      const headerOffset = 80;
      const elementPosition = target.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 flex h-12 md:h-14 items-center transition-all duration-400",
          scrolled
            ? "border-b border-border bg-background/92 backdrop-blur shadow-elevated-soft"
            : "bg-gradient-to-b from-background/80 via-background/40 to-transparent",
        )}
      >
        <div className="cbw-shell relative flex flex-row items-center justify-between">
          <div className="flex items-center animate-fade-in shrink-0" style={{ animationDelay: "0.05s" }}>
            <span className="font-display text-base md:text-lg tracking-[0.28em] whitespace-nowrap cbw-gold-text">C.B.W</span>
          </div>

          <nav className="hidden md:flex items-center gap-5 xl:gap-7 text-[0.65rem] font-medium uppercase tracking-[0.22em] absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-muted-foreground transition-all duration-300 hover:text-gold-soft",
                  activeSection === link.id && "text-gold-soft",
                )}
              >
                <span
                  className="story-link"
                  data-active={activeSection === link.id}
                  aria-current={activeSection === link.id ? "true" : undefined}
                >
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center shrink-0">
            <Button
              variant="hero"
              size="sm"
              className="text-[0.6rem] uppercase tracking-[0.18em] px-5 py-1.5 h-8"
              onClick={() => handleNavClick("#contact")}
            >
              Commission
            </Button>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <button
              type="button"
              className="inline-flex h-9 w-9 items-center justify-center rounded-none border border-border bg-background/60 text-muted-foreground transition-colors hover:border-gold-soft hover:text-gold-soft md:hidden"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-x-0 top-12 md:top-14 z-30 border-b border-border bg-background pb-3 pt-2 shadow-elevated-soft animate-slide-in-right md:hidden">
          <div className="cbw-shell flex flex-col gap-4 text-xs font-medium uppercase tracking-[0.22em]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "flex items-center justify-between py-0.5 text-[0.62rem] tracking-[0.18em] text-muted-foreground transition-colors duration-300 hover:text-foreground",
                  activeSection === link.id && "text-foreground",
                )}
              >
                <span
                  className="story-link"
                  data-active={activeSection === link.id}
                  aria-current={activeSection === link.id ? "true" : undefined}
                >
                  {link.label}
                </span>
                <span
                  className={cn(
                    "h-px w-10 bg-gradient-to-r from-transparent via-gold-soft to-transparent transition-opacity",
                    activeSection === link.id ? "opacity-100" : "opacity-0",
                  )}
                />
              </button>
            ))}
            <Button
              variant="hero"
              size="sm"
              className="mt-1 w-full text-[0.66rem] uppercase tracking-[0.2em]"
              onClick={() => handleNavClick("#contact")}
            >
              Commission Your Legacy
            </Button>
          </div>
        </div>
      )}

      <main className="pt-12 md:pt-14">{children}</main>

      <footer className="border-t border-border bg-background/95">
        <div className="cbw-shell flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Crowned by William. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Luxury Pieces With Purpose.</p>
        </div>
      </footer>
    </div>
  );
};
