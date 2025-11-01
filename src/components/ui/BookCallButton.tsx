import { Calendar } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

type Props = {
  variant?: "primary" | "outline" | "ghost";
  full?: boolean;
  children?: React.ReactNode;
};

export function BookCallButton({
  variant = "primary",
  full = false,
  children = "Book a call",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full text-base font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
  
  const variants: Record<string, string> = {
    primary:
      "bg-white text-[#A47864] hover:ring-2 hover:ring-inset hover:ring-[#A47864]/30 focus-visible:ring-[#A47864]/60",
    outline:
      "border border-white/50 text-white bg-transparent hover:bg-white/5 focus-visible:ring-white/40",
    ghost: "text-[#A47864] hover:bg-[#A47864]/10 focus-visible:ring-[#A47864]/30",
  };

  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${
        full ? "w-full px-5 py-3" : "px-8 py-3"
      }`}
    >
      {children}
      <Calendar className="h-5 w-5" />
    </a>
  );
}
