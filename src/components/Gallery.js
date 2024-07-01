"use client";

import { useState } from "react";

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
      <div className="sm:pl-[30px] sm:pr-[30px] md:pl-[60px] md:pr-[60px] lg:pl-[120px] lg:pr-[120px] sm:pt-[15px] lg:pt-[60px] md:pt-[30px]  text-black bg-white">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-[130px] sm:mt-[25px] sm:mb-[25px]">
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

          <p className="font-normal hidden sm-block sm:text-[16px] lg:text-[16px] font-helvetica ">
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

        <div
          className="grid sm:grid-cols-1 
          
          md:grid-cols-2
        lg:grid-cols-2
        xl:grid-cols-2
          xl:gap-x-[30px]
          lg:gap-x-[30px]
          md:gap-x-[30px] lg:mt-[50px] "
        >
          <div>
            <div
              className="bg-green-300 relative  
             xl:h-[341px]
             lg:h-[341px]
             md:h-[341px]
             sm:h-[341px]
             xs:h-[341px]
             
             "
            >
              <img
                src="/images/picture 01.png"
                alt=""
                className="lg:w-full lg-h-full
                md:w-full md-h-full
                xl:w-full xl-h-full
                sm:w-full sm-h-full
                xs:w-full xs-h-full"
              />
              <p
                className="absolute bottom-0 left-0 
              leading-[15px] w-[148px] px-[10px] py-[10px]
               text-white font-helvetica font-bold text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                Multi Genre Music Festival 2024
              </p>
            </div>

            <div
              className="grid sm:grid-cols-1 md:grid-cols-2 
            lg:grid-cols-2
            xl:grid-cols-2
            xs:grid-cols-2"
            >
              <div
                className=" relative   
              xl:h-[341px]
              lg:h-[341px]
             md:h-[341px]
             sm:h-[341px]
             xs:h-[341px]"
              >
                <img
                  src="/images/picture 02.png"
                  alt=""
                  className="lg:w-full lg-h-full
                  md:w-full md-h-full
                  xl:w-full xl-h-full
                  sm:w-full sm-h-full
                  xs:w-full xs-h-full"
                />
                <p className="absolute bottom-0 left-0 leading-[15px] w-[148px] px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Multi Genre Music Festival 2024
                </p>
              </div>

              <div
                className="bg-purple-400 relative   
                xl:h-[341px]
                lg:h-[341px]
               md:h-[341px]
               sm:h-[341px]
               xs:h-[341px]  "
              >
                <img
                  src="/images/picture 05.png"
                  alt=""
                  className="lg:w-full lg-h-full
                  xl:w-full xl-h-full
                  md:w-full md-h-full
                  sm:w-full sm-h-full
                  xs:w-full xs-h-full"
                />
                <p className="absolute bottom-0 left-0 leading-[15px] w-[148px] px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Multi Genre Music Festival 2024
                </p>
              </div>
            </div>
          </div>

          <div
            className="bg-red-400 relative 
             xl:h-[712px]
             lg:h-[712px]
             md:h-[712px]
             sm:h-[712px]
             xs:h-[712px] "
          >
            <img
              src="/images/picture 01.png"
              alt=""
              className="lg:w-full lg-h-full
              xl:w-full xl-h-full
              md:w-full md-h-full
              sm:w-full sm-h-full
              xs:w-full xs-h-full"
            />
            <p className="absolute bottom-0 left-0 leading-[15px] w-[148px] px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Multi Genre Music Festival 2024
            </p>
          </div>
        </div>

        <div className="text-white md:mt-[50px] md:pb-[150px]">
          <button className="bg-buttonCustomColor text-[18px] font-bold font-poppins w-full rounded-3xl h-[59px] border border-buttonCustomColor hidden sm:block">
            Browse More Video
          </button>
          <button className="mb-[69px] border sm:hidden border-buttonCustomColor text-buttonCustomColor rounded-[100px] font-helvetica font-bold lg:w-[146px] h-[32px] mt-[25px] text-[12px]">
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
