const Gallery = () => {
  return (
    <div className=" pl-[32px]  pt-[60px]  text-black bg-white">
      <div className=" ">
        <h1 className="w-[342px] h-[36px]  text-5xl font-semibold font-helvetica text-buttonCustomColor">
          Gallery
        </h1>

        <div className="grid grid-cols-4 md:grid-cols-4 font-poppins justify-between  pr-[170px] pt-[33px] pb-[25px]  gap-[6px]">
          <button className="bg-buttonCustomColor font-bold text-[12px] w-[52px] h-[34px] leading-[18px]  px-[14px] py-[8px] text-white ">
            still
          </button>

          <button className="w-[52px] h-[34px] text-[12px] font-bold leading-[18px] border border-buttonCustomColor px-[14px] py-[8px] text-white ">
            video
          </button>
          <button className="w-[52px] h-[34px] text-[12px] font-bold leading-[18px] border border-buttonCustomColor px-[14px] py-[8px] text-white">
            film
          </button>
          <button className="w-[52px] h-[34px] text-[12px] font-bold leading-[18px] border border-buttonCustomColor px-[14px] py-[8px] text-white">
            all
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-rows-1 pr-[32px]">
        <div className=" pb-[8px] ">
          <img
            src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
            alt=""
            className="w-[366px] h-[239px]"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2  gap-[8px] pb-[8px] ">
          <div className=" ">
            <img
              src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
              alt=""
              className="w-[179px] h-[239px]"
            />
          </div>

          <div className=" ">
            <img
              src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
              alt=""
              className="w-[179px] h-[239px]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 pb-[8px] gap-[8px]">
          <div className=" ">
            <img
              src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
              alt=""
              className="w-[179px] h-[239px]"
            />
          </div>

          <div className="">
            <img
              src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
              alt=""
              className="w-[179px] h-[239px]"
            />
          </div>
        </div>
        <button className="mb-[69px] border border-buttonCustomColor rounded-[100px] font-helvetica text-bold w-[146px] h-[32px] pr-[] text-[12px]">
          Browse more
        </button>
      </div>
    </div>
  );
};

export default Gallery;
