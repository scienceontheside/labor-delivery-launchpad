import { Panel } from "@/components/ui/Panel";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Services() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      id="services"
      className={`py-12 md:py-24 px-5 md:px-6 bg-background border-t border-ink/5 transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">Strategy in, content out.</h2>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Writing & Content</h3>
            <p className="font-body text-muted-foreground">
              Donor appeals, email series, social posts, web copy, and impact stories. Ready to send.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Story Capture</h3>
            <p className="font-body text-muted-foreground">
              We interview you (or your team) and turn conversations into usable content. Your voice, our structure.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Strategic Support</h3>
            <p className="font-body text-muted-foreground">
              Messaging frameworks, campaign content planning, and comms strategy for specific initiatives.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Partnership Options</h3>
            <p className="font-body text-muted-foreground">
              Project-based (1-3 pieces) or monthly retainer (ongoing support). White-label available for consultants.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
