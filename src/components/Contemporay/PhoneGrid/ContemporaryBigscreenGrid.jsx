/* eslint-disable prettier/prettier */

import Image from "next/image";


const ContemporaryBggreenGrid = () => {
    return (
        <>
            <div className="relative">
                <Image src="/photos/big screen/concept/picture 02.png" alt="poja picture" width="386" height="486" />
                <div className="absolute bottom-[58px] left-5 text-white">
                    <p>contemporary durga puja Art</p>
                    <a className="text-[#FFFFFF99] underline" href="/#">read more</a>
                </div>
            </div>
            <div className="relative">
                <Image src="/photos/big screen/concept/picture 03.png" alt="poja picture" width="386" height="486" />
                <div className="absolute bottom-[58px] left-5 hidden">
                    <p>contemporary durga puja Art</p>
                    <a className="text-[#FFFFFF99] underline" href="/#">read more</a>
                </div>
            </div>
            <div className="relative">
                <Image src="/photos/big screen/concept/picture 04.png" alt="poja picture" width="386" height="486" />
                <div className="absolute bottom-[58px] left-5 hidden">
                    <p>contemporary durga puja Art</p>
                    <a className="text-[#FFFFFF99] underline" href="/#">read more</a>
                </div>
            </div>
        </>
    );
};

export default ContemporaryBggreenGrid;