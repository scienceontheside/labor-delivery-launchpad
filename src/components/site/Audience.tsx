export default function Audience() {
  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs uppercase tracking-[0.4em] text-accent-orange font-semibold mb-4 font-body">Who It's For</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-ink tracking-tight leading-tight">
          Made for nonprofits not ready to hire.
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Executive Directors</h3>
            <p className="font-body text-muted-foreground">
              Doing everything—program, fundraising, HR, comms—and need someone to take marketing off your plate.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-teal">Small Teams</h3>
            <p className="font-body text-muted-foreground">
              The "slash" people handling development + events + social + newsletter who need content support.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="font-heading text-xl font-semibold text-accent-orange">Fundraising Consultants</h3>
            <p className="font-body text-muted-foreground">
              Looking for a content creation partner to be the storytelling arm of your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
