import { IoMdFastforward } from "react-icons/io";
const Visual = () => {
  return (
    <div className="  pt-[60px]  ">
      <div className=" text-center  text-black sm:w-[342px] sm:h-[129px] sm:pl-[32px] sm:pr-[56px]">
        <h1 className=" sm:text-[24px] font-bold ">
          Witness the
          <span className="text-buttonCustomColor">
            {" "}
            World Biggest Public Art Festival{" "}
          </span>
          Preview Show <span className="text-buttonCustomColor">
            {" "}
            2024
          </span> of{" "}
          <span className="text-buttonCustomColor">
            {" "}
            Durga Puja Art Kolkata
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-[10px] pl-[29px] pr-[75px]">
        <button className="bg-buttonCustomColor text-[12px] w-[98px] h-[32px] sm:w-[98px] sm:h-[32px] leading-[24px] text-white py-[4px] pl-[17px] sm:px-[17px] sm:py-[4px] rounded-[100px]">
          Contact Us
        </button>
        <button className="border border-buttonCustomColor text-buttonCustomColor text-[12px] w-[98px] h-[32px] sm:w-[98px] sm:h-[32px] leading-[24px]  py-[4px] pl-[17px] sm:px-[17px] sm:py-[4px] rounded-[100px]">
          Previous Pass
        </button>
        <div className="flex space-x-1 sm:space-x-2 items-center py-2 px-3 sm:px-4">
          <p className="text-xs sm:text-sm">View More</p>
          <a href="/" className="text-black">
            <IoMdFastforward size={18} className="sm:hidden md:inline" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Visual;
