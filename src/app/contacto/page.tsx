"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function ContactoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Replace this with your actual Zapier / Make.com Webhook URL
  const WEBHOOK_URL = "https://hook.us2.make.com/xmzwl7t8xxaxderii2c6s9hh4un7qsx6";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error al enviar. Intente de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen px-6 sm:px-12 font-sans">
      <div className="max-w-7xl mx-auto pl-4">
        
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-10 items-start">
          
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
              Institutional Contact
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-8 leading-tight uppercase italic text-white tracking-tight">Solicita tu <br/> Propuesta.</h1>
            <p className="text-text-muted mb-12 text-base font-semibold leading-relaxed">
              Inicia tu transición hacia la riqueza energética. Nuestro equipo institucional te contactará para una asesoría de inversión personalizada.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Phone />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">Llamada Directa</h3>
                  <p className="text-base font-bold text-white tracking-widest">+503 2222-2222</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Mail />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">Consultas</h3>
                  <p className="text-base font-bold text-white tracking-widest">info@earthliveinvest.com</p>
                </div>
              </div>

              <div className="flex gap-6 group">
                <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin />
                </div>
                <div>
                  <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">Centro Regional</h3>
                  <p className="text-base font-bold text-white tracking-widest leading-relaxed">San Salvador, <br/> El Salvador</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div className="lg:col-span-3 bg-bg-card p-10 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-gold-border relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center py-24">
                <div className="w-24 h-24 bg-gold-glow text-gold border border-gold-border rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black text-white mb-4 uppercase italic">Solicitud Recibida</h2>
                <p className="text-text-muted text-base font-semibold max-w-sm">
                  Un director de cuentas institucionales se pondrá en contacto contigo en breve para proceder con tu propuesta personalizada.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">Nombre</label>
                    <input required name="nombre" type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder="Escribe tu nombre" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">Apellido</label>
                    <input required name="apellido" type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder="Escribe tu apellido" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">Teléfono Corporativo</label>
                    <input required name="telefono" type="tel" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder="+503" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">E-mail Institucional</label>
                    <input required name="email" type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">Tipo de Inversión</label>
                  <select required name="tipo_proyecto" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white font-bold appearance-none cursor-pointer">
                    <option className="bg-bg-deep" value="residencial">Residencial Premium</option>
                    <option className="bg-bg-deep" value="comercial">Comercial / Industrial</option>
                    <option className="bg-bg-deep" value="storage">Storage & Mobility</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">Consumo Eléctrico Mensual ($)</label>
                  <div className="relative">
                    <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-gold text-sm">$</span>
                    <input required name="factura_mensual" type="number" min="0" className="w-full bg-background/50 border border-white/10 rounded-xl pl-10 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder="150" />
                  </div>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold text-background font-black text-[1rem] uppercase tracking-[0.2em] py-5 rounded-xl hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin" /> Procesando...
                    </>
                  ) : (
                    <>
                      Solicitar Propuesta <Send size={20} />
                    </>
                  )}
                </button>
                <p className="text-center text-[0.65rem] font-black tracking-widest text-white/20 uppercase">
                  Protegido por protocolos de encriptación institucional.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
