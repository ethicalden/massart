import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";
import PreviewShow_one from "@/src/components/PreviewShow_one";

const page = () => {
  return (
    <div className="bg-white">
      <Header />
      <PreviewShow_one />
      <Footer />
    </div>
  );
};

export default page;