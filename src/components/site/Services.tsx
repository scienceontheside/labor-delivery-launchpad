import { Panel } from "@/components/ui/Panel";

export default function Services() {
  return (
    <section id="services" className="py-12 md:py-24 px-5 md:px-6 bg-background border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">Strategy in, content out.</h2>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Donor & campaign communications</h3>
            <p className="font-body text-muted-foreground">
              Appeals, cases, updates, impact stories.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Social & web updates</h3>
            <p className="font-body text-muted-foreground">
              Keep your feeds and pages current.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Messaging & story capture</h3>
            <p className="font-body text-muted-foreground">
              We interview you and turn it into usable copy.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Fractional mar/comms</h3>
            <p className="font-body text-muted-foreground">
              Month-to-month support when you can't hire.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
