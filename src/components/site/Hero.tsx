import { Calendar } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section
      className="
        bg-[hsl(var(--hero-bg))]
        pt-16
        pb-10
        px-5
        md:px-10
        lg:px-16
        rounded-b-[32px]
        relative
        overflow-hidden
      "
    >
      {/* optional 60s stripe on the right */}
      <div className="pointer-events-none hidden lg:block absolute right-10 top-0 h-full w-10 bg-black/5 mix-blend-multiply" />

      <div className="max-w-[1180px] mx-auto flex flex-col gap-6">
        {/* label */}
        <div className="flex flex-col gap-1">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-[hsl(var(--hero-on-muted))] leading-none">
            Nonprofit communications
          </p>
          <p className="text-sm text-[hsl(var(--hero-on-muted))]/70 leading-none">
            by Labor &amp; Delivery
          </p>
        </div>

        {/* main copy */}
        <div className="max-w-[640px] flex flex-col gap-5">
          <h1 className="text-4xl md:text-5xl leading-[1.05] font-semibold text-[hsl(var(--hero-on))]">
            Big-hearted teams, short on time.
          </h1>

          <p className="text-base md:text-lg text-[hsl(var(--hero-on))]/90 leading-relaxed max-w-[560px]">
            You fundraise and run programs. We'll tell your story through donor appeals,
            campaigns, social posts, and web copy.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-start">
            {/* primary */}
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                bg-[hsl(var(--surface))] 
                text-[hsl(var(--hero-bg))]
                px-8
                py-3
                rounded-full
                text-base
                font-medium
                shadow-sm
                transition-all
                duration-150
                hover:shadow
              "
            >
              Book a call
              <Calendar className="h-4 w-4" />
            </a>

            {/* secondary */}
            <button
              onClick={() => scrollToSection("services")}
              className="
                inline-flex
                items-center
                gap-2
                border
                border-[hsl(var(--hero-on))]
                text-[hsl(var(--hero-on))]
                px-8
                py-3
                rounded-[20px]
                text-base
                font-medium
                bg-transparent
                transition-all
                duration-150
                hover:bg-white/5
              "
            >
              What we do →
            </button>
          </div>

          {/* rush availability */}
          <p className="text-sm text-[hsl(var(--hero-on))]/70 mt-2">
            ⚡ Need it this week? Rush projects available for active campaigns.
          </p>

          {/* surprise line */}
          <p className="text-[0.7rem] tracking-[0.25em] uppercase text-[hsl(var(--hero-on))]/65 mt-1">
            No cause too big. No nonprofit too small. (And no timeline too tight.)
          </p>

          {/* microcopy */}
          <p className="text-xs text-[hsl(var(--hero-on))]/60 mt-1 pb-2">
            30-minute video call · we pick 1–2 pieces to ship first.
          </p>
        </div>
      </div>
    </section>
  );
}
