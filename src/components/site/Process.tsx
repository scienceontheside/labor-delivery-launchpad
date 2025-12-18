import { CTAButtons } from "@/components/ui/CTAButtons";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Process() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="process"
      className={`py-12 md:py-24 px-5 md:px-6 bg-cream border-t border-ink/5 relative overflow-hidden transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">How It Works</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-ink tracking-tight leading-tight">Three steps. That's it.</h2>
        
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">1. Listen</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              30-minute video call. We ask the right questions, you talk about your work.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-semibold text-accent-teal">2. Shape</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              First drafts in 3-5 days. We match your voice because we listened.
            </p>
            <p className="font-body text-sm text-muted-foreground/70 mt-3">
              Standard 3-5 days | Rush 24-48 hours (+50%)
            </p>
            <p className="font-body text-sm text-accent-teal mt-2">
              ✓ Voice Guarantee: We match your voice or rewrite free.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">3. Deliver</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              One round of revisions included. Then you ship.
            </p>
          </div>
        </div>
        
        <p className="font-body text-muted-foreground/70 text-center mb-10">
          No contracts. Month-to-month. Add more pieces as you need them.
        </p>
        
        <div className="flex justify-center">
          <CTAButtons
            primaryText="Book a call"
            showSecondary={false}
          />
        </div>
      </div>
    </section>
  );
}
