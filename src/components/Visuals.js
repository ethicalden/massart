"use client";
import Image from "next/image";
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
    <div
      className="pt-[60px] 
      md:px-[60px]
      lg:px-[100px]
      xs:px-[45px]
      sm:px-[45px]
      xl:px-[120px] 
      bg-white font-helvetica"
    >
      <div className="text-black">
        <h1 className="text-[24px] font-bold text-center ">
          Witness the World's Biggest <br /> Public{" "}
          <span className="text-buttonCustomColor">Art Festival</span>
        </h1>
      </div>

      <div
        className="flex sm:flex-col
        xs:flex-col
        md:flex-row
       lg:flex-row xl:flex-row
      xl:gap-x-[35px]
      lg:gap-x-[35px]
      md:gap-x-[35px]
      sm:gap-[15px]
      xs:gap-[15px]

       justify-center items-center pt-[29px]"
      >
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
        className=" hidden-sm md-block grid md:grid-cols-3
        
        xs:gap-x-[10px] 
        md:gap-x-[15px]
        lg:gap-x-[18px]
        xl:gap-x-[23px]
        
        xs:grid-cols-1
        sm:grid-cols-1
        lg:grid-cols-3
        xl:grid-cols-3
        items-center 
        xs:pt-[29px]  
        sm:pt-[29px]
        md:pt-[29px]
        xl:pt-[84px] 
        lg:pt-[29px]
        
     "
      >
        <div
          className="
          xs:mb-[10px]
          sm:mb-[10px]
           
          xs:h-[250px]
          sm:h-[250px]
          xl:h-[345px]
          md:h-[270px]
          lg:h-[300px]
           
       
        "
        >
          <Image
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt=""
            width={100}
            height={100}
            className={`
            md:w-full md:h-full 
            xs:w-full xs:h-full
            sm:w-full sm:h-full
            lg:w-full lg:h-full
            xl:w-full xl:h-full
            
            border  border-buttonCustomColor rounded-md`}
            style={zoomedImage === 1 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
        <div
          className=" 
          xs:mb-[10px]
          sm:mb-[10px]
          
          xs:h-[250px]
          sm:h-[250px]
          xl:h-[345px]
          md:h-[270px]
          lg:h-[300px]
          "
        >
          <Image
            src="https://i.ibb.co/Y0YYYrb/Frame-706122-3.png"
            alt=""
            width={100}
            height={100}
            className={`
            md:w-full md:h-full 
            xs:w-full xs:h-full
            sm:w-full sm:h-full
            lg:w-full lg:h-full
            xl:w-full xl:h-full
            border  border-buttonCustomColor rounded-md `}
            style={zoomedImage === 2 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
        <div
          className=" 
          xs:mb-[10px]
          sm:mb-[10px]
          
          xs:h-[250px]
          sm:h-[250px]
          xl:h-[345px]
          md:h-[270px]
          lg:h-[300px]
         
          
          
          "
        >
          <Image
            src="https://i.ibb.co/k1dNKT4/picture-05.png"
            alt=""
            width={100}
            height={100}
            className={`
             md:w-full md:h-full 
            xs:w-full xs:h-full
            sm:w-full sm:h-full
            lg:w-full lg:h-full
            xl:w-full xl:h-full

             border  border-buttonCustomColor rounded-md 
           `}
            style={zoomedImage === 3 ? { transform: "scaleY(1.1)" } : {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Visual;
