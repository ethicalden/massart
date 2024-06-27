import Visual from "@/src/components/Visuals";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        {/* Add sections as needed */}
        <Visual />

        {/* <Gallery />
        <Button />
        <Concept /> */}
      </main>
      <Footer />
    </div>
  );
}
