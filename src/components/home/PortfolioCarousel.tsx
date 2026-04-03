"use client";

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  { id: 1, src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop", title: "Residencial San Salvador" },
  { id: 2, src: "https://images.unsplash.com/photo-1588612140510-740702cae1b0?q=80&w=2670&auto=format&fit=crop", title: "Planta Comercial Santa Tecla" },
  { id: 3, src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=2672&auto=format&fit=crop", title: "Sistema Industrial" },
  { id: 4, src: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=2679&auto=format&fit=crop", title: "Carga de Vehículos Eléctricos" }
];

export function PortfolioCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative max-w-7xl mx-auto py-12">
      <div className="flex justify-between items-end mb-12">
        <div>
          <div className="section-tag inline-flex items-center gap-4 text-gold text-[0.6rem] font-bold tracking-[0.2em] uppercase mb-4 before:content-[''] before:w-10 before:h-[1px] before:bg-gold">
            Nuestro Portafolio
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4">Investment Spotlight</h2>
          <p className="text-text-muted max-w-2xl text-sm font-semibold leading-relaxed">Explora nuestras instalaciones más recientes en El Salvador, demostrando nuestra capacidad técnica y atención al detalle en activos de alto rendimiento.</p>
        </div>
        <div className="hidden md:flex gap-3">
          <button onClick={scrollPrev} disabled={!canScrollPrev} className="p-4 rounded-full border border-gold-border bg-gold-glow text-gold hover:bg-gold hover:text-background transition-all disabled:opacity-20 shadow-xl">
            <ChevronLeft size={24} />
          </button>
          <button onClick={scrollNext} disabled={!canScrollNext} className="p-4 rounded-full border border-gold-border bg-gold-glow text-gold hover:bg-gold hover:text-background transition-all disabled:opacity-20 shadow-xl">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-6">
          {SLIDES.map((slide) => (
            <div key={slide.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_40%] pl-6">
              <div className="relative h-[500px] rounded-[2rem] overflow-hidden group border border-white/5 hover:border-gold-border transition-all">
                <img 
                  src={slide.src} 
                  alt={slide.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-10 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-gold/10 border border-gold-border rounded-full text-[0.6rem] font-bold text-gold uppercase tracking-widest">Solar + Asset</span>
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[0.6rem] font-bold text-white/60 uppercase tracking-widest">SV</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight text-white uppercase italic">{slide.title}</h3>
                  <div className="mt-8 flex justify-between items-end border-t border-white/10 pt-6">
                    <div>
                      <div className="text-[0.55rem] font-bold uppercase tracking-widest text-text-muted mb-1">Target Yield</div>
                      <div className="text-2xl font-black text-gold">14.2%</div>
                    </div>
                    <button className="w-12 h-12 rounded-full bg-gold text-background flex items-center justify-center font-light text-2xl group-hover:scale-110 transition-transform shadow-lg">+</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
