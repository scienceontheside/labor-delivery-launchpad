import { cn } from "@/lib/utils";

export function Panel({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "p-6 bg-card rounded-md border border-ink/5 shadow-sm transition-transform duration-200 hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
