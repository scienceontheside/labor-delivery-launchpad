export default function SiteFooter() {
  return (
    <footer className="py-12 px-6 border-t border-ink/5">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-center md:text-left">
          <div>
            <p className="font-display text-lg text-foreground">Labor & Delivery</p>
            <p className="font-body text-sm text-muted-foreground mt-1">Nonprofit Communications</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-muted-foreground">
            <a 
              href="mailto:hello@laboranddelivery.co" 
              className="hover:text-foreground transition-colors"
            >
              hello@laboranddelivery.co
            </a>
            <span>Saint Paul, MN</span>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-ink/5 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2024 Labor & Delivery
          </p>
        </div>
      </div>
    </footer>
  );
}
