"use client";
import { useState } from "react";
import { IoMdFastforward } from "react-icons/io";

const Visual = () => {
  const [activeButton, setActiveButton] = useState("Donor Pass");

  const buttons = [
    { label: "Donor Pass", id: "Donor Pass" },
    { label: "Preview Pass", id: "Preview Pass" },
  ];
  return (
    <div className="pt-[60px] pl-[32px] bg-white font-helvetica">
      <div className="text-black leading-[18px]">
        <h1 className="text-[24px] font-bold pr-[56px]">
          Witness the World's Biggest Public{" "}
          <span className="text-buttonCustomColor">Art Festival</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 justify-center gap-[19px] pt-[29px] sm:grid-cols-3 md:gap-[30px] md:grid-cols-3 md:justify-start">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`w-[101px] h-[24px]  font-bold text-[12px] leading-[24px] rounded-[100px] ${
              activeButton === button.id
                ? "bg-buttonCustomColor  text-white"
                : "border border-buttonCustomColor text-black"
            }`}
            onClick={() => setActiveButton(button.id)}
          >
            {button.label}
          </button>
        ))}
        <div className="flex items-center space-x-1 w-[101px] h-[24px]">
          <p className="text-[12px] font-bold">View More</p>
          <a href="/" className="text-black">
            <IoMdFastforward size={18} className="" />
          </a>
        </div>
      </div>

      <div className="flex justify-center h-[232px] pr-[32px] pt-[29px]">
        <img
          src="https://i.ibb.co/92qWn8t/picture-01.png"
          alt=""
          className="w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Visual;
