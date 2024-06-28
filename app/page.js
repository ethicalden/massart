/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import AboutUs from "@/src/components/AboutUs";
import Concept from "@/src/components/Concept";
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
        <SocialContributor />
      </main>
      <Footer />
    </div>
  );
}
