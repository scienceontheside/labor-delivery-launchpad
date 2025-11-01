import { Button } from "@/components/ui/button";
import { Panel } from "@/components/ui/Panel";
import { ArrowRight } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

export default function WorkGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-4 font-body">Recent Work</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-ink tracking-tight leading-tight">
          Work we've delivered
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-12">
          Built in partnership with development and fundraising teams.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <Panel>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-2 font-body">
              Small youth nonprofit
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Donor update series</h3>
            <p className="font-body text-muted-foreground mb-4">
              3-email nurture + social posts to support a consultant-led appeal.
            </p>
            <Button 
              variant="ghost" 
              className="px-0" 
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Want something like this? <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-2 font-body">
              Consultant partnership
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Case → content</h3>
            <p className="font-body text-muted-foreground mb-4">
              Turned a fundraising case into email, social, and board talking points.
            </p>
            <Button 
              variant="ghost" 
              className="px-0" 
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Let's do this for your client <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-2 font-body">
              Startup nonprofit
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Story & boilerplate</h3>
            <p className="font-body text-muted-foreground mb-4">
              Founder interview, origin story, and web copy to launch the org.
            </p>
            <Button 
              variant="ghost" 
              className="px-0" 
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a call <ArrowRight className="ml-2" size={16} />
              </a>
            </Button>
          </Panel>
        </div>
      </div>
    </section>
  );
}
