import Contact from "@/src/components/Contact";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

const page = () => {
    return (
        <div className="bg-white">
            <Header />
            <Contact />
            <Footer />
        </div >
    );
};

export default page;