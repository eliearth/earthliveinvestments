"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Link from 'next/link';

type PortfolioItem = {
  id: string;
  category: {
    en: string;
    es: string;
  };
  image: string;
  title: {
    en: string;
    es: string;
  };
  caption: {
    en: string;
    es: string;
  };
  alt: {
    en: string;
    es: string;
  };
  serviceArea: {
    en: string;
    es: string;
  };
};

const portfolioItems: PortfolioItem[] = [
  {
    id: "commercial-solar-latam",
    category: { en: "Solar Infrastructure", es: "Infraestructura Solar" },
    image: "/portfolio/earth-live-solar-commercial-latam.webp",
    title: { en: "Commercial Solar (LATAM)", es: "Solar Comercial (LATAM)" },
    caption: {
      en: "Utility and commercial-scale solar project coordination in El Salvador.",
      es: "Coordinación de proyectos solares a escala comercial y de servicios públicos en El Salvador."
    },
    alt: {
      en: "Commercial solar panel array installation on a metal roof in El Salvador",
      es: "Instalación de paneles solares a escala comercial en un techo de metal en El Salvador"
    },
    serviceArea: { en: "El Salvador & LATAM", es: "El Salvador y LATAM" }
  },
  {
    id: "residential-solar-dmv",
    category: { en: "Solar Energy", es: "Energía Solar" },
    image: "/portfolio/earth-live-solar-residential-dmv.webp",
    title: { en: "Residential Solar", es: "Solar Residencial" },
    caption: {
      en: "Residential solar project coordination and clean energy infrastructure.",
      es: "Coordinación de proyectos solares residenciales e infraestructura de energía limpia."
    },
    alt: {
      en: "Single-family home with modern rooftop solar panel arrays",
      es: "Casa unifamiliar con paneles solares modernos instalados en el techo"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  },
  {
    id: "flat-roofing-dmv",
    category: { en: "Roofing Systems", es: "Sistemas de Techado" },
    image: "/portfolio/earth-live-flat-roofing-finished.webp",
    title: { en: "Flat Roofing Support", es: "Soporte de Techo Plano" },
    caption: {
      en: "Flat and low-slope roofing project support for property protection.",
      es: "Soporte para proyectos de techado plano y de baja pendiente para proteger la propiedad."
    },
    alt: {
      en: "Newly completed flat roof system with rubberized membrane",
      es: "Sistema de techo plano recién completado con membrana de caucho"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  },
  {
    id: "bathroom-remodel-modern",
    category: { en: "Remodeling", es: "Remodelación" },
    image: "/portfolio/earth-live-bathroom-remodel-modern.webp",
    title: { en: "Modern Bathroom Remodeling", es: "Remodelación de Baño" },
    caption: {
      en: "Bathroom remodeling with modern finishes and premium detail work.",
      es: "Remodelación de baño con acabados modernos y detalles de alta calidad."
    },
    alt: {
      en: "Luxury renovated walk-in bathroom shower with marble tiles",
      es: "Ducha de baño renovada de lujo con azulejos de mármol"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  },
  {
    id: "bathroom-vanity-led",
    category: { en: "Remodeling", es: "Remodelación" },
    image: "/portfolio/earth-live-bathroom-vanity-led-mirror.webp",
    title: { en: "LED Mirror & Custom Vanity", es: "Espejo LED y Tocador" },
    caption: {
      en: "Premium detailing including backlit LED touch mirrors and modern fixtures.",
      es: "Detalles de alta calidad incluyendo espejos LED táctiles retroiluminados y accesorios modernos."
    },
    alt: {
      en: "Modern bathroom sink vanity with backlit circular LED mirror",
      es: "Lavabo de baño moderno con tocador y espejo LED retroiluminado"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  },
  {
    id: "deck-construction-dmv",
    category: { en: "Exterior Improvements", es: "Mejoras de Exteriores" },
    image: "/portfolio/earth-live-deck-construction.webp",
    title: { en: "Deck Construction", es: "Construcción de Terraza" },
    caption: {
      en: "Residential deck construction and exterior improvement coordination.",
      es: "Construcción de terraza residencial y coordinación de mejoras exteriores."
    },
    alt: {
      en: "Residential wooden deck framing under construction next to home siding",
      es: "Estructura de madera para terraza residencial en construcción junto al revestimiento"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  },
  {
    id: "commercial-painting-dmv",
    category: { en: "Commercial Exteriors", es: "Exteriores Comerciales" },
    image: "/portfolio/earth-live-commercial-exterior-painting.webp",
    title: { en: "Commercial Exterior Painting", es: "Pintura Comercial" },
    caption: {
      en: "Commercial exterior improvement and painting coordination.",
      es: "Coordinación de pintura y mejoras exteriores comerciales."
    },
    alt: {
      en: "Technician painting metal flashing of a brick commercial building on a ladder",
      es: "Técnico pintando moldura metálica de un edificio comercial de ladrillo en una escalera"
    },
    serviceArea: { en: "Maryland, D.C., Virginia", es: "Maryland, D.C., Virginia" }
  }
];

export function PortfolioCarousel() {
  const { language } = useLanguage();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const translations = {
    es: {
      tag: "Nuestro Portafolio",
      title: "Proyectos Reales. Soluciones Prácticas de Energía y Propiedad.",
      desc: "Explora nuestros proyectos recientes en Maryland, Washington D.C., Virginia y operaciones de infraestructura asociadas.",
      cta_btn: "Ver Nuestros Servicios"
    },
    en: {
      tag: "Our Portfolio",
      title: "Real Projects. Practical Energy & Property Solutions.",
      desc: "Explore our recent projects in Maryland, Washington D.C., Virginia, and associated infrastructure operations.",
      cta_btn: "View Our Services"
    }
  };

  const t = translations[language];

  return (
    <div className="relative max-w-7xl mx-auto py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div>
          <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
            {t.tag}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">{t.title}</h2>
          <p className="text-text-muted max-w-2xl text-sm font-semibold leading-relaxed">{t.desc}</p>
        </div>
        <div className="flex gap-4 items-center self-stretch md:self-auto justify-between md:justify-end">
          <Link 
            href="/servicios"
            className="inline-flex justify-center items-center gap-3 bg-gold text-background px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_4px_16px_rgba(201,168,76,0.2)]"
          >
            {t.cta_btn}
            <ArrowRight size={14} />
          </Link>
          <div className="hidden md:flex gap-3">
            <button onClick={scrollPrev} disabled={!canScrollPrev} className="p-4 rounded-full border border-gold-border bg-gold-glow text-gold hover:bg-gold hover:text-background transition-all disabled:opacity-20 shadow-xl">
              <ChevronLeft size={24} />
            </button>
            <button onClick={scrollNext} disabled={!canScrollNext} className="p-4 rounded-full border border-gold-border bg-gold-glow text-gold hover:bg-gold hover:text-background transition-all disabled:opacity-20 shadow-xl">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {portfolioItems.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden group border border-white/5 hover:border-gold-border transition-all">
                <img 
                  src={slide.image} 
                  alt={slide.alt[language]} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-gold/10 border border-gold-border rounded-full text-[0.6rem] font-bold text-gold uppercase tracking-widest">
                      {slide.category[language]}
                    </span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[0.6rem] font-bold text-white/60 uppercase tracking-widest">
                      {slide.serviceArea[language]}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{slide.title[language]}</h3>
                  <p className="text-text-muted text-xs font-semibold leading-relaxed mt-2 line-clamp-2">
                    {slide.caption[language]}
                  </p>
                  <div className="mt-6 flex justify-between items-end border-t border-white/10 pt-4">
                    <div>
                      <div className="text-[0.55rem] font-bold uppercase tracking-widest text-text-muted mb-1">
                        {language === "en" ? "Service Area" : "Área de Servicio"}
                      </div>
                      <div className="text-sm font-black text-gold uppercase">
                        {slide.id === "commercial-solar-latam" ? (language === "en" ? "LATAM Project" : "Proyecto LATAM") :
                         slide.id.includes("solar") && !slide.id.includes("dmv") ? (language === "en" ? "Virtual Consultation" : "Asesoría Virtual") :
                         (language === "en" ? "DMV Regional" : "Regional DMV")}
                      </div>
                    </div>
                    <Link 
                      href={`/contacto?service=${
                        slide.id === "commercial-solar-latam" ? "commercial_solar" :
                        slide.id.includes("solar") ? "solar_virtual" : "roofing_md"
                      }`}
                      className="w-12 h-12 rounded-full bg-gold text-background flex items-center justify-center font-light text-2xl group-hover:scale-110 transition-transform shadow-lg"
                    >
                      +
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

