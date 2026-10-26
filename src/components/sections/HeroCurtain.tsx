"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function HeroCurtain() {
  return (
    <SectionWrapper id="hero" className="!min-h-screen !py-6 sm:!py-8 !px-3 flex flex-col justify-center relative overflow-hidden rounded-t-[30px]">
      {/* Background with garden scene and elegant gradient fade */}
      <div 
        className="absolute inset-0 bg-top bg-cover bg-no-repeat opacity-[0.35] pointer-events-none"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80')" }}
      />
      {/* Fade at bottom to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f9f6f0] to-transparent pointer-events-none z-10" />

      <div className="relative z-20 text-center px-4 flex flex-col items-center">
        <div className="text-3xl text-[#d4af37] mb-1 drop-shadow-md">❦</div>
        <h1 className="font-display uppercase tracking-[0.2em] text-xs sm:text-sm text-[#3F4F35] font-semibold">Join us to celebrate</h1>
        
        <div className="heart-divider my-2"><span className="text-[#d4af37]">✨</span></div>

        <div className="my-3 w-full flex flex-col items-center gap-3.5 relative">
          
          {/* Groom Section */}
          <div className="w-full relative flex flex-col items-center">
            <h2 className="font-names text-5xl sm:text-6xl md:text-7xl text-[#5b6d4b] mb-1.5" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
              {weddingConfig.couple.groomName}
            </h2>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm border border-white/60 w-full max-w-[370px] text-center flex flex-col items-center gap-1">
              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-widest text-[#3F4F35] font-bold">Grandson of</p>
                <p className="font-display text-[0.8rem] sm:text-[0.82rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 leading-snug">
                  <span>Mrs. Nirmal Mittal</span>
                  <span className="text-[#d4af37] mx-1.5 font-normal">&amp;</span>
                  <span className="inline-block">Late Mr. Subhash Chand Mittal</span>
                </p>
              </div>
              <div className="w-14 h-[1px] bg-[#d4af37]/35 my-0.5" />
              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-widest text-[#3F4F35] font-bold">Son of</p>
                <p className="font-display text-[0.8rem] sm:text-[0.82rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 leading-snug">
                  {weddingConfig.couple.groomParents}
                </p>
              </div>
            </div>
          </div>

          {/* Ampersand Divider */}
          <div className="relative w-full flex justify-center items-center py-0.5">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent absolute top-1/2 -translate-y-1/2 left-[20%]"></div>
            <span className="font-names text-4xl sm:text-5xl text-[#d4af37] mx-4 relative z-10" style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>&</span>
            <div className="w-16 h-[1px] bg-gradient-to-r from-[#d4af37] via-transparent to-transparent absolute top-1/2 -translate-y-1/2 right-[20%]"></div>
          </div>

          {/* Bride Section */}
          <div className="w-full relative flex flex-col items-center">
            <h2 className="font-names text-5xl sm:text-6xl md:text-7xl text-[#5b6d4b] mb-1.5" style={{ textShadow: '2px 2px 4px rgba(255,255,255,0.8)' }}>
              {weddingConfig.couple.brideName}
            </h2>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-2xl shadow-sm border border-white/60 w-full max-w-[370px] text-center flex flex-col items-center gap-1">
              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-widest text-[#3F4F35] font-bold">Granddaughter of</p>
                <p className="font-display text-[0.8rem] sm:text-[0.82rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 leading-snug">
                  <span>Mrs. Madhu Mittal</span>
                  <span className="text-[#d4af37] mx-1.5 font-normal">&amp;</span>
                  <span className="inline-block">Mr. Naresh Chand Mittal</span>
                </p>
              </div>
              <div className="w-14 h-[1px] bg-[#d4af37]/35 my-0.5" />
              <div>
                <p className="font-display text-[0.62rem] uppercase tracking-widest text-[#3F4F35] font-bold">Daughter of</p>
                <p className="font-display text-[0.8rem] sm:text-[0.82rem] text-[#3F4F35] font-medium tracking-wide mt-0.5 leading-snug">
                  {weddingConfig.couple.brideParents}
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-2 mb-6 text-center">
            <p className="font-display tracking-[0.25em] text-[#d4af37] font-semibold text-xs sm:text-sm bg-white/70 backdrop-blur-sm px-5 py-1.5 rounded-full shadow-sm border border-[#d4af37]/30">
              #DestinedtobeAA
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer z-30">
        <span className="font-display text-[0.6rem] tracking-[0.3em] text-[#d4af37] mb-1 uppercase">Scroll</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </SectionWrapper>
  );
}
