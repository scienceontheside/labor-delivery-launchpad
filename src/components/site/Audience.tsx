export default function Audience() {
  return (
    <section className="max-w-[1180px] mx-auto px-5 md:px-10 lg:px-16 py-14">
      <p className="text-accent-orange text-[0.8rem] tracking-[0.32em] uppercase mb-4 font-body">Who it's for</p>
      
      <div className="max-w-[720px] space-y-4 mb-8">
        <h2 className="font-heading text-[2.25rem] font-semibold leading-[1.05] text-ink tracking-tight">
          Built for big-hearted nonprofits that aren't ready to add staff.
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">
          If you're doing great work but no one has time to tell the story, this is for you.
        </p>
      </div>
      
      <ul className="space-y-3 mb-12">
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-orange flex-shrink-0" />
          <span className="text-muted-foreground font-body">
            You owe donors an update and no one has time to write it
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-orange flex-shrink-0" />
          <span className="text-muted-foreground font-body">
            You have a campaign but nothing donor-ready
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-orange flex-shrink-0" />
          <span className="text-muted-foreground font-body">
            Your board asked for "more communications" but you can't add a person
          </span>
        </li>
      </ul>
      
      <div className="grid gap-8 md:grid-cols-3 mb-10">
        <div className="space-y-2 max-w-[320px]">
          <h3 className="font-heading text-lg font-semibold text-accent-orange">
            Executive directors
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            Running programs, fundraising, HR, and comms — and need someone to take the comms off your plate.
          </p>
        </div>
        
        <div className="space-y-2 max-w-[320px]">
          <h3 className="font-heading text-lg font-semibold text-accent-teal">
            Small teams
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            The "slash" people (development/events/social/newsletter) who need consistent, on-brand content.
          </p>
        </div>
        
        <div className="space-y-2 max-w-[320px]">
          <h3 className="font-heading text-lg font-semibold text-accent-orange">
            Consultants &amp; fundraisers
          </h3>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed">
            You lead the strategy and want a content arm that can move fast with you.
          </p>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground font-body">
        Built in partnership with leaders like you.
      </p>
    </section>
  );
}
