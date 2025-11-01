import { BookCallButton } from "@/components/ui/BookCallButton";

export default function SiteFooter() {
  return (
    <footer className="py-12 px-4 md:px-6 border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading font-semibold text-ink mb-1 text-lg">Labor & Delivery</p>
            <p className="font-body text-sm text-muted-foreground">Story & donor communications for nonprofits not ready to hire.</p>
            <p className="font-body text-sm text-muted-foreground mt-1">titusdecker@gmail.com</p>
          </div>
          <BookCallButton variant="ghost">Book a call</BookCallButton>
        </div>
      </div>
    </footer>
  );
}
