"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, Dumbbell } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Classes', href: '#classes' },
    { name: 'Membership', href: '#pricing' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-border py-3" 
        : "bg-transparent border-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary p-1.5 rounded-lg">
            <Dumbbell className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-black tracking-tighter uppercase italic">
            Gymania<span className="text-primary">.</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="rounded-full px-6">Join Now</Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b p-4 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-lg font-semibold py-2 border-b border-border/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full rounded-xl py-6 text-lg">Join Now</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;