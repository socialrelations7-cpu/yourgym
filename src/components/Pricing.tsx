"use client";

import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Basic",
    price: "29",
    description: "Perfect for beginners starting their journey.",
    features: [
      { text: "Gym Access (8am - 8pm)", included: true },
      { text: "Standard Equipment", included: true },
      { text: "Locker Room Access", included: true },
      { text: "Free WiFi", included: true },
      { text: "Personal Trainer", included: false },
      { text: "Group Classes", included: false },
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "59",
    description: "Our most popular plan for serious athletes.",
    features: [
      { text: "24/7 Gym Access", included: true },
      { text: "All Equipment Access", included: true },
      { text: "Locker & Sauna", included: true },
      { text: "All Group Classes", included: true },
      { text: "1 PT Session / Month", included: true },
      { text: "Nutrition Guide", included: true },
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "99",
    description: "The ultimate fitness experience with full perks.",
    features: [
      { text: "24/7 VIP Access", included: true },
      { text: "Private Training Area", included: true },
      { text: "Unlimited PT Sessions", included: true },
      { text: "Recovery & Massage", included: true },
      { text: "Guest Passes (2/mo)", included: true },
      { text: "Custom Meal Plans", included: true },
    ],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Membership</h2>
          <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-6">
            Choose Your <span className="text-primary">Plan</span>
          </h3>
          <p className="text-muted-foreground">
            Flexible membership options designed to fit your lifestyle and fitness goals. No hidden fees, just results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative flex flex-col rounded-3xl border-2 transition-all duration-300 hover:translate-y-[-8px]",
                plan.popular ? "border-primary shadow-2xl scale-105 z-10" : "border-border"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <CardHeader className="p-8 pb-0">
                <h4 className="text-2xl font-black uppercase italic mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">$</span>
                  <span className="text-6xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-muted-foreground font-medium">/mo</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="p-8 flex-grow">
                <div className="space-y-4">
                  {plan.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-primary shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/30 shrink-0" />
                      )}
                      <span className={cn(
                        "text-sm font-medium",
                        feature.included ? "text-foreground" : "text-muted-foreground/50"
                      )}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button 
                  className={cn(
                    "w-full rounded-xl h-12 font-bold text-lg",
                    plan.popular ? "bg-primary hover:bg-primary/90" : "variant-outline"
                  )}
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;