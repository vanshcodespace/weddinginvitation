import DoorScreen from "@/components/opening/DoorScreen";
import HeroCurtain from "@/components/sections/HeroCurtain";
import CoupleIntro from "@/components/sections/CoupleIntro";
import SaveTheDate from "@/components/sections/SaveTheDate";
import Countdown from "@/components/sections/Countdown";
import EventsTimeline from "@/components/sections/EventsTimeline";
import Venue from "@/components/sections/Venue";
import PreWeddingEvents from "@/components/sections/PreWeddingEvents";
import RSVPForm from "@/components/sections/RSVPForm";
import FinalSection from "@/components/sections/FinalSection";
import MusicControl from "@/components/music/MusicControl";
import { AppProvider } from "@/components/ui/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <main className="relative flex justify-center w-full min-h-screen">
        <div className="floral-border floral-border-left hidden sm:block" />
        <div className="floral-border floral-border-right hidden sm:block" />
        
        {/* Mobile-first centered column */}
        <div className="w-full max-w-[480px] relative bg-ivory/80 shadow-2xl min-h-screen pb-20">
          <DoorScreen />
          <MusicControl />
          {/* <FloatingNav />
           */}
          <div className="relative">
            <HeroCurtain />
            <div className="wavy-divider" />
            <CoupleIntro />
            <div className="wavy-divider" />
            <SaveTheDate />
            <div className="wavy-divider" />
            <Countdown />
            <div className="wavy-divider" />
            <EventsTimeline />
            <div className="wavy-divider" />
            <Venue />
            {/* <div className="wavy-divider" />
            <PreWeddingEvents /> */}
            {/* <div className="wavy-divider" />
            <RSVPForm /> */}
            <FinalSection />
          </div>
        </div>
      </main>
    </AppProvider>
  );
}
