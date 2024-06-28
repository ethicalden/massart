/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import ContemporaryBggreenGrid from '@/src/components/Contemporay/PhoneGrid/ContemporaryBigscreenGrid';
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
                <div className="ml-[120px] mr-[120px] text-base font-bold grid grid-cols-3 gap-5 mt-[152px] mb-[152px]">
                    <ContemporaryBggreenGrid />
                    <ContemporaryBggreenGrid />
                    <ContemporaryBggreenGrid />
                </div>
            </main>
            <Footer />
        </div >
    );
};

export default Contemporary;