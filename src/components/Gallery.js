"use client";

import { useState } from "react";

import Image from "next/image";
import Concept from "./Concept";
import Video from "./Video";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("still");

  const buttons = [
    { label: "still", id: "still" },
    { label: "video", id: "video" },
    { label: "film", id: "film" },
    { label: "all", id: "all" },
  ];
  return (
    <>
      <div
        className="xs:pl-[30px] 
        sm:px-[20px]  
      md:px-[60px]
      xl:px-[120px] 
      lg:pr-[120px] sm:pt-[15px] lg:pt-[60px] md:pt-[30px] 
       text-black bg-white"
      >
        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 
        xl:grid-cols-2
        xl:gap-x-[171px]
        lg:gap-x-[165px]
        md:gap-x-[130px]
        sm:gap-x-[100px]
        xs:gap-x-[90px]
         sm:mt-[25px] sm:mb-[25px]"
        >
          <div className=" ">
            <h1 className=" lg:pt-[8px] text-[50px] font-bold font-helvetica text-buttonCustomColor">
              Gallery
            </h1>

            <div className="lg:mt-[50px] grid sm:grid-cols-4 lg:grid-cols-4 font-helvetica justify-between  lg:gap-[20px]">
              {buttons.map((button) => (
                <button
                  key={button.id}
                  className={`text-[12px] font-bold rounded  h-[54px]  lg:px-[31px] lg:py-[17px] ${
                    activeButton === button.id
                      ? "bg-buttonCustomColor  text-white"
                      : "border border-buttonCustomColor text-black"
                  }`}
                  onClick={() => setActiveButton(button.id)}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>

          <p className=" hidden md:block font-normal xs:text-[8px] sm:text-[10px]  md:text-[12px] lg:text-[12px] xl:text-[16px]  font-helvetica ">
            Find Togetherness and Friendship in Every Corner of Our Events"
            depicts moments of closeness and a sense of brotherhood that exist
            during our events. These photos show how shared experiences can
            create lasting relationships Find Togetherness and Friendship in
            Every Corner of Our Events" depicts moments of closeness and a sense
            of brotherhood that exist during our events. These photos show how
            shared experiences can create lasting relationships These photos
            show how shared experiences can create lasting relationships
          </p>
        </div>

        <div className="flex sm:flex-col md:flex-row  gap-4 lg:mt-[50px] ">
          <div>
            <div className="relative max-w-full md:max-w-[605px] h-auto pb-4 group">
              <Image
                src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
                alt="Multi Genre Music Festival 2024"
                className="w-full h-auto"
                width={100}
                height={100}
              />
              <p className="absolute bottom-0 left-0   xl:pl-[20px] xl:pr-[20px] xl:pt-[289px]  xl:pb-[20px] xl:text-[24px] text-white font-helvetica font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Multi Genre Music Festival 2024
              </p>
            </div>

            <div className="flex sm:flex-col md:flex-row gap-4">
              <div className="relative md:max-w-[288px] h-auto group">
                <Image
                  src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
                  alt=""
                  className="w-full h-auto"
                   width={100}
                   height={100}
                />
                <p className="absolute bottom-0 left-0   xl:pl-[20px] xl:pr-[53px] xl:pt-[257px]  xl:pb-[20px] xl:text-[24px] text-white font-helvetica font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Latest Technology Convention
                </p>
              </div>

              <div className=" relative md:max-w-[288px] h-auto group">
                <Image
                  src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
                  alt=""
                  className="w-full h-auto"
                  width={100}
                 height={100}
                />
                <p className="absolute bottom-0 left-0   xl:pl-[20px] xl:pr-[20px] xl:pt-[289px]  xl:pb-[20px] xl:text-[24px] text-white font-helvetica font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Prestigious Fine Arts Exhibition
                </p>
              </div>
            </div>
          </div>

          <div className="relative max-w-full md:max-w-[565px] h-auto group">
            <Image
              src="https://i.ibb.co/Y0YYYrb/Frame-706122-3.png"
              alt=""
              className="w-full h-auto"
               width={100}
               height={100}
            />
            <p className="absolute bottom-0 left-0   xl:pl-[20px] xl:pr-[164px] xl:pt-[660px]  xl:pb-[20px] xl:text-[24px] text-white font-helvetica font-bold  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Latest Indie Musician Concerts
            </p>
          </div>
        </div>

        <div className="text-white md:mt-[50px] ">
          <button
            className="xl:mb-[150px] xl:mt-[50px]
            lg:mb-[100px] lg:mt-[30px]
            md:mb-[70px] md:mt-[20px]
            sm:mb-[50px] sm:mt-[10px]
            xs:mb-[30px] xs:mt-[10px]
             bg-buttonCustomColor 
          xl:text-[18px] 
          lg:text-[18px]
          md:text-[12px]
          xl:py-[16px] lg:py-[16px] md:py-[16px] 
         
           font-bold font-helvetica w-full rounded-[100px] 
          xl:h-[53px] border border-buttonCustomColor hidden sm:block"
          >
            Browse More Video
          </button>

          <button
            className=" xl:mb-[150px]  lg:mb-[100px]  md:mb-[70px] 
            sm:mb-[50px]
            xs:mb-[30px]
            sm:text-[12px]
            xs:text-[12px]
            sm:py-[10px] xs:py-[10px]
            sm:px-[36px] xs:px-[36px]
             border sm:hidden border-buttonCustomColor
           text-buttonCustomColor rounded-[100px] font-helvetica font-bold 
           xl:w-[146px]  xl:h-[14px] xl:mt-[50px] xl:text-[12px]
           
           lg:w-[146px]  lg:h-[14px] lg:mt-[50px] lg:text-[12px]
           md:w-[146px]  md:h-[14px] md:mt-[40px] md:text-[12px]
           sm:w-[146px]  sm:h-[14px] sm:mt-[30px] "
          >
            Browse more
          </button>
        </div>
      </div>

      <Concept />
      <Video />
    </>
  );
};

export default Gallery;
