import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { BrandLogo } from "@/components/ui/BrandLogo";

export function Footer() {
  return (
    <footer className="bg-bg-deep text-text-muted pt-16 pb-8 px-6 sm:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <BrandLogo className="w-8 h-8 text-gold" />
              <span className="font-extrabold tracking-tight text-white uppercase text-sm">
                Earth Live <span className="text-gold">Invest</span>
              </span>
            </Link>
            <p className="text-[0.8rem] text-text-muted mb-8 leading-relaxed max-w-xs font-semibold">
              Earth Live Invest combines premium solar energy infrastructure with strategic assets to deliver sustainable returns.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                Fb
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                Ig
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center bg-white/5 hover:bg-gold/20 hover:text-gold rounded-full text-xs transition-colors font-extrabold">
                In
              </a>
            </div>
          </div>

          {/* Solutions links */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">Soluciones</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/servicios#solar" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Infraestructura Solar</Link>
              </li>
              <li>
                <Link href="/servicios#realestate" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Inmuebles Premium</Link>
              </li>
              <li>
                <Link href="/servicios#storage" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Almacenamiento</Link>
              </li>
              <li>
                <Link href="/servicios#mobility" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Movilidad Eléctrica</Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Servicios</Link>
              </li>
              <li>
                <Link href="/#portafolio" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Portafolio</Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-gold transition-colors text-[0.8rem] font-bold">Contacto</Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-col">
            <h4 className="text-[0.6rem] font-extrabold uppercase tracking-[0.2em] text-white/40 mb-6">Contacto Institucional</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">21 Avenida Norte, colonia Layco #1634 San Salvador</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">+1 301 741 2861</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-gold w-4 h-4 shrink-0" />
                <span className="text-[0.8rem] font-bold">eli@earthliveinvest.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.7rem] font-bold text-white/20">
            &copy; {new Date().getFullYear()} Earth Live Invest. El Salvador, Latam.
          </p>
          <div className="flex gap-6 text-[0.7rem] font-bold text-white/20">
            <a href="#" className="hover:text-gold transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
