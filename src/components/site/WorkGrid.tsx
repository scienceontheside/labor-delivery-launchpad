import { BookCallButton } from "@/components/ui/BookCallButton";
import { Panel } from "@/components/ui/Panel";
import { ArrowRight } from "lucide-react";

export default function WorkGrid() {
  return (
    <section className="py-16 md:py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Recent Work</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">
          Work we've delivered
        </h2>
        <p className="font-body text-lg text-muted-foreground mb-10">
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
            <button
              onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm"
            >
              Want something like this? <ArrowRight size={16} />
            </button>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-2 font-body">
              Consultant partnership
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Case → content</h3>
            <p className="font-body text-muted-foreground mb-4">
              Turned a fundraising case into email, social, and board talking points.
            </p>
            <button
              onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm"
            >
              Let's do this for your client <ArrowRight size={16} />
            </button>
          </Panel>
          <Panel>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-2 font-body">
              Startup nonprofit
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Story & boilerplate</h3>
            <p className="font-body text-muted-foreground mb-4">
              Founder interview, origin story, and web copy to launch the org.
            </p>
            <button
              onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm"
            >
              Book a call <ArrowRight size={16} />
            </button>
          </Panel>
        </div>
        <div className="mt-12 text-center">
          <BookCallButton>Book a call</BookCallButton>
        </div>
      </div>
    </section>
  );
}
