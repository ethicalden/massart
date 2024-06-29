/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import AboutUs from "@/src/components/AboutUs";
import Concept from "@/src/components/Concept";
import AskQuestion from "@/src/components/FreequentlyAskQuestion/AskQuestion";
import Gallery from "@/src/components/Gallery";
import SocialContributor from "@/src/components/SocialContributor/SocialContributer";
import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <main>
        <AboutUs />
        {/* Add sections as needed */}
        <Visual />

        <Gallery />

        <Concept />
        <div className="ml-8 mr-8">
          <AskQuestion />
        </div>
        <div className="mb-[60px] mr-8 ml-8  md:mr-[120px] md:ml-[120px]">
          <SocialContributor />
          <div className="bg-[#000000] h-[0.5px] mt-[10px] mb-[10px] md:mt-10 md:mb-10"></div>
          <SocialContributor />
        </div>
      </main>
      <Footer />
    </div>
  );
}
