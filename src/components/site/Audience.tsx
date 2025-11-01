export default function Audience() {
  return (
    <section className="py-16 md:py-24 md:pt-28 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Who It's For</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">
          Built for big-hearted nonprofits that aren't ready to add staff.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12 hidden md:block">
          If you're doing great work but no one has time to tell the story, this is for you.
        </p>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Executive directors</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              Running programs, fundraising, HR, and comms — and need someone to take the writing off your plate.
            </p>
          </div>
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-teal">Small teams</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              The "slash" people (development/events/social/newsletter) who need consistent, on-brand content.
            </p>
          </div>
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Consultants & fundraisers</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              You lead the strategy and want a storytelling/content arm to deliver the pieces.
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="font-heading text-xl font-semibold text-ink mb-4">You're in the right place if…</h3>
          <ul className="space-y-2 text-muted-foreground font-body">
            <li>• No one has time to write the update.</li>
            <li>• You have a campaign but nothing donor-ready.</li>
            <li>• The board wants "more communications" but didn't add staff.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
