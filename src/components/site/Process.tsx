import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 px-6 bg-cream relative overflow-hidden">
      {/* Olivetti-style background word-stack - desktop only */}
      <div className="hidden lg:flex absolute inset-0 flex-col items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">LISTEN</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">SHAPE</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">DELIVER</p>
        <p className="font-heading text-[15rem] font-bold leading-none tracking-tighter">REPEAT</p>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Process</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">How we'll work together</h2>
        <p className="font-body text-xl text-muted-foreground mb-10">A simple 4-step delivery model. Most orgs start with an appeal, an update, or a donor email — we'll pick the fastest win.</p>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-orange">1. Listen</h3>
            <p className="font-body text-muted-foreground text-lg">
              What you do, who you serve, why it matters.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-teal">2. Shape</h3>
            <p className="font-body text-muted-foreground text-lg">
              Make it donor-ready: clear, compelling, on-message.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-orange">3. Deliver</h3>
            <p className="font-body text-muted-foreground text-lg">
              We draft it in your voice and get it ready to send.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-2xl font-semibold text-accent-teal">4. Repeat</h3>
            <p className="font-body text-muted-foreground text-lg">
              Monthly support, no long-term contract.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <CTAButtons
            primaryText="Book a call"
            secondaryText="What we do"
            secondaryAction={() => scrollToSection("services")}
          />
        </div>
      </div>
    </section>
  );
}
