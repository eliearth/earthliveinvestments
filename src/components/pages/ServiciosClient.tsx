"use client";

import Link from "next/link";
import { Sun, Zap, Battery, CarFront, Hammer, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServiciosClient() {
  const { language } = useLanguage();

  const translations = {
    es: {
      tag: "Dual-Asset Solutions",
      title: "Nuestras Soluciones",
      desc: "Estructuramos activos de energía limpia e inmuebles premium diseñados para la generación de riqueza sostenible en la región Latam.",
      services: [
        {
          id: "solar",
          title: "Infraestructura Solar",
          icon: <Sun size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Propiedad estratégica de arreglos solares a gran escala que producen energía limpia constante para redes nacionales y grandes complejos industriales.",
          features: ["Ingeniería de Grado Institucional", "Mantenimiento Preventivo 24/7", "Máximo Rendimiento de Generación"],
          linkHref: "/servicios/solar",
          linkText: "Explorar Soluciones Solares",
          span: "md:col-span-2"
        },
        {
          id: "roofing",
          title: "Techos y Mejoras del Hogar",
          icon: <Hammer size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Asesoría y coordinación para proyectos de techado residencial de alta durabilidad y mejoras de valor patrimonial en Maryland, Washington D.C. y Virginia.",
          features: ["Evaluaciones Solar-Ready", "Instaladores Licenciados Locales", "Financiamiento Disponible"],
          linkHref: "/servicios/home-improvement",
          linkText: "Ver Servicios de Techos",
          span: ""
        },
        {
          id: "realestate",
          title: "Inmuebles Premium",
          icon: <Zap size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Desarrollos comerciales y residenciales de lujo integrados con micro-redes solares que aumentan la valuación del activo mediante eficiencia extrema.",
          features: ["Valuación de Capital Acelerada", "Eficiencia Energética Smart", "Diseño Arquitectónico Sustentable"],
          linkHref: "/contacto?service=consulta_general",
          linkText: "Solicitar Propuesta",
          span: ""
        },
        {
          id: "almacenamiento",
          title: "Storage & Grid",
          icon: <Battery size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Sistemas industriales de almacenamiento que garantizan la continuidad operativa y la optimización de picos de demanda para maximizar el ahorro y la resiliencia.",
          features: ["Respaldo Ininterrumpido", "Optimización de Tarifas Horarias", "Redundancia de Grado Militar"],
          linkHref: "/contacto?service=storage_battery",
          linkText: "Solicitar Propuesta",
          span: ""
        },
        {
          id: "ev-mobility",
          title: "Movilidad Eléctrica",
          icon: <CarFront size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Infraestructura de carga rápida para flotas corporativas y complejos residenciales, alimentada directamente por nuestros activos de generación solar.",
          features: ["Cargas Inteligentes Nivel 2/3", "Integración con App Móvil", "Gestión de Flotas Sustentables"],
          linkHref: "/contacto?service=storage_battery",
          linkText: "Solicitar Propuesta",
          span: ""
        }
      ]
    },
    en: {
      tag: "Dual-Asset Solutions",
      title: "Our Solutions",
      desc: "We structure clean energy assets and premium real estate assets designed for sustainable wealth generation in the LATAM and U.S. markets.",
      services: [
        {
          id: "solar",
          title: "Solar Infrastructure",
          icon: <Sun size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Strategic ownership of utility-scale solar arrays producing constant clean energy for national grids and large industrial complexes.",
          features: ["Institutional-Grade Engineering", "24/7 Preventative Maintenance", "Maximum Generation Yield"],
          linkHref: "/servicios/solar",
          linkText: "Explore Solar Solutions",
          span: "md:col-span-2"
        },
        {
          id: "roofing",
          title: "Roofing & Home Improvement",
          icon: <Hammer size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Project advisory and coordination for high-durability residential roofing and home improvements in Maryland, Washington D.C., and Virginia.",
          features: ["Solar-Ready Roof Assessments", "Local Licensed Contractors", "Flexible Financing Options"],
          linkHref: "/servicios/home-improvement",
          linkText: "View Roofing Services",
          span: ""
        },
        {
          id: "realestate",
          title: "Premium Real Estate",
          icon: <Zap size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Luxury commercial and residential developments integrated with solar micro-grids to increase property value via extreme efficiency.",
          features: ["Accelerated Capital Appreciation", "Smart Energy Efficiency", "Sustainable Architectural Design"],
          linkHref: "/contacto?service=consulta_general",
          linkText: "Request Proposal",
          span: ""
        },
        {
          id: "almacenamiento",
          title: "Storage & Grid",
          icon: <Battery size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Industrial energy storage systems securing continuous operation and optimizing peak demand to maximize savings and resiliency.",
          features: ["Uninterruptible Power Backup", "Peak-Shaving Rate Optimization", "Military-Grade Redundancy"],
          linkHref: "/contacto?service=storage_battery",
          linkText: "Request Proposal",
          span: ""
        },
        {
          id: "ev-mobility",
          title: "Electric Mobility",
          icon: <CarFront size={32} />,
          color: "text-gold border-gold-border bg-gold-glow/20",
          description: "Fast-charging infrastructure for corporate fleets and residential complexes, powered directly by our solar generation assets.",
          features: ["Smart Level 2/3 Chargers", "Mobile App Integration", "Sustainable Fleet Management"],
          linkHref: "/contacto?service=storage_battery",
          linkText: "Request Proposal",
          span: ""
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen font-sans">
      <div className="bg-bg-deep py-28 text-center relative overflow-hidden mb-20 border-b border-gold-border">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--color-gold-glow)_0%,_transparent_75%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">{t.title}</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto font-semibold leading-relaxed">
            {t.desc}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {t.services.map((service) => (
            <div 
              key={service.id} 
              className={`p-10 rounded-[2rem] border hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] ${service.color.split(' ')[1]} ${service.color.split(' ')[2]} ${service.span}`}
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gold border border-gold-border text-background shadow-lg">
                {service.icon}
              </div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">{service.title}</h2>
              <p className="text-text-muted mb-10 leading-relaxed font-semibold">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold text-sm text-white/80 uppercase tracking-wide">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href={service.linkHref} 
                className="inline-flex items-center gap-3 font-black text-xs tracking-[0.15em] uppercase text-gold hover:text-white transition-colors group"
              >
                {service.linkText} <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
