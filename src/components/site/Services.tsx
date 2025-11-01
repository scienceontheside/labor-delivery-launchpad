import { Panel } from "@/components/ui/Panel";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 px-6 bg-background border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">What We Do</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">Donor & campaign communications, done for you.</h2>
        <p className="font-body text-xl text-muted-foreground mb-10">Donor-first communications for growing nonprofits.</p>
        <div className="grid sm:grid-cols-2 gap-6">
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Messaging & Story Capture</h3>
            <p className="font-body text-muted-foreground">
              We listen, ask the right questions, and shape your impact into donor-ready narratives.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Campaign & Donor Content</h3>
            <p className="font-body text-muted-foreground">
              Appeals, case statements, impact reports, and fundraising materials that move people to give.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Social & Web Updates</h3>
            <p className="font-body text-muted-foreground">
              Consistent, on-brand updates (light social + web) to stay in front of your people.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Fractional Communications Support</h3>
            <p className="font-body text-muted-foreground">
              Month-to-month nonprofit mar/comms when hiring isn't realistic.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
