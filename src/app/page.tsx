import EnvelopeScreen from "@/components/opening/EnvelopeScreen";
import GaneshInvocation from "@/components/sections/GaneshInvocation";
import CoupleIntro from "@/components/sections/CoupleIntro";
import SaveTheDate from "@/components/sections/SaveTheDate";
import Countdown from "@/components/sections/Countdown";
import OurStory from "@/components/sections/OurStory";
import EventsTimeline from "@/components/sections/EventsTimeline";
import Gallery from "@/components/sections/Gallery";
import Venue from "@/components/sections/Venue";
import RSVPForm from "@/components/sections/RSVPForm";
import Guestbook from "@/components/sections/Guestbook";
import FamilySection from "@/components/sections/FamilySection";
import FinalSection from "@/components/sections/FinalSection";
import FloatingNav from "@/components/nav/FloatingNav";
import MusicControl from "@/components/music/MusicControl";
import { AppProvider } from "@/components/ui/AppContext";

export default function Home() {
  return (
    <AppProvider>
      <main className="relative">
        <EnvelopeScreen />
        <MusicControl />
        <FloatingNav />
        
        <div className="relative">
          <GaneshInvocation />
          <CoupleIntro />
          <SaveTheDate />
          <Countdown />
          <OurStory />
          <EventsTimeline />
          <Gallery />
          <Venue />
          <RSVPForm />
          <Guestbook />
          <FamilySection />
          <FinalSection />
        </div>
      </main>
    </AppProvider>
  );
}
