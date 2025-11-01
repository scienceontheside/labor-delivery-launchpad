import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground px-6 pt-16 pb-10 md:pt-32 md:pb-24 overflow-hidden">
      {/* Mid-century decorative bars - desktop only */}
      <div className="hidden md:block pointer-events-none absolute inset-y-[-50px] right-10 w-16 bg-accent-orange/5 rotate-[12deg]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-[-60px] right-32 w-10 bg-accent-teal/5 rotate-[12deg]" />
      
      <div className="mx-auto w-full md:max-w-6xl relative z-10">
        <div className="w-full max-w-[680px] space-y-8">
          {/* Eyebrow */}
          <div>
            <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/80 font-body leading-tight">
              NONPROFIT COMMUNICATIONS
            </p>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-[1.15] tracking-tight">
            Big-hearted teams, short on time.
          </h1>
          
          <p className="font-body text-base md:text-lg leading-relaxed max-w-[560px]">
            You fundraise and run programs. We'll tell your story through donor appeals, campaigns, social posts, and web copy.
          </p>
          
          <CTAButtons
            primaryText="Book a call"
            secondaryText="What we do →"
            secondaryAction={() => scrollToSection("services")}
          />

          {/* Supporting line after CTA */}
          <div className="mt-4">
            <p className="font-body text-xs text-primary-foreground/60 leading-relaxed">
              30 minutes on Zoom · we pick 1–2 pieces to ship first.
            </p>
          </div>
        </div>
      </div>
      
      {/* Curve into cream - tablet and desktop */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-8 md:h-10 bg-cream rounded-t-[24px] md:rounded-t-[32px]" />
    </section>
  );
}
