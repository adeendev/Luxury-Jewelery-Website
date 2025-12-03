import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

interface CrownedLayoutProps {
  children: ReactNode;
}

const navLinks = [
  { id: "collections", href: "#collections", label: "Collections" },
  { id: "custom", href: "#custom", label: "Custom Studio" },
  { id: "about", href: "#about", label: "The Story" },
  { id: "gallery", href: "#gallery", label: "Gallery" },
  { id: "contact", href: "#contact", label: "Visit the Vault" },
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
          "fixed inset-x-0 top-0 z-40 flex min-h-[3.25rem] md:min-h-[var(--nav-height)] items-center py-1 md:py-3 transition-all duration-400",
          scrolled
            ? "border-b border-border bg-background/92 backdrop-blur shadow-elevated-soft"
            : "bg-gradient-to-b from-background/80 via-background/40 to-transparent",
        )}
      >
        <div className="cbw-shell flex flex-row items-center justify-between gap-3 md:gap-6">
          <div className="flex items-center animate-fade-in" style={{ animationDelay: "0.05s" }}>
            <span className="font-display text-sm md:text-base tracking-[0.22em]">Crown by Williams</span>
          </div>

          <nav className="hidden items-center gap-6 xl:gap-8 text-xs font-medium uppercase tracking-[0.24em] md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={cn(
                  "text-muted-foreground transition-colors duration-300 hover:text-foreground",
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
              </button>
            ))}
            <div className="ml-6 flex items-center gap-3">
              <Button variant="ghost" size="sm" className="text-[0.68rem] uppercase tracking-[0.2em]">
                Dallas, TX
              </Button>
              <Button
                variant="hero"
                size="sm"
                className="text-[0.7rem] uppercase tracking-[0.22em]"
                onClick={() => handleNavClick("#contact")}
              >
                Commission Your Legacy
              </Button>
            </div>
          </nav>

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
        <div className="fixed inset-x-0 top-[3.25rem] md:top-[var(--nav-height)] z-30 border-b border-border bg-background pb-3 pt-2 shadow-elevated-soft animate-slide-in-right md:hidden">
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

      <main className="pt-14 md:pt-[calc(var(--nav-height)_+_1rem)]">{children}</main>

      <footer className="border-t border-border bg-background/95">
        <div className="cbw-shell flex flex-col items-start justify-between gap-4 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Crowned by William. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Luxury Pieces With Purpose.</p>
        </div>
      </footer>
    </div>
  );
};
