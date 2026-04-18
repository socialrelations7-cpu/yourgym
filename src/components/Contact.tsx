"use client";

import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, MapPin, Phone, Mail } from 'lucide-react';
import { showSuccess } from "@/utils/toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showSuccess("Message sent! We'll get back to you shortly.");
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="bg-background rounded-[40px] overflow-hidden shadow-2xl border border-border/50">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="bg-primary p-12 lg:p-20 text-primary-foreground flex flex-col justify-between">
              <div>
                <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-8">
                  Get In <span className="text-background">Touch</span>
                </h3>
                <p className="text-primary-foreground/70 text-lg mb-12 max-w-md">
                  Ready to start your transformation? Send us a message or visit us at our main location.
                </p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-background/10 p-3 rounded-xl">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Location</h4>
                      <p className="text-primary-foreground/70">123 Fitness Ave, Muscle District, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-background/10 p-3 rounded-xl">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Phone</h4>
                      <p className="text-primary-foreground/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="bg-background/10 p-3 rounded-xl">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase text-sm mb-1">Email</h4>
                      <p className="text-primary-foreground/70">hello@yourgym.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-background/10">
                <h4 className="font-bold uppercase text-xs tracking-widest mb-4 opacity-50">Follow Our Journey</h4>
                <div className="flex gap-4">
                  {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="text-sm font-bold hover:text-background transition-colors underline underline-offset-4">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-12 lg:p-20">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Full Name</label>
                    <Input placeholder="John Doe" className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-primary" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-primary" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                  <Input placeholder="Membership Inquiry" className="h-14 rounded-2xl bg-muted/50 border-none focus-visible:ring-primary" required />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Your Message</label>
                  <Textarea placeholder="How can we help you?" className="min-h-[150px] rounded-2xl bg-muted/50 border-none focus-visible:ring-primary resize-none" required />
                </div>
                <Button type="submit" className="w-full h-16 rounded-2xl text-lg font-bold uppercase tracking-wider group">
                  Send Message
                  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;