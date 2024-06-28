import AboutUs from "@/src/components/AboutUs";
import Concept from "@/src/components/Concept";
import Gallery from "@/src/components/Gallery";
import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <AboutUs />
        {/* Add sections as needed */}
        <Visual />

        <Gallery />

        <Concept />
      </main>
      <Footer />
    </div>
  );
}
