import Hero from "@/components/site/Hero";
import Audience from "@/components/site/Audience";
import WorkGrid from "@/components/site/WorkGrid";
import Testimonials from "@/components/site/Testimonials";
import Services from "@/components/site/Services";
import Process from "@/components/site/Process";
import CTA from "@/components/site/CTA";
import SiteFooter from "@/components/site/SiteFooter";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Audience />
      <WorkGrid />
      <Testimonials />
      <Services />
      <Process />
      <CTA />
      <SiteFooter />
    </main>
  );
};

export default Index;
