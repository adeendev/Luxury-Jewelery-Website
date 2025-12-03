import { useState, type FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

export const ContactAndFAQ = () => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Request received",
        description: "William&apos;s team will reach out within one business day to schedule your consultation.",
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="cbw-section border-t border-border/70 bg-[radial-gradient(circle_at_top,_hsl(var(--surface-highlight))_0,_hsl(var(--background))_55%)]"
      aria-label="Contact Crowned by William"
    >
      <div className="cbw-shell gap-10 lg:grid lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="cbw-tag">The Vault Door</p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl tracking-[0.16em] uppercase">
              Your appointment starts here.
            </h2>
            <p className="max-w-lg text-sm text-muted-foreground">
              No forms into the void. Every serious inquiry is reviewed by William&apos;s team. Share your vision and preferred
              budget—we&apos;ll handle the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-none border border-border bg-secondary/40 p-6 shadow-elevated-soft backdrop-blur md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="name">
                  Name
                </label>
                <Input
                  id="name"
                  required
                  placeholder="First & last name"
                  className="rounded-none border-border bg-background/60 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="email">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="rounded-none border-border bg-background/60 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="phone">
                  Phone
                </label>
                <Input
                  id="phone"
                  placeholder="WhatsApp preferred"
                  className="rounded-none border-border bg-background/60 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
              <div className="space-y-2">
                <label className="cbw-input-label" htmlFor="budget">
                  Ideal investment
                </label>
                <Input
                  id="budget"
                  placeholder="$15k, $40k, $100k+..."
                  className="rounded-none border-border bg-background/60 text-sm placeholder:text-muted-foreground/60"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="cbw-input-label" htmlFor="vision">
                Tell us your vision
              </label>
              <Textarea
                id="vision"
                rows={4}
                placeholder="Timepiece, chain, pendant, or full set? Drop details, inspiration, and the story behind the piece."
                className="min-h-[120px] rounded-none border-border bg-background/60 text-sm placeholder:text-muted-foreground/60"
              />
            </div>

            <div className="flex flex-col gap-4 pt-2 md:flex-row md:items-center md:justify-between">
              <Button
                type="submit"
                variant="hero"
                size="lg"
                disabled={submitting}
                className="w-full text-[0.7rem] uppercase tracking-[0.24em] md:w-auto"
              >
                {submitting ? "Sending" : "Start Your Journey"}
              </Button>
              <div className="space-y-1 text-[0.65rem] text-muted-foreground">
                <p className="tracking-[0.24em] uppercase">Other ways in</p>
                <p>WhatsApp: instant consultation. Email: hello@crownedbywilliam.com</p>
                <p>Dallas, TX · By appointment only.</p>
              </div>
            </div>
          </form>
        </div>

        <aside className="space-y-5 rounded-none border border-border bg-secondary/40 p-6 shadow-elevated-soft backdrop-blur md:p-7">
          <h3 className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">FAQ</h3>
          <Accordion type="single" collapsible className="w-full text-sm">
            <AccordionItem value="time">
              <AccordionTrigger>How long does custom work take?</AccordionTrigger>
              <AccordionContent>
                Most customs are delivered within 4–8 weeks from approved design. Ultra-complex builds, full sets, or
                sourcing rare stones may extend timelines—always discussed up front.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>What&apos;s your return policy?</AccordionTrigger>
              <AccordionContent>
                Customs are final sale, backed by a lifetime authenticity guarantee. For ready pieces, returns are
                considered case by case within 7 days of delivery if the piece is unworn and intact.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="international">
              <AccordionTrigger>Do you work with international clients?</AccordionTrigger>
              <AccordionContent>
                Yes. Crowned by William works with clients worldwide, with insured global shipping and video consultations
                scheduled on your time zone.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="auth">
              <AccordionTrigger>How do I verify authenticity?</AccordionTrigger>
              <AccordionContent>
                Every qualifying piece ships with documentation and, when applicable, third-party stone certification.
                Serial numbers and records are kept in-house for future verification.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </aside>
      </div>
    </section>
  );
};
