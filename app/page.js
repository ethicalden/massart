import AboutUs from "@/src/components/AboutUs";
import Concept from "@/src/components/Concept";

import EventPartener from "@/src/components/EventPartner";
import Explore from "@/src/components/Explore";
import Gallery from "@/src/components/Gallery";
import MasterClass from "@/src/components/MasterClass";
import Review from "@/src/components/Review";
import Video from "@/src/components/Video";

import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div>
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
        {/* <EventPartener /> */}
      </main>
      <Footer />
    </div>
  );
}
