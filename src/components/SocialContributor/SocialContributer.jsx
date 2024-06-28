/* eslint-disable prettier/prettier */
import Image from "next/image";

/* eslint-disable prettier/prettier */
const SocialContributor = () => {
    return (
        <div className="grid grid-cols-3 mr-8 ml-8 mb-[60px] md:mr-[120px] md:ml-[120px]">
            <Image className="w-full h-full" src="/photos/big screen/home page/logo/logo 01.png" alt="logo" height="100" width="100" />
            <Image className="w-full h-full bg-[#EFEDED]" src="/photos/big screen/home page/logo/logo 02.png" alt="logo" height="100" width="100" />
            <Image className="w-full h-full" src="/photos/big screen/home page/logo/logo 03.png" alt="logo" height="100" width="100" />
        </div>
    );
};

export default SocialContributor;