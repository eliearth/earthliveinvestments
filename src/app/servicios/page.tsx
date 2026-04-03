import Link from "next/link";
import { Sun, Zap, Battery, CarFront, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Servicios | Earth Live Invest",
  description: "Descubre nuestras soluciones de infraestructura de energía solar premium, activos inmobiliarios sustentables y almacenamiento.",
};

const services = [
  {
    id: "solar",
    title: "Infraestructura Solar",
    icon: <Sun size={32} />,
    color: "text-gold border-gold-border bg-gold-glow/20",
    description: "Propiedad estratégica de arreglos solares a gran escala que producen energía limpia constante para redes nacionales y grandes complejos industriales.",
    features: ["Ingeniería de Grado Institucional", "Mantenimiento Preventivo 24/7", "Máximo Rendimiento de Generación"]
  },
  {
    id: "realestate",
    title: "Inmuebles Premium",
    icon: <Zap size={32} />,
    color: "text-gold border-gold-border bg-gold-glow/20",
    description: "Desarrollos comerciales y residenciales de lujo integrados con micro-redes solares que aumentan la valuación del activo mediante eficiencia extrema.",
    features: ["Valuación de Capital Acelerada", "Eficiencia Energética Smart", "Diseño Arquitectónico Sustentable"]
  },
  {
    id: "almacenamiento",
    title: "Storage & Grid",
    icon: <Battery size={32} />,
    color: "text-gold border-gold-border bg-gold-glow/20",
    description: "Sistemas industriales de almacenamiento que garantizan la continuidad operativa y la optimización de picos de demanda para maximizar el ahorro y la resiliencia.",
    features: ["Respaldo Ininterrumpido", "Optimización de Tarifas Horarias", "Redundancia de Grado Militar"]
  },
  {
    id: "ev-mobility",
    title: "Movilidad Eléctrica",
    icon: <CarFront size={32} />,
    color: "text-gold border-gold-border bg-gold-glow/20",
    description: "Infraestructura de carga rápida para flotas corporativas y complejos residenciales, alimentada directamente por nuestros activos de generación solar.",
    features: ["Cargas Inteligentes Nivel 2/3", "Integración con App Móvil", "Gestión de Flotas Sustentables"]
  }
];

export default function ServiciosPage() {
  return (
    <div className="pt-24 pb-20 bg-background min-h-screen font-sans">
      <div className="bg-bg-deep py-28 text-center relative overflow-hidden mb-20 border-b border-gold-border">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_center,_var(--color-gold-glow)_0%,_transparent_75%)]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-6 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
            Dual-Asset Solutions
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">Nuestras Soluciones</h1>
          <p className="text-lg text-text-muted max-w-2xl mx-auto font-semibold leading-relaxed">
            Estructuramos activos de energía limpia e inmuebles premium diseñados para la generación de riqueza sostenible en la región Latam.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service) => (
            <div key={service.id} className={`p-10 rounded-[2rem] border hover:shadow-2xl transition-all duration-500 hover:scale-[1.01] ${service.color.split(' ')[1]} ${service.color.split(' ')[2]}`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 bg-gold border border-gold-border text-background shadow-lg`}>
                {service.icon}
              </div>
              <h2 className="text-2xl font-black mb-6 uppercase tracking-tight text-white">{service.title}</h2>
              <p className="text-text-muted mb-10 leading-relaxed font-semibold">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-12">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-bold text-sm text-white/80 uppercase tracking-wide">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 text-gold`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/contacto" 
                className="inline-flex items-center gap-3 font-black text-xs tracking-[0.15em] uppercase text-gold hover:text-white transition-colors group"
              >
                Solicitar Propuesta <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
