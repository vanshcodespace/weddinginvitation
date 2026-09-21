"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isMounted, setIsMounted] = useState(false);
  
  const hasDate = !!weddingConfig.weddingDateTime;
  const isPast = hasDate && new Date(weddingConfig.weddingDateTime!) < new Date();

  useEffect(() => {
    setIsMounted(true);
    if (!hasDate) return;

    const targetDate = new Date(weddingConfig.weddingDateTime!).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [hasDate]);

  if (!isMounted || !hasDate) return null;

  if (isPast) {
    return (
      <SectionWrapper id="countdown" className="bg-blush/30 py-12 min-h-0">
        <div className="text-center">
          <h2 className="font-script text-4xl text-wine">We're Married!</h2>
        </div>
      </SectionWrapper>
    );
  }

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <SectionWrapper id="countdown" className="bg-blush/30 py-16 min-h-0">
      <div className="max-w-3xl mx-auto w-full">
        <div className="grid grid-cols-4 gap-2 md:gap-8">
          {timeUnits.map((unit, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-xl shadow-md border border-gold-muted/20 flex items-center justify-center mb-2">
                <span className="font-display text-3xl md:text-4xl text-maroon-deep tabular-nums">
                  {unit.value.toString().padStart(2, "0")}
                </span>
              </div>
              <span className="text-xs md:text-sm uppercase tracking-widest text-brown-dark/60 font-semibold">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
