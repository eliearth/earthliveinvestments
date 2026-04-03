import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap, Battery, CheckCircle2, Sun } from "lucide-react";
import { PortfolioCarousel } from "@/components/home/PortfolioCarousel";
import { BrandLogo } from "@/components/ui/BrandLogo";

export default function Home() {
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
                Institutional Grade Assets
              </div>
              <h1 className="text-5xl lg:text-6xl font-black tracking-tighter text-white mb-6 leading-[1.04]">
                Accelerating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold-dim">
                  Wealth Through
                </span><br />
                Clean Energy.
              </h1>
              <p className="text-base text-text-muted mb-10 max-w-lg leading-relaxed font-semibold">
                Earth Live Invest combines premium solar energy infrastructure with strategic assets to deliver sustainable returns for sophisticated investors.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contacto"
                  className="inline-flex justify-center items-center gap-3 bg-gold text-background px-10 py-4 rounded-xl font-black text-[0.875rem] uppercase tracking-widest hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)]"
                >
                  Iniciar Inversión
                  <ArrowRight size={20} />
                </Link>
                <Link
                  href="/#performance"
                  className="inline-flex justify-center items-center px-10 py-4 rounded-xl font-black text-[0.875rem] uppercase tracking-widest text-white bg-bg-card border border-white/10 hover:bg-white/5 transition-colors"
                >
                  Ver Rendimiento
                </Link>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-8 text-[0.7rem] text-text-muted font-bold tracking-widest uppercase">
                <div className="flex items-center gap-2">
                  <span className="text-gold text-xl font-black tracking-tighter">$2.4B+</span>
                  <span className="text-[0.6rem] block leading-tight">Activos <br/>Gestionados</span>
                </div>
                <div className="w-[1px] h-10 bg-white/10" />
                <div className="flex items-center gap-2">
                  <span className="text-gold text-xl font-black tracking-tighter">12.8%</span>
                  <span className="text-[0.6rem] block leading-tight">Rendimiento <br/>Anual Prom.</span>
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
                          <div className="text-[0.65rem] font-bold text-text-muted uppercase tracking-widest">Rendimiento Real</div>
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
              Dual-Asset Strategy
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">The Wealth Advantage</h2>
            <p className="text-text-muted text-base leading-relaxed font-semibold">Combinamos el flujo de caja constante de la energía renovable con la apreciación de capital de activos inmobiliarios prime.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <Sun size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Infraestructura Solar</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">Propiedad estratégica de arreglos solares a gran escala que producen energía limpia constante para redes nacionales.</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">Capacidad Instalada</span>
                <span className="text-gold">1.2 GW</span>
              </div>
            </div>
            
            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Inmuebles Premium</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">Propiedades comerciales y residenciales de lujo integradas con sistemas de gestión energética inteligente de vanguardia.</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">Valuación Portafolio</span>
                <span className="text-gold">$850M</span>
              </div>
            </div>

            <div className="p-10 rounded-[2rem] bg-bg-card border border-white/5 hover:border-gold-border transition-all group relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-dim to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-16 h-16 bg-gold-glow border border-gold-border rounded-2xl flex items-center justify-center mb-8 text-gold group-hover:bg-gold group-hover:text-background transition-all">
                <Battery size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight uppercase">Respaldo Global</h3>
              <p className="text-text-muted text-sm leading-relaxed font-semibold mb-8">Diversificación en mercados emergentes y estables, asegurando resiliencia y un alcance global sin precedentes.</p>
              <div className="pt-6 border-t border-white/5 flex justify-between items-center text-[0.65rem] font-bold uppercase tracking-widest">
                <span className="text-white/40">Naciones Activas</span>
                <span className="text-gold">12 Países</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section with Updated Carousel Styling */}
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
              Intelligence Platform
            </div>
            <h2 className="text-4xl font-black mb-6 tracking-tight leading-tight uppercase">Total Transparency <br/> In Your Pocket</h2>
            <p className="text-text-muted text-base leading-relaxed font-semibold mb-10">Monitorea la producción de energía, rastrea valuaciones inmobiliarias y gestiona tus dividendos con herramientas de grado institucional.</p>
            <div className="space-y-6 mb-12">
              {[
                "Monitoreo de producción en tiempo real",
                "Reportes detallados de impacto ambiental",
                "Gestión de dividendos trimestrales",
                "Soporte prioritario 24/7"
              ].map((item, i) => (
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
              Unirse a la Red
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
            Wealth through <br/>
            <span className="text-gold">precision energy.</span>
          </h2>
          <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto font-semibold leading-relaxed">
            El verdadero costo no es la inversión solar; es seguir pagando altas tarifas de por vida. Toma el control hoy.
          </p>
          <Link
            href="/contacto"
            className="inline-flex justify-center items-center bg-gold text-background px-12 py-5 rounded-full font-black text-[1rem] uppercase tracking-[0.15em] hover:scale-105 transition-all shadow-[0_0_50px_rgba(201,168,76,0.3)]"
          >
            Obtén tu Propuesta Institucional
          </Link>
        </div>
      </section>
    </>
  );
}
