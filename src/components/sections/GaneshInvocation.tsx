"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export default function GaneshInvocation() {
  return (
    <SectionWrapper id="ganesh" className="bg-ivory text-maroon-deep min-h-[70vh]">
      <motion.div 
        className="max-w-md mx-auto text-center border-y-2 border-gold-muted/30 py-12 px-6 relative"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        {/* Subtle decorative corners (CSS-based) */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-muted/50" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-muted/50" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-muted/50" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-muted/50" />

        <h2 className="font-hindi text-3xl md:text-4xl mb-6 text-wine">॥ श्री गणेशाय नमः ॥</h2>
        
        <p className="font-hindi text-lg leading-loose text-brown-dark/80">
          वक्रतुण्ड महाकाय<br/>
          सूर्यकोटि समप्रभ।<br/>
          निर्विघ्नं कुरु मे देव<br/>
          सर्वकार्येषु सर्वदा॥
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
