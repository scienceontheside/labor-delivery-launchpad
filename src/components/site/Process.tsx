import { BookCallButton } from "@/components/ui/BookCallButton";

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 bg-cream relative overflow-hidden">
      {/* Olivetti-style background word-stack - desktop only */}
      <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">LISTEN</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">SHAPE</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">DELIVER</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">REPEAT</p>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-4 font-body">Process</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">How we'll work together</h2>
        <p className="font-body text-xl text-muted-foreground mb-16">A simple 4-step delivery model.</p>
        <div className="space-y-10 border-l-2 border-muted pl-8">
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              1
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Listen</h3>
              <p className="font-body text-muted-foreground text-lg">
                We capture your story—what you do, who you serve, and why it matters.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              2
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Shape</h3>
              <p className="font-body text-muted-foreground text-lg">
                We make it donor-ready—clear, compelling, and connected to your goals.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              3
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Deliver</h3>
              <p className="font-body text-muted-foreground text-lg">
                Content, campaigns, social—whatever you need to tell your story and raise support.
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
              4
            </div>
            <div>
              <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Repeat</h3>
              <p className="font-body text-muted-foreground text-lg">
                Month-to-month support that grows with you—no long-term contracts, just ongoing partnership.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <BookCallButton variant="ghost" />
        </div>
      </div>
    </section>
  );
}
