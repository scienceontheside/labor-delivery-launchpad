import { CTAButtons } from "@/components/ui/CTAButtons";

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CTA() {
  return (
    <>
      {/* Contact / CTA */}
      <section id="contact" className="py-12 md:py-24 px-5 md:px-6 bg-cream">
        <div className="max-w-2xl mx-auto text-center space-y-5 md:space-y-6">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-tight">
            Let's tell the story of your good work.
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            One quick call. 1–2 pieces shipped first.
          </p>
          <div className="pt-4 flex flex-col items-center gap-4">
            <CTAButtons
              primaryText="Book a call"
              showSecondary={false}
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