import { Calendar } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

export default function Hero() {
  return (
    <section
      className="
        bg-[hsl(var(--hero-bg))]
        pt-20
        pb-16
        md:pt-28
        md:pb-24
        px-5
        md:px-10
        lg:px-16
        rounded-b-[32px]
        relative
        overflow-hidden
      "
    >
      <div className="max-w-[1180px] mx-auto flex flex-col gap-8">
        {/* brand label */}
        <div className="flex flex-col gap-1">
          <p className="text-[0.7rem] tracking-[0.35em] uppercase text-[hsl(var(--hero-on-muted))] leading-none">
            Nonprofit communications
          </p>
          <p className="text-sm text-[hsl(var(--hero-on-muted))]/70 leading-none">
            by Labor &amp; Delivery
          </p>
        </div>

        {/* main copy */}
        <div className="max-w-[640px] flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] font-semibold text-[hsl(var(--hero-on))]">
            Big-hearted teams, short on time.
          </h1>

          <p className="text-lg md:text-xl text-[hsl(var(--hero-on))]/90 leading-relaxed max-w-[560px]">
            We write donor appeals, email campaigns, and web copy so you can focus on your mission.
          </p>

          {/* single CTA */}
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
              w-fit
            "
          >
            Book a call
            <Calendar className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
