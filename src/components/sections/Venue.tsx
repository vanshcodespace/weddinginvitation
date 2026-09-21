"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export default function Venue() {
  return (
    <SectionWrapper id="venue" className="bg-cream">
      <div className="max-w-3xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-16 rounded-3xl shadow-xl shadow-brown-dark/5 border border-gold-muted/20 relative"
        >
          {/* Decorative frame */}
          <div className="absolute inset-4 border border-gold-muted/30 rounded-2xl pointer-events-none" />
          <div className="absolute inset-x-8 inset-y-0 border-x border-gold-muted/10 pointer-events-none" />

          <div className="relative z-10">
            <h2 className="font-display text-4xl md:text-5xl text-maroon-deep mb-8">The Venue</h2>
            
            <div className="w-16 h-16 mx-auto bg-blush rounded-full flex items-center justify-center mb-6 text-maroon-deep">
              <MapPin size={32} />
            </div>
            
            <h3 className="font-display text-2xl md:text-3xl text-wine mb-2">
              {weddingConfig.venue.name}
            </h3>
            
            <p className="font-body text-brown-dark/80 mb-8 max-w-md mx-auto leading-relaxed">
              {weddingConfig.venue.address}
            </p>

            <a
              href={weddingConfig.venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-maroon-deep text-ivory rounded-full text-sm uppercase tracking-widest font-semibold hover:bg-wine transition-colors shadow-lg shadow-maroon-deep/20"
            >
              Open in Maps
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
