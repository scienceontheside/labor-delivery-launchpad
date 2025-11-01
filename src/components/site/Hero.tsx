import { CTAButtons } from "@/components/ui/CTAButtons";

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
      <div className="hidden md:block pointer-events-none absolute inset-y-[-50px] right-10 w-16 bg-accent-orange/5 rotate-[12deg]" />
      <div className="hidden lg:block pointer-events-none absolute inset-y-[-60px] right-32 w-10 bg-accent-teal/5 rotate-[12deg]" />
      
      <div className="mx-auto w-full md:max-w-6xl relative z-10">
        <div className="w-full max-w-[680px] space-y-6">
          {/* Small uppercase label */}
          <p className="text-xs tracking-[0.4em] uppercase text-primary-foreground/70 font-body leading-tight">
            Labor & Delivery / Nonprofit Communications
          </p>

          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tight transition-all duration-700 animate-fade-in">
            {currentTagline}
          </h1>
          <p className="font-body text-lg md:text-xl font-medium leading-snug">
            Big-hearted teams, short on time.
          </p>
          <p className="font-body text-base md:text-lg leading-snug max-w-[580px]">
            We write and ship your donor emails, campaign content, social, and web updates — so you can fundraise and run programs.
          </p>
          <p className="font-body text-xs text-primary-foreground/70 leading-relaxed">
            30 minutes · on Zoom · we pick 1–2 pieces to ship first.
          </p>
          <CTAButtons
            primaryText="Book a call"
            secondaryText="What we do"
            secondaryAction={() => scrollToSection("services")}
          />
        </div>
      </div>
      
      {/* Curve into cream - desktop only */}
      <div className="hidden md:block absolute bottom-0 left-0 right-0 h-10 bg-cream rounded-t-[32px]" />
    </section>
  );
}
