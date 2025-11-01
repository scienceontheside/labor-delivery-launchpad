import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground px-5 md:px-10 lg:px-16 pt-16 pb-10 overflow-hidden rounded-b-[32px]">
      {/* Mid-century decorative bar - desktop only */}
      <div className="hidden lg:block pointer-events-none absolute right-10 top-0 h-full w-10 bg-primary/60 rounded-full" />
      
      <div className="mx-auto w-full max-w-[1180px] relative z-10">
        <div className="w-full max-w-[640px] space-y-6">
          {/* Eyebrow */}
          <div className="flex flex-col gap-1">
            <p className="text-[0.7rem] tracking-[0.35em] uppercase text-primary-foreground/80 font-body leading-none">
              NONPROFIT COMMUNICATIONS
            </p>
            <p className="text-sm text-primary-foreground/70 leading-none font-body">
              by Labor & Delivery
            </p>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
            Big-hearted teams, short on time.
          </h1>
          
          <p className="font-body text-base md:text-lg text-primary-foreground/90 leading-relaxed max-w-[560px]">
            You fundraise and run programs. We'll tell your story through donor appeals, campaigns, social posts, and web copy.
          </p>
          
          <CTAButtons
            primaryText="Book a call"
            secondaryText="What we do →"
            secondaryAction={() => scrollToSection("services")}
          />

          {/* Surprise line */}
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-primary-foreground/65 mt-1 font-body leading-none">
            No cause too big. No nonprofit too small.
          </p>

          {/* Supporting line after CTA */}
          <p className="font-body text-xs text-primary-foreground/60 leading-relaxed mt-1 pb-2">
            30 minutes on Zoom · we pick 1–2 pieces to ship first.
          </p>
        </div>
      </div>
    </section>
  );
}
