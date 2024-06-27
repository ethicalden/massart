import { IoMdFastforward } from "react-icons/io";

const Visual = () => {
  return (
    <div className="pt-[60px] pl-[32px] pr-[56px]">
      <div className="text-black sm:w-[342px] sm:h-[72px]">
        <h1 className="sm:text-[24px] font-bold">
          Witness the World Biggest Public{" "}
          <span className="text-buttonCustomColor">Art Festival</span>
        </h1>
      </div>

      <div className="grid grid-cols-3 pt-[32px] pb-[29px]">
        <button className="bg-buttonCustomColor text-[12px] w-[111px] h-[32px] sm:w-[111px] sm:h-[32px] leading-[24px] text-white py-[4px] px-[17px] sm:px-[17px] sm:py-[4px] rounded-[100px]">
          Donor Pass
        </button>
        <button className="border border-buttonCustomColor text-black text-[12px] w-[111px] h-[32px] sm:w-[111px] sm:h-[32px] leading-[24px] py-[4px] px-[17px] sm:px-[17px] sm:py-[4px] rounded-[100px]">
          Preview Pass
        </button>
        <div className="flex items-center gap-[10px]">
          <p className="text-[12px]">View More</p>
          <a href="/" className="text-black">
            <IoMdFastforward size={18} className="sm:hidden md:inline" />
          </a>
        </div>
      </div>

      <img
        src="https://i.ibb.co/92qWn8t/picture-01.png"
        alt=""
        className=" w-[366px] h-[232px]"
      />
    </div>
  );
};

export default Visual;
