import { Panel } from "@/components/ui/Panel";

export default function Pricing() {
  return (
    <section id="pricing" className="py-12 md:py-24 px-5 md:px-6 bg-background border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Investment</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-ink tracking-tight leading-tight">Transparent Pricing</h2>
        <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">
          Priced for nonprofits. Less than an agency, more reliable than a freelancer.
        </p>
        
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 mb-8">
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Project-Based</h3>
            <p className="font-body text-muted-foreground">
              Individual projects start at $750
            </p>
          </Panel>
          <Panel>
            <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Monthly Support</h3>
            <p className="font-body text-muted-foreground">
              Ongoing partnerships from $2,500/month
            </p>
          </Panel>
        </div>
        
        <p className="font-body text-sm text-muted-foreground">
          Every engagement starts with a free 30-minute consultation to make sure we're a fit.
        </p>
      </div>
    </section>
  );
}
