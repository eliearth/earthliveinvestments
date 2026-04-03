"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Soluciones", href: "/#soluciones" },
    { name: "Portafolio", href: "/#portafolio" },
    { name: "Servicios", href: "/servicios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 sm:px-12 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <BrandLogo className="w-10 h-10 text-gold transition-transform duration-500 group-hover:rotate-12" />
          <span className="font-extrabold text-sm tracking-tight uppercase text-white lg:text-base">
            Earth Live <span className="text-gold">Invest</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-gold text-background px-6 py-2.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
            Acceso Cliente
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-white/80 hover:text-gold transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute left-0 w-full bg-bg-card border-b border-white/10 shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-2 border-b border-white/5"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-background text-center px-6 py-3 rounded-xl text-[0.75rem] font-extrabold uppercase tracking-wider"
          >
            Acceso Cliente
          </button>
        </div>
      </div>
    </nav>
  );
}
