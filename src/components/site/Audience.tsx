export default function Audience() {
  return (
    <section
      className="
        max-w-[1180px]
        mx-auto
        px-5
        md:px-10
        lg:px-16
        py-14
        bg-[hsl(var(--background))]
      "
    >
      {/* label */}
      <p className="text-[hsl(var(--accent-orange))] text-[0.8rem] tracking-[0.32em] uppercase mb-4">
        Who it's for
      </p>

      {/* title and intro */}
      <div className="max-w-[720px] space-y-4 mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.1] font-semibold text-[hsl(var(--foreground))]">
          Built for big-hearted nonprofits that aren't ready to add staff.
        </h2>
        <p className="text-base md:text-lg text-[hsl(var(--muted-foreground))] leading-relaxed">
          If you're doing great work but no one has time to tell the story, this is for you.
        </p>
      </div>

      {/* soft bullets */}
      <ul className="space-y-3 mb-12">
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-orange))]" />
          <span className="text-[hsl(var(--muted-foreground))]">
            You owe donors an update and no one has time to write it
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-orange))]" />
          <span className="text-[hsl(var(--muted-foreground))]">
            You have a campaign but nothing donor-ready
          </span>
        </li>
        <li className="flex gap-3 items-start">
          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent-orange))]" />
          <span className="text-[hsl(var(--muted-foreground))]">
            Your board asked for "more communications" but you can't add a person
          </span>
        </li>
      </ul>

      {/* 3 audience columns */}
      <div className="grid gap-8 md:grid-cols-3">
        {/* 1 */}
        <div className="space-y-2">
          <h3 className="text-[hsl(var(--accent-orange))] font-semibold text-lg">
            Executive directors
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm md:text-base">
            Running programs, fundraising, HR, and comms — and need someone to take the comms off your plate.
          </p>
        </div>

        {/* 2 */}
        <div className="space-y-2">
          <h3 className="text-[hsl(var(--accent-green))] font-semibold text-lg">
            Small teams
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm md:text-base">
            The "slash" people (development/events/social/newsletter) who need consistent, on-brand content.
          </p>
        </div>

        {/* 3 */}
        <div className="space-y-2">
          <h3 className="text-[hsl(var(--accent-orange))] font-semibold text-lg">
            Consultants &amp; fundraisers
          </h3>
          <p className="text-[hsl(var(--muted-foreground))] leading-relaxed text-sm md:text-base">
            You lead the strategy and want a content arm that can move fast with you.
          </p>
        </div>
      </div>

      {/* partnership line */}
      <p className="mt-10 text-sm text-[hsl(var(--muted-foreground))]">
        Built in partnership with leaders like you.
      </p>
    </section>
  );
}
