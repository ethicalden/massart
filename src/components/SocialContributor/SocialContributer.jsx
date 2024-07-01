
import Image from "next/image";


const SocialContributor = () => {
    return (
        <div className="grid grid-cols-3 ">
            <Image className="w-full h-full" src="/photos/big screen/home page/logo/logo 01.png" alt="logo" height="100" width="100" />
            <Image className="w-full h-full bg-[#EFEDED]" src="/photos/big screen/home page/logo/logo 02.png" alt="logo" height="100" width="100" />
            <Image className="w-full h-full" src="/photos/big screen/home page/logo/logo 03.png" alt="logo" height="100" width="100" />
        </div>
    );
};

export default SocialContributor;