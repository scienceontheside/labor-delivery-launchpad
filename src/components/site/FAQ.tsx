import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const faqs = [
  {
    question: "How fast can you deliver?",
    answer: "First drafts typically arrive within 3-5 business days. Rush projects available for active campaigns.",
  },
  {
    question: "Do you write in our organization's voice?",
    answer: "Yes. We start every project with a 30-minute conversation where we listen to how you talk about your work. Then we match it.",
  },
  {
    question: "What if you don't nail our voice?",
    answer: "We rewrite it free. That's our Voice Guarantee—no questions asked.",
  },
  {
    question: "What if we need revisions?",
    answer: "One round of revisions is included with every project. Most pieces need minimal tweaking because we listen carefully upfront.",
  },
  {
    question: "Can we start small?",
    answer: "Absolutely. Most partnerships start with 1-2 pieces. Once you see the quality and speed, you can add more.",
  },
  {
    question: "Do you work with consultants?",
    answer: "Yes! We're an easy plug-in partner for fundraising consultants who need content support for their clients. White-label available.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`py-12 md:py-24 px-5 md:px-6 bg-background border-t border-ink/5 transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-accent-orange font-semibold mb-4 font-body">
          Questions
        </p>
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-ink tracking-tight leading-tight">
          Frequently Asked
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-ink/10"
            >
              <AccordionTrigger className="font-heading text-left text-base md:text-lg font-semibold text-ink">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
