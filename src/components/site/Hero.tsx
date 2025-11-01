import { LDButton } from "@/components/ui/ld-button";
import { Calendar, ArrowRight } from "lucide-react";

const taglines = [
  <>No cause too big.<br />No nonprofit too small.</>,
  "Story-first marketing for small teams with big missions.",
  "Helping you deliver on your mission.",
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  const currentTagline = taglines[0]; // deterministic

  return (
    <section className="relative bg-primary text-primary-foreground px-4 md:px-6 pt-20 pb-14 md:pt-32 md:pb-24 overflow-hidden">
      {/* Mid-century decorative bars - desktop only */}
      <div className="hidden md:block pointer-events-none absolute inset-y-[-50px] right-10 w-16 bg-accent-orange/10 rotate-[12deg]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-[-60px] right-32 w-10 bg-accent-teal/10 rotate-[12deg]" />
      
      <div className="mx-auto w-full md:max-w-6xl relative z-10">
        <div className="w-full md:max-w-3xl space-y-6">
          {/* Small uppercase label */}
          <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/70 font-body">
            Labor & Delivery / Nonprofit Communications
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight transition-all duration-700 animate-fade-in">
            {currentTagline}
          </h1>
          <p className="font-body text-base md:text-lg lg:text-xl leading-snug max-w-full md:max-w-xl">
            Big-hearted teams, short on time.<br />
            We write and ship your donor emails, campaign content, social, and web updates — so you can fundraise and run programs.
          </p>
          <p className="font-body text-sm text-primary-foreground/70 mt-4 mb-5">
            30 minutes · on Zoom · we pick 1–2 pieces to ship first.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            {/* Primary CTA */}
            <LDButton asChild variant="primary">
              <a href="https://calendar.app.google/yrFu89XL25QduC6S6" target="_blank" rel="noopener noreferrer">
                Book a call <Calendar className="h-5 w-5" />
              </a>
            </LDButton>

            {/* Secondary CTA */}
            <LDButton variant="secondary" onClick={() => scrollToSection("services")}>
              What we do <ArrowRight className="h-4 w-4" />
            </LDButton>
          </div>
        </div>
      </div>
      
      {/* Curve into cream - desktop only */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-10 bg-cream rounded-t-[32px]" />
    </section>
  );
}
