"use client";

export default function FloatingNav() {

  const scrollToRSVP = () => {
    document.getElementById("rsvp")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-40 max-w-[480px] mx-auto w-full">

      {/* Bottom Right: RSVP Float */}
      <button 
        onClick={scrollToRSVP}
        className="pointer-events-auto absolute bottom-6 right-6 bg-gold text-white py-2 px-5 rounded-full font-display font-semibold text-sm shadow-[0_4px_15px_rgba(184,144,58,0.4)] hover:bg-yellow-600 transition-colors z-50 flex items-center gap-2"
      >
        ✨ RSVP
      </button>
    </div>
  );
}
