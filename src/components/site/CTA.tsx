import { LDButton } from "@/components/ui/ld-button";
import { Calendar } from "lucide-react";

export default function CTA() {
  return (
    <>
      {/* Why Labor & Delivery */}
      <section className="py-24 px-6 bg-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight leading-tight">Early-stage care for the work that matters most.</h2>
          <p className="font-body text-xl md:text-2xl max-w-2xl mx-auto">
            We know what it's like to do everything with nothing. That's why we built Labor & Delivery — high-care, early-stage support for small teams with big missions.
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
            <strong>Book a 30-minute call — available Monday–Thursday, 9 AM–3 PM CT.</strong>
          </p>
          <div className="pt-4">
          <LDButton asChild variant="primary">
            <a href="https://calendar.app.google/yrFu89XL25QduC6S6" target="_blank" rel="noopener noreferrer">
              Book a call <Calendar className="h-5 w-5" />
            </a>
          </LDButton>
          </div>
        </div>
      </section>
    </>
  );
}
