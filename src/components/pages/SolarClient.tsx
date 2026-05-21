"use client";

import Link from "next/link";
import { CheckCircle2, MapPin, Globe, ArrowRight, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function SolarClient() {
  const { language } = useLanguage();

  const translations = {
    es: {
      tag: "Solar Infrastructure",
      hero_title: <>Soluciones Solares <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">Premium</span></>,
      hero_desc: "Coordinamos proyectos de energía solar de alta calidad en Maryland, Washington D.C. y Virginia, con asesoría virtual a nivel nacional y soluciones estructurales en LATAM.",
      btn_req: "Solicitar Propuesta Solar",
      btn_cov: "Ver Cobertura EE.UU.",
      dmv_tag: "DMV Core Market",
      dmv_title: "Cobertura en Maryland, D.C. y Virginia",
      dmv_desc: "Brindamos soporte completo de diseño, consultoría y enlace financiero para asegurar proyectos solares que optimicen tu flujo de caja.",
      btn_start_state: "Iniciar en",
      national_tag: "National Reach",
      national_title: "Consultas Virtuales en otros Estados",
      national_desc: "Brindamos análisis telefónico y modelado digital para propiedades residenciales y comerciales en una amplia gama de estados a nivel nacional, facilitando la evaluación de propuestas e integración financiera con proveedores locales calificados.",
      st_served: "Estados Servidos Virtualmente",
      latam_tag: "Latin America Operations",
      latam_title: "Energía Solar para LATAM",
      latam_desc: "Estructuramos e impulsamos la transición energética y de infraestructura en Centroamérica, integrando inversionistas estratégicos para grandes proyectos residenciales y corporativos.",
      latam_link: "Consultar Proyectos LATAM",
      latam_header: "Servicios de Infraestructura",
      benefits_tag: "Why Solar?",
      benefits_title: "Beneficios Clave de la Energía Solar",
      benefits_desc: "Descubre los pilares de la transición a una infraestructura de autogeneración y valorización de activos inmobiliarios.",
      process_tag: "Work Process",
      process_title: "Nuestro Proceso de Asesoramiento",
      process_desc: "Un flujo de trabajo riguroso y transparente diseñado para mitigar riesgos y acelerar la viabilidad del proyecto.",
      faq_tag: "Inquiries",
      faq_title: "Preguntas Frecuentes",
      cta_title: "¿Listo para evaluar tu viabilidad solar?",
      cta_desc: "Solicita hoy un estudio preliminar sin costo de tus tarifas eléctricas y propiedades en Maryland, Washington D.C., Virginia u otros estados participantes.",
      usMarkets: [
        {
          state: "Maryland",
          code: "solar_md",
          description: "Evaluaciones integrales y diseño de sistemas solares de alta eficiencia adaptados a las regulaciones de red locales.",
          points: ["Estudios de sombreado y rendimiento", "Coordinación de permisos locales", "Evaluación de preparación de techo"]
        },
        {
          state: "Washington, D.C.",
          code: "solar_dc",
          description: "Coordinación especializada para propiedades residenciales e históricas con integración de micro-redes solares urbanas.",
          points: ["Sistemas solares optimizados", "Conexión a incentivos distritales", "Baterías de respaldo para cortes"]
        },
        {
          state: "Virginia",
          code: "solar_va",
          description: "Soluciones de energía limpia diseñadas para optimizar el consumo eléctrico y aumentar el valor patrimonial del inmueble.",
          points: ["Monitoreo inteligente de red", "Financiamiento de proyectos accesible", "Garantía de rendimiento del sistema"]
        }
      ],
      otherStates: [
        "Alabama", "Arizona", "California", "Connecticut", "Florida", "Georgia", 
        "Illinois", "Iowa", "Kansas", "Maine", "Massachusetts", "Michigan", 
        "Texas", "Minnesota", "New Hampshire", "New Jersey", "New York", 
        "North Carolina", "Oklahoma", "Pennsylvania", "South Carolina", "Wisconsin", 
        "Rhode Island", "Nebraska", "Missouri", "Utah", "Ohio", "Delaware", 
        "Colorado", "New Mexico", "Wyoming"
      ],
      latamServices: [
        {
          title: "El Salvador & Honduras",
          description: "Servicios de asesoría solar integral y coordinación de proyectos de infraestructura a gran escala para clientes comerciales, agrícolas e institucionales en Centroamérica.",
          features: [
            "Consultoría de proyectos solares de gran escala",
            "Modelos de financiamiento y contratos de compra de energía (PPA)",
            "Coordinación técnica y de ingeniería en sitio",
            "Integración de almacenamiento comercial y de respaldo"
          ]
        }
      ],
      benefits: [
        {
          title: "Control Energético y Ahorro",
          description: "Establece tarifas de energía predecibles a largo plazo y mitiga el impacto de las alzas constantes en las tarifas de las distribuidoras eléctricas locales."
        },
        {
          title: "Valor de Infraestructura",
          description: "La integración de un sistema solar de grado premium incrementa la plusvalía de la propiedad, haciéndola más atractiva en mercados residenciales y comerciales."
        },
        {
          title: "Resiliencia Operativa",
          description: "Los sistemas de almacenamiento con baterías permiten mantener operaciones críticas activas durante apagones o inestabilidad de la red general."
        },
        {
          title: "Energía Limpia de Precisión",
          description: "Reduce la huella de carbono de tus activos mediante tecnología solar de alta fidelidad que cumple con estándares ESG internacionales."
        }
      ],
      steps: [
        {
          num: "1",
          title: "Recepción de Datos",
          desc: "Envías la información básica de tu propiedad y tu historial de consumo eléctrico (factura mensual)."
        },
        {
          num: "2",
          title: "Evaluación Técnica",
          desc: "Realizamos una simulación y análisis de viabilidad física del inmueble (presencial en la zona DMV o virtual en otros estados)."
        },
        {
          num: "3",
          title: "Propuesta de Proyecto",
          desc: "Estructuramos un plan detallado con el diseño sugerido, proyecciones de rendimiento y opciones de financiamiento estratégico."
        },
        {
          num: "4",
          title: "Coordinación y Activación",
          desc: "Nuestros contratistas aliados ejecutan la instalación y puesta en marcha bajo nuestra estricta supervisión de calidad."
        }
      ],
      faqs: [
        {
          q: "¿Earth Live Invest realiza la instalación de forma directa?",
          a: "En el mercado de Estados Unidos operamos bajo un modelo de coordinación de proyectos y alianzas estratégicas. Trabajamos con contratistas autorizados y licenciados localmente para garantizar una ejecución técnica impecable, mientras que nosotros estructuramos el proyecto, el financiamiento y la asesoría integral."
        },
        {
          q: "¿Qué estados están cubiertos por sus servicios solares?",
          a: "Ofrecemos soporte presencial y visitas técnicas coordinadas en Maryland, Washington D.C. y Virginia. Para otros 31 estados de la Unión Americana (incluyendo Texas, Florida, California y Nueva York), ofrecemos consultorías, evaluaciones y propuestas de diseño completamente virtuales o telefónicas."
        },
        {
          q: "¿Qué alcance tienen sus servicios en América Latina?",
          a: "Actualmente nos enfocamos en El Salvador y Honduras, asesorando a desarrolladores inmobiliarios, complejos industriales y propiedades residenciales premium en el diseño e implementación de sistemas solares y almacenamiento para lograr independencia energética."
        },
        {
          q: "¿El ahorro y rendimiento de la inversión solar están garantizados?",
          a: "Las estimaciones de ahorro se basan en análisis técnicos de radiación solar, tarifas históricas de servicios públicos y perfiles de consumo específicos del inmueble. El ahorro real puede variar según los patrones de uso, tarifas vigentes del distribuidor y condiciones climáticas. No ofrecemos garantías absolutas de rendimiento financiero."
        }
      ]
    },
    en: {
      tag: "Solar Infrastructure",
      hero_title: <>Premium <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">Solar Solutions</span></>,
      hero_desc: "We coordinate premium solar energy projects in Maryland, Washington D.C., and Virginia, with virtual advisory nationwide and structural solutions in LATAM.",
      btn_req: "Request Solar Proposal",
      btn_cov: "View U.S. Coverage",
      dmv_tag: "DMV Core Market",
      dmv_title: "Coverage in Maryland, D.C., and Virginia",
      dmv_desc: "We provide complete design support, advisory, and financial linking to secure solar projects that optimize your cash flow.",
      btn_start_state: "Get Started in",
      national_tag: "National Reach",
      national_title: "Virtual Consultation in Other States",
      national_desc: "We provide phone analysis and digital modeling for residential and commercial properties across a wide range of states nationwide, facilitating proposal review and financial integration with qualified local providers.",
      st_served: "States Served Virtually",
      latam_tag: "Latin America Operations",
      latam_title: "Solar Infrastructure for LATAM",
      latam_desc: "We structure and drive energy transitions and infrastructure in Central America, integrating strategic investors for large commercial and residential projects.",
      latam_link: "Consult LATAM Projects",
      latam_header: "Infrastructure Services",
      benefits_tag: "Why Solar?",
      benefits_title: "Key Benefits of Solar Energy",
      benefits_desc: "Discover the pillars of transitioning to self-generation infrastructure and increasing property asset value.",
      process_tag: "Work Process",
      process_title: "Our Advisory Process",
      process_desc: "A rigorous and transparent workflow designed to mitigate risk and accelerate project feasibility.",
      faq_tag: "Inquiries",
      faq_title: "Frequently Asked Questions",
      cta_title: "Ready to Evaluate Your Solar Feasibility?",
      cta_desc: "Request a free preliminary analysis of your utility bills and properties in Maryland, Washington D.C., Virginia, or other participating states today.",
      usMarkets: [
        {
          state: "Maryland",
          code: "solar_md",
          description: "Comprehensive assessments and high-efficiency solar system designs tailored to local utility and grid regulations.",
          points: ["Shading and generation yield studies", "Local permit coordination", "Roof readiness evaluation"]
        },
        {
          state: "Washington, D.C.",
          code: "solar_dc",
          description: "Specialized coordination for residential and historical properties with urban micro-grid integration.",
          points: ["Optimized solar system layouts", "Local District solar incentive integration", "Battery backup options for outages"]
        },
        {
          state: "Virginia",
          code: "solar_va",
          description: "Clean energy solutions designed to optimize electric utility bills and increase property equity value.",
          points: ["Smart grid monitoring setups", "Accessible project financing linking", "System performance term review"]
        }
      ],
      otherStates: [
        "Alabama", "Arizona", "California", "Connecticut", "Florida", "Georgia", 
        "Illinois", "Iowa", "Kansas", "Maine", "Massachusetts", "Michigan", 
        "Texas", "Minnesota", "New Hampshire", "New Jersey", "New York", 
        "North Carolina", "Oklahoma", "Pennsylvania", "South Carolina", "Wisconsin", 
        "Rhode Island", "Nebraska", "Missouri", "Utah", "Ohio", "Delaware", 
        "Colorado", "New Mexico", "Wyoming"
      ],
      latamServices: [
        {
          title: "El Salvador & Honduras",
          description: "End-to-end solar advisory and project coordination services for large-scale utility, commercial, and agricultural clients in Central America.",
          features: [
            "Utility and commercial-scale solar consulting",
            "PPA (Power Purchase Agreement) financial structuring",
            "On-site technical and engineering coordination",
            "Commercial backup and storage integration"
          ]
        }
      ],
      benefits: [
        {
          title: "Energy Control and Savings",
          description: "Establish predictable, long-term energy rates and mitigate the impact of constant local utility rate hikes."
        },
        {
          title: "Asset Valuation",
          description: "Integrating a premium solar system increases the equity value of the property, making it more competitive in commercial and residential markets."
        },
        {
          title: "Operational Resilience",
          description: "Battery backup storage systems allow critical operations to remain active during grid failures or outages."
        },
        {
          title: "Precision Clean Energy",
          description: "Reduce your asset portfolio carbon footprint with high-fidelity solar tech matching international ESG standards."
        }
      ],
      steps: [
        {
          num: "1",
          title: "Data Submission",
          desc: "Submit your property specifications and utility bill history (monthly consumption details)."
        },
        {
          num: "2",
          title: "Technical Assessment",
          desc: "We model your property (onsite check in the DMV area, virtual digital model for other states) to check viability."
        },
        {
          num: "3",
          title: "Project Proposal",
          desc: "We design a comprehensive plan specifying solar layouts, generation forecasts, and structured financing paths."
        },
        {
          num: "4",
          title: "Deployment & Support",
          desc: "Our licensed partner contractors execute deployment and interconnection under our strict quality assurance supervision."
        }
      ],
      faqs: [
        {
          q: "Does Earth Live Invest handle the solar installation directly?",
          a: "In the U.S. market, we operate under a project coordination and strategic advisory model. We work with local licensed partner contractors to ensure flawless technical deployment, while managing project architecture, financing pathways, and complete advisory."
        },
        {
          q: "Which states are covered by your solar services?",
          a: "We offer onsite visits and physical coordination in Maryland, Washington D.C., and Virginia. For 31 other states (including California, Texas, Florida, and New York), we provide full virtual consultation, layout designs, and utility bill modeling."
        },
        {
          q: "What is the scope of your LATAM solar services?",
          a: "We actively focus on El Salvador and Honduras, advising real estate developers, industrial plants, and premium residential property owners on solar microgrid and backup battery designs to reach energy independence."
        },
        {
          q: "Are the solar savings and yields guaranteed?",
          a: "All savings and yield forecasts are based on detailed solar irradiance modeling, historical utility tariff rates, and property consumption history. Actual yields can vary due to changing weather patterns, utility rates, and usage behavior. We do not issue absolute financial performance guarantees."
        }
      ]
    }
  };

  const t = translations[language];

  return (
    <div className="pt-24 pb-20 bg-background min-h-screen font-sans">
      
      {/* Hero Section */}
      <section className="bg-bg-deep py-28 text-center relative overflow-hidden border-b border-gold-border">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--color-gold-glow)_0%,_transparent_75%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
            {t.tag}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">
            {t.hero_title}
          </h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto font-semibold leading-relaxed mb-8">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contacto?service=solar_virtual" 
              className="inline-flex justify-center items-center gap-3 bg-gold text-background px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
            >
              {t.btn_req}
              <ArrowRight size={16} />
            </Link>
            <Link 
              href="#us-markets" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-white bg-bg-card border border-white/10 hover:bg-white/5 transition-colors"
            >
              {t.btn_cov}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        
        {/* DMV Physical Services */}
        <section id="us-markets" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.dmv_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.dmv_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.dmv_desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.usMarkets.map((market) => (
              <div 
                key={market.state} 
                className="p-8 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 bg-gold-glow border border-gold-border rounded-xl flex items-center justify-center text-gold mb-6">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{market.state}</h3>
                  <p className="text-text-muted text-sm leading-relaxed font-semibold mb-6">{market.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {market.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-bold text-white/80 uppercase tracking-wider">
                        <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-gold mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/contacto?service=${market.code}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase text-gold hover:text-white transition-colors group mt-auto"
                >
                  {t.btn_start_state} {market.state} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Virtual states list */}
        <section className="mb-24 py-16 bg-bg-card/40 border border-white/5 rounded-[2.5rem] px-8 sm:px-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(201,168,76,0.05)_0%,_transparent_70%)] pointer-events-none" />
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
                {t.national_tag}
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic mb-4">
                {t.national_title}
              </h2>
              <p className="text-text-muted font-semibold text-sm leading-relaxed">
                {t.national_desc}
              </p>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-background/50 border border-white/5 rounded-2xl p-6">
                <h4 className="text-[0.65rem] font-black uppercase text-gold tracking-[0.15em] mb-4">{t.st_served}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-[0.7rem] font-bold uppercase tracking-wider text-white/70">
                  {t.otherStates.map((st, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-gold rounded-full" />
                      {st}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* LATAM Section */}
        <section id="latam" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.latam_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.latam_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.latam_desc}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {t.latamServices.map((service, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-bg-card border border-gold-border/40 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,_rgba(201,168,76,0.06)_0%,_transparent_70%)] pointer-events-none" />
                <div className="grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-2">
                    <div className="w-12 h-12 bg-gold-glow border border-gold-border rounded-xl flex items-center justify-center text-gold mb-6">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4">{service.title}</h3>
                    <p className="text-text-muted text-sm leading-relaxed font-semibold mb-6">{service.description}</p>
                    <Link 
                      href="/contacto?service=solar_latam" 
                      className="inline-flex items-center gap-2 text-xs font-black uppercase text-gold hover:text-white transition-colors"
                    >
                      {t.latam_link} <ArrowRight size={14} />
                    </Link>
                  </div>
                  <div className="md:col-span-3 space-y-4">
                    <h4 className="text-[0.65rem] font-black uppercase text-white/40 tracking-[0.15em]">{t.latam_header}</h4>
                    <div className="space-y-3">
                      {service.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-background/40 rounded-xl border border-white/5">
                          <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-gold mt-0.5" />
                          <span className="text-xs font-bold text-white/90 uppercase tracking-wide">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Visual Showcase Gallery */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-border/60 transition-all duration-300 group">
                <img 
                  src="/portfolio/earth-live-solar-latam-roof.webp" 
                  alt={language === "en" ? "Commercial solar installation in El Salvador" : "Instalación solar comercial en El Salvador"} 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[0.6rem] font-black text-gold uppercase tracking-wider">
                    {language === "en" ? "Rooftop Array" : "Arreglo en Techo"}
                  </span>
                  <span className="text-[0.5rem] text-white/50 uppercase tracking-widest">El Salvador</span>
                </div>
              </div>
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-border/60 transition-all duration-300 group">
                <img 
                  src="/portfolio/earth-live-solar-latam-inverter.webp" 
                  alt={language === "en" ? "Premium inverter and grid integration" : "Integración de inversor y red premium"} 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[0.6rem] font-black text-gold uppercase tracking-wider">
                    {language === "en" ? "Inverter & Grid" : "Inversor y Red"}
                  </span>
                  <span className="text-[0.5rem] text-white/50 uppercase tracking-widest">El Salvador</span>
                </div>
              </div>
              <div className="relative h-60 rounded-2xl overflow-hidden border border-white/5 hover:border-gold-border/60 transition-all duration-300 group">
                <img 
                  src="/portfolio/earth-live-solar-latam-scenery.webp" 
                  alt={language === "en" ? "Large scale agricultural solar" : "Solar agrícola a gran escala"} 
                  className="w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[0.6rem] font-black text-gold uppercase tracking-wider">
                    {language === "en" ? "Agricultural & Utility" : "Escala Agrícola y de Utilidad"}
                  </span>
                  <span className="text-[0.5rem] text-white/50 uppercase tracking-widest">El Salvador</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Spotlight */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-bg-card border border-white/5 rounded-[2.5rem] overflow-hidden p-8 sm:p-12">
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video lg:aspect-auto lg:h-[400px]">
              <img 
                src="/portfolio/earth-live-solar-commercial-latam.webp" 
                alt={language === "en" ? "Commercial solar project installation in El Salvador" : "Instalación de proyecto solar comercial en El Salvador"} 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div>
              <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
                {language === "en" ? "Project Spotlight" : "Proyecto Destacado"}
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tight italic mb-6">
                {language === "en" ? "El Salvador Solar Infrastructure" : "Infraestructura Solar en El Salvador"}
              </h2>
              <p className="text-text-muted font-semibold text-sm leading-relaxed mb-6">
                {language === "en" 
                  ? "We coordinate utility and commercial-scale solar installations in El Salvador, enabling energy self-generation and long-term cost predictability for agricultural, industrial, and commercial operations."
                  : "Coordinamos instalaciones solares a escala comercial y de servicios públicos en El Salvador, facilitando la autogeneración de energía y la previsibilidad de costos a largo plazo para operaciones agrícolas, industriales y comerciales."
                }
              </p>
              <div className="p-4 bg-background/50 border border-white/5 rounded-xl text-xs font-semibold text-text-muted mb-6 leading-relaxed border-l-2 border-gold">
                {language === "en"
                  ? "Real-world project photos from our installations in El Salvador, LATAM."
                  : "Fotos de proyectos reales de nuestras instalaciones en El Salvador, LATAM."
                }
              </div>
              <Link 
                href="/contacto?service=commercial_solar" 
                className="inline-flex justify-center items-center gap-3 bg-gold text-background px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_4px_16px_rgba(201,168,76,0.2)]"
              >
                {t.btn_req}
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.benefits_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.benefits_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.benefits_desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {t.benefits.map((benefit, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all">
                <h3 className="text-lg font-black text-white uppercase mb-3 tracking-tight">{benefit.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed font-semibold">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Steps */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.process_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.process_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.process_desc}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.steps.map((step) => (
              <div key={step.num} className="p-8 rounded-[2rem] bg-bg-card border border-white/5 relative overflow-hidden flex flex-col justify-between">
                <span className="absolute right-6 top-6 text-6xl font-black text-white/5 italic">{step.num}</span>
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-gold text-background font-black flex items-center justify-center mb-6 text-sm">
                    {step.num}
                  </div>
                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-2">{step.title}</h3>
                  <p className="text-text-muted text-xs leading-relaxed font-semibold">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.faq_tag}
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight italic mb-4">{t.faq_title}</h2>
          </div>

          <div className="space-y-6">
            {t.faqs.map((faq, i) => (
              <div key={i} className="p-6 bg-bg-card/60 border border-white/5 rounded-2xl">
                <h4 className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-wide mb-3">
                  <HelpCircle className="w-5 h-5 text-gold shrink-0" />
                  {faq.q}
                </h4>
                <p className="text-text-muted text-xs leading-relaxed font-semibold pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 relative overflow-hidden rounded-[2.5rem] bg-bg-card border border-gold-border text-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-gold-glow)_0%,_transparent_75%)]" />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-6">
              {t.cta_title}
            </h2>
            <p className="text-text-muted max-w-lg mx-auto mb-10 text-sm font-semibold leading-relaxed">
              {t.cta_desc}
            </p>
            <Link 
              href="/contacto?service=solar_virtual" 
              className="inline-flex justify-center items-center gap-3 bg-gold text-background px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
            >
              {t.btn_req}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
