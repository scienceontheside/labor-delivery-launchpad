import { Button } from "@/components/ui/button";
import { BookCallButton } from "@/components/ui/BookCallButton";

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
    <section className="relative bg-primary text-primary-foreground px-6 pt-28 pb-20 md:pt-32 md:pb-24 overflow-hidden">
      {/* Mid-century decorative bars - desktop only */}
      <div className="hidden md:block pointer-events-none absolute inset-y-[-50px] right-10 w-16 bg-accent-orange/10 rotate-[12deg]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-[-60px] right-32 w-10 bg-accent-teal/10 rotate-[12deg]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Small uppercase label */}
          <p className="text-xs tracking-[0.35em] uppercase text-primary-foreground/70 font-body">
            Labor & Delivery / Nonprofit Marketing
          </p>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold leading-none tracking-tight transition-all duration-700 animate-fade-in">
            {currentTagline}
          </h1>
          <p className="font-body text-xl md:text-2xl lg:text-3xl leading-snug">
            Story-first marketing for small teams with big missions.
          </p>
          <div className="flex flex-wrap gap-3 md:gap-4">
            {/* Primary CTA */}
            <BookCallButton variant="primary" />
            {/* Secondary CTA */}
            <Button
              variant="outline"
              className="rounded-full border-primary-foreground/20 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
              onClick={() => scrollToSection("services")}
            >
              What we do →
            </Button>
          </div>
        </div>
      </div>
      
      {/* Curve into cream */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-cream rounded-t-[32px]" />
    </section>
  );
}
