import { useState } from "react";
import { BookCallButton } from "@/components/ui/BookCallButton";
import { Panel } from "@/components/ui/Panel";
import { ArrowRight, Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function WorkGrid() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [sampleModalOpen, setSampleModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className={`py-12 md:py-24 px-5 md:px-6 bg-background transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Recent Work</p>
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">
          Work we've delivered
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-8 md:mb-10">
          Built in partnership with leaders like you.
        </p>
        <div className="grid gap-5 md:grid-cols-3 md:gap-6">
          <Panel>
            <span className="inline-block px-3 py-1 rounded-full bg-accent-teal/20 text-accent-teal text-xs font-semibold uppercase tracking-wider mb-2">
              Youth Development
            </span>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-2 font-body">
              Small youth nonprofit
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Donor update series</h3>
            <p className="font-body text-muted-foreground mb-3">
              3-email nurture + social posts to support a consultant-led appeal
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-1.5 mb-3">
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Email 1: Impact story (Why now matters)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Email 2: The ask (Clear, warm, donor-centric)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Email 3: Gratitude & next steps</span>
              </li>
            </ul>
            <p className="font-body text-sm text-muted-foreground mb-1">Plus 6 Instagram captions with content direction</p>
            <p className="font-body text-sm font-medium text-accent-teal mb-4">→ Delivered in 10 days</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setSampleModalOpen(true)}
                className="inline-flex items-center gap-2 text-accent-teal hover:text-accent-teal/80 transition-colors font-body text-sm py-2 min-h-[44px]"
              >
                <Eye size={16} />
                See a sample email from this project
              </button>
              <button
                onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
                className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm py-2 min-h-[44px]"
              >
                Start with something like this <ArrowRight size={16} />
              </button>
            </div>
          </Panel>
          <Panel>
            <span className="inline-block px-3 py-1 rounded-full bg-accent-teal/20 text-accent-teal text-xs font-semibold uppercase tracking-wider mb-2">
              Fundraising
            </span>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-2 font-body">
              Consultant partnership
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Case → content</h3>
            <p className="font-body text-muted-foreground mb-3">
              Turned a fundraising case into email, social, and board talking points.
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-1.5 mb-3">
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Email series (3 donor communications)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Social media content (6 posts with visuals)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Board talking points (1-pager)</span>
              </li>
            </ul>
            <p className="font-body text-sm font-medium text-accent-teal mb-4">→ Delivered in 7 days</p>
            <button
              onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm py-2 min-h-[44px]"
            >
              Start with something like this <ArrowRight size={16} />
            </button>
          </Panel>
          <Panel>
            <span className="inline-block px-3 py-1 rounded-full bg-accent-teal/20 text-accent-teal text-xs font-semibold uppercase tracking-wider mb-2">
              Organizational Development
            </span>
            <p className="text-xs uppercase tracking-[0.4em] text-accent-teal font-semibold mb-2 font-body">
              Startup nonprofit
            </p>
            <h3 className="font-heading text-xl font-semibold mb-2">Story & boilerplate</h3>
            <p className="font-body text-muted-foreground mb-3">
              Founder interview, origin story, and web copy to launch the org.
            </p>
            <ul className="font-body text-sm text-muted-foreground space-y-1.5 mb-3">
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Founder story (compelling narrative)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>About page copy (mission-driven)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent-orange">•</span>
                <span>Boilerplate (3 lengths: 25, 50, 100 words)</span>
              </li>
            </ul>
            <p className="font-body text-sm font-medium text-accent-teal mb-4">→ Delivered in 5 days</p>
            <button
              onClick={() => window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank")}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-sm py-2 min-h-[44px]"
            >
              Start with something like this <ArrowRight size={16} />
            </button>
          </Panel>
        </div>
        <div className="mt-12 text-center">
          <BookCallButton>Book a call</BookCallButton>
        </div>
      </div>

      {/* Sample Email Modal */}
      <Dialog open={sampleModalOpen} onOpenChange={setSampleModalOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-cream">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl text-ink">
              Sample: Donor Appeal Email
            </DialogTitle>
            <DialogDescription className="font-body text-muted-foreground">
              Youth Development Organization (Client name confidential)
            </DialogDescription>
          </DialogHeader>

          {/* Sample Email Content */}
          <div className="mt-4 p-6 bg-background rounded-lg border border-ink/10">
            <p className="font-body text-sm text-muted-foreground mb-4">
              Subject: <span className="text-ink font-medium">A moment that changed everything for Marcus</span>
            </p>
            <div className="font-body text-ink space-y-4 text-sm leading-relaxed">
              <p>Dear [DONOR NAME],</p>
              <p>
                Last Tuesday, Marcus walked into our center with his shoulders hunched and his eyes on the floor. 
                He'd just failed his third math test this semester.
              </p>
              <p>
                But by 4pm, something had shifted. Our tutor, Ms. Jackson, didn't start with equations. 
                She started with a question: "What do you actually want to be good at?"
              </p>
              <p>
                Marcus said he wanted to build things. So they built — using geometry to design a model skatepark, 
                calculating angles and measurements. For the first time, math made sense.
              </p>
              <p>
                <strong>This is what your support makes possible.</strong>
              </p>
              <p>
                Right now, 47 young people like Marcus are counting on [ORGANIZATION NAME] to be here when school lets out. 
                Your gift of $100 keeps our doors open for one student for an entire month.
              </p>
              <p>
                Will you help us reach our goal of $15,000 by December 31st?
              </p>
              <p className="mt-6">
                With gratitude,<br />
                <span className="font-medium">[Executive Director Name]</span><br />
                [ORGANIZATION NAME]
              </p>
            </div>
          </div>

          {/* Context */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-accent-orange font-semibold">Challenge:</span>
              <span className="font-body text-muted-foreground">Turn program data into emotional donor story</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-accent-teal font-semibold">Result:</span>
              <span className="font-body text-muted-foreground">32% increase in donations vs. previous appeal</span>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 pt-4 border-t border-ink/10">
            <button
              onClick={() => {
                setSampleModalOpen(false);
                window.open("https://calendar.app.google/yrFu89XL25QduC6S6", "_blank");
              }}
              className="inline-flex items-center gap-2 text-[#A47864] hover:text-[#8B6250] transition-colors font-body text-base py-2 min-h-[44px] font-medium"
            >
              Start with something like this <ArrowRight size={18} />
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
