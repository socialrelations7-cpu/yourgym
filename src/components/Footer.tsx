"use client";

import React from 'react';
import { Dumbbell, Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer id="contact" className="bg-background border-t pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-1.5 rounded-lg">
                <Dumbbell className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-black tracking-tighter uppercase italic">
                YOURGYM<span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              The ultimate fitness destination for those who demand more from their training. Join the community today.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase italic mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Classes', 'Membership', 'Trainers', 'Success Stories'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase italic mb-6">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">123 Fitness Ave, Muscle District, NY 10001</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">hello@yourgym.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase italic mb-6">Newsletter</h4>
            <p className="text-muted-foreground mb-4 text-sm">Get fitness tips and exclusive offers.</p>
            <div className="flex flex-col gap-3">
              <Input placeholder="Your Email" className="rounded-xl bg-muted/50 border-none h-12" />
              <Button className="rounded-xl h-12 font-bold uppercase tracking-wider">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 YOURGYM Fitness Club. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;