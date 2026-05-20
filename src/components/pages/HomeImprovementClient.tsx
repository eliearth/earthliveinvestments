"use client";

import Link from "next/link";
import { Hammer, CheckCircle2, MapPin, ArrowRight, AlertTriangle, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HomeImprovementClient() {
  const { language } = useLanguage();

  const translations = {
    es: {
      tag: "Home Improvement & Roofing",
      hero_title: <>Techos y Mejoras del Hogar <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">En Maryland, D.C. y Virginia</span></>,
      hero_desc: "Evaluamos, financiamos y coordinamos proyectos de techado premium y mejoras estructurales que incrementan la plusvalía de tu propiedad y la preparan para la transición solar.",
      btn_req: "Solicitar Evaluación de Techo",
      btn_cov: "Ver Áreas de Servicio",
      why_title: "¿Por qué el Techo Importa Antes del Solar?",
      why_desc: "Un panel solar es una infraestructura diseñada para durar 25 años o más. Instalar un sistema sobre un tejado en mal estado representa un grave error técnico y financiero.",
      why_points: [
        {
          num: "01",
          title: "Evita Costos Duplicados de Mano de Obra",
          desc: "Si tu techo necesita reparaciones en 5 años, tendrás que desmontar los paneles solares y reinstalarlos. Integrar ambos proyectos evita pagar la tarifa de instalación dos veces."
        },
        {
          num: "02",
          title: "Diagnóstico Profesional Integrado",
          desc: "Evaluamos la integridad del tejado, la orientación, la carga estructural y el sombreado en un solo análisis técnico de pre-factibilidad solar."
        },
        {
          num: "03",
          title: "Financiamiento Integrado",
          desc: "Pregunta a nuestros asesores sobre los programas para financiar tu nuevo tejado y tu sistema de energía solar en una sola propuesta estructurada de pago."
        }
      ],
      core_tag: "Our Capabilities",
      core_title: "Servicios de Techos y Mejoras",
      core_desc: "Soluciones estructuradas que garantizan la longevidad y el óptimo desempeño de tus activos inmobiliarios residenciales o comerciales.",
      core_services: [
        {
          title: "Reemplazo de Techo",
          desc: "Coordinamos el desmontaje completo e instalación de nuevos techos utilizando materiales de alta durabilidad (shingle, teja metálica y techos planos comerciales) que garantizan protección por décadas."
        },
        {
          title: "Reparación y Mantenimiento",
          desc: "Detección temprana de filtraciones, corrección de daños por tormentas, reemplazo de tejas afectadas y refuerzo estructural para extender la vida útil de tu techo existente."
        },
        {
          title: "Evaluación Solar-Ready",
          desc: "Determinamos si la estructura actual de tu techo cuenta con la capacidad de soporte y la vida útil necesaria (mínimo 15-20 años) para albergar paneles solares sin requerir un reemplazo posterior prematuro."
        },
        {
          title: "Mejoras Generales de Eficiencia",
          desc: "Coordinamos mejoras exteriores adicionales como sistemas de aislamiento térmico, canaletas y adaptaciones de ahorro energético que elevan el valor integral de tu propiedad."
        }
      ],
      areas_tag: "Service Areas",
      areas_title: "Cobertura en Maryland, Virginia y Washington D.C.",
      areas_desc: "Coordinamos soporte técnico presencial y propuestas de financiamiento personalizadas para propietarios ubicados en los siguientes mercados:",
      btn_start_area: "Solicitar Consulta en",
      serviceAreas: [
        {
          state: "Maryland",
          code: "roofing_md",
          points: [
            "Consultas de techado y presupuestos sin costo",
            "Guía y coordinación para reemplazo completo de techos",
            "Evaluaciones de techos listos para paneles solares (Solar-Ready)",
            "Soporte de proyectos en mejoras generales del hogar"
          ]
        },
        {
          state: "Washington, D.C.",
          code: "roofing_dc",
          points: [
            "Soporte integral en reparaciones de techos residenciales y urbanos",
            "Coordinación de mejoras exteriores (fachadas y aislamiento)",
            "Planificación y gestión de mejoras de valor patrimonial",
            "Evaluaciones de eficiencia y estructura para techos listos para solar"
          ]
        },
        {
          state: "Virginia",
          code: "roofing_va",
          points: [
            "Asesoría técnica para proyectos de techado y tejas premium",
            "Consultas integrales de mejoras del hogar y eficiencia",
            "Revisión de preparación y vida útil del techo antes de instalar solar",
            "Coordinación de contratistas certificados y calificados localmente"
          ]
        }
      ],
      process_tag: "Work Flow",
      process_title: "Proceso de Trabajo y Evaluación",
      process_desc: "Un enfoque metódico para asegurar que cada reemplazo de tejado y mejora se realice con la mayor precisión.",
      steps: [
        {
          num: "1",
          title: "Envío de Detalles",
          desc: "Comparte los detalles básicos de tu propiedad, la antigüedad estimada de tu techo y tus necesidades actuales de mejoras."
        },
        {
          num: "2",
          title: "Inspección y Diagnóstico",
          desc: "Coordinamos una visita técnica en sitio con un inspector aliado calificado en Maryland, D.C. o Virginia para analizar el estado físico."
        },
        {
          num: "3",
          title: "Planificación y Presupuesto",
          desc: "Recibe un reporte claro con las soluciones sugeridas, presupuesto de obra detallado y opciones de financiamiento disponibles."
        },
        {
          num: "4",
          title: "Ejecución Coordinada",
          desc: "Especialistas licenciados locales realizan el trabajo bajo estándares institucionales, asegurando la limpieza y protección de tu hogar."
        }
      ],
      faq_tag: "Knowledge",
      faq_title: "Preguntas Frecuentes",
      faqs: [
        {
          q: "¿Por qué es importante evaluar el techo antes de instalar paneles solares?",
          a: "Los paneles solares tienen una vida útil garantizada de 25 a 30 años. Si se instalan sobre un techo desgastado que requerirá reemplazo en 5 o 10 años, tendrás que pagar el costo de desmontar los paneles solares, reemplazar el techo y volver a instalar todo el sistema solar. Evaluar e integrar ambos proyectos previene este doble costo de mano de obra."
        },
        {
          q: "¿En qué zonas de EE.UU. ofrecen servicios de techado y mejoras del hogar?",
          a: "Nuestros servicios presenciales de techado y mejoras del hogar están limitados estrictamente a los estados de Maryland, Virginia y el Distrito de Columbia (zona DMV). No ofrecemos servicios de construcción o techado fuera de esta región."
        },
        {
          q: "¿Qué tipos de mejoras generales del hogar pueden coordinar?",
          a: "Aunque nos especializamos en techados por su relación directa con la energía solar, coordinamos de la mano con contratistas calificados una variedad de mejoras generales incluyendo aislamiento para eficiencia energética, revestimiento exterior (siding) y remodelaciones estructurales para revalorizar inmuebles residenciales y comerciales."
        },
        {
          q: "¿Ofrecen opciones de financiamiento para proyectos de mejoras?",
          a: "Sí, a través de nuestros socios y alianzas estratégicas ofrecemos opciones de financiamiento flexibles para ayudar a propietarios e inversionistas a costear los proyectos de techado y mejoras generales, sujeto a evaluación crediticia y aprobación de los términos del socio financiero."
        }
      ],
      cta_title: "Protege tu propiedad y prepárate para el futuro",
      cta_desc: "Solicita hoy una visita técnica y presupuesto para tu proyecto de techado o mejoras del hogar en Maryland, D.C. o Virginia.",
      btn_cta: "Agendar Evaluación Técnica"
    },
    en: {
      tag: "Home Improvement & Roofing",
      hero_title: <>Roofing & Home Improvement <br className="hidden sm:inline" /><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">In Maryland, D.C., and Virginia</span></>,
      hero_desc: "We assess, finance, and coordinate premium roofing and structural improvement projects that boost property asset equity and prepare your home for solar.",
      btn_req: "Request Roof Assessment",
      btn_cov: "View Service Areas",
      why_title: "Why Roofing Matters Before Solar Integration",
      why_desc: "A solar panel system is infrastructure built to last 25+ years. Installing solar over a deteriorated roof represents a severe technical and financial mistake.",
      why_points: [
        {
          num: "01",
          title: "Avoid Duplicate Labor Fees",
          desc: "If your roof requires replacement in 5 years, you must pay to uninstall and reinstall your panels. Integrating both projects prevents duplicate labor fees."
        },
        {
          num: "02",
          title: "Integrated Professional Check",
          desc: "We analyze structural integrity, load weight capacity, orientation, and shading in a single solar pre-feasibility inspection."
        },
        {
          num: "03",
          title: "Bundled Financing Options",
          desc: "Ask our project advisors about financing programs to combine your new roof and solar system in a single structured monthly plan."
        }
      ],
      core_tag: "Our Capabilities",
      core_title: "Roofing & Improvement Services",
      core_desc: "Structured solutions ensuring property resilience, asset protection, and optimized performance for residential or commercial buildings.",
      core_services: [
        {
          title: "Roof Replacement",
          desc: "We coordinate complete teardowns and installations of new premium shingle, metal, and commercial flat roofs engineered to last for decades."
        },
        {
          title: "Repair & Maintenance",
          desc: "Early leak tracking, wind/storm damage fixes, shingle replacements, and structural reinforcement to prolong the lifespan of your roof asset."
        },
        {
          title: "Solar-Ready Audits",
          desc: "We inspect your current roof to determine if its weight capability and remaining service life (minimum 15-20 years) can support solar panels."
        },
        {
          title: "Efficiency Upgrades",
          desc: "We organize additional exterior upgrades like thermal insulation layers, seamless gutters, and energy-saving siding solutions."
        }
      ],
      areas_tag: "Service Areas",
      areas_title: "Coverage in Maryland, Virginia, and Washington D.C.",
      areas_desc: "We coordinate on-site technical evaluations and structured financing proposals for properties located in these markets:",
      btn_start_area: "Request Consultation in",
      serviceAreas: [
        {
          state: "Maryland",
          code: "roofing_md",
          points: [
            "Complimentary roofing inspections and quotes",
            "Project coordination for complete roof replacements",
            "Solar-Ready assessments for future solar viability",
            "General home improvement project consultations"
          ]
        },
        {
          state: "Washington, D.C.",
          code: "roofing_dc",
          points: [
            "Comprehensive urban and historic roof repair coordination",
            "Exterior cladding and insulation upgrades coordination",
            "Asset value planning and equity optimization reviews",
            "Structural and efficiency audits for solar-ready setups"
          ]
        },
        {
          state: "Virginia",
          code: "roofing_va",
          points: [
            "Technical guidance for premium shingle and metal roofing",
            "Whole-home efficiency and improvement consultations",
            "Roof lifespan checks prior to solar installation",
            "Local certified and vetted partner contractor matching"
          ]
        }
      ],
      process_tag: "Work Flow",
      process_title: "Workflow & Technical Evaluation",
      process_desc: "A methodical approach ensuring every roof replacement and home improvement project matches institutional standards.",
      steps: [
        {
          num: "1",
          title: "Property Submission",
          desc: "Provide basic property info, approximate roof age, and your current home improvement goals."
        },
        {
          num: "2",
          title: "On-Site Diagnostics",
          desc: "We coordinate a physical visit with a vetted local inspector in Maryland, D.C., or Virginia to assess the roof condition."
        },
        {
          num: "3",
          title: "Plan & Proposal",
          desc: "Receive a transparent report with project solutions, detailed material budgets, and partner financing options."
        },
        {
          num: "4",
          title: "Vetted Execution",
          desc: "Licensed local partner contractors execute the install matching building code, protecting your home property."
        }
      ],
      faq_tag: "Knowledge",
      faq_title: "Frequently Asked Questions",
      faqs: [
        {
          q: "Why is it important to inspect the roof before solar installations?",
          a: "Solar arrays are warrantied for 25 to 30 years. If installed over a worn roof needing replacement in 5-10 years, you will face high fees to dismantle the system, replace the roof, and reinstall the arrays. Integrating both avoids this duplicate labor cost."
        },
        {
          q: "Which regions are served for roofing and home improvement?",
          a: "Our physical roofing and home improvement services are strictly limited to Maryland, Virginia, and Washington D.C. (the DMV metro area). We do not offer physical construction services outside this region."
        },
        {
          q: "What types of home improvements can you coordinate?",
          a: "While we specialize in roofing due to its solar connection, we coordinate a range of upgrades including insulation systems, siding, and structural renovations to increase commercial and residential property equity."
        },
        {
          q: "Are project financing programs available?",
          a: "Yes, through our partner networks we offer flexible project financing programs to help residential and commercial property owners structure roofing and solar upgrades."
        }
      ],
      cta_title: "Secure Your Property & Build for the Future",
      cta_desc: "Request an inspection and budget layout for your roofing or home improvement project in Maryland, D.C., or Virginia today.",
      btn_cta: "Schedule Technical Inspection"
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
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight italic">
            {t.hero_title}
          </h1>
          <p className="text-lg text-text-muted max-w-3xl mx-auto font-semibold leading-relaxed mb-8">
            {t.hero_desc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contacto?service=roofing_md" 
              className="inline-flex justify-center items-center gap-3 bg-gold text-background px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
            >
              {t.btn_req}
              <ArrowRight size={16} />
            </Link>
            <Link 
              href="#service-areas" 
              className="inline-flex justify-center items-center px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest text-white bg-bg-card border border-white/10 hover:bg-white/5 transition-colors"
            >
              {t.btn_cov}
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 mt-20">
        
        {/* Why Roofing Matters Before Solar */}
        <section className="mb-24 p-10 rounded-[2.5rem] bg-bg-card border border-gold-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(201,168,76,0.04)_0%,_transparent_75%)] pointer-events-none" />
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <div className="w-14 h-14 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-center justify-center text-red-400 mb-6">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight italic mb-4">
                {t.why_title}
              </h2>
              <p className="text-text-muted text-sm leading-relaxed font-semibold">
                {t.why_desc}
              </p>
            </div>
            
            <div className="md:col-span-3 space-y-4">
              {t.why_points.map((pt, i) => (
                <div key={i} className="p-5 bg-background/50 rounded-xl border border-white/5 flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold flex items-center justify-center shrink-0 font-bold text-xs">
                    {pt.num}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider mb-1">{pt.title}</h4>
                    <p className="text-text-muted text-xs leading-relaxed font-semibold">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services Grid */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.core_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.core_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.core_desc}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {t.core_services.map((service, i) => (
              <div 
                key={i} 
                className="p-8 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-glow border border-gold-border rounded-xl flex items-center justify-center text-gold mb-6">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{service.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed font-semibold">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Service Areas Section */}
        <section id="service-areas" className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              {t.areas_tag}
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight italic mb-4">
              {t.areas_title}
            </h2>
            <p className="text-text-muted font-semibold text-sm leading-relaxed">
              {t.areas_desc}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.serviceAreas.map((area) => (
              <div 
                key={area.state} 
                className="p-8 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 bg-gold-glow border border-gold-border rounded-lg flex items-center justify-center text-gold mb-6">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{area.state}</h3>
                  
                  <ul className="space-y-3 mb-8">
                    {area.points.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs font-bold text-white/80 uppercase tracking-wider leading-relaxed">
                        <CheckCircle2 className="w-4.5 h-4.5 shrink-0 text-gold mt-0.5" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={`/contacto?service=${area.code}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase text-gold hover:text-white transition-colors group mt-auto"
                >
                  {t.btn_start_area} {area.state} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
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
              href="/contacto?service=roofing_md" 
              className="inline-flex justify-center items-center gap-3 bg-gold text-background px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
            >
              {t.btn_cta}
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
