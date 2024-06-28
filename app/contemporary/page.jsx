/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import ContemporaryPhoneGrid from '@/src/components/Contemporay/PhoneGrid/ContemporayPhoneGrid';
import Footer from '@/src/components/common/Footer';
import Header from '@/src/components/common/Header';
import Image from 'next/image';

const Contemporary = () => {
    return (
        <div className="">
            <Header />
            <main className="font-helvetica overflow-hidden">
                <div className="text-[#FFFFFF] text-xs grid grid-cols-2 ml-8 mr-8 gap-[10px] mt-[60px] mb-[60px] md:hidden">
                    <ContemporaryPhoneGrid />
                    <ContemporaryPhoneGrid />
                    <ContemporaryPhoneGrid />
                    <ContemporaryPhoneGrid />
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default Contemporary;