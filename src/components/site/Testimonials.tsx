import { Panel } from "@/components/ui/Panel";

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-4 font-body">
          What leaders are saying
        </p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-ink tracking-tight leading-tight">
          Trusted by big-hearted, short-on-time teams.
        </h2>
        <p className="font-body text-lg text-ink/60 mb-10">
          Recommended by Twin Cities nonprofit and fundraising leaders.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* YMCA of the North */}
          <Panel>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center text-sm font-semibold text-accent-teal">
                AB
              </div>
              <div>
                <p className="font-heading font-semibold text-ink">Alexandra B.</p>
                <p className="font-body text-sm text-muted-foreground">
                  Assoc. Director of Development, YMCA of the North
                </p>
              </div>
            </div>
            <p className="font-body text-muted-foreground">
              "Titus understood both the fundraising side and the database side. He helped us turn
              Raiser's Edge data into donor-facing email and social that actually matched the campaign. <strong>We were able to send the series in two weeks.</strong>"
            </p>
          </Panel>

          {/* Westwood Community Church */}
          <Panel>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-sm font-semibold text-accent-orange">
                JH
              </div>
              <div>
                <p className="font-heading font-semibold text-ink">Jason H.</p>
                <p className="font-body text-sm text-muted-foreground">
                  Executive Pastor, Westwood Community Church
                </p>
              </div>
            </div>
            <p className="font-body text-muted-foreground">
              "He led a complex, multi-campus Sunday experience and kept the story consistent across
              live, digital, and print. That's exactly what small nonprofits need — someone to align
              the message and get it out. <strong>It took work off our staff right away.</strong>"
            </p>
          </Panel>

          {/* Brave Fundraising / Heidi */}
          <Panel>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center text-sm font-semibold text-accent-teal">
                HF
              </div>
              <div>
                <p className="font-heading font-semibold text-ink">Heidi Freisinger</p>
                <p className="font-body text-sm text-muted-foreground">
                  Consultant, Brave Fundraising
                </p>
              </div>
            </div>
            <p className="font-body text-muted-foreground">
              "I could focus on the fundraising strategy because Titus handled the content and delivery.
              He's an easy plug-in partner for consultants working with small orgs. <strong>My client got better content, faster.</strong>"
            </p>
          </Panel>
        </div>
      </div>
    </section>
  );
}
