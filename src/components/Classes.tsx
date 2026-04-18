"use client";

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Flame } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const Classes = () => {
  const { t, language } = useLanguage();

  const classes = [
    {
      title: language === 'el' ? "Άρση Βαρών" : "Power Lifting",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      duration: language === 'el' ? "60 λεπτά" : "60 min",
      intensity: language === 'el' ? "Υψηλή" : "High",
      capacity: language === 'el' ? "15 Άτομα" : "15 People",
      category: language === 'el' ? "Δύναμη" : "Strength"
    },
    {
      title: language === 'el' ? "HIIT Cardio" : "HIIT Cardio",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
      duration: language === 'el' ? "45 λεπτά" : "45 min",
      intensity: language === 'el' ? "Extreme" : "Extreme",
      capacity: language === 'el' ? "20 Άτομα" : "20 People",
      category: language === 'el' ? "Καρδιοαναπνευστική" : "Cardio"
    },
    {
      title: language === 'el' ? "Yoga Flow" : "Yoga Flow",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2040&auto=format&fit=crop",
      duration: language === 'el' ? "75 λεπτά" : "75 min",
      intensity: language === 'el' ? "Χαμηλή" : "Low",
      capacity: language === 'el' ? "25 Άτομα" : "25 People",
      category: language === 'el' ? "Σώμα & Πνεύμα" : "Mind & Body"
    },
    {
      title: language === 'el' ? "Boxing Pro" : "Boxing Pro",
      image: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=2070&auto=format&fit=crop",
      duration: language === 'el' ? "60 λεπτά" : "60 min",
      intensity: language === 'el' ? "Υψηλή" : "High",
      capacity: language === 'el' ? "12 Άτομα" : "12 People",
      category: language === 'el' ? "Πολεμικές Τέχνες" : "Combat"
    }
  ];

  return (
    <section id="classes" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">{t('classes.subtitle')}</h2>
            <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter">
              {language === 'el' ? "Ξεπεράστε τα " : "Push Your "}
              <span className="text-primary">{language === 'el' ? "Όριά σας" : "Limits"}</span>
            </h3>
          </div>
          <p className="text-muted-foreground max-w-md">
            {t('classes.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {classes.map((item, index) => (
            <Card key={index} className="group overflow-hidden border-none bg-background shadow-xl hover:shadow-2xl transition-all duration-500 rounded-3xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-bold uppercase tracking-wider">
                  {item.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-black uppercase italic mb-4">{item.title}</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    {item.duration}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Flame className="w-4 h-4 text-primary" />
                    {item.intensity}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 text-primary" />
                    {item.capacity}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;