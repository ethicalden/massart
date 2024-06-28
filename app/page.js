/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Concept from "@/src/components/Concept";
import Gallery from "@/src/components/Gallery";
import HomeAboutUs from "@/src/components/HomeAboutUs";
import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div className="bg-[#FFFFFF]">
      <Header />
      <main>
        <HomeAboutUs />
 
        <Visual />

        <Gallery />

        <Concept />
     
      </main>
      <Footer />
    </div>
  );
}
