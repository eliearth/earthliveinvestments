"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translations = {
    es: {
      soluciones: "Soluciones",
      portafolio: "Portafolio",
      servicios: "Servicios",
      contacto: "Contacto",
      acceso_cliente: "Acceso Cliente",
      energia_solar: "Energía Solar",
      mejoras_techos: "Mejoras & Techos",
      ver_todos: "Ver Todos",
      todos_servicios: "Todos los Servicios"
    },
    en: {
      soluciones: "Solutions",
      portafolio: "Portfolio",
      servicios: "Services",
      contacto: "Contact",
      acceso_cliente: "Client Access",
      energia_solar: "Solar Energy",
      mejoras_techos: "Roofing & Improvement",
      ver_todos: "View All",
      todos_servicios: "All Services"
    }
  };

  const t = translations[language];

  const navLinks = [
    { name: t.soluciones, href: "/#soluciones" },
    { name: t.portafolio, href: "/#portafolio" },
    { name: t.servicios, href: "/servicios" },
    { name: t.contacto, href: "/contacto" },
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
          {navLinks.map((link) => {
            if (link.href === "/servicios") {
              return (
                <div key={link.href} className="relative group py-2">
                  <Link
                    href={link.href}
                    className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted group-hover:text-gold transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <span className="text-[0.5rem] transition-transform duration-300 group-hover:rotate-180">▼</span>
                  </Link>
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-bg-card border border-gold-border/30 rounded-xl py-3 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      href="/servicios/solar"
                      className="block px-5 py-2.5 text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {t.energia_solar}
                    </Link>
                    <Link
                      href="/servicios/home-improvement"
                      className="block px-5 py-2.5 text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {t.mejoras_techos}
                    </Link>
                    <div className="border-t border-white/5 my-1" />
                    <Link
                      href="/servicios"
                      className="block px-5 py-2.5 text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {t.ver_todos}
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors"
              >
                {link.name}
              </Link>
            );
          })}
          
          <button className="bg-gold text-background px-6 py-2.5 rounded-full text-[0.75rem] font-extrabold uppercase tracking-wider hover:scale-105 transition-all shadow-[0_4px_20px_rgba(201,168,76,0.3)]">
            {t.acceso_cliente}
          </button>

          {/* Language Switcher */}
          <div className="flex items-center gap-1.5 border-l border-white/10 pl-6 text-[0.7rem] font-bold tracking-wider uppercase">
            <button 
              onClick={() => setLanguage("es")} 
              className={`hover:text-gold transition-colors ${language === "es" ? "text-gold" : "text-text-muted"}`}
            >
              ES
            </button>
            <span className="text-white/20">/</span>
            <button 
              onClick={() => setLanguage("en")} 
              className={`hover:text-gold transition-colors ${language === "en" ? "text-gold" : "text-text-muted"}`}
            >
              EN
            </button>
          </div>
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
          isMobileMenuOpen ? "max-h-[650px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => {
            if (link.href === "/servicios") {
              return (
                <div key={link.href} className="flex flex-col gap-3">
                  <div className="text-[0.7rem] font-black tracking-widest uppercase text-gold py-1">
                    {link.name}
                  </div>
                  <div className="pl-4 flex flex-col gap-3 border-l border-gold-border/30">
                    <Link
                      href="/servicios/solar"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-1"
                    >
                      {t.energia_solar}
                    </Link>
                    <Link
                      href="/servicios/home-improvement"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-1"
                    >
                      {t.mejoras_techos}
                    </Link>
                    <Link
                      href="/servicios"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-1"
                    >
                      {t.todos_servicios}
                    </Link>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-[0.7rem] font-bold tracking-widest uppercase text-text-muted hover:text-gold transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            );
          })}
          
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-gold text-background text-center px-6 py-3 rounded-xl text-[0.75rem] font-extrabold uppercase tracking-wider"
          >
            {t.acceso_cliente}
          </button>

          {/* Mobile Language Switcher */}
          <div className="flex justify-center items-center gap-4 py-3 border-t border-white/5 mt-2 text-xs font-bold tracking-widest uppercase">
            <button 
              onClick={() => { setLanguage("es"); setIsMobileMenuOpen(false); }} 
              className={`px-4 py-2 rounded-lg border transition-all ${language === "es" ? "text-gold border-gold/30 bg-gold/5" : "text-text-muted border-transparent"}`}
            >
              Español
            </button>
            <button 
              onClick={() => { setLanguage("en"); setIsMobileMenuOpen(false); }} 
              className={`px-4 py-2 rounded-lg border transition-all ${language === "en" ? "text-gold border-gold/30 bg-gold/5" : "text-text-muted border-transparent"}`}
            >
              English
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
