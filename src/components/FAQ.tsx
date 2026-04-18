"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";

const FAQ = () => {
  const { t, language } = useLanguage();

  const faqs = [
    {
      question: language === 'el' ? "Ποιες είναι οι ώρες λειτουργίας;" : "What are your opening hours?",
      answer: language === 'el' 
        ? "Είμαστε ανοιχτά 24/7 για τα μέλη Pro και Elite. Τα μέλη Basic έχουν πρόσβαση από τις 8:00 π.μ. έως τις 8:00 μ.μ. καθημερινά."
        : "We are open 24/7 for Pro and Elite members. Basic members have access from 8:00 AM to 8:00 PM daily."
    },
    {
      question: language === 'el' ? "Πρέπει να φέρω τη δική μου πετσέτα;" : "Do I need to bring my own towel?",
      answer: language === 'el'
        ? "Παρέχουμε δωρεάν υπηρεσία πετσετών για τα μέλη Elite. Τα μέλη Basic και Pro ενθαρρύνονται να φέρουν τη δική τους ή μπορούν να νοικιάσουν μία."
        : "We provide complimentary towel service for Elite members. Basic and Pro members are encouraged to bring their own, or can rent one for a small fee."
    },
    {
      question: language === 'el' ? "Μπορώ να παγώσω τη συνδρομή μου;" : "Can I freeze my membership?",
      answer: language === 'el'
        ? "Ναι, μπορείτε να παγώσετε τη συνδρομή σας για έως και 3 μήνες το χρόνο με μια μικρή χρέωση διαχείρισης."
        : "Yes, you can freeze your membership for up to 3 months per year for a small administrative fee. Please contact the front desk for details."
    },
    {
      question: language === 'el' ? "Περιλαμβάνονται προσωπικοί προπονητές;" : "Are personal trainers included?",
      answer: language === 'el'
        ? "Τα μέλη Pro έχουν 1 δωρεάν συνεδρία το μήνα. Τα μέλη Elite έχουν απεριόριστη πρόσβαση σε ιδιωτικούς χώρους προπόνησης."
        : "Pro members get 1 complimentary session per month. Elite members have unlimited access to private training areas. Individual sessions can be booked separately."
    }
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">{t('faq.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
              {language === 'el' ? "Συχνές " : "Frequently Asked "}
              <span className="text-primary">{language === 'el' ? "Ερωτήσεις" : "Questions"}</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-8">
              {t('faq.desc')}
            </p>
            <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
              <h4 className="font-black uppercase italic mb-2">{t('faq.helpTitle')}</h4>
              <p className="text-sm text-muted-foreground mb-4">{t('faq.helpDesc')}</p>
              <a href="mailto:support@yourgym.com" className="text-primary font-bold hover:underline">support@yourgym.com</a>
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