const Gallery = () => {
  return (
    <div className=" md:px-[120px] md:pt-[150px]  text-black bg-white">
      <div className="flex flex-col md:pb-[52px] gap-[171px] md:flex-row justify-between items-center ">
        <div className="w-[569px] h-[168px]  space-y-[50px]">
          <h1 className="text-5xl font-semibold font-helvetica text-buttonCustomColor">
            Gallery
          </h1>
          <div className="flex  md:pb-[37px]  gap-3 mb-6">
            <button className="bg-buttonCustomColor px-[31px] py-[16px] text-white">
              still
            </button>
            <button className=" px-[31px] py-[16px] border border-buttonCustomColor">
              video
            </button>
            <button className=" px-[31px] py-[16px] border border-buttonCustomColor">
              film
            </button>
            <button className=" px-[31px] py-[16px] border border-buttonCustomColor">
              all
            </button>
          </div>
        </div>

        <div className="w-[569px] h-[168px] leading-[24px] ">
          <p className="text-[16px] font-normal font-helvetica">
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
      </div>

      <div className="flex flex-col md:flex-row  gap-[30px]">
        <div>
          <div className="max-w-full md:max-w-[605px] h-auto pb-[30px]">
            <img
              src="https://i.ibb.co/CtpKL8W/Frame-706122.png"
              alt=""
              className="w-full h-auto"
            />
          </div>

          <div className="flex flex-col md:flex-row gap-[30px]">
            <div className=" md:max-w-[288px] h-auto">
              <img
                src="https://i.ibb.co/PZ1dtSq/Frame-706122-1.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
            <div className=" md:max-w-[288px] h-auto">
              <img
                src="https://i.ibb.co/HhXLvfW/Frame-706122-2.png"
                alt=""
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="max-w-full md:max-w-[565px] h-auto">
          <img
            src="https://i.ibb.co/Y0YYYrb/Frame-706122-3.png"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
