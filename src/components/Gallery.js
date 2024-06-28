"use client";

import { useState } from "react";

const Gallery = () => {
  const [activeButton, setActiveButton] = useState("still");

  const buttons = [
    { label: "still", id: "still" },
    { label: "video", id: "video" },
    { label: "film", id: "film" },
    { label: "all", id: "all" },
  ];
  return (
    <div className=" pl-[32px]  pt-[60px]  text-black bg-white">
      <div className=" ">
        <h1 className="pr-[56px] h-[36px]  text-5xl font-semibold font-helvetica text-buttonCustomColor">
          Gallery
        </h1>

        <div className="grid grid-cols-4  font-helvetica justify-between pr-[170px] pt-[33px] pb-[25px] gap-[6px]">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`text-[12px] font-bold rounded  h-[34px]  px-[14px] py-[8px] ${
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

      <div className="grid grid-cols-1   pt-[25px] ">
        <div className="relative pb-[8px] pr-[32px]">
          <img
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt=""
            className="w-full h-[239px] object-cover"
          />
          <p className="absolute bottom-0 left-0 leading-[15px] w-[148px]  px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px]">
            Multi Genre Music Festival 2024
          </p>
        </div>

        <div className="grid grid-cols-2 pr-[32px] gap-[8px]  pb-[8px] ">
          <div className="relative">
            <img
              src="https://i.ibb.co/B2NSKPj/picture-02.png"
              alt=""
              className="w-full h-[239px] "
            />
            <p className="absolute bottom-0 left-0 leading-[15px] w-[148px]  px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px]">
              Multi Genre Music Festival 2024
            </p>
          </div>

          <div className="relative">
            <img
              src="https://i.ibb.co/cxKsbBF/picture-3.png"
              alt=""
              className="w-full h-[239px] "
            />
            <p className="absolute bottom-0 left-0 leading-[15px] w-[148px]  px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px]">
              Multi Genre Music Festival 2024
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 pr-[32px] gap-[8px]  pb-[8px] ">
          <div className="relative">
            <img
              src="https://i.ibb.co/B2NSKPj/picture-02.png"
              alt=""
              className="w-full h-[239px] "
            />
            <p className="absolute bottom-0 left-0 leading-[15px] w-[148px]  px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px]">
              Multi Genre Music Festival 2024
            </p>
          </div>

          <div className="relative">
            <img
              src="https://i.ibb.co/cxKsbBF/picture-3.png"
              alt=""
              className="w-full h-[239px] "
            />
            <p className="absolute bottom-0 left-0 leading-[15px] w-[148px]  px-[10px] py-[10px] text-white font-helvetica font-bold text-[12px]">
              Multi Genre Music Festival 2024
            </p>
          </div>
        </div>
      </div>

      <button className="mb-[69px] border border-buttonCustomColor text-buttonCustomColor rounded-[100px] font-helvetica text-bold w-[146px] h-[32px] mt-[25px] text-[12px]">
        Browse more
      </button>
    </div>
  );
};

export default Gallery;
