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
      platform_tag: "Monitoreo en Tiempo Real",
      platform_title: <>Producción Solar <br/> En Tu Bolsillo</>,
      platform_desc: "Toma el control absoluto de tu energía. Visualiza la generación de tus paneles en tiempo real, accede a reportes históricos y mantén la tranquilidad con el respaldo de garantías de fabricantes líderes en la industria.",
      platform_features: [
        "Seguimiento de producción diaria, semanal, mensual y anual",
        "Garantía de fabricante de 25 años en microinversores inteligentes",
        "Garantía de rendimiento de producción lineal de 25 años en paneles",
        "Monitoreo constante con detección automática de fallas"
      ],
      btn_join: "Monitorear Mi Sistema",
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
      platform_tag: "Real-time Monitoring",
      platform_title: <>Solar Production <br/> In Your Pocket</>,
      platform_desc: "Take absolute control of your energy. View your solar generation instantly, access historical production reports, and enjoy peace of mind backed by industry-leading manufacturer warranties.",
      platform_features: [
        "Daily, weekly, monthly, and yearly production tracking",
        "25-Year manufacturer warranty on smart microinverters",
        "25-Year linear power production warranty on panels",
        "Continuous system monitoring with automated fault detection"
      ],
      btn_join: "Monitor My System",
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
          {/* Cellphone Mockup with Solar App */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="w-[300px] h-[600px] bg-background rounded-[3rem] border-[8px] border-[#1e2d4a] relative shadow-[0_25px_60px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden text-white font-sans">
              {/* Speaker / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1e2d4a] rounded-b-2xl flex items-center justify-center z-20">
                <div className="w-12 h-1 bg-black/40 rounded-full" />
              </div>
              
              {/* Screen Content */}
              <div className="flex-1 flex flex-col justify-between pt-10 p-5 relative bg-[#09101f]">
                {/* App Header */}
                <div className="flex justify-between items-center border-b border-white/5 pb-3">
                  <div>
                    <span className="text-[0.55rem] font-bold text-text-muted uppercase tracking-widest block">System Status</span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                      <span className="text-xs font-black text-white uppercase tracking-wider">ACTIVE</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[0.65rem] font-black text-gold uppercase tracking-wider">EARTH LIVE</span>
                  </div>
                </div>

                {/* Energy Chart Tab Control */}
                <div className="my-4">
                  <div className="flex justify-between bg-bg-card/50 border border-white/5 p-1 rounded-xl text-[0.6rem] font-black uppercase text-center">
                    <span className="w-1/4 py-1 text-white/45">D</span>
                    <span className="w-1/4 py-1 text-white/45">W</span>
                    <span className="w-1/4 py-1 bg-gold text-background rounded-lg shadow-sm font-extrabold">M</span>
                    <span className="w-1/4 py-1 text-white/45">Y</span>
                  </div>
                </div>

                {/* Production Curve SVG */}
                <div className="flex-1 bg-bg-card/30 border border-white/5 rounded-2xl p-4 flex flex-col justify-between mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,168,76,0.05)_0%,_transparent_75%)] pointer-events-none" />
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[0.55rem] font-bold text-text-muted uppercase tracking-widest block">{language === "en" ? "Monthly Production" : "Producción Mensual"}</span>
                      <span className="text-xl font-black text-white tracking-tight">1.18 MWh</span>
                    </div>
                    <span className="text-[0.6rem] font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">▲ +4.2%</span>
                  </div>
                  
                  {/* SVG Bar/Line graph representing daily/weekly/monthly/yearly curve */}
                  <div className="h-[120px] w-full flex items-end justify-between mt-3 px-1">
                    {[35, 45, 30, 60, 50, 75, 90, 85, 65, 80, 95, 70].map((val, i) => (
                      <div key={i} className="flex flex-col items-center w-1.5 gap-1.5 h-full justify-end">
                        <div 
                          style={{ height: `${val}%` }} 
                          className={`w-full rounded-t-full transition-all duration-1000 ${
                            i === 10 
                              ? 'bg-gradient-to-t from-gold-dim via-gold to-gold-light shadow-[0_0_8px_rgba(201,168,76,0.5)]' 
                              : 'bg-white/10'
                          }`}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between text-[0.45rem] font-bold text-text-muted mt-2 uppercase tracking-widest border-t border-white/5 pt-2">
                    <span>Jan</span>
                    <span>Jun</span>
                    <span>Dec</span>
                  </div>
                </div>

                {/* Microinverters & Panel Stats */}
                <div className="grid grid-cols-2 gap-3 mb-2">
                  <div className="p-3 bg-bg-card/45 border border-white/5 rounded-xl">
                    <span className="text-[0.5rem] font-bold text-white/40 uppercase tracking-widest block">{language === "en" ? "Current Power" : "Potencia Actual"}</span>
                    <span className="text-sm font-black text-gold">8.4 kW</span>
                  </div>
                  <div className="p-3 bg-bg-card/45 border border-white/5 rounded-xl">
                    <span className="text-[0.5rem] font-bold text-white/40 uppercase tracking-widest block">{language === "en" ? "Lifetime Yield" : "Rendimiento Total"}</span>
                    <span className="text-sm font-black text-gold">24.5 MWh</span>
                  </div>
                </div>

                {/* Warranty Summary Footer inside Screen */}
                <div className="p-3 bg-gold-glow/20 border border-gold-border/30 rounded-xl flex items-center justify-between text-[0.55rem] font-extrabold uppercase tracking-widest">
                  <span className="text-white/60">{language === "en" ? "Inverter Warranty" : "Garantía de Inversor"}</span>
                  <span className="text-gold">25 {language === "en" ? "Years" : "Años"}</span>
                </div>
              </div>
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
