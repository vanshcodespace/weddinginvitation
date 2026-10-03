"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";

export default function PreWeddingEvents() {
  const events = weddingConfig.events.filter(e => (e.id as string) !== 'wedding');

  return (
    <SectionWrapper id="prewedding" className="py-16 px-6 text-center">
      <h2 className="font-script text-4xl text-dark-olive mb-2">Pre-Wedding Events</h2>
      <div className="heart-divider w-full"><span>❦</span></div>

      <div className="space-y-10 mt-6 max-w-[320px] mx-auto">
        {events.map((event, i) => (
          <div key={i}>
            <h4 className="font-display font-semibold text-[1.4rem] text-dark-olive mb-1">{event.name}</h4>
            <p className="font-body text-[0.95rem] text-dark-olive/80 mb-1">{event.date}, {event.time}</p>
            <p className="font-italic text-sage">{event.venue}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
