"use client";
import { useState, useEffect } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Arbitrary target date: Nov 30, 2026 10:30 AM
    const targetDate = new Date("2026-11-25T10:30:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper id="countdown" className="py-16 px-4 text-center bg-cream/50">
      <h2 className="font-script text-4xl text-dark-olive mb-8">Counting Down to Forever</h2>
      
      <div className="flex justify-center gap-3 md:gap-4 mx-auto max-w-sm">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item) => (
          <div key={item.label} className="bg-white/60 border border-sage rounded-xl p-3 w-[72px] shadow-sm backdrop-blur-sm">
            <span className="font-display text-2xl font-semibold text-dark-olive block">
              {item.value.toString().padStart(2, '0')}
            </span>
            <span className="font-display text-[10px] uppercase tracking-wider text-sage mt-1 block">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
