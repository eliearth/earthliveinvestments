"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

function ContactoFormContent() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [tipoProyecto, setTipoProyecto] = useState("consulta_general");
  const { language } = useLanguage();
  const [prefLanguage, setPrefLanguage] = useState("spanish");
  
  const searchParams = useSearchParams();

  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      setTipoProyecto(serviceParam);
    }
  }, [searchParams]);

  useEffect(() => {
    setPrefLanguage(language === "en" ? "english" : "spanish");
  }, [language]);

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
      alert(language === "en" ? "Error submitting. Please try again." : "Error al enviar. Intente de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const translations = {
    es: {
      tag: "Contacto Institucional",
      title: <>Solicita tu <br/> Propuesta.</>,
      desc: "Inicia tu transición hacia la riqueza energética y optimización de tu propiedad. Nuestro equipo te contactará para una asesoría personalizada.",
      direct_call: "Llamada Directa",
      consultations: "Consultas",
      regional_center: "Centro Regional",
      success_title: "Solicitud Recibida",
      success_desc: "Un asesor de cuentas institucionales se pondrá en contacto contigo en breve para proceder con tu propuesta personalizada.",
      label_name: "Nombre",
      placeholder_name: "Escribe tu nombre",
      label_lastname: "Apellido",
      placeholder_lastname: "Escribe tu apellido",
      label_phone: "Teléfono Corporativo",
      placeholder_phone: "+1 o +503",
      label_email: "E-mail Institucional",
      placeholder_email: "correo@example.com",
      label_service: "Servicio de Interés",
      label_bill: "Consumo Eléctrico Mensual ($)",
      placeholder_bill: "150",
      button_submit: "Solicitar Propuesta",
      button_submitting: "Procesando...",
      security_note: "Protegido por protocolos de seguridad y encriptación institucional.",
      label_language: "Idioma Preferido",
      error_submit: "Error al enviar. Intente de nuevo.",
      loading_form: "Cargando Formulario..."
    },
    en: {
      tag: "Institutional Contact",
      title: <>Request your <br/> Proposal.</>,
      desc: "Begin your transition toward energy wealth and asset optimization. Our team will contact you for a personalized consultation.",
      direct_call: "Direct Call",
      consultations: "Inquiries",
      regional_center: "Regional Center",
      success_title: "Proposal Requested",
      success_desc: "An institutional account manager will contact you shortly to review your customized proposal.",
      label_name: "First Name",
      placeholder_name: "Enter your first name",
      label_lastname: "Last Name",
      placeholder_lastname: "Enter your last name",
      label_phone: "Corporate Phone",
      placeholder_phone: "+1 or +503",
      label_email: "Institutional E-mail",
      placeholder_email: "email@example.com",
      label_service: "Service of Interest",
      label_bill: "Monthly Electricity Bill ($)",
      placeholder_bill: "150",
      button_submit: "Request Proposal",
      button_submitting: "Processing...",
      security_note: "Secured by institutional encryption and safety protocols.",
      label_language: "Preferred Language",
      error_submit: "Error submitting form. Please try again.",
      loading_form: "Loading Form..."
    }
  };

  const t = translations[language];

  return (
    <div className="grid lg:grid-cols-5 gap-16 lg:gap-10 items-start">
      
      {/* Contact Information */}
      <div className="lg:col-span-2">
        <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
          {t.tag}
        </div>
        <h1 className="text-4xl lg:text-5xl font-black mb-8 leading-tight uppercase italic text-white tracking-tight">{t.title}</h1>
        <p className="text-text-muted mb-12 text-base font-semibold leading-relaxed">
          {t.desc}
        </p>

        <div className="space-y-10">
          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Phone />
            </div>
            <div>
              <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">{t.direct_call}</h3>
              <p className="text-base font-bold text-white tracking-widest">+1 301 741 2861</p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <Mail />
            </div>
            <div>
              <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">{t.consultations}</h3>
              <p className="text-base font-bold text-white tracking-widest">eli@earthliveinvest.com</p>
            </div>
          </div>

          <div className="flex gap-6 group">
            <div className="w-14 h-14 bg-gold-glow text-gold border border-gold-border rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <MapPin />
            </div>
            <div>
              <h3 className="font-black text-xs uppercase tracking-widest text-white/50 mb-2">{t.regional_center}</h3>
              <p className="text-base font-bold text-white tracking-widest leading-relaxed">21 Avenida Norte, colonia Layco #1634 <br/> San Salvador</p>
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
            <h2 className="text-3xl font-black text-white mb-4 uppercase italic">{t.success_title}</h2>
            <p className="text-text-muted text-base font-semibold max-w-sm">
              {t.success_desc}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_name}</label>
                <input required name="nombre" type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder={t.placeholder_name} />
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_lastname}</label>
                <input required name="apellido" type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder={t.placeholder_lastname} />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_phone}</label>
                <input required name="telefono" type="tel" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder={t.placeholder_phone} />
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_email}</label>
                <input required name="email" type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder={t.placeholder_email} />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_service}</label>
              <select 
                required 
                name="tipo_proyecto" 
                value={tipoProyecto}
                onChange={(e) => setTipoProyecto(e.target.value)}
                className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white font-bold appearance-none cursor-pointer"
              >
                <option className="bg-bg-deep" value="solar_md">Solar - Maryland</option>
                <option className="bg-bg-deep" value="solar_dc">Solar - Washington, D.C.</option>
                <option className="bg-bg-deep" value="solar_va">Solar - Virginia</option>
                <option className="bg-bg-deep" value="solar_virtual">{language === "en" ? "Solar - Other State / Virtual Consultation" : "Solar - Otro Estado / Consulta Virtual"}</option>
                <option className="bg-bg-deep" value="solar_latam">Solar - LATAM (El Salvador / Honduras)</option>
                <option className="bg-bg-deep" value="roofing_md">{language === "en" ? "Roofing / Home Improvement - Maryland" : "Techos / Mejoras de Hogar - Maryland"}</option>
                <option className="bg-bg-deep" value="roofing_dc">{language === "en" ? "Roofing / Home Improvement - Washington, D.C." : "Techos / Mejoras de Hogar - Washington, D.C."}</option>
                <option className="bg-bg-deep" value="roofing_va">{language === "en" ? "Roofing / Home Improvement - Virginia" : "Techos / Mejoras de Hogar - Virginia"}</option>
                <option className="bg-bg-deep" value="commercial_solar">{language === "en" ? "Commercial / Industrial Solar" : "Solar Comercial / Industrial"}</option>
                <option className="bg-bg-deep" value="storage_battery">{language === "en" ? "Battery Storage & Grid" : "Almacenamiento y Baterías"}</option>
                <option className="bg-bg-deep" value="consulta_general">{language === "en" ? "General Inquiry / Other" : "Consulta General / Otros"}</option>
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_bill}</label>
                <div className="relative">
                  <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-gold text-sm">$</span>
                  <input required name="factura_mensual" type="number" min="0" className="w-full bg-background/50 border border-white/10 rounded-xl pl-10 pr-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white placeholder:text-white/10 font-bold" placeholder={t.placeholder_bill} />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[0.65rem] font-black uppercase tracking-[0.15em] text-white/40">{t.label_language}</label>
                <select 
                  required 
                  name="language_preference" 
                  value={prefLanguage}
                  onChange={(e) => setPrefLanguage(e.target.value)}
                  className="w-full bg-background/50 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all text-white font-bold appearance-none cursor-pointer"
                >
                  <option className="bg-bg-deep" value="spanish">Español</option>
                  <option className="bg-bg-deep" value="english">English</option>
                </select>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gold text-background font-black text-[1rem] uppercase tracking-[0.2em] py-5 rounded-xl hover:scale-[1.02] transition-all shadow-[0_8px_32px_rgba(201,168,76,0.35)] flex items-center justify-center gap-3 disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" /> {t.button_submitting}
                </>
              ) : (
                <>
                  {t.button_submit} <Send size={20} />
                </>
              )}
            </button>
            <p className="text-center text-[0.65rem] font-black tracking-widest text-white/20 uppercase">
              {t.security_note}
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ContactoPage() {
  const { language } = useLanguage();
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen px-6 sm:px-12 font-sans">
      <div className="max-w-7xl mx-auto pl-4">
        <Suspense fallback={
          <div className="text-center py-20 text-text-muted font-bold uppercase tracking-widest text-xs">
            {language === "en" ? "Loading Form..." : "Cargando Formulario..."}
          </div>
        }>
          <ContactoFormContent />
        </Suspense>
      </div>
    </div>
  );
}

