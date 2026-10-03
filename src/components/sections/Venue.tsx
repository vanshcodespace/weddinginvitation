"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function Venue() {
  const { name, address, mapsUrl } = weddingConfig.venue;

  return (
    <SectionWrapper id="venue" className="py-16 px-6 text-center flex flex-col items-center">
      <div className="text-3xl text-sage mb-2">📍</div>
      <h2 className="font-script text-4xl text-dark-olive mb-2">Venue</h2>
      <div className="heart-divider w-full"><span>❦</span></div>

      {/* Faint line-art drawing of venue placeholder */}
      <div className="w-full h-[60px] opacity-20 mb-4 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 50%22><path d=%22M10 40 L50 10 L90 40 M20 40 L20 20 M80 40 L80 20 M30 40 L30 25 M70 40 L70 25%22 stroke=%22%233F4F35%22 fill=%22none%22 stroke-width=%221%22/></svg>')] bg-center bg-no-repeat bg-contain" />

      <h3 className="font-display font-semibold text-2xl text-dark-olive mb-1">{name}</h3>
      <p className="font-body text-dark-olive/80 mb-6">{address}</p>

      <div className="w-full max-w-[340px] h-[250px] rounded-2xl overflow-hidden border-2 border-sage mb-8 shadow-sm">
        {/* Replace this dummy URL with actual embed link if you have one. This is a placeholder. */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.000000000000!2d77.000000000000!3d28.000000000000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDAwJzAwLjAiTiA3N8KwMDAnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <a 
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-dark-olive hover:bg-sage text-white font-body py-3 px-8 rounded-full transition-colors duration-300 shadow-md inline-flex items-center gap-2"
      >
        <span>🗺️</span> View on Google Maps
      </a>
    </SectionWrapper>
  );
}
