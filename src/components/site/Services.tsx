import { Panel } from "@/components/ui/Panel";

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-background border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-4 font-body">Services</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">What we do</h2>
        <p className="font-body text-xl text-muted-foreground mb-12">Strategy in, content out.</p>
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
              Consistent, on-brand content that keeps your community engaged and informed.
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Fractional Marketing Support</h3>
            <p className="font-body text-muted-foreground">
              Month-to-month partnership that scales with your needs—no full-time hire required.
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
