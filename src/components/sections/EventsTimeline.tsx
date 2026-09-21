"use client";
import SectionWrapper from "../ui/SectionWrapper";
import { weddingConfig } from "@/config/wedding";
import { motion } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";

export default function EventsTimeline() {
  if ((weddingConfig.events as readonly any[]).length === 0) return null;

  return (
    <SectionWrapper id="events" className="bg-cream relative">
      <div className="max-w-5xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="font-script text-4xl md:text-5xl text-gold-muted mb-2">Celebrate with us</h2>
          <h3 className="font-display text-4xl md:text-5xl text-maroon-deep">Wedding Events</h3>
        </div>

        <div className="relative">
          {/* Timeline Line (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gold-muted/30 -translate-x-1/2" />

          <div className="space-y-12 md:space-y-24">
            {weddingConfig.events.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={event.id} className="relative flex flex-col md:flex-row items-center">
                  
                  {/* Timeline dot (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-soft items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-maroon-deep" />
                  </div>

                  {/* Card Container */}
                  <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12 lg:pr-24 text-center md:text-right" : "md:pl-12 lg:pl-24 text-center md:text-left md:ml-auto"}`}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.6 }}
                      className="bg-white p-8 rounded-2xl shadow-xl shadow-brown-dark/5 border border-gold-muted/20 relative group"
                    >
                      {/* Decorative border on hover */}
                      <div className="absolute inset-2 border border-gold-muted/0 group-hover:border-gold-muted/20 rounded-xl transition-colors pointer-events-none" />
                      
                      <h4 className="font-display text-2xl md:text-3xl text-wine mb-4">{event.name}</h4>
                      
                      <div className={`flex flex-col gap-2 mb-6 text-sm text-brown-dark/70 ${isEven ? "md:items-end" : "md:items-start"} items-center`}>
                        <div className="flex items-center gap-2">
                          <CalendarDays size={16} className="text-gold-muted" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-gold-muted" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-gold-muted" />
                          <span>{event.venue}</span>
                        </div>
                      </div>

                      <p className="font-body text-brown-dark/80 mb-6 leading-relaxed">
                        {event.description}
                      </p>

                      {event.dressCode && (
                        <div className="mb-6">
                          <span className="block text-xs uppercase tracking-widest text-gold-muted font-bold mb-1">Dress Code</span>
                          <span className="font-body text-wine italic">{event.dressCode}</span>
                        </div>
                      )}

                      {event.mapsUrl && (
                        <a
                          href={event.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2 border border-maroon-deep text-maroon-deep rounded-full text-sm uppercase tracking-wider font-semibold hover:bg-maroon-deep hover:text-ivory transition-colors"
                        >
                          Get Directions
                        </a>
                      )}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
