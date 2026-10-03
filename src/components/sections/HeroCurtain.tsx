"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function HeroCurtain() {
  return (
    <SectionWrapper id="hero" className="min-h-[90vh] flex flex-col justify-center relative pt-24 overflow-hidden rounded-t-[30px]">
      {/* Background with garden scene and elegant gradient fade */}
      <div 
        className="absolute inset-0 bg-top bg-cover bg-no-repeat opacity-[0.35] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80')" }}
      />
      {/* Fade at bottom to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f9f6f0] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 text-center px-6 flex flex-col items-center">
        <div className="text-4xl text-[#d4af37] mb-2 drop-shadow-md">❦</div>
        <h1 className="font-display uppercase tracking-[0.2em] text-sm text-[#3F4F35] mb-2 font-semibold">Join us to celebrate</h1>
        
        <div className="heart-divider"><span className="text-[#d4af37]">✨</span></div>

        <div className="my-8 w-full flex flex-col items-center gap-6 relative">
          
          <div className="w-full relative flex flex-col items-center">
            <h2 className="font-names text-6xl md:text-7xl text-[#5b6d4b] mb-2" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>{weddingConfig.couple.groomName}</h2>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-white/50">
              <p className="font-display text-xs uppercase tracking-widest text-[#3F4F35] font-bold text-center">Son of</p>
              <p className="font-display text-[0.9rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 text-center">{weddingConfig.couple.groomParents}</p>
            </div>
          </div>

          <div className="relative w-full flex justify-center py-2">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent absolute top-1/2 -translate-y-1/2 left-[20%]"></div>
            <span className="font-names text-5xl text-[#d4af37] mx-4 relative z-10" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>&</span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#d4af37] via-transparent to-transparent absolute top-1/2 -translate-y-1/2 right-[20%]"></div>
          </div>

          <div className="w-full relative flex flex-col items-center">
            <h2 className="font-names text-6xl md:text-7xl text-[#5b6d4b] mb-2" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>{weddingConfig.couple.brideName}</h2>
            <div className="bg-white/70 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-white/50">
              <p className="font-display text-xs uppercase tracking-widest text-[#3F4F35] font-bold text-center">Daughter of</p>
              <p className="font-display text-[0.9rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 text-center">{weddingConfig.couple.brideParents}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer z-30">
        <span className="font-display text-[0.65rem] tracking-[0.3em] text-[#d4af37] mb-2 uppercase">Scroll</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </SectionWrapper>
  );
}
