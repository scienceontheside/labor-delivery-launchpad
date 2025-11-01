import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// UPDATE THIS with your Google Calendar Appointment Schedule booking link
// Create your appointment schedule at: https://calendar.google.com
// Then paste the public booking link here or set VITE_BOOKING_URL environment variable
const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

const taglines = [
  <>No cause too big.<br />No nonprofit too small.</>,
  "No mission too big. No budget too small.",
  "When DIY becomes WTF.",
  "Helping you deliver on your mission.",
  "Tiny team. Mighty message.",
  "For small teams doing big work.",
  "Big-agency thinking for nonprofit realities.",
  "We make your good work visible.",
  "Your mission, ready for donors.",
  "Because impact doesn't wait on headcount.",
];

const Index = () => {
  const [currentTagline] = useState(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground px-6 py-16 md:py-20 lg:py-24 overflow-hidden">
        {/* Geometric mid-century strips */}
        <div className="absolute top-0 right-[15%] w-2 h-full bg-accent-orange opacity-10 rotate-[15deg] pointer-events-none" />
        <div className="absolute top-0 right-[35%] w-16 h-full bg-accent-teal opacity-10 pointer-events-none" />
        <div className="absolute top-0 left-[20%] w-1 h-full bg-white opacity-10 rotate-[-15deg] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="max-w-3xl space-y-6">
            <h1 className="font-heading text-5xl md:text-7xl font-bold leading-none tracking-tight transition-all duration-700 animate-fade-in">
              {taglines[currentTagline]}
            </h1>
            <p className="font-body text-2xl md:text-3xl leading-snug">
              Story-first marketing for small teams with big missions.
            </p>
            <div className="flex flex-wrap gap-4">
              {/* Primary CTA */}
              <Button
                asChild
                className="bg-white text-[#A47864] px-8 py-4 rounded-full font-medium
                           hover:bg-white hover:ring-2 hover:ring-inset hover:ring-[#A47864]/35
                           transition-all duration-150"
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call <Calendar className="ml-2" />
                </a>
              </Button>

              {/* Secondary CTA */}
              <Button
                variant="outline"
                className="border-[#1E1A17]/40 text-[#1E1A17]
                           px-8 py-4 rounded-lg bg-transparent
                           hover:bg-[#1E1A17]/10
                           transition-all duration-150"
                onClick={() => scrollToSection("services")}
              >
                What we do →
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-cream rounded-t-[32px]" />
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-foreground tracking-tight leading-tight">
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

      {/* Work We've Delivered */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12 text-foreground tracking-tight leading-tight">
            Work we've delivered
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-sm uppercase tracking-widest text-accent-teal font-semibold mb-2">
                Small youth nonprofit
              </p>
              <h3 className="font-heading text-xl font-semibold mb-2">Donor update series</h3>
              <p className="font-body text-muted-foreground mb-4">
                3-email nurture + social posts to support a consultant-led appeal.
              </p>
              <Button 
                variant="ghost" 
                className="px-0" 
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Want something like this? <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-sm uppercase tracking-widest text-accent-orange font-semibold mb-2">
                Consultant partnership
              </p>
              <h3 className="font-heading text-xl font-semibold mb-2">Case → content</h3>
              <p className="font-body text-muted-foreground mb-4">
                Turned a fundraising case into email, social, and board talking points.
              </p>
              <Button 
                variant="ghost" 
                className="px-0" 
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Let's do this for your client <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <p className="text-sm uppercase tracking-widest text-accent-teal font-semibold mb-2">
                Startup nonprofit
              </p>
              <h3 className="font-heading text-xl font-semibold mb-2">Story & boilerplate</h3>
              <p className="font-body text-muted-foreground mb-4">
                Founder interview, origin story, and web copy to launch the org.
              </p>
              <Button 
                variant="ghost" 
                className="px-0" 
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  Book a call <ArrowRight className="ml-2" size={16} />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials / Social Proof */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-5xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-orange font-semibold mb-4">
            What leaders are saying
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight leading-tight">
            Trusted by small-but-mighty teams.
          </h2>
          <p className="font-body text-lg text-muted-foreground mb-10">
            Recommended by Twin Cities nonprofit and fundraising leaders.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {/* YMCA of the North */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center text-sm font-semibold text-accent-teal">
                  AB
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Alexandra B.</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Assoc. Director of Development, YMCA of the North
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground">
                "Titus understood both the fundraising side and the database side. He helped us turn
                Raiser's Edge data into donor-facing email and social that actually matched the campaign."
              </p>
            </div>

            {/* Westwood Community Church */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-orange/20 flex items-center justify-center text-sm font-semibold text-accent-orange">
                  JH
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Jason H.</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Executive Pastor, Westwood Community Church
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground">
                "He led a complex, multi-campus Sunday experience and kept the story consistent across
                live, digital, and print. That's exactly what small nonprofits need — someone to align
                the message and get it out."
              </p>
            </div>

            {/* Brave Fundraising / Heidi */}
            <div className="p-6 bg-card rounded-lg border border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent-teal/20 flex items-center justify-center text-sm font-semibold text-accent-teal">
                  HF
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">Heidi Freisinger</p>
                  <p className="font-body text-sm text-muted-foreground">
                    Consultant, Brave Fundraising
                  </p>
                </div>
              </div>
              <p className="font-body text-muted-foreground">
                "I could focus on the fundraising strategy because Titus handled the content and delivery.
                He's an easy plug-in partner for consultants working with small orgs."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section id="services" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-accent-teal font-semibold mb-4">Services</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">What we do</h2>
          <p className="font-body text-xl text-muted-foreground mb-12">Strategy in, content out.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Messaging & Story Capture</h3>
              <p className="font-body text-muted-foreground">
                We listen, ask the right questions, and shape your impact into donor-ready narratives.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Campaign & Donor Content</h3>
              <p className="font-body text-muted-foreground">
                Appeals, case statements, impact reports, and fundraising materials that move people to give.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-xl font-semibold mb-2 text-accent-orange">Social & Web Updates</h3>
              <p className="font-body text-muted-foreground">
                Consistent, on-brand content that keeps your community engaged and informed.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="font-heading text-xl font-semibold mb-2 text-accent-teal">Fractional Marketing Support</h3>
              <p className="font-body text-muted-foreground">
                Month-to-month partnership that scales with your needs—no full-time hire required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="process" className="py-24 px-6 bg-cream relative overflow-hidden">
        {/* Olivetti-style background word-stack */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-[0.03] select-none">
          <p className="font-heading text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter">LISTEN</p>
          <p className="font-heading text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter">SHAPE</p>
          <p className="font-heading text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter">DELIVER</p>
          <p className="font-heading text-[10rem] md:text-[15rem] font-bold leading-none tracking-tighter">REPEAT</p>
        </div>
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-sm uppercase tracking-widest text-accent-orange font-semibold mb-4">Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight leading-tight">How we'll work together</h2>
          <p className="font-body text-xl text-muted-foreground mb-16">A simple 4-step delivery model.</p>
          <div className="space-y-10 border-l-2 border-muted pl-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Listen</h3>
                <p className="font-body text-muted-foreground text-lg">
                  We capture your story—what you do, who you serve, and why it matters.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Shape</h3>
                <p className="font-body text-muted-foreground text-lg">
                  We make it donor-ready—clear, compelling, and connected to your goals.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Deliver</h3>
                <p className="font-body text-muted-foreground text-lg">
                  Content, campaigns, social—whatever you need to tell your story and raise support.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold mb-2 text-foreground">Repeat</h3>
                <p className="font-body text-muted-foreground text-lg">
                  Month-to-month support that grows with you—no long-term contracts, just ongoing partnership.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Button 
              variant="ghost" 
              className="text-lg"
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Ready to start? Book a call <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
            Let's talk about your good work.
          </h2>
          <p className="font-body text-xl text-muted-foreground">
            Whether you need a one-time campaign or ongoing support, we're here to help you tell your story.
          </p>
          <p className="font-body text-lg text-muted-foreground">
            Book a 30-minute call — available Monday–Thursday, 9 AM–3 PM CT
          </p>
          <Button 
            size="lg" 
            className="bg-white text-[#A47864] px-8 py-6 rounded-full font-medium text-lg
                       hover:bg-white hover:ring-2 hover:ring-inset hover:ring-[#A47864]/35
                       transition-all duration-150"
            asChild
          >
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
              Book a call
              <Calendar className="ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-heading font-semibold text-foreground mb-1 text-lg">Labor & Delivery</p>
              <p className="font-body text-sm text-muted-foreground">Story-first marketing for small teams with big missions.</p>
              <p className="font-body text-sm text-muted-foreground mt-1">titusdecker@gmail.com</p>
            </div>
            <Button 
              variant="outline"
              size="lg"
              asChild
            >
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                Book a call
                <Calendar className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
