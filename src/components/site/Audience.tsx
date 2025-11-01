export default function Audience() {
  return (
    <section className="py-16 md:py-24 md:pt-28 px-4 md:px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">Who It's For</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-ink tracking-tight leading-tight">
          Made for big-hearted nonprofits not ready to hire.
        </h2>
        <p className="font-body text-lg md:text-xl text-muted-foreground mb-12">
          If you're doing great work but no one has time to tell the story, this is for you.
        </p>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Executive Directors</h3>
            <p className="font-body text-muted-foreground">
              Doing everything — program, fundraising, HR, comms — and need someone to take communications off your plate.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-teal">Small Teams</h3>
            <p className="font-body text-muted-foreground">
              The "slash" people (development/events/social/newsletter) who need consistent, on-brand content.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Fundraising Consultants</h3>
            <p className="font-body text-muted-foreground">
              Consultants who want a storytelling/content arm for client campaigns.
            </p>
          </div>
        </div>
        <ul className="mt-8 space-y-2 text-muted-foreground font-body">
          <li>• No one has time to write the update</li>
          <li>• You have a campaign but nothing donor-ready</li>
          <li>• Board wants "more communications" but didn't add staff</li>
        </ul>
      </div>
    </section>
  );
}
