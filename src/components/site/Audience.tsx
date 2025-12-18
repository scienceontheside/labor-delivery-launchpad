import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export default function Audience() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`
        max-w-[1180px]
        mx-auto
        px-5
        md:px-10
        lg:px-16
        py-14
        bg-[hsl(var(--background))]
        border-t border-ink/5
        transition-all duration-[600ms] ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
      `}
    >
      {/* label */}
      <p className="text-[hsl(var(--accent-orange))] text-[0.8rem] tracking-[0.32em] uppercase mb-8">
        Who it's for
      </p>

      {/* 3 audience columns */}
      <div className="grid gap-12 md:gap-16 md:grid-cols-3">
        <div className="space-y-3">
          <h3 className="text-[hsl(var(--accent-orange))] font-semibold text-lg">
            Executive directors
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            Running programs, fundraising, HR, and comms—and somehow also the person who updates the website and posts on social.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[hsl(var(--accent-green))] font-semibold text-lg">
            Small teams
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            You're a mighty team of 2-5 doing the work of 20. You need communications that match your impact but don't have bandwidth to write it all.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-[hsl(var(--accent-orange))] font-semibold text-lg">
            Consultants &amp; fundraisers
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed">
            You lead the strategy and campaign design. You want a content partner who understands fundraising, moves fast, and makes you look good to your clients.
          </p>
        </div>
      </div>
    </section>
  );
}
