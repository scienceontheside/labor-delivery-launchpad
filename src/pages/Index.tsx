import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

// UPDATE THIS with your Google Calendar Appointment Schedule booking link
// Create your appointment schedule at: https://calendar.google.com
// Then paste the public booking link here (e.g., https://calendar.google.com/calendar/u/0/appointments/...)
const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID";

const taglines = [
  "No cause too big. No nonprofit too small.",
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
  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 gradient-shimmer text-primary-foreground texture-overlay overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight transition-all duration-700 animate-fade-in min-h-[8rem] md:min-h-[12rem] flex items-end justify-center max-w-4xl mx-auto">
            {taglines[currentTagline]}
          </h1>
          <p className="text-2xl md:text-3xl font-medium text-primary-foreground/95 drop-shadow-lg">
            Story-first marketing for small teams with big missions.
          </p>
          <p className="text-lg text-primary-foreground/90 drop-shadow">
            Grab time with Titus — talk about your nonprofit's story
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 hover-scale shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Let's talk
              <Calendar className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover-scale shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              onClick={() => scrollToSection("how-it-works")}
            >
              How it works
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
            Made for nonprofits not ready to hire.
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">Executive Directors</h3>
              <p className="text-muted-foreground">
                Doing everything—program, fundraising, HR, comms—and need someone to take marketing off your plate.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">Small Teams</h3>
              <p className="text-muted-foreground">
                The "slash" people handling development + events + social + newsletter who need content support.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-primary">Fundraising Consultants</h3>
              <p className="text-muted-foreground">
                Looking for a content creation partner to be the storytelling arm of your work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">What we do</h2>
          <p className="text-xl text-muted-foreground mb-12">Strategy in, content out.</p>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Messaging & Story Capture</h3>
              <p className="text-muted-foreground">
                We listen, ask the right questions, and shape your impact into donor-ready narratives.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Campaign & Donor Content</h3>
              <p className="text-muted-foreground">
                Appeals, case statements, impact reports, and fundraising materials that move people to give.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Social & Web Updates</h3>
              <p className="text-muted-foreground">
                Consistent, on-brand content that keeps your community engaged and informed.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2 text-primary">Fractional Marketing Support</h3>
              <p className="text-muted-foreground">
                Month-to-month partnership that scales with your needs—no full-time hire required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-foreground">How it works</h2>
          <div className="space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Listen</h3>
                <p className="text-muted-foreground text-lg">
                  We capture your story—what you do, who you serve, and why it matters.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Shape</h3>
                <p className="text-muted-foreground text-lg">
                  We make it donor-ready—clear, compelling, and connected to your goals.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Deliver</h3>
                <p className="text-muted-foreground text-lg">
                  Content, campaigns, social—whatever you need to tell your story and raise support.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                4
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2 text-foreground">Repeat</h3>
                <p className="text-muted-foreground text-lg">
                  Month-to-month support that grows with you—no long-term contracts, just ongoing partnership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Labor & Delivery */}
      <section className="py-24 px-6 gradient-feather text-primary-foreground texture-overlay relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">No mission too big. No budget too small.</h2>
          <p className="text-xl md:text-2xl opacity-95 max-w-2xl mx-auto drop-shadow">
            We were there at the beginning. We know what it's like to do everything with nothing. 
            That's why we built Labor & Delivery—high-care, early-stage support for the work that matters most.
          </p>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6 bg-background">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Let's talk about your good work.
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you need a one-time campaign or ongoing support, we're here to help you tell your story.
          </p>
          <p className="text-lg text-muted-foreground">
            Book a 30-minute call — available Monday–Thursday, 9 AM–3 PM CT
          </p>
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => window.open(BOOKING_URL, '_blank')}
          >
            Book a call
            <Calendar className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="font-semibold text-foreground mb-1 text-lg">Labor & Delivery</p>
              <p className="text-sm text-muted-foreground">Story-first marketing for small teams with big missions.</p>
              <p className="text-sm text-muted-foreground mt-1">titusdecker@gmail.com</p>
            </div>
            <Button 
              variant="outline"
              size="lg"
              className="hover-scale"
              onClick={() => window.open(BOOKING_URL, '_blank')}
            >
              Book a call
              <Calendar className="ml-2" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
