"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";

export default function CoupleIntro() {
  return (
    <SectionWrapper id="couple" className="bg-cream">
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="font-display text-5xl md:text-7xl text-maroon-deep mb-2">{weddingConfig.couple.groomName}</h2>
          <span className="block font-script text-4xl text-gold-muted my-4">&</span>
          <h2 className="font-display text-5xl md:text-7xl text-maroon-deep">{weddingConfig.couple.brideName}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center mt-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full border-4 border-gold-muted/30 p-2 mb-6 bg-ivory shadow-lg flex items-center justify-center">
               <span className="font-display text-6xl text-gold-muted/50">{weddingConfig.couple.groomName[0]}</span>
            </div>
            <h3 className="font-display text-2xl text-wine mb-2">{weddingConfig.couple.groomFullName}</h3>
            {weddingConfig.couple.groomParents && (
              <p className="font-body text-brown-dark/70 italic">Son of {weddingConfig.couple.groomParents}</p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-t-full border-4 border-gold-muted/30 p-2 mb-6 bg-ivory shadow-lg flex items-center justify-center">
               <span className="font-display text-6xl text-gold-muted/50">{weddingConfig.couple.brideName[0]}</span>
            </div>
            <h3 className="font-display text-2xl text-wine mb-2">{weddingConfig.couple.brideFullName}</h3>
            {weddingConfig.couple.brideParents && (
              <p className="font-body text-brown-dark/70 italic">Daughter of {weddingConfig.couple.brideParents}</p>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
