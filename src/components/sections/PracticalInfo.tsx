"use client";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function PracticalInfo() {
  return (
    <SectionWrapper id="practical" className="py-16 px-6 text-center space-y-16">
      
      <div>
        <div className="text-4xl text-sage mb-3">🚗</div>
        <h2 className="font-script text-4xl text-dark-olive mb-3">Transportation</h2>
        <p className="font-body text-dark-olive/80 max-w-[280px] mx-auto">
          Shuttle details and pickup point/time will be provided closer to the date.
        </p>
      </div>

      <div>
        <div className="text-4xl text-sage mb-3">🏨</div>
        <h2 className="font-script text-4xl text-dark-olive mb-3">Accommodation</h2>
        <p className="font-body text-dark-olive/80 max-w-[280px] mx-auto">
          Hotel Name <br />
          2 miles away <br />
          Promo code: <strong className="font-semibold text-dark-olive">WED26</strong>
        </p>
      </div>

      <div>
        <div className="text-4xl text-sage mb-3">🎁</div>
        <h2 className="font-script text-4xl text-dark-olive mb-3">Gifts</h2>
        <p className="font-italic text-lg text-dark-olive max-w-[300px] mx-auto">
          "Your love, blessings, and presence are the greatest gifts we could ever ask for."
        </p>
      </div>

    </SectionWrapper>
  );
}
