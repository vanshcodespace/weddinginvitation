"use client";

import { useApp } from "../ui/AppContext";
import { motion } from "framer-motion";
import { weddingConfig } from "@/config/wedding";
import { useEffect, useState } from "react";

export default function HeroCurtain() {
  const { isEnvelopeOpened } = useApp();
  const [curtainsOpen, setCurtainsOpen] = useState(false);

  useEffect(() => {
    if (isEnvelopeOpened) {
      // Wait for the door animation (1.5s) to mostly finish before opening curtains
      const timer = setTimeout(() => {
        setCurtainsOpen(true);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, [isEnvelopeOpened]);

  // SVG for a draped curtain
  const CurtainSVG = ({ isLeft }: { isLeft: boolean }) => (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 200 400" 
      preserveAspectRatio="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-2xl"
    >
      <defs>
        <linearGradient id={`curtain-grad-${isLeft ? 'l' : 'r'}`} x1={isLeft ? "1" : "0"} y1="0" x2={isLeft ? "0" : "1"} y2="0">
          <stop offset="0%" stopColor="var(--cream)" />
          <stop offset="20%" stopColor="var(--ivory)" />
          <stop offset="40%" stopColor="var(--cream)" />
          <stop offset="60%" stopColor="var(--linen-dark)" />
          <stop offset="80%" stopColor="var(--cream)" />
          <stop offset="100%" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      {isLeft ? (
        <path d="M0 0 L200 0 Q100 100 50 400 L0 400 Z" fill={`url(#curtain-grad-l)`} />
      ) : (
        <path d="M200 0 L0 0 Q100 100 150 400 L200 400 Z" fill={`url(#curtain-grad-r)`} />
      )}
    </svg>
  );

  return (
    <section className="relative w-full h-screen overflow-hidden bg-cream flex items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      {/* Main Content (Revealed after curtains open) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: curtainsOpen ? 1 : 0, scale: curtainsOpen ? 1 : 0.95 }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center w-full h-full pt-10 pb-32"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--forest)" className="mb-4">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>

        <p className="font-script text-4xl text-forest mb-4 tracking-wide">
          We're getting married
        </p>

        <div className="flex items-center justify-center space-x-6 my-6 w-full max-w-xs">
          <div className="h-[1px] flex-grow bg-forest/40"></div>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--forest)">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
          <div className="h-[1px] flex-grow bg-forest/40"></div>
        </div>

        <h1 className="font-script text-7xl md:text-9xl text-forest mt-2 mb-2 drop-shadow-sm">
          {weddingConfig.couple.groomName}
        </h1>
        <span className="font-script text-5xl text-forest/70 my-2">&</span>
        <h1 className="font-script text-7xl md:text-9xl text-forest mt-2 drop-shadow-sm">
          {weddingConfig.couple.brideName}
        </h1>
      </motion.div>

      {/* Decorative Fountain & Botanicals (Bottom) */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: curtainsOpen ? 0 : 100, opacity: curtainsOpen ? 1 : 0 }}
        transition={{ duration: 1.5, delay: 0.8 }}
        className="absolute bottom-0 left-0 w-full flex justify-between items-end px-4 md:px-12 pointer-events-none z-10"
      >
        {/* Left Floral Placeholder (Stylized using rounded CSS shapes) */}
        <div className="w-32 h-48 md:w-48 md:h-64 flex flex-col justify-end items-center relative">
          <div className="w-24 h-48 bg-[#42523D] rounded-t-full absolute bottom-8 opacity-90 shadow-xl" />
          <div className="w-16 h-32 bg-[#313D2D] rounded-t-full absolute bottom-4 -left-4 opacity-90 shadow-xl" />
          <div className="w-12 h-16 bg-[#EBD0B3] rounded-full absolute bottom-12 shadow-inner" />
          <div className="w-32 h-8 bg-[#E3D9C8] border-t border-[#C2A881] rounded-t-lg shadow-lg z-10" />
        </div>

        {/* Center Fountain */}
        <div className="flex flex-col items-center justify-end mb-4 relative">
          <div className="w-2 h-12 bg-blue-200/50 absolute -top-10 rounded-full blur-sm" />
          <div className="w-12 h-4 bg-[#F5E6D3] rounded-t-lg shadow-md border-b border-[#D4BC9B]" />
          <div className="w-4 h-12 bg-[#F5E6D3] shadow-inner border-x border-[#D4BC9B]" />
          <div className="w-32 h-8 bg-[#F5E6D3] rounded-full shadow-lg border-2 border-[#D4BC9B] flex items-center justify-center overflow-hidden">
            <div className="w-full h-1/2 bg-blue-900/10 mt-auto" />
          </div>
          <div className="w-48 h-4 bg-[#E3D9C8] mt-2 rounded-full shadow-xl" />
        </div>

        {/* Right Floral Placeholder */}
        <div className="w-32 h-48 md:w-48 md:h-64 flex flex-col justify-end items-center relative">
          <div className="w-24 h-48 bg-[#42523D] rounded-t-full absolute bottom-8 opacity-90 shadow-xl" />
          <div className="w-16 h-32 bg-[#313D2D] rounded-t-full absolute bottom-4 -right-4 opacity-90 shadow-xl" />
          <div className="w-12 h-16 bg-[#EBD0B3] rounded-full absolute bottom-12 shadow-inner" />
          <div className="w-32 h-8 bg-[#E3D9C8] border-t border-[#C2A881] rounded-t-lg shadow-lg z-10" />
        </div>
      </motion.div>

      {/* Curtains (Foreground) */}
      {/* Left Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "-85%" : 0 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 left-0 w-1/2 h-full z-20 origin-top-left"
      >
        <CurtainSVG isLeft={true} />
        {/* Tassels */}
        <div className="absolute top-1/2 right-4 w-6 h-16 bg-gradient-to-b from-[#C2A881] to-[#E6D2B8] rounded-b-md shadow-lg flex flex-col items-center">
           <div className="w-8 h-8 rounded-full bg-[#D4BC9B] -mt-4 shadow-sm border border-[#C2A881]" />
           <div className="w-full h-full flex justify-around px-1 mt-1">
             <div className="w-px h-full bg-[#8E795D]/30" />
             <div className="w-px h-full bg-[#8E795D]/30" />
             <div className="w-px h-full bg-[#8E795D]/30" />
           </div>
        </div>
      </motion.div>

      {/* Right Curtain */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: curtainsOpen ? "85%" : 0 }}
        transition={{ duration: 2, ease: [0.25, 1, 0.5, 1] }}
        className="absolute top-0 right-0 w-1/2 h-full z-20 origin-top-right"
      >
        <CurtainSVG isLeft={false} />
        {/* Tassels */}
        <div className="absolute top-1/2 left-4 w-6 h-16 bg-gradient-to-b from-[#C2A881] to-[#E6D2B8] rounded-b-md shadow-lg flex flex-col items-center">
           <div className="w-8 h-8 rounded-full bg-[#D4BC9B] -mt-4 shadow-sm border border-[#C2A881]" />
           <div className="w-full h-full flex justify-around px-1 mt-1">
             <div className="w-px h-full bg-[#8E795D]/30" />
             <div className="w-px h-full bg-[#8E795D]/30" />
             <div className="w-px h-full bg-[#8E795D]/30" />
           </div>
        </div>
      </motion.div>
      
      {/* Top Swag Curtain (Static) */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: curtainsOpen ? 0 : -100 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute top-0 left-0 w-full h-32 md:h-48 z-30 flex"
      >
         {[...Array(5)].map((_, i) => (
           <div key={i} className="flex-1 h-full relative">
             <div className="absolute -top-12 left-0 w-[120%] h-full bg-gradient-to-b from-cream to-linen-dark rounded-b-[100px] shadow-[0_10px_20px_rgba(0,0,0,0.2)] -ml-[10%]" />
             {/* Pearl border */}
             <div className="absolute bottom-[-10px] left-0 w-full flex justify-around px-2 z-10">
               {[...Array(8)].map((_, j) => (
                 <div key={j} className="w-3 h-3 rounded-full bg-ivory shadow-sm border border-gold" />
               ))}
             </div>
           </div>
         ))}
      </motion.div>
    </section>
  );
}
