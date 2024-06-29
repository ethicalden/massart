"use client";
import { useState } from "react";
import { IoMdFastforward } from "react-icons/io";

const Visual = () => {
  const [activeButton, setActiveButton] = useState("Donor Pass");
  const [zoomedImage, setZoomedImage] = useState(null);

  const buttons = [
    { label: "Donor Pass", id: "Donor Pass", imageIndex: 1 },
    { label: "Preview Pass", id: "Preview Pass", imageIndex: 2 },
  ];

  return (
    <div className="pt-[60px] md:pl-[60px] md:pr-[60px] lg:pl-[120px] lg:pr-[120px] bg-white font-helvetica">
      <div className="text-black">
        <h1 className="text-[24px] font-bold text-center">
          Witness the World's Biggest Public{" "}
          <span className="text-buttonCustomColor">Art Festival</span>
        </h1>
      </div>

      <div className="flex flex-row gap-[35px] justify-center items-center pt-[29px]">
        <div className="grid grid-cols-2 gap-[35px]">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`w-[101px] h-[24px] font-bold text-[12px] rounded-[100px] ${
                activeButton === button.id
                  ? "bg-buttonCustomColor text-white"
                  : "border border-buttonCustomColor text-black"
              }`}
              onClick={() => {
                setActiveButton(button.id);
                setZoomedImage(button.imageIndex);
              }}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="flex items-center space-x-1 w-[101px]">
          <p
            className="text-[12px] font-bold"
            onClick={() => setZoomedImage(3)}
          >
            View More
          </p>
          <a href="#" className="text-black">
            <IoMdFastforward size={18} className="" />
          </a>
        </div>
      </div>

      <div
        className=" hidden-sm md-block flex justify-center md:gap-[23px] lg:gap-[23px] h-[345px] pt-[29px]
     "
      >
        <div className="md:w-1/3  ">
          <img
            src="https://i.ibb.co/k1dNKT4/picture-05.png"
            alt=""
            className={`w-full border  border-buttonCustomColor rounded-md ${zoomedImage === 1 ? "transform" : "scaleY(1.1)"}`}
            style={zoomedImage === 1 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
        <div className="md:w-1/3">
          <img
            src="https://i.ibb.co/k1dNKT4/picture-05.png"
            alt=""
            className={`w-full border  border-buttonCustomColor rounded-md ${zoomedImage === 1 ? "transform" : "scaleY(1.1)"}`}
            style={zoomedImage === 1 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
        <div className="md:w-1/3">
          <img
            src="https://i.ibb.co/k1dNKT4/picture-05.png"
            alt=""
            className={`w-full border  border-buttonCustomColor rounded-md ${zoomedImage === 1 ? "transform" : "scaleY(1.1)"}`}
            style={zoomedImage === 1 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Visual;
