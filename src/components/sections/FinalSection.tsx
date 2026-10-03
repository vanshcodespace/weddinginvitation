"use client";
import { weddingConfig } from "@/config/wedding";

export default function FinalSection() {
  return (
    <footer className="py-20 px-6 text-center bg-sage text-white relative overflow-hidden">
      {/* Small floral clusters in corners (placeholders) */}
      <div className="absolute bottom-[-10px] left-[-10px] text-6xl opacity-20 rotate-[30deg]">🌸</div>
      <div className="absolute bottom-[-10px] right-[-10px] text-6xl opacity-20 rotate-[-30deg]">🌸</div>

      <h3 className="font-script text-4xl mb-8 leading-snug">We can't wait to <br/> celebrate with you!</h3>
      
      <div className="font-names text-5xl text-cream drop-shadow-md mb-8">
        {weddingConfig.couple.groomName} & {weddingConfig.couple.brideName}
      </div>
      
      <div className="heart-divider mb-0"><span className="text-white">❦</span></div>

      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-left flex flex-col gap-1 opacity-90 z-10">
        <span className="uppercase tracking-widest font-semibold text-xs md:text-sm text-cream/80">RSVP</span>
        <span className="font-serif text-sm md:text-base text-cream drop-shadow-sm">M/s Mohindra metal industries</span>
        <span className="font-serif text-sm md:text-base text-cream drop-shadow-sm">M/s Akshit enterprises</span>
      </div>
    </footer>
  );
}
