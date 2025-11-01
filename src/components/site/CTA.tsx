import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CTA() {
  return (
    <>
      {/* Why Labor & Delivery */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight">Early-stage care for the work that matters most.</h2>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto">
            We know what it's like to do everything with nothing. That's why we built Labor & Delivery — high-care, early-stage support for small teams with big missions.
          </p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-16 md:py-24 px-4 md:px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Let's talk about your good work.
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Bring one thing you need to send — we'll start there.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <CTAButtons
              primaryText="Book a 30-minute call"
              secondaryText="What we do"
              secondaryAction={() => scrollToSection("services")}
              className="justify-center"
            />
            <p className="font-body text-sm text-muted-foreground">
              Monday–Thursday · 9–3 PM CT
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
