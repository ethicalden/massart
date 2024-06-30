import React from "react";

const EventPartener = () => {
  return (
    <div className=" bg-white font-helvetica">
      <div className="sm:pt-[90px] md:pt-[85px] md:pb-[91px] lg:pb-[91px] lg:gap-[101px] md:gap-[50px] md:pl-[185px] md:pr-[185px] lg:pl-[185px] lg:pr-[185px]  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 items-center  font-helvetica bg-EventPartner">
        <div className="  ">
          <h1 className="  lg:text-[24px] md:text-[24px] sm:text-[24px] font-bold ">
            <span className="text-buttonCustomColor">Building Memories -</span>
            Your Trusted Event Partner
          </h1>
          <p className="sm:text-[12px] lg:text-[12px] md:text-[12px] font-normal   ">
            Find out more about our team, vision, and dedication to creating
            extraordinary experiences. In this section, we share our story and
            our commitment to the success of each event
          </p>
        </div>

        <div className="sm:pt-[15px]">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:gap-[60px] md:gap-[60px] pb-[42px]">
            <div className="bg-buttonCustomColor rounded-md">
              <p className="font-helvetica lg:text-[20px] md:text-[20px] font-bold lg:pl-[20px] lg:pr-[27px] pt-[18px] ">
                100K+
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[18px]">
                Events That Took Place
              </p>
            </div>

            <div className="  ">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px] ">
                1M
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[18px]">
                Active Users Reached
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  pb-[42px] lg:gap-[60px] md:gap-[60px]">
            <div className="">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px]">
                500+
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[20px] ">
                Existing Partnerships
              </p>
            </div>

            <div className="">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px]">
                30+
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[18px]">
                Award Winning
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPartener;
