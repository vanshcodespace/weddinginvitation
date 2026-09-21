"use client";

import { useApp } from "../ui/AppContext";
import { motion, AnimatePresence } from "framer-motion";
import { weddingConfig } from "@/config/wedding";

export default function EnvelopeScreen() {
  const { isEnvelopeOpened, setIsEnvelopeOpened } = useApp();

  const handleOpen = () => {
    setIsEnvelopeOpened(true);
  };

  return (
    <AnimatePresence>
      {!isEnvelopeOpened && (
        <motion.div
          key="envelope-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[100] bg-maroon-deep flex flex-col items-center justify-center p-6 text-ivory overflow-hidden"
        >
          {/* Decorative Border */}
          <div className="absolute inset-4 border border-gold-muted/30 rounded-xl pointer-events-none" />
          <div className="absolute inset-5 border border-gold-muted/10 rounded-lg pointer-events-none" />

          {/* Particle Drift Placeholder */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            {/* We can add CSS animated particles here, omitted for brevity but keeping structure */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-gold-soft animate-ping" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 rounded-full bg-gold-soft animate-ping animation-delay-500" />
          </div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-center z-10 flex flex-col items-center max-w-sm"
          >
            <p className="font-hindi text-xl md:text-2xl text-gold-soft mb-8">
              ॥ श्री गणेशाय नमः ॥
            </p>
            
            <p className="font-script text-lg md:text-xl text-ivory/80 mb-6">
              Together with the blessings of our families
            </p>
            
            <h1 className="font-display text-5xl md:text-6xl text-ivory tracking-wider mb-2">
              {weddingConfig.couple.groomName}
            </h1>
            <span className="font-script text-3xl text-gold-soft my-2">&</span>
            <h1 className="font-display text-5xl md:text-6xl text-ivory tracking-wider mb-12">
              {weddingConfig.couple.brideName}
            </h1>

            {/* Envelope/Seal graphic */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleOpen}
              className="relative group cursor-pointer"
              aria-label="Open Invitation"
            >
              <div className="w-20 h-20 rounded-full bg-gold-muted flex items-center justify-center shadow-lg shadow-gold-muted/20 border-2 border-gold-soft/50 group-hover:bg-gold-soft transition-colors relative z-10">
                <span className="font-display text-2xl text-maroon-deep font-bold">
                  {weddingConfig.couple.groomName[0]}{weddingConfig.couple.brideName[0]}
                </span>
              </div>
              <div className="absolute inset-0 rounded-full bg-gold-muted animate-ping opacity-30 group-hover:opacity-50" />
            </motion.button>
            
            <p className="mt-6 text-sm uppercase tracking-widest text-gold-muted font-semibold">
              Tap to Open
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
