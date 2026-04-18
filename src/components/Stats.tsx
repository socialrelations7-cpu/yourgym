"use client";

import React from 'react';
import { useLanguage } from "@/context/LanguageContext";

const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t('stats.members'), value: '2,500+' },
    { label: t('stats.trainers'), value: '50+' },
    { label: t('stats.classes'), value: '120+' },
    { label: t('stats.locations'), value: '12' },
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-primary-foreground">
              <div className="text-3xl md:text-5xl font-black mb-1 italic tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;