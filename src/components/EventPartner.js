import React from "react";

const EventPartener = () => {
  return (
    <div className="   bg-white font-helvetica">
      <div className=" h-[413px]  font-helvetica bg-EventPartner">
        <div className=" pt-[43px] pl-[32px] ">
          <h1 className="  text-[24px]font-bold ">
            <span className="text-buttonCustomColor">Building Memories -</span>
            Your Trusted Event Partner
          </h1>
          <p className="text-[12px] font-normal  pr-[32px] pt-[10px] leading-[18px] ">
            Find out more about our team, vision, and dedication to creating
            extraordinary experiences. In this section, we share our story and
            our commitment to the success of each event
          </p>
        </div>

        <div className="pt-[15px] md:pt-[0] pl-[32px] pr-[56px] pb-[45px]">
          <div className="flex gap-[80px] pb-[42px]">
            <div className="bg-buttonCustomColor rounded-md  w-[173px] h-[79px]">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px] ">
                100K+
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[18px]">
                Events That Took Place
              </p>
            </div>

            <div className="  w-[173px] h-[79px]">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px] ">
                1M
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[18px]">
                Active Users Reached
              </p>
            </div>
          </div>

          <div className="flex gap-[80px] pb-[42px] ">
            <div className="w-[173px] h-[79px] ">
              <p className="font-helvetica text-[20px] font-bold pl-[20px] pr-[27px] pt-[18px]">
                500+
              </p>
              <p className="font-helvetica text-[12px] font-normal pr-[27px]  pl-[20px] pe-[20px] ">
                Existing Partnerships
              </p>
            </div>

            <div className="w-[173px] h-[79px]">
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
