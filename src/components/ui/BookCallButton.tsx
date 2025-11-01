import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

export function BookCallButton({
  variant = "primary",
  className = "",
}: {
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}) {
  if (variant === "primary") {
    return (
      <Button asChild className={`rounded-full bg-white text-primary px-8 py-4 font-medium hover:ring-2 hover:ring-inset hover:ring-white/40 ${className}`}>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Book a call <Calendar className="ml-2 h-5 w-5" />
        </a>
      </Button>
    );
  }

  if (variant === "outline") {
    return (
      <Button variant="outline" asChild className={`rounded-full ${className}`}>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
          Book a call <Calendar className="ml-2" />
        </a>
      </Button>
    );
  }

  return (
    <Button variant="ghost" asChild className={`text-lg ${className}`}>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
        Book a call <Calendar className="ml-2" />
      </a>
    </Button>
  );
}
