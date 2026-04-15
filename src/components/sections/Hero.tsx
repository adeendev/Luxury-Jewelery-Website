import type { CSSProperties, MouseEvent } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/cbw-hero.jpg";

export const Hero = () => {
  const [tiltStyle, setTiltStyle] = useState<CSSProperties>({});

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;

    setTiltStyle({
      transform: `perspective(1400px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)` ,
    });

  };

  const resetTilt = () => {
    setTiltStyle({ transform: "perspective(1400px) rotateX(0deg) rotateY(0deg)" });
  };

  return (
    <section
      id="top"
      className="relative w-full pb-16 md:pb-24 lg:pb-28 overflow-hidden bg-hero-radial"
      aria-label="Crowned by William luxury jewelry hero"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,hsl(var(--primary)/0.18),transparent_55%),radial-gradient(circle_at_80%_120%,hsl(var(--primary)/0.12),transparent_55%)] opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.85))]" />

      <div
        className="cbw-shell relative z-10 flex flex-col lg:flex-row min-h-[calc(100vh_-_var(--nav-height))] items-center justify-center gap-10 md:gap-12"
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
      >
        <div className="flex-1 space-y-7 md:space-y-9">
          <p className="cbw-tag animate-fade-in">Luxury Pieces With Purpose</p>
          <div className="h-px w-12 bg-gradient-to-r from-transparent via-gold-soft to-gold" />

          <h1
            className="cbw-gold-text animate-fade-up-delayed text-[clamp(2rem,8vw,4.5rem)] leading-[1.1] lg:leading-[1.05] tracking-[0.18em] uppercase"
          >
            Crown by Williams
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            Private-jeweler energy. Dallas roots. Crowned by William crafts iced-out timepieces, chains, and bespoke
            heirlooms for athletes, founders, and those who understand that luxury is measured in permanence—not noise.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button variant="hero" size="lg">
              Explore Masterpieces
            </Button>
            <Button variant="hero-outline" size="lg">
              Commission Your Legacy
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
            <div className="h-px w-10 bg-gradient-to-r from-transparent via-gold-soft to-gold" />
            <p className="tracking-[0.28em] uppercase">Dallas • By Appointment Only</p>
          </div>
        </div>

        <div className="flex-1">
          <div
            className="relative w-full max-w-lg md:max-w-xl translate-y-2 md:translate-y-0 self-end rounded-none border border-border bg-secondary/40 p-4 shadow-gold-soft backdrop-blur cbw-hero-glow hover-scale-strong"
            style={tiltStyle}
          >
            <div className="relative overflow-hidden">
              <img
                src={heroImage}
                alt="VVS diamond timepiece by Crowned by William with gold dust particles in motion"
                loading="eager"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.24),transparent_55%)] mix-blend-screen opacity-60" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_30%,rgba(255,255,255,0.25)_50%,transparent_70%)] animate-shine" />
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
              <span className="tracking-[0.24em] uppercase">Vault Collection • 2025</span>
              <span className="text-gold-soft">VVS1 • Hand-set • 87 hours of craft</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-8 flex justify-center">
        <a
          href="#collections"
          className="group flex cursor-pointer flex-col items-center text-[0.7rem] uppercase tracking-[0.26em] text-muted-foreground"
        >
          Scroll to Enter
          <span className="mt-2 inline-flex h-7 w-px overflow-hidden bg-gradient-to-b from-gold-soft via-gold-deep to-transparent">
            <span className="block h-full w-full origin-top scale-y-0 bg-gradient-to-b from-gold-soft via-gold-deep to-transparent animate-[fade-in_1.2s_ease-out_0.5s_forwards] group-hover:animate-none" />
          </span>
        </a>
      </div>
    </section>
  );
};
