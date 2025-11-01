import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground px-6 pt-20 pb-14 md:pt-32 md:pb-24 overflow-hidden">
      {/* Mid-century decorative bars - desktop only */}
      <div className="hidden md:block pointer-events-none absolute inset-y-[-50px] right-10 w-16 bg-accent-orange/5 rotate-[12deg]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-[-60px] right-32 w-10 bg-accent-teal/5 rotate-[12deg]" />
      
      <div className="mx-auto w-full md:max-w-6xl relative z-10">
        <div className="w-full max-w-[680px] space-y-8">
          {/* Eyebrow */}
          <div className="space-y-1 mb-2">
            <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/80 font-body leading-tight">
              NONPROFIT COMMUNICATIONS
            </p>
            <p className="text-xs text-primary-foreground/50 font-body">
              by Labor & Delivery
            </p>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] tracking-tight">
            Big-hearted teams, short on time.
          </h1>
          
          <p className="font-body text-base md:text-lg leading-relaxed max-w-[560px]">
            We interview you and write the donor, campaign, social, and web content you don't have time to do — so you can fundraise and run programs.
          </p>
          
          <CTAButtons
            primaryText="Book a call"
            secondaryText="What we do →"
            secondaryAction={() => scrollToSection("services")}
          />

          {/* Supporting lines after CTAs */}
          <div className="space-y-2 pt-2">
            <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
              No cause too big. No nonprofit too small.
            </p>
            
            <p className="font-body text-xs text-primary-foreground/50 leading-relaxed">
              30 minutes on Zoom · we pick 1–2 pieces to ship first.
            </p>
          </div>
        </div>
      </div>
      
      {/* Curve into cream - desktop only */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-10 bg-cream rounded-t-[32px]" />
    </section>
  );
}
