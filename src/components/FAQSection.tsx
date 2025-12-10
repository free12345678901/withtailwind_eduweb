import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is the certification valid and recognized?",
    answer: "Yes! Our certificate is issued by a government-registered institute and is recognized across India. It's valuable for both job applications and career advancement.",
  },
  {
    question: "Do you provide practical GST training?",
    answer: "Absolutely! We provide 100% practical training including real GST invoice creation, filing procedures, GSTR-1 and GSTR-3B preparation, and compliance management.",
  },
  {
    question: "What are the online class timings?",
    answer: "We offer flexible batch timings including morning, afternoon, and evening sessions to accommodate students and working professionals. You can choose the batch that suits your schedule.",
  },
  {
    question: "Is job assistance really provided?",
    answer: "Yes! We provide comprehensive job assistance including resume preparation, interview tips, and connecting you with our network of recruiters. Many of our students get placed within weeks of course completion.",
  },
  {
    question: "What if I miss a class?",
    answer: "No worries! All live sessions are recorded and made available to students. You can watch the recording at your convenience. Plus, we offer doubt-solving sessions for extra support.",
  },
  {
    question: "Do I need prior accounting knowledge?",
    answer: "Not at all! Our course starts from basics and gradually moves to advanced topics. We cover fundamental accounting concepts before moving to Tally and GST.",
  },
  {
    question: "Can I get a demo class before enrolling?",
    answer: "Yes! Contact us on WhatsApp at 9978186631 to schedule a free demo class. Experience our teaching methodology before making a decision.",
  },
  {
    question: "What software version is taught?",
    answer: "We teach Tally Prime, the latest version. You'll learn all modern features and functionalities required in today's business environment.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers!
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="border-2 border-border rounded-xl overflow-hidden shadow-soft bg-card animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <AccordionTrigger className="px-4 py-3 sm:px-6 sm:py-4 hover:bg-secondary/50 transition-smooth text-left">
                  <span className="text-base sm:text-lg font-semibold text-foreground pr-2 sm:pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 sm:px-6 sm:py-4 bg-muted/20">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
