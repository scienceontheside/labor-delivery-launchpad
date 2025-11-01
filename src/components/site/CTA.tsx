import { BookCallButton } from "@/components/ui/BookCallButton";

export default function CTA() {
  return (
    <>
      {/* Why Labor & Delivery */}
      <section className="py-24 px-6 bg-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight">No mission too big. No budget too small.</h2>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto">
            We know what it's like to do everything with nothing. 
            That's why we built Labor & Delivery—high-care, early-stage support for the work that matters most.
          </p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-ink tracking-tight leading-tight">
            Let's talk about your good work.
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Whether you need a one-time campaign or ongoing support, we're here to help you tell your story.
          </p>
          <p className="font-body text-lg text-muted-foreground">
            Book a 30-minute call — available Monday–Thursday, 9 AM–3 PM CT
          </p>
          <div className="pt-4">
            <BookCallButton variant="primary" className="px-8 py-6 text-lg" />
          </div>
        </div>
      </section>
    </>
  );
}
