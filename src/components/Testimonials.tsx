"use client";

import React from 'react';
import { Quote, Star } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Jason Statham",
    role: "Member for 2 years",
    content: "Gymania changed my life. The atmosphere is electric and the trainers actually care about your progress. I've hit PRs I never thought possible.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "Emily Blunt",
    role: "Yoga Enthusiast",
    content: "The variety of classes is incredible. I started with Yoga and now I'm doing HIIT twice a week. The community here is so supportive!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    name: "David Goggins",
    role: "Elite Member",
    content: "If you want to push your limits, this is the place. No excuses, just results. The equipment is top-notch and always clean.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Success Stories</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            What Our <span className="text-primary">Members</span> Say
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-none shadow-xl rounded-3xl bg-background relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>
              <CardContent className="p-8">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic mb-8 text-muted-foreground leading-relaxed">
                  "{t.content}"
                </p>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarImage src={t.image} alt={t.name} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-black uppercase italic text-sm">{t.name}</h4>
                    <p className="text-xs text-muted-foreground font-medium">{t.role}</p>
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

export default Testimonials;