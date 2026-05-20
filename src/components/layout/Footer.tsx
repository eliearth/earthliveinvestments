"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { language } = useLanguage();

  const translations = {
    es: {
      desc: "Earth Live Invest combina infraestructura de energía solar premium con activos inmobiliarios estratégicos para ofrecer rendimientos sostenibles.",
      solutions: "Soluciones",
      quickLinks: "Enlaces Rápidos",
      contactTitle: "Contacto Institucional",
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      terms: "Términos",
      privacy: "Privacidad",
      copy: `© ${new Date().getFullYear()} Earth Live Invest. El Salvador, Latam.`,
      solSolarLatam: "Solar LATAM",
      solSolarUs: "Solar Estados Unidos",
      solRoofing: "Roofing & Mejoras",
      solRealEstate: "Inmuebles Premium"
    },
    en: {
      desc: "Earth Live Invest combines premium solar energy infrastructure with strategic assets to deliver sustainable returns.",
      solutions: "Solutions",
      quickLinks: "Quick Links",
      contactTitle: "Institutional Contact",
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
      terms: "Terms",
      privacy: "Privacy",
      copy: `© ${new Date().getFullYear()} Earth Live Invest. El Salvador, Latam.`,
      solSolarLatam: "Solar LATAM",
      solSolarUs: "Solar United States",
      solRoofing: "Roofing & Home Improvement",
      solRealEstate: "Premium Real Estate"
    }
  };

  const t = translations[language];

  return (
    <footer className="bg-bg-deep text-text-muted pt-16 pb-8 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <BrandLogo className="w-8 h-8 text-gold" />
              <span className="font-extrabold tracking-tight text-white uppercase text-sm">
                Earth Live <span className="text-gold">Invest</span>
              </span>
            </Link>
            <p className="text-[0.8rem] text-text-muted mb-8 leading-relaxed max-w-xs font-semibold">
              {t.desc}
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                Fb
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                Ig
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                In
              </a>
            </div>
          </div>

          {/* Solutions links */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">{t.solutions}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios/solar#latam" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.solSolarLatam}</Link>
              </li>
              <li>
                <Link href="/servicios/solar#us-markets" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.solSolarUs}</Link>
              </li>
              <li>
                <Link href="/servicios/home-improvement" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.solRoofing}</Link>
              </li>
              <li>
                <Link href="/servicios#realestate" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.solRealEstate}</Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">{t.quickLinks}</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.home}</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.services}</Link>
              </li>
              <li>
                <Link href="/#portafolio" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.portfolio}</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-gold transition-colors text-[0.8rem] font-bold">{t.contact}</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">{t.contactTitle}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">21 Avenida Norte, colonia Layco #1634 San Salvador</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">+1 301 741 2861</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">eli@earthliveinvest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.7rem] font-bold text-white/20">
            {t.copy}
          </p>
          <div className="flex gap-6 text-[0.7rem] font-bold text-white/20">
            <a href="#" className="hover:text-gold transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

