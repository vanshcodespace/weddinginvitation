"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function EventsTimeline() {
  const timeline = weddingConfig.events.map(event => ({
    time: event.date.substring(0, 6), // "Nov 23"
    title: event.name,
    subtitle: event.time,
    venue: event.venue
  }));

  return (
    <SectionWrapper id="timeline" className="py-16 px-6">
      <div className="text-center mb-8">
        <div className="text-3xl text-sage mb-2">⏱️</div>
        <h2 className="font-script text-4xl text-dark-olive mb-2">Program Timeline</h2>
        <div className="heart-divider"><span>❦</span></div>
        <div className="font-display text-sm tracking-[0.2em] uppercase text-dark-olive mb-10">
          Nov 23 - 25, 2026
        </div>
      </div>

      <div className="max-w-[320px] mx-auto">
        {timeline.map((item, index) => (
          <div key={index} className="flex mb-8 relative">
            {/* Time on left */}
            <div className="w-[80px] font-display font-semibold text-sm text-sage text-right pr-4 pt-[2px]">
              {item.time}
            </div>
            
            {/* Vertical Line with dot */}
            <div className="relative mr-5 w-[2px] bg-sage/40">
              <div className="absolute -left-[4px] top-0 w-[10px] h-[10px] rounded-full bg-gold shadow-[0_0_8px_rgba(184,144,58,0.6)]" />
            </div>
            
            {/* Content on right */}
            <div className="flex-1 pb-4">
              <h4 className="font-display font-semibold text-[1.1rem] text-dark-olive mb-1">{item.title}</h4>
              <p className="font-italic text-sm text-dark-olive/80">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8 pt-6 border-t border-sage/30 max-w-[280px] mx-auto">
        <h3 className="font-display font-semibold text-sm tracking-widest text-dark-olive mb-2 uppercase">Venue</h3>
        <p className="font-italic text-dark-olive/90 text-lg drop-shadow-sm">📍 Shibu Makhan Dharmshala</p>
      </div>
    </SectionWrapper>
  );
}
