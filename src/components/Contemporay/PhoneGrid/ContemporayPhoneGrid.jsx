/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import Image from 'next/image';

const ContemporaryPhoneGrid = () => {
    return (
        <>
            <div className="relative">
                <Image className="h-full w-full rounded-[10px]" src="/photos/phone screen/Gallery Phone/photo 01.png" alt="contemporary" width="179" height="239" />
                <p className="absolute text-xs max-w-[80%] font-bold bottom-[10px] left-[10px] text-white">contemporary durga puja Art</p>
            </div>
            <div className="relative">
                <Image className="h-full w-full" src="/photos/phone screen/Gallery Phone/photo 02.png" alt="contemporary" width="179" height="239" />
                <p className="absolute text-xs bottom-[10px] left-[10px] max-w-[80%] w-full font-bold">Multi Genre Music Festival 2024</p>
            </div>
        </>
    );
};

export default ContemporaryPhoneGrid;