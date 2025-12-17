import { Calendar, ArrowRight } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

type CTAButtonsProps = {
  primaryText?: string;
  secondaryText?: string;
  secondaryAction?: () => void;
  showSecondary?: boolean;
  className?: string;
};

export function CTAButtons({
  primaryText = "Book a call",
  secondaryText = "What we do",
  secondaryAction,
  showSecondary = true,
  className = "",
}: CTAButtonsProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 ${className}`}>
      {/* Primary CTA - white pill, brown text, calendar icon */}
      <a
        href={BOOKING_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-primary px-8 py-3 text-base font-medium transition-all duration-150 hover:scale-[1.02] shadow-sm hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 w-full sm:w-auto"
      >
        {primaryText} <Calendar className="h-5 w-5" />
      </a>

      {/* Secondary CTA - rounded pill (20px radius), transparent bg, white text, arrow */}
      {showSecondary && secondaryAction && (
        <button
          onClick={secondaryAction}
          className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-white bg-transparent text-white px-8 py-3 text-base font-medium transition-all duration-150 hover:scale-[1.02] hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 w-full sm:w-auto"
        >
          {secondaryText} <ArrowRight className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}
