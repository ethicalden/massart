import IndivudualPage from "@/src/components/IndividualPage";
import Footer from "@/src/components/common/Footer";
import Header from "@/src/components/common/Header";

const page = () => {
    return (
        <div className="bg-white">
            <Header />
            <IndivudualPage />
            <Footer />
        </div >
    );
};

export default page;