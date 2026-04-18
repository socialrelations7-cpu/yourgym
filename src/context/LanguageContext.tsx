"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'el';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.classes': 'Classes',
    'nav.membership': 'Membership',
    'nav.trainers': 'Trainers',
    'nav.contact': 'Contact',
    'nav.join': 'Join Now',
    // Hero
    'hero.special': 'New Year Special: 50% Off',
    'hero.title1': 'Unleash Your',
    'hero.title2': 'Inner Beast.',
    'hero.desc': 'Experience the ultimate fitness destination. World-class equipment, expert trainers, and a community that pushes you to your limits.',
    'hero.cta1': 'Start Your Journey',
    'hero.cta2': 'Watch Tour',
    'hero.feat1': '24/7 Access',
    'hero.feat2': 'Expert Coaches',
    'hero.feat3': 'Modern Equipment',
    // Stats
    'stats.members': 'Active Members',
    'stats.trainers': 'Expert Trainers',
    'stats.classes': 'Fitness Classes',
    'stats.locations': 'Gym Locations',
    // Classes
    'classes.subtitle': 'Our Programs',
    'classes.title': 'Push Your Limits',
    'classes.desc': 'From high-intensity interval training to mindful yoga, we offer a diverse range of classes designed for every fitness level.',
    // Pricing
    'pricing.subtitle': 'Membership',
    'pricing.title': 'Choose Your Plan',
    'pricing.desc': 'Flexible membership options designed to fit your lifestyle and fitness goals. No hidden fees, just results.',
    'pricing.getStarted': 'Get Started',
    'pricing.popular': 'Most Popular',
    // FAQ
    'faq.subtitle': 'Got Questions?',
    'faq.title': 'Frequently Asked Questions',
    'faq.desc': "Everything you need to know about joining YOURGYM. Can't find what you're looking for? Feel free to reach out to our support team.",
    'faq.helpTitle': 'Still need help?',
    'faq.helpDesc': 'Our team is available 24/7 to assist you with any inquiries.',
    // Contact
    'contact.title': 'Get In Touch',
    'contact.desc': 'Ready to start your transformation? Send us a message or visit us at our main location.',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': "Message sent! We'll get back to you shortly.",
  },
  el: {
    // Navbar
    'nav.home': 'Αρχική',
    'nav.classes': 'Μαθήματα',
    'nav.membership': 'Συνδρομές',
    'nav.trainers': 'Προπονητές',
    'nav.contact': 'Επικοινωνία',
    'nav.join': 'Εγγραφή',
    // Hero
    'hero.special': 'Προσφορά Νέου Έτους: -50%',
    'hero.title1': 'Απελευθερώστε το',
    'hero.title2': 'Θηρίο Μέσα σας.',
    'hero.desc': 'Ζήστε την απόλυτη εμπειρία fitness. Εξοπλισμός παγκόσμιας κλάσης, έμπειροι προπονητές και μια κοινότητα που σας ωθεί στα όριά σας.',
    'hero.cta1': 'Ξεκινήστε Τώρα',
    'hero.cta2': 'Δείτε το Χώρο',
    'hero.feat1': '24/7 Πρόσβαση',
    'hero.feat2': 'Έμπειροι Coaches',
    'hero.feat3': 'Σύγχρονος Εξοπλισμός',
    // Stats
    'stats.members': 'Ενεργά Μέλη',
    'stats.trainers': 'Έμπειροι Προπονητές',
    'stats.classes': 'Προγράμματα',
    'stats.locations': 'Τοποθεσίες',
    // Classes
    'classes.subtitle': 'Τα Προγράμματά μας',
    'classes.title': 'Ξεπεράστε τα Όριά σας',
    'classes.desc': 'Από διαλειμματική προπόνηση υψηλής έντασης μέχρι yoga, προσφέρουμε μια μεγάλη ποικιλία μαθημάτων για κάθε επίπεδο.',
    // Pricing
    'pricing.subtitle': 'Συνδρομές',
    'pricing.title': 'Επιλέξτε Πρόγραμμα',
    'pricing.desc': 'Ευέλικτες επιλογές συνδρομής σχεδιασμένες για τον τρόπο ζωής και τους στόχους σας. Χωρίς κρυφές χρεώσεις.',
    'pricing.getStarted': 'Ξεκινήστε',
    'pricing.popular': 'Δημοφιλές',
    // FAQ
    'faq.subtitle': 'Έχετε Ερωτήσεις;',
    'faq.title': 'Συχνές Ερωτήσεις',
    'faq.desc': 'Όλα όσα πρέπει να γνωρίζετε για την εγγραφή σας στο YOURGYM. Δεν βρίσκετε αυτό που ψάχνετε; Επικοινωνήστε μαζί μας.',
    'faq.helpTitle': 'Χρειάζεστε βοήθεια;',
    'faq.helpDesc': 'Η ομάδα μας είναι διαθέσιμη 24/7 για να σας βοηθήσει σε ό,τι χρειαστείτε.',
    // Contact
    'contact.title': 'Επικοινωνήστε',
    'contact.desc': 'Έτοιμοι για τη μεταμόρφωσή σας; Στείλτε μας ένα μήνυμα ή επισκεφθείτε μας.',
    'contact.name': 'Ονοματεπώνυμο',
    'contact.email': 'Email',
    'contact.subject': 'Θέμα',
    'contact.message': 'Το Μήνυμά σας',
    'contact.send': 'Αποστολή',
    'contact.success': 'Το μήνυμα στάλθηκε! Θα επικοινωνήσουμε σύντομα μαζί σας.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};