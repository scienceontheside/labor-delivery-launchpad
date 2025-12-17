import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    // TODO: Connect to email service
    setIsSubmitted(true);
    toast({
      title: "Check your inbox!",
      description: "Your guide is on its way.",
    });
  };

  return (
    <section className="py-12 md:py-24 px-5 md:px-6 bg-cream border-t border-ink/5">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">
          Free Resource
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-ink tracking-tight leading-tight">
          5 Donor Communications You Can Ship This Month
        </h2>
        <p className="font-body text-base md:text-lg text-muted-foreground mb-8">
          A practical guide for time-strapped nonprofit teams. Get templates, timelines, and real examples.
        </p>

        {isSubmitted ? (
          <div className="bg-background/50 rounded-lg p-6">
            <p className="font-heading text-xl font-semibold text-accent-teal mb-2">You're all set!</p>
            <p className="font-body text-muted-foreground">Check your email for the guide.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-background border-ink/10 font-body"
              required
            />
            <Button 
              type="submit"
              className="bg-accent-orange hover:bg-accent-orange/90 text-white font-body whitespace-nowrap"
            >
              Download the Guide
            </Button>
          </form>
        )}

        <p className="font-body text-xs text-muted-foreground mt-4">
          We respect your inbox. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
