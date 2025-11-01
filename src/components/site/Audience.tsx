export default function Audience() {
  return (
    <section className="py-16 md:py-24 md:pt-28 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Who It's For</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">
          Built for big-hearted nonprofits that aren't ready to add staff.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
          If you're doing great work but no one has time to tell the story, this is for you.
        </p>
        <ul className="space-y-2 text-muted-foreground font-body mb-12">
          <li>• You owe donors an update and no one has time to write it</li>
          <li>• You have a campaign but nothing donor-ready</li>
          <li>• Your board wants "more communications" but didn't add staff</li>
        </ul>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Executive directors</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              You need someone to take the writing off your plate.
            </p>
          </div>
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-teal">Small teams</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              You need consistent, on-brand content without adding staff.
            </p>
          </div>
          <div className="space-y-3 py-4 md:py-0">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Consultants & fundraisers</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              You want a storytelling arm to deliver the pieces.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
