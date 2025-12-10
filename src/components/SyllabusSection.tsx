import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const syllabusModules = [
  {
    title: "Tally Prime Basics",
    topics: ["Introduction to Tally Prime", "Company Creation & Configuration", "Gateway of Tally Navigation", "Basic Accounting Concepts"],
  },
  {
    title: "Ledgers & Groups",
    topics: ["Creating Ledgers", "Managing Groups", "Chart of Accounts", "Opening Balances Entry"],
  },
  {
    title: "GST Billing & Compliance",
    topics: ["GST Configuration in Tally", "GST Invoice Creation", "GST Reports & Returns", "GSTR-1, GSTR-3B Filing"],
  },
  {
    title: "Inventory Management",
    topics: ["Stock Groups & Categories", "Godown Management", "Purchase & Sales Orders", "Stock Reports & Analysis"],
  },
  {
    title: "Payroll Management",
    topics: ["Employee Master Creation", "Salary Structure Setup", "Payroll Processing", "Statutory Compliance (PF, ESI)"],
  },
  {
    title: "Bank Reconciliation",
    topics: ["Bank Account Setup", "Payment Gateway Integration", "Cheque Management", "Auto Bank Reconciliation"],
  },
  {
    title: "Reports & Balance Sheet",
    topics: ["Financial Statements", "Trial Balance", "Profit & Loss Account", "Balance Sheet Analysis"],
  },
  {
    title: "Real Company Practice",
    topics: ["Live Project Work", "Complete Company Accounting", "Month-End Closing", "Year-End Procedures"],
  },
];

const SyllabusSection = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Complete Course Syllabus
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Structured curriculum from fundamentals to advanced practical applications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            {syllabusModules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 border-border rounded-xl overflow-hidden shadow-soft bg-card animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="px-4 py-3 sm:px-6 sm:py-4 hover:bg-secondary/50 transition-smooth">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="bg-gradient-cta text-white font-bold w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-medium text-base sm:text-lg">
                      {index + 1}
                    </span>
                    <span className="text-base sm:text-lg font-semibold text-left">{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 py-3 sm:px-6 sm:py-4 bg-muted/30">
                  <ul className="space-y-1 sm:space-y-2">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-brand-magenta mt-1 text-sm sm:text-base">✓</span>
                        <span className="text-muted-foreground text-sm sm:text-base">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default SyllabusSection;
