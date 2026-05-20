"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Battery, Sun } from "lucide-react";
import { PortfolioCarousel } from "@/components/home/PortfolioCarousel";
import { useLanguage } from "@/context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const translations = {
    es: {
      tag_grade: "Institutional Grade Assets",
      hero_title: <>Acelerando <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">Riqueza a Través de</span><br /> Energía Limpia.</>,
      hero_desc: "Earth Live Invest combina infraestructura premium de energía solar con activos estratégicos para ofrecer rendimientos sostenibles a inversores sofisticados.",
      btn_start: "Iniciar Inversión",
      btn_performance: "Ver Rendimiento",
      stat_assets: "Activos Gestionados",
      stat_yield: "Rendimiento Anual Prom.",
      real_yield: "Rendimiento Real",
      tag_dual: "Dual-Asset Strategy",
      advantage_title: "La Ventaja del Patrimonio",
      advantage_desc: "Combinamos el flujo de caja constante de la energía renovable con la apreciación de capital de activos inmobiliarios prime.",
      solar_title: "Infraestructura Solar",
      solar_desc: "Propiedad estratégica de arreglos solares a gran escala que producen energía limpia constante para redes nacionales.",
      solar_metric: "Capacidad Instalada",
      realestate_title: "Inmuebles Premium",
      realestate_desc: "Propiedades comerciales y residenciales de lujo integradas con sistemas de gestión energética inteligente de vanguardia.",
      realestate_metric: "Valuación Portafolio",
      global_title: "Respaldo Global",
      global_desc: "Diversificación en mercados emergentes y estables, asegurando resiliencia y un alcance global sin precedentes.",
      global_metric: "Naciones Activas",
      global_metric_val: "12 Países",
      platform_tag: "Intelligence Platform",
      platform_title: <>Total Transparencia <br/> En Tu Bolsillo</>,
      platform_desc: "Monitorea la producción de energía, rastrea valuaciones inmobiliarias y gestiona tus dividendos con herramientas de grado institucional.",
      platform_features: [
        "Monitoreo de producción en tiempo real",
        "Reportes detallados de impacto ambiental",
        "Gestión de dividendos trimestrales",
        "Soporte prioritario 24/7"
      ],
      btn_join: "Unirse a la Red",
      cta_title: <>Patrimonio mediante <br/> <span className="text-gold">precisión energética.</span></>,
      cta_desc: "El verdadero costo no es la inversión solar; es seguir pagando altas tarifas de por vida. Toma el control hoy.",
      btn_proposal: "Obtén tu Propuesta Institucional"
    },
    en: {
      tag_grade: "Institutional Grade Assets",
      hero_title: <>Accelerating <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">Wealth Through</span><br /> Clean Energy.</>,
      hero_desc: "Earth Live Invest combines premium solar energy infrastructure with strategic assets to deliver sustainable returns for sophisticated investors.",
      btn_start: "Start Investing",
      btn_performance: "View Performance",
      stat_assets: "Assets Under Management",
      stat_yield: "Average Annual Yield",
      real_yield: "Real-time Yield",
      tag_dual: "Dual-Asset Strategy",
      advantage_title: "The Wealth Advantage",
      advantage_desc: "We combine the steady cash flow of renewable energy with the capital appreciation of prime real estate assets.",
      solar_title: "Solar Infrastructure",
      solar_desc: "Strategic ownership of utility-scale solar arrays producing constant clean energy for national grids.",
      solar_metric: "Installed Capacity",
      realestate_title: "Premium Real Estate",
      realestate_desc: "Luxury commercial and residential properties integrated with state-of-the-art smart energy management systems.",
      realestate_metric: "Portfolio Valuation",
      global_title: "Global Security",
      global_desc: "Diversification across emerging and stable markets, ensuring resilience and unprecedented global reach.",
      global_metric: "Active Nations",
      global_metric_val: "12 Countries",
      platform_tag: "Intelligence Platform",
      platform_title: <>Total Transparency <br/> In Your Pocket</>,
      platform_desc: "Monitor energy production, track real estate valuations, and manage dividends with institutional-grade tools.",
      platform_features: [
        "Real-time production monitoring",
        "Detailed environmental impact reports",
        "Quarterly dividend management",
        "Priority 24/7 client support"
      ],
      btn_join: "Join the Network",
      cta_title: <>Wealth through <br/> <span className="text-gold">precision energy.</span></>,
      cta_desc: "The real cost is not solar investment; it is continuing to pay high utility rates for life. Take control today.",
      btn_proposal: "Get Your Institutional Proposal"
    }
  };

  const t = translations[language];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden px-6 sm:px-12">
        <div className="absolute inset-0 bg-background -z-10" />
        <div className="absolute top-10 right-[-5%] w-[700px] h-[700px] bg-[radial-gradient(circle,_var(--color-gold-glow)_0%,_transparent_70%)] pointer-events-none animate-pulse opacity-70" />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold-border bg-gold-glow text-gold-light font-extrabold text-[0.6rem] uppercase tracking-[0.18em] mb-8">
                <ShieldCheck className="w-4 h-4" />
                {t.tag_grade}
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.04]">
                {t.hero_title}
              </h1>
              <p className="text-base text-text-muted mb-10 max-w-lg leading-relaxed font-semibold">
                {t.hero_desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex justify-center items-center gap-3 bg-gold text-background px-10 py-4 rounded-xl font-black text-[0.875rem] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
                >
                  {t.btn_start}
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/#performance"
                  className="inline-flex justify-center items-center px-10 py-4 rounded-xl font-black text-[0.875rem] uppercase tracking-widest text-white bg-bg-card border border-white/10 hover:bg-white/5 transition-colors"
                >
                  {t.btn_performance}
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8 text-[0.7rem] text-text-muted font-bold tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <span className="text-gold text-xl font-black tracking-tighter">$2.4B+</span>
                  <span className="text-[0.6rem] block leading-tight">{language === "en" ? <>Assets<br/>Under Mgmt</> : <>Activos <br/>Gestionados</>}</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-gold text-xl font-black tracking-tighter">12.8%</span>
                  <span className="text-[0.6rem] block leading-tight">{language === "en" ? <>Average<br/>Annual Yield</> : <>Rendimiento <br/>Anual Prom.</>}</span>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-[-20px] bg-[radial-gradient(circle,_rgba(201,168,76,0.1)_0%,_transparent_70%)] pointer-events-none" />
              <div className="relative rounded-[2.5rem] overflow-hidden border border-gold-border bg-bg-card shadow-[0_40px_80px_rgba(0,0,0,0.5)] aspect-[4/5]">
                <img 
                  src="https://images.unsplash.com/photo-1712620602288-8adb09edbef2?q=80&w=900&auto=format&fit=crop" 
                  alt="Solar energy farm architecture" 
                  className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-bg-card/70 backdrop-blur-2xl rounded-2xl p-6 border border-gold-border text-white shadow-2xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gold-glow border border-gold-border text-gold rounded-lg">
                          <Zap className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest">{t.real_yield}</div>
                          <div className="text-sm font-bold">Solar Portfolio X-1</div>
                        </div>
                      </div>
                      <span className="text-green-400 font-bold text-sm">▲ +4.2%</span>
                    </div>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-gold-dim via-gold to-gold-light w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-28 bg-[linear-gradient(180deg,_transparent_0%,_rgba(10,31,68,0.4)_50%,_transparent_100%)] border-y border-white/5 px-6 sm:px-12" id="soluciones">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold animate-in">
              {t.tag_dual}
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight uppercase">{t.advantage_title}</h2>
            <p className="text-text-muted text-base leading-relaxed font-semibold">{t.advantage_desc}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{t.solar_title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">{t.solar_desc}</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">{t.solar_metric}</span>
                <span className="text-gold">1.2 GW</span>
              </div>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{t.realestate_title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">{t.realestate_desc}</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">{t.realestate_metric}</span>
                <span className="text-gold">$850M</span>
              </div>
            </div>

            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <Battery size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">{t.global_title}</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">{t.global_desc}</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">{t.global_metric}</span>
                <span className="text-gold">{t.global_metric_val}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portafolio" className="py-28 px-6 sm:px-12">
        <PortfolioCarousel />
      </section>
      
      {/* Dashboard Preview Section */}
      <section className="py-28 bg-bg-card border-y border-white/5 px-6 sm:px-12" id="performance">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center pl-4">
          <div className="bg-background rounded-3xl border border-gold-border p-8 shadow-[0_40px_80px_rgba(0,0,0,0.5)] order-2 lg:order-1">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gold-glow border border-gold-border rounded-lg text-gold">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold">Portfolio Intelligence</span>
              </div>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-gold-glow/20 border border-gold-border rounded-xl">
                <div className="text-[0.55rem] font-bold text-text-muted uppercase tracking-widest mb-2">Total Value</div>
                <div className="text-lg font-black text-gold">$1,240,500</div>
              </div>
              <div className="p-4 bg-gold-glow/20 border border-gold-border rounded-xl">
                <div className="text-[0.55rem] font-bold text-text-muted uppercase tracking-widest mb-2">Generation</div>
                <div className="text-lg font-black text-gold">14,250 MWh</div>
              </div>
            </div>
            <div className="space-y-3">
              {[
                { name: "Helios Array 01", val: "$450K", gain: "+12.4%" },
                { name: "Aurora Lofts", val: "$320K", gain: "+8.2%" },
                { name: "Global ESG Fund", val: "$140K", gain: "+5.5%" },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center p-4 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/5 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                    <span className="text-sm font-bold">{row.name}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{row.val}</div>
                    <div className="text-[0.65rem] font-bold text-green-400">{row.gain}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold animate-in">
              {t.platform_tag}
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight leading-tight uppercase">{t.platform_title}</h2>
            <p className="text-text-muted text-base leading-relaxed font-semibold mb-10">{t.platform_desc}</p>
            <div className="space-y-6 mb-12">
              {t.platform_features.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-gold-border flex items-center justify-center text-[0.6rem] font-bold text-gold group-hover:bg-gold group-hover:text-background transition-colors">
                    {i + 1}
                  </div>
                  <span className="text-sm font-bold text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <Link
              href="/contacto"
              className="inline-flex justify-center items-center gap-3 bg-gold text-background px-10 py-5 rounded-full font-black text-[0.875rem] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-2xl shadow-gold/25"
            >
              {t.btn_join}
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden px-6 sm:px-12 text-center border-t border-white/5">
        <div className="absolute inset-x-0 bottom-0 top-0 bg-background" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
        
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl lg:text-6xl font-black text-white mb-8 tracking-tighter uppercase leading-tight italic">
            {t.cta_title}
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-semibold leading-relaxed">
            {t.cta_desc}
          </p>
          <Link
            href="/contacto"
            className="inline-flex justify-center items-center bg-gold text-background px-12 py-5 rounded-full font-black text-[1rem] uppercase tracking-[0.15em] hover:scale-105 transition-all shadow-[0_0_50px_rgba(201,168,76,0.3)]"
          >
            {t.btn_proposal}
          </Link>
        </div>
      </section>
    </>
  );
}
