/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Concept from "@/src/components/Concept";
import AskQuestion from "@/src/components/FreequentlyAskQuestion/AskQuestion";

import EventPartener from "@/src/components/EventPartner";
import Explore from "@/src/components/Explore";
import Gallery from "@/src/components/Gallery";
import MasterClass from "@/src/components/MasterClass";
import Review from "@/src/components/Review";
import Video from "@/src/components/Video";

import HomeAboutUs from "@/src/components/HomeAboutUs";
import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <main>
        <AboutUs />

        <Visual />

        <Gallery />

        <Concept />
        <Video />
        <Explore />
        <MasterClass />
        <Review />
        <EventPartener />
        <GuidanceHeading />
        <GuidenceStep />

        {/* <div className="ml-8 mr-8">
          <AskQuestion />
        </div> */}
      </main>
      <Footer />
    </div>
  );
}
