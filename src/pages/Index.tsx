"use client";

import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Classes from '@/components/Classes';
import Pricing from '@/components/Pricing';
import Trainers from '@/components/Trainers';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Classes />
        <Pricing />
        <Trainers />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MadeWithDyad />
    </div>
  );
};

export default Index;