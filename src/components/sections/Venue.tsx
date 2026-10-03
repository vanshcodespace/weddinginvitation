"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function Venue() {
  const { name, address, mapsUrl } = weddingConfig.venue;

  return (
    <SectionWrapper id="venue" className="py-20 px-6 flex flex-col items-center">
      <div className="w-full max-w-[400px] bg-white/60 backdrop-blur-md rounded-[2rem] p-8 shadow-xl shadow-sage/10 border border-sage/20 relative overflow-hidden text-center">
        
        {/* Decorative corner accents */}
        <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-sage/40 rounded-tl-xl" />
        <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-sage/40 rounded-tr-xl" />
        <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-sage/40 rounded-bl-xl" />
        <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-sage/40 rounded-br-xl" />

        {/* Event & Date */}
        <div className="mt-4 mb-8">
          <h2 className="font-script text-5xl text-dark-olive mb-1 drop-shadow-sm">Wedding</h2>
          <h3 className="font-display tracking-[0.25em] text-sage uppercase text-xs font-bold">Ceremony</h3>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <div className="flex items-center justify-center gap-3 w-full">
            <div className="h-[1px] bg-sage/30 flex-1" />
            <p className="font-display text-dark-olive font-bold tracking-[0.15em] text-sm">25<sup className="lowercase">th</sup> NOV, 2026</p>
            <div className="h-[1px] bg-sage/30 flex-1" />
          </div>
          <p className="font-display text-sage font-semibold tracking-widest text-xs">8:00 PM</p>
        </div>

        {/* Venue Information */}
        <div className="text-2xl mb-2 animate-bounce-slow">📍</div>
        <h4 className="font-display font-semibold tracking-[0.2em] text-dark-olive/60 uppercase text-[10px] mb-3">Venue</h4>
        
        <h3 className="font-display font-bold text-2xl text-dark-olive mb-2">{name}</h3>
        <p className="font-body text-dark-olive/80 mb-8 max-w-[240px] mx-auto text-sm leading-relaxed">{address}</p>

        {/* Map Embed */}
        <div className="w-full h-[180px] rounded-2xl overflow-hidden border-2 border-sage/20 mb-6 shadow-inner">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.000000000000!2d77.000000000000!3d28.000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="opacity-90 hover:opacity-100 transition-opacity"
          ></iframe>
        </div>

        {/* Action Button */}
        <a 
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-dark-olive hover:bg-sage text-white font-display text-xs tracking-[0.15em] uppercase py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 inline-flex items-center gap-2 w-full justify-center"
        >
          <span>🗺️</span> Get Directions
        </a>
      </div>
    </SectionWrapper>
  );
}
