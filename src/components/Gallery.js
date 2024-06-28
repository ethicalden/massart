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
        <div className="pb-[8px]  pr-[32px]">
          <img
            src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
            alt=""
            className="w-full h-[239px] object-cover"
          />
        </div>

        <div className="grid grid-cols-2 pr-[32px] gap-[8px]  pb-[8px] ">
          <img
            src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
            alt=""
            className=" w-full h-[239px]"
          />

          <img
            src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
            alt=""
            className=" w-full h-[239px]"
          />
        </div>

        <div className="grid grid-cols-2 pr-[32px] gap-[8px]  pb-[8px] ">
          <img
            src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
            alt=""
            className=" w-full h-[239px]"
          />

          <img
            src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
            alt=""
            className=" w-full h-[239px]"
          />
        </div>
      </div>

      <button className="mb-[69px] border border-buttonCustomColor text-buttonCustomColor rounded-[100px] font-helvetica text-bold w-[146px] h-[32px] mt-[25px] text-[12px]">
        Browse more
      </button>
    </div>
  );
};

export default Gallery;
