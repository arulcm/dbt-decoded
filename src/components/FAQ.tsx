import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the difference between Aadhaar linking and DBT enablement?",
      answer: "Aadhaar linking connects your Aadhaar number to your bank account for identity verification. DBT enablement goes further - it activates your account to receive direct government transfers like scholarships, subsidies, and pensions directly from the government."
    },
    {
      question: "Why is DBT enablement important for students?",
      answer: "DBT enablement ensures that scholarship money is transferred directly to your bank account without delays or middlemen. This makes the process faster, more transparent, and reduces the chances of fraud or delays in receiving your scholarship funds."
    },
    {
      question: "What documents do I need to enable DBT?",
      answer: "You need: (1) Original Aadhaar card, (2) Bank passbook or account statement, (3) Valid mobile number registered with Aadhaar, (4) DBT consent form (available at the bank). Some banks may require additional KYC documents."
    },
    {
      question: "How long does the DBT enablement process take?",
      answer: "Once you submit the required documents at your bank branch, DBT enablement typically takes 2-3 working days. You will receive an SMS confirmation once your account is successfully enabled for DBT transfers."
    },
    {
      question: "Can I enable DBT online?",
      answer: "Currently, most banks require you to visit the branch in person for DBT enablement due to regulatory requirements. However, some banks with advanced digital services may offer online DBT enablement through their mobile apps or websites."
    },
    {
      question: "What happens if my DBT status shows 'Not Aadhaar Seeded'?",
      answer: "This means your Aadhaar number is not linked to your bank account at all. You must first complete Aadhaar seeding by visiting your bank branch with original Aadhaar card and account details, then separately apply for DBT enablement."
    },
    {
      question: "Is there any cost for DBT enablement?",
      answer: "No, DBT enablement is completely free of cost. Banks cannot charge any fee for this service as it is mandated by the government. Be aware of any unofficial agents asking for money - always go directly to your bank branch."
    },
    {
      question: "What if I change my mobile number?",
      answer: "You must update your mobile number both with your bank and with UIDAI (Aadhaar). Visit your bank branch and an Aadhaar enrollment center to update the mobile number in both places to ensure uninterrupted DBT services."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Get answers to common questions about DBT and Aadhaar linking
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;