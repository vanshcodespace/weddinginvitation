"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";

export default function FinalSection() {
  return (
    <SectionWrapper id="final" className="bg-maroon-deep text-ivory min-h-[80vh]">
      <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {/* Subtle line-art flower (SVG placeholder) */}
          <div className="w-24 h-24 mb-8 mx-auto opacity-70">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-gold-soft">
              <path d="M50 0C50 0 65 20 65 50C65 80 50 100 50 100C50 100 35 80 35 50C35 20 50 0 50 0Z" stroke="currentColor" strokeWidth="2" />
              <path d="M0 50C0 50 20 65 50 65C80 65 100 50 100 50C100 50 80 35 50 35C20 35 0 50 0 50Z" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>

          <h2 className="font-script text-3xl md:text-4xl text-gold-soft mb-6">
            Two hearts, one beautiful journey.
          </h2>
          
          <h1 className="font-display text-5xl md:text-7xl mb-8 tracking-wider">
            {weddingConfig.couple.groomName} <span className="text-gold-muted text-4xl mx-2">&</span> {weddingConfig.couple.brideName}
          </h1>
          
          <p className="font-body text-ivory/80 max-w-md mx-auto mb-16 leading-relaxed">
            Thank you for being a part of our special day. Your presence and blessings mean the world to us.
          </p>

          <p className="font-script text-2xl text-gold-muted">
            With Love
          </p>
          <p className="font-display text-xl uppercase tracking-[0.3em] mt-2 text-ivory/60">
            {weddingConfig.couple.groomName} & {weddingConfig.couple.brideName}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
