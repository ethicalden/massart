import Explore from "@/src/components/Explore";
import Gallery from "@/src/components/Gallery";
import MasterClass from "@/src/components/MasterClass";
import Review from "@/src/components/Review";

import EventPartener from "@/src/components/EventPartner";
import GuidanceHeading from "@/src/components/GuidanceHeading";
import GuidenceStep from "@/src/components/GuidenceStep";
import HomeAboutUs from "@/src/components/HomeAboutUs";
import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

 export const metadata = {
  title: "Home - Massart",
  description: "Welcome to the home of Massart.",
};

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <main>
        <HomeAboutUs />
        <Visual />
        <Gallery />
        <Explore />
        <MasterClass />
        <EventPartener />
        <Review />
        <GuidanceHeading />
        <GuidenceStep />
      </main>
      <Footer />
    </div>
  );
}
