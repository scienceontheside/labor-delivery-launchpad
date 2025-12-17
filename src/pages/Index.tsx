import Hero from "@/components/site/Hero";
import Audience from "@/components/site/Audience";
import WorkGrid from "@/components/site/WorkGrid";
import Testimonials from "@/components/site/Testimonials";
import EmailCapture from "@/components/site/EmailCapture";
import Services from "@/components/site/Services";
import Pricing from "@/components/site/Pricing";
import Process from "@/components/site/Process";
import FAQ from "@/components/site/FAQ";
import CTA from "@/components/site/CTA";
import SiteFooter from "@/components/site/SiteFooter";
import StickyHeader from "@/components/site/StickyHeader";

const Index = () => {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent-orange focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-body focus:font-medium focus:outline-none"
      >
        Skip to main content
      </a>
      <main className="min-h-screen bg-background">
        <StickyHeader />
        <div id="main-content">
          <Hero />
          <Audience />
          <WorkGrid />
          <Testimonials />
          <EmailCapture />
          <Services />
          <Pricing />
          <Process />
          <FAQ />
          <CTA />
          <SiteFooter />
        </div>
      </main>
    </>
  );
};

export default Index;
