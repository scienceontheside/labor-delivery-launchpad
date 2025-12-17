import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Check, Loader2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const MAILCHIMP_URL = import.meta.env.VITE_MAILCHIMP_URL || "https://laboranddelivery.us20.list-manage.com/subscribe/post-json?u=e64041b30f4215d10c78d28c1&id=a930281675&c=?";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const callbackRef = useRef<string>("");

  // Cleanup JSONP callback on unmount
  useEffect(() => {
    return () => {
      if (callbackRef.current && (window as any)[callbackRef.current]) {
        delete (window as any)[callbackRef.current];
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Create unique callback name
    const callbackName = `mailchimpCallback_${Date.now()}`;
    callbackRef.current = callbackName;

    // Create JSONP callback
    (window as any)[callbackName] = (response: { result: string; msg: string }) => {
      setIsSubmitting(false);
      
      if (response.result === "success") {
        setIsSubmitted(true);
        toast({
          title: "Check your inbox!",
          description: "Your guide is on its way.",
        });
      } else {
        // Handle "already subscribed" as success
        if (response.msg.includes("already subscribed")) {
          setIsSubmitted(true);
          toast({
            title: "You're already subscribed!",
            description: "Check your inbox for the guide.",
          });
        } else {
          toast({
            title: "Something went wrong",
            description: response.msg.replace(/<[^>]*>/g, ""),
            variant: "destructive",
          });
        }
      }

      // Cleanup
      delete (window as any)[callbackName];
    };

    // Build URL and submit via JSONP
    const url = `${MAILCHIMP_URL.replace("c=?", `c=${callbackName}`)}&EMAIL=${encodeURIComponent(email)}`;
    
    const script = document.createElement("script");
    script.src = url;
    script.onerror = () => {
      setIsSubmitting(false);
      toast({
        title: "Connection error",
        description: "Please try again.",
        variant: "destructive",
      });
      delete (window as any)[callbackName];
    };
    document.body.appendChild(script);
    script.remove();
  };

  return (
    <section
      ref={ref}
      className={`py-12 md:py-24 px-5 md:px-6 bg-cream border-t border-ink/5 transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
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
          <div className="bg-accent-teal/10 border border-accent-teal/20 rounded-xl p-8 animate-fade-in">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-teal/20 mb-4">
              <Check className="w-7 h-7 text-accent-teal" strokeWidth={3} />
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-accent-teal mb-2">You're all set!</p>
            <p className="font-body text-base md:text-lg text-muted-foreground">Check your email in the next 5 minutes.</p>
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
              disabled={isSubmitting}
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-accent-orange hover:bg-accent-orange/90 text-white font-body whitespace-nowrap min-w-[160px]"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Download the Guide"
              )}
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
