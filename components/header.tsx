"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center font-outfit font-bold text-xl text-background group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                k
              </div>
              <div className="absolute inset-0 rounded-lg bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="font-outfit font-bold text-2xl tracking-tight">
              krin<span className="text-primary">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/platform" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Platform
            </Link>
            <Link 
              href="/platform#pricing" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Pricing
            </Link>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Documentation
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Careers
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="px-6 py-2.5 rounded-lg bg-primary text-background font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 animate-fade-in-up">
            <nav className="flex flex-col gap-4">
              <Link 
                href="/platform" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Platform
              </Link>
              <Link 
                href="/platform#pricing" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Documentation
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Careers
              </a>
              <a 
                href="#" 
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
              >
                Contact
              </a>
              <Link
                href="#"
                className="mt-4 px-6 py-3 rounded-lg bg-primary text-background font-semibold text-center hover:bg-primary/90 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Free Trial
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
