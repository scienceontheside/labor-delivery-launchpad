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
      className={`py-12 md:py-24 px-5 md:px-6 bg-cream relative overflow-hidden transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      {/* Olivetti-style background word-stack - desktop only */}
      <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center pointer-events-none opacity-[0.02] select-none">
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">LISTEN</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">SHAPE</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">DELIVER</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">REPEAT</p>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">How It Works</p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">A simple 4-step delivery model.</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12 md:ml-0">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-orange">1. Listen</h3>
            <p className="font-body text-sm text-muted-foreground/70 mb-1">30-minute video call</p>
            <p className="font-body text-muted-foreground text-lg">
              We ask the right questions. You talk about your work, we take notes. Together we pick 1-2 pieces to ship first.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-teal">2. Shape</h3>
            <p className="font-body text-muted-foreground text-lg">
              We draft the pieces you need first. We nail your voice because we listened.
            </p>
            <div className="mt-2 space-y-1">
              <p className="font-body text-sm text-muted-foreground/70 font-medium">Timeline options:</p>
              <ul className="font-body text-sm text-muted-foreground/80 space-y-0.5 pl-4">
                <li>• Standard delivery: 3-5 business days</li>
                <li>• <span className="text-accent-teal">Rush delivery: 24-48 hours</span> <span className="text-muted-foreground/60">(for urgent campaigns, +50%)</span></li>
              </ul>
            </div>
            <div className="mt-4 p-4 bg-accent-teal/10 border border-accent-teal/20 rounded-lg">
              <p className="font-body text-sm text-ink">
                <span className="text-accent-teal font-semibold">✓ Voice Guarantee:</span> If we don't match your organization's voice in the first draft, we'll rewrite it free — no questions asked.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-orange">3. Deliver</h3>
            <p className="font-body text-sm text-muted-foreground/70 mb-1">One round of revisions included</p>
            <p className="font-body text-muted-foreground text-lg">
              You review, we refine. Then it's ready to send to your list.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-teal">4. Repeat</h3>
            <p className="font-body text-sm text-muted-foreground/70 mb-1">No contracts, month-to-month</p>
            <p className="font-body text-muted-foreground text-lg">
              Add more pieces as you need them. Pause anytime. We're flexible.
            </p>
          </div>
        </div>
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
