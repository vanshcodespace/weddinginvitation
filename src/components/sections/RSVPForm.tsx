"use client";
import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function RSVPForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // Simulate API Call or Formspree
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log("RSVP Data:", data);
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="rsvp" className="py-16 px-6 text-center">
      <div className="text-3xl text-sage mb-2">✉️</div>
      <h2 className="font-script text-4xl text-dark-olive mb-2">RSVP</h2>
      <div className="heart-divider w-full"><span>❦</span></div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-[320px] mx-auto mt-6 text-left">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name *" 
          required 
          className="w-full px-5 py-4 rounded-xl border border-sage bg-ivory text-dark-olive font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder:text-dark-olive/50 shadow-sm"
        />
        
        <select 
          name="attending" 
          required
          defaultValue=""
          className="w-full px-5 py-4 rounded-xl border border-sage bg-ivory text-dark-olive font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent shadow-sm appearance-none"
        >
          <option value="" disabled>Will you be attending? *</option>
          <option value="yes">Yes, gladly</option>
          <option value="no">No, regrettably</option>
          <option value="maybe">Maybe</option>
        </select>
        
        <textarea 
          name="message" 
          placeholder="Your Message / Wishes"
          rows={4}
          className="w-full px-5 py-4 rounded-xl border border-sage bg-ivory text-dark-olive font-body focus:outline-none focus:ring-2 focus:ring-gold focus:border-transparent placeholder:text-dark-olive/50 resize-y shadow-sm"
        />

        <button 
          type="submit" 
          disabled={status === "submitting"}
          className="w-full bg-dark-olive hover:bg-sage text-white font-body font-semibold py-4 rounded-xl transition-colors duration-300 shadow-md mt-2 disabled:opacity-70"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-sage font-semibold text-center mt-2 font-display">Thank you! Your response has been recorded.</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-semibold text-center mt-2 font-display">Something went wrong. Please try again.</p>
        )}
      </form>
    </SectionWrapper>
  );
}
