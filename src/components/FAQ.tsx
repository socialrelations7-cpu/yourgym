"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are your opening hours?",
    answer: "We are open 24/7 for Pro and Elite members. Basic members have access from 8:00 AM to 8:00 PM daily."
  },
  {
    question: "Do I need to bring my own towel?",
    answer: "We provide complimentary towel service for Elite members. Basic and Pro members are encouraged to bring their own, or can rent one for a small fee."
  },
  {
    question: "Can I freeze my membership?",
    answer: "Yes, you can freeze your membership for up to 3 months per year for a small administrative fee. Please contact the front desk for details."
  },
  {
    question: "Are personal trainers included?",
    answer: "Pro members get 1 complimentary session per month. Elite members have unlimited access to private training areas. Individual sessions can be booked separately."
  },
  {
    question: "Is there a joining fee?",
    answer: "We currently have a New Year special with $0 joining fee for all annual memberships! Standard joining fees apply for month-to-month plans."
  }
];

const FAQ = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Got Questions?</h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              Everything you need to know about joining Gymania. Can't find what you're looking for? Feel free to reach out to our support team.
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="font-black uppercase italic mb-2">Still need help?</h4>
              <p className="text-sm text-muted-foreground mb-4">Our team is available 24/7 to assist you with any inquiries.</p>
              <a href="mailto:support@gymania.com" className="text-primary font-bold hover:underline">support@gymania.com</a>
            </div>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-none bg-muted/30 px-6 rounded-2xl">
                <AccordionTrigger className="hover:no-underline py-6 font-bold text-left uppercase italic tracking-tight">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
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