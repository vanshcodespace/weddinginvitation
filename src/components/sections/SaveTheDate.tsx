"use client";

import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion, AnimatePresence } from "framer-motion";

export default function SaveTheDate() {
  const [isRevealed, setIsRevealed] = useState(false);
  const hasDate = !!weddingConfig.weddingDateTime;

  return (
    <SectionWrapper id="save-the-date" className="bg-ivory relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(ellipse_at_center,var(--color-blush)_0%,transparent_70%)] opacity-30 pointer-events-none" />

      <div className="max-w-xl mx-auto w-full relative z-10">
        {!hasDate ? (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-12 border border-gold-muted/30 rounded-2xl bg-white/50 backdrop-blur-sm"
          >
            <h2 className="font-display text-4xl text-wine mb-4">Save the Date</h2>
            <p className="font-script text-2xl text-gold-muted">Date to be announced soon</p>
          </motion.div>
        ) : (
          <div 
            className="relative h-[400px] w-full cursor-pointer perspective-1000"
            onClick={() => setIsRevealed(true)}
          >
            <AnimatePresence>
              {!isRevealed ? (
                <motion.div
                  key="cover"
                  initial={{ rotateX: 0 }}
                  exit={{ rotateX: 90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeIn" }}
                  className="absolute inset-0 bg-maroon-deep rounded-2xl flex flex-col items-center justify-center p-8 border border-gold-muted/50 shadow-2xl origin-bottom"
                >
                  <h2 className="font-display text-4xl text-gold-soft mb-6">Save the Date</h2>
                  <p className="text-ivory/70 text-sm uppercase tracking-widest font-semibold border-b border-gold-muted/30 pb-2">Tap to Reveal</p>
                </motion.div>
              ) : (
                <motion.div
                  key="content"
                  initial={{ rotateX: -90, opacity: 0 }}
                  animate={{ rotateX: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 bg-white rounded-2xl flex flex-col items-center justify-center p-8 border border-gold-muted/30 shadow-2xl origin-top"
                >
                  <span className="font-script text-3xl text-wine mb-2">For the wedding of</span>
                  <h2 className="font-display text-3xl md:text-4xl text-brown-dark mb-8 text-center">
                    {weddingConfig.couple.groomName} & {weddingConfig.couple.brideName}
                  </h2>
                  <div className="flex items-center gap-4 text-maroon-deep font-display text-2xl border-y border-gold-muted/20 py-4 mb-8">
                    <span>14</span>
                    <span className="w-2 h-2 rounded-full bg-gold-muted" />
                    <span>02</span>
                    <span className="w-2 h-2 rounded-full bg-gold-muted" />
                    <span>27</span>
                  </div>
                  <p className="font-body text-brown-dark/80 text-center uppercase tracking-widest text-sm">
                    {weddingConfig.venue.name}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
