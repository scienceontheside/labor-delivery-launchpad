import { useState, useEffect } from "react";
import { Calendar, Check } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling past ~500px (roughly past hero)
      const scrollThreshold = 500;
      setIsVisible(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-ink/5 transition-transform duration-300 ease-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 md:gap-3">
          <a 
            href="#" 
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-heading text-lg md:text-xl font-semibold text-ink hover:text-ink/80 transition-colors"
          >
            Labor & Delivery
          </a>
          <span className="hidden sm:flex items-center gap-1.5 text-sm text-ink/60">
            <span className="text-ink/30">•</span>
            <Check className="h-3.5 w-3.5 text-accent-teal" />
            <span>Accepting new projects</span>
          </span>
        </div>
        
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book a call with Labor & Delivery"
          className="inline-flex items-center justify-center gap-2 rounded-full text-sm md:text-base font-medium transition-all duration-150 bg-accent-orange text-white hover:bg-accent-orange/90 px-4 md:px-6 py-2 md:py-2.5"
        >
          <span className="hidden sm:inline">Book a call</span>
          <span className="sm:hidden">Book</span>
          <Calendar className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
