import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import * as React from "react";

interface LDButtonProps extends Omit<React.ComponentProps<typeof Button>, "variant"> {
  variant?: "primary" | "secondary" | "ghost";
}

export function LDButton({ variant = "primary", className, ...props }: LDButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    // always white pill, brown text
    primary:
      "bg-white text-[#A47864] rounded-full px-8 py-4 shadow-sm hover:bg-white/95 hover:ring-2 hover:ring-inset hover:ring-white/40 focus-visible:ring-white/60 focus-visible:ring-offset-[#A47864]",
    // outline pill on colored backgrounds
    secondary:
      "bg-transparent text-white/95 border border-white/35 rounded-full px-8 py-4 hover:bg-white/10 hover:border-white/70 backdrop-blur-sm",
    // for cream / light sections
    ghost:
      "bg-primary/10 text-foreground rounded-full px-8 py-3 hover:bg-primary/20",
  } as const;

  return (
    <Button className={cn(base, variants[variant], className)} {...props} />
  );
}
