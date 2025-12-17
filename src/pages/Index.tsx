import Hero from "@/components/site/Hero";
import Audience from "@/components/site/Audience";
import WorkGrid from "@/components/site/WorkGrid";
import Testimonials from "@/components/site/Testimonials";
import EmailCapture from "@/components/site/EmailCapture";
import Services from "@/components/site/Services";
import Pricing from "@/components/site/Pricing";
import Process from "@/components/site/Process";
import CTA from "@/components/site/CTA";
import SiteFooter from "@/components/site/SiteFooter";
import StickyHeader from "@/components/site/StickyHeader";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <StickyHeader />
      <Hero />
      <Audience />
      <WorkGrid />
      <Testimonials />
      <EmailCapture />
      <Services />
      <Pricing />
      <Process />
      <CTA />
      <SiteFooter />
    </main>
  );
};

export default Index;
