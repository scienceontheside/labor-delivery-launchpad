import { cn } from "@/lib/utils";

export function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "p-5 md:p-6 bg-card rounded-lg border border-ink/10 shadow-sm transition-transform duration-150 hover:-translate-y-[2px]",
        className
      )}
    >
      {children}
    </div>
  );
}
