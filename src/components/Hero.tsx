"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Intense Gym Training" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm border border-primary/30 px-4 py-1.5 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">{t('hero.special')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] mb-6 tracking-tighter uppercase italic animate-in fade-in slide-in-from-left duration-1000">
            {t('hero.title1')} <br />
            <span className="text-primary">{t('hero.title2')}</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground font-medium mb-8 max-w-xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-200 drop-shadow-sm">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-300">
            <Button size="lg" className="rounded-full px-8 h-14 text-lg font-bold group shadow-xl">
              {t('hero.cta1')}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg font-bold border-2 bg-background/20 backdrop-blur-sm">
              <Play className="mr-2 w-5 h-5 fill-current" />
              {t('hero.cta2')}
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
            {[t('hero.feat1'), t('hero.feat2'), t('hero.feat3')].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-background/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <span className="font-bold text-xs uppercase tracking-wide">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] -z-10 rounded-full" />
    </section>
  );
};

export default Hero;