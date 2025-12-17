import { Calendar, Mail, Linkedin } from "lucide-react";

const BOOKING_URL =
  import.meta.env.VITE_BOOKING_URL ||
  "https://calendar.app.google/yrFu89XL25QduC6S6";

export default function SiteFooter() {
  return (
    <footer className="py-12 md:py-16 px-5 md:px-6 border-t border-ink/5">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-8 md:grid-cols-3 text-center md:text-left">
          {/* Left - Brand */}
          <div>
            <p className="font-heading text-lg font-semibold text-foreground">Labor & Delivery</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Nonprofit Communications</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Minneapolis, MN</p>
          </div>

          {/* Center - Contact */}
          <div className="flex flex-col gap-2">
            <a 
              href="mailto:hello@laboranddelivery.org"
              aria-label="Email Labor & Delivery at hello@laboranddelivery.org"
              className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@laboranddelivery.org
            </a>
            <a 
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book a call with Labor & Delivery"
              className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              Book a call
            </a>
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Labor & Delivery on LinkedIn"
              className="inline-flex items-center justify-center md:justify-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-body"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
            </a>
          </div>

          {/* Right - Hours */}
          <div className="md:text-right">
            <p className="font-body text-sm text-muted-foreground">Monday–Thursday</p>
            <p className="font-body text-sm text-muted-foreground mt-1">9 AM – 3 PM Central</p>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="mt-10 pt-6 border-t border-ink/5 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Labor & Delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
