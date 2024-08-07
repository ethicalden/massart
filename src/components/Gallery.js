"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Gallery = () => {
     const [isSelectTab, setIsSelectTab] = useState(0);
  const handleTabChange = (indexNum) => {
    setIsSelectTab(indexNum);
  }
  return (
    <div className="xs:pt-[60px] xs:px-[32px]">
      <div>
        <h1 className="xs:text-[24px] leading-[36px] text-buttonCustomColor ">
          The gallery of Durga puja Art
        </h1>
        <div className="flex gap-x-[15px] xs:py-[25px] items-center">
         <button
      onClick={() => handleTabChange(0)}
      className={
        isSelectTab === 0
          ? "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] text-white bg-buttonCustomColor border border-transparent hover:bg-transparent hover:text-black hover:border-buttonCustomColor rounded-[3px]"
          : "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] bg-transparent border text-black border-buttonCustomColor hover:bg-buttonCustomColor hover:text-white hover:border-transparent rounded-[3px]"
      }
    >
      Still
    </button>
           <button
      onClick={() => handleTabChange(1)}
      className={
        isSelectTab === 1
          ? "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] text-white bg-buttonCustomColor border border-transparent hover:bg-transparent hover:text-black hover:border-buttonCustomColor rounded-[3px]"
          : "xs:text-[12px] xs:leading-[18px] font-helvetica font-bold xs:px-[38.5px] xs:py-[8px] bg-transparent border text-black border-buttonCustomColor hover:bg-buttonCustomColor hover:text-white hover:border-transparent rounded-[3px]"
      }
    >
      Video
    </button>
        </div>
        {/* gallery image */}
        <div>
          <div>
            <div className="relative group">
              <div className="h-[239px] w-full ">
                <Image
                  className="w-full h-full object-cover rounded-[10px]"
                  src="/images/galleryImgOne.jpg"
                  height={100}
                  width={100}
                  alt=""
                />
              </div>
              <div className="">
                <p className="xs:text-[12px] leading-[15px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Multi Genre Music <br /> Festival 2024
                </p>
              </div>
            </div>
            <div className="pt-[8px] ">
              <div className="grid grid-cols-2 gap-[8px]">
                <div className="relative group">
                  <div className="h-[239px] w-full ">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src="/images/galleryImgTwo.jpg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="xs:text-[12px] leading-[15px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Multi Genre Music <br /> Festival 2024
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="h-[239px] w-full ">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src="/images/galleryImgThree.jpg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="xs:text-[12px] leading-[15px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Multi Genre Music <br /> Festival 2024
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="h-[239px] w-full ">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src="/images/galleryImgFour.jpg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="xs:text-[12px] leading-[15px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Multi Genre Music <br /> Festival 2024
                    </p>
                  </div>
                </div>

                <div className="relative group">
                  <div className="h-[239px] w-full ">
                    <Image
                      className="w-full h-full object-cover rounded-[10px]"
                      src="/images/galleryImgFive.jpg"
                      height={100}
                      width={100}
                      alt=""
                    />
                  </div>
                  <div className="">
                    <p className="xs:text-[12px] leading-[15px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Multi Genre Music <br /> Festival 2024
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button */}
        <Link href='/gallery'>
         <button
          className="xs:mt-[25px]  xs:text-[12px] xs:leading-[14px] font-helvetica font-bold text-buttonCustomColor border border-buttonCustomColor
           xs:px-[17px] xs:py-[9px] rounded-full"
        >
          Browse More Video
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default Gallery;
