import { LDButton } from "@/components/ui/ld-button";
import { Calendar } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-semibold text-ink mb-1 text-lg">Labor & Delivery</p>
            <p className="font-body text-sm text-muted-foreground">Story & donor communications for nonprofits not ready to hire.</p>
            <p className="font-body text-sm text-muted-foreground mt-1">titusdecker@gmail.com</p>
          </div>
          <LDButton asChild variant="primary">
            <a href="https://calendar.app.google/yrFu89XL25QduC6S6" target="_blank" rel="noopener noreferrer">
              Book a call <Calendar className="h-5 w-5" />
            </a>
          </LDButton>
        </div>
      </div>
    </footer>
  );
}
