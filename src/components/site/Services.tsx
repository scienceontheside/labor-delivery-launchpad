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
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-6 font-body">
          What We Do
        </p>
        
        <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl">
          We write donor appeals, email campaigns, social posts, and web copy for nonprofits who don't have time to do it themselves.
        </p>

        <p className="font-body text-sm text-muted-foreground/70 uppercase tracking-wide mb-4">
          Partnership options
        </p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex gap-4 items-start">
            <span className="mt-[0.45rem] h-2 w-2 min-w-2 rounded-full bg-accent-orange" />
            <span className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Project-based</span> — one-off pieces, pay as you go
            </span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="mt-[0.45rem] h-2 w-2 min-w-2 rounded-full bg-accent-orange" />
            <span className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Monthly retainer</span> — ongoing support, pause anytime
            </span>
          </li>
          <li className="flex gap-4 items-start">
            <span className="mt-[0.45rem] h-2 w-2 min-w-2 rounded-full bg-accent-orange" />
            <span className="text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">White-label</span> — for consultants serving clients
            </span>
          </li>
        </ul>

        <p className="font-body text-muted-foreground/70 text-sm">
          You pick the pace. No contracts.
        </p>
      </div>
    </section>
  );
}
