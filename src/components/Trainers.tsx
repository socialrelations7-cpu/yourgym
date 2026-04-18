"use client";

import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

const trainers = [
  {
    name: "Alex Rivera",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1974&auto=format&fit=crop",
    specialty: "Powerlifting & Hypertrophy"
  },
  {
    name: "Sarah Jenkins",
    role: "HIIT Specialist",
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
    specialty: "Fat Loss & Conditioning"
  },
  {
    name: "Marcus Chen",
    role: "Yoga & Mobility",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    specialty: "Flexibility & Recovery"
  }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Expert Team</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Meet Your <span className="text-primary">Coaches</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {trainers.map((trainer, index) => (
            <div key={index} className="group relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-8">
                  <div className="flex gap-4">
                    <a href="#" className="bg-primary p-3 rounded-full text-primary-foreground hover:scale-110 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary p-3 rounded-full text-primary-foreground hover:scale-110 transition-transform">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="bg-primary p-3 rounded-full text-primary-foreground hover:scale-110 transition-transform">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h4 className="text-2xl font-black uppercase italic mb-1">{trainer.name}</h4>
                <p className="text-primary font-bold text-sm uppercase tracking-wider mb-2">{trainer.role}</p>
                <p className="text-muted-foreground text-sm">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;