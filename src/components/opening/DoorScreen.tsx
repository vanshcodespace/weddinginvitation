"use client";
import { useState, useEffect } from "react";
import { useApp } from "@/components/ui/AppContext";

export default function DoorScreen() {
  const { isEnvelopeOpened, setIsEnvelopeOpened } = useApp();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (isEnvelopeOpened) {
      setTimeout(() => setHidden(true), 1500);
    }
  }, [isEnvelopeOpened]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 w-full max-w-[480px] mx-auto h-full z-50 flex items-center justify-center overflow-hidden transition-all duration-[1500ms] ${
        isEnvelopeOpened ? "pointer-events-none" : "cursor-pointer"
      }`}
      onClick={() => setIsEnvelopeOpened(true)}
    >
      {/* Left Door */}
      <div
        className={`absolute top-0 left-0 w-1/2 h-full transition-transform duration-1000 ease-in-out z-20 shadow-[inset_-5px_0_15px_rgba(0,0,0,0.3)] ${
          isEnvelopeOpened ? "-translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundColor: "#5b6d4b",
          backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
          borderRight: "1px solid #b79549" // Gold center line left half
        }}
      >
        {/* Fake embossed leaves via a faint overlay */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/floral-flourishes.png')]" />
      </div>

      {/* Right Door */}
      <div
        className={`absolute top-0 right-0 w-1/2 h-full transition-transform duration-1000 ease-in-out z-20 shadow-[inset_5px_0_15px_rgba(0,0,0,0.3)] ${
          isEnvelopeOpened ? "translate-x-full" : "translate-x-0"
        }`}
        style={{
          backgroundColor: "#5b6d4b",
          backgroundImage: "url('https://www.transparenttextures.com/patterns/aged-paper.png')",
          borderLeft: "1px solid #b79549" // Gold center line right half
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/floral-flourishes.png')]" />
      </div>

      {/* Center Gold Line (When closed) */}
      <div 
        className={`absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-[#d4af37] via-[#fff3b0] to-[#d4af37] -translate-x-1/2 z-25 transition-opacity duration-300 ${
          isEnvelopeOpened ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Ornate Plaque */}
      <div
        className={`absolute z-30 flex flex-col items-center justify-center transition-all duration-700 ease-in-out cursor-pointer ${
          isEnvelopeOpened ? "opacity-0 scale-125" : "opacity-100 scale-100"
        }`}
        style={{
          width: "280px",
          height: "400px",
        }}
      >
        {/* SVG Background for Plaque */}
        <svg 
          viewBox="0 0 280 400" 
          className="absolute inset-0 w-full h-full drop-shadow-2xl"
          style={{ filter: "drop-shadow(0px 20px 30px rgba(0,0,0,0.5))" }}
        >
          {/* Main Cream Plaque */}
          <path 
            d="M 140 10 
               C 160 10, 160 30, 180 30 
               L 230 30 
               C 250 30, 250 50, 250 70 
               L 250 170 
               C 250 190, 270 190, 270 200 
               C 270 210, 250 210, 250 230 
               L 250 330 
               C 250 350, 250 370, 230 370 
               L 180 370 
               C 160 370, 160 390, 140 390 
               C 120 390, 120 370, 100 370 
               L 50 370 
               C 30 370, 30 350, 30 330 
               L 30 230 
               C 30 210, 10 210, 10 200 
               C 10 190, 30 190, 30 170 
               L 30 70 
               C 30 50, 30 30, 50 30 
               L 100 30 
               C 120 30, 120 10, 140 10 Z" 
            fill="#f9f6f0" 
            stroke="#d4af37" 
            strokeWidth="3" 
          />
          {/* Inner Gold Border */}
          <path 
            d="M 140 25 
               C 155 25, 155 45, 175 45 
               L 215 45 
               C 235 45, 235 65, 235 85 
               L 235 175 
               C 235 190, 250 190, 250 200 
               C 250 210, 235 210, 235 225 
               L 235 315 
               C 235 335, 235 355, 215 355 
               L 175 355 
               C 155 355, 155 375, 140 375 
               C 125 375, 125 355, 105 355 
               L 65 355 
               C 45 355, 45 335, 45 315 
               L 45 225 
               C 45 210, 30 210, 30 200 
               C 30 190, 45 190, 45 175 
               L 45 85 
               C 45 65, 45 45, 65 45 
               L 105 45 
               C 125 45, 125 25, 140 25 Z" 
            fill="none" 
            stroke="#d4af37" 
            strokeWidth="1.5" 
            strokeDasharray="4 2"
          />
        </svg>

        {/* Text Content overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <div className="text-[#d4af37] text-3xl mb-6">❦</div>
          <h2 className="font-display text-[#3F4F35] tracking-[0.25em] uppercase text-sm font-bold my-4 text-center">
            Tap to Open
          </h2>
          <div className="text-[#d4af37] text-3xl mt-6 rotate-180">❦</div>
        </div>

        {/* Top/Bottom Pearls (Simulated) */}
        <div className="absolute top-[35px] w-5 h-5 rounded-full bg-white shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.15),_0_3px_5px_rgba(0,0,0,0.4)]"></div>
        <div className="absolute bottom-[35px] w-5 h-5 rounded-full bg-white shadow-[inset_-2px_-2px_4px_rgba(0,0,0,0.15),_0_3px_5px_rgba(0,0,0,0.4)]"></div>
      </div>
    </div>
  );
}
