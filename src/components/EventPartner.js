import React from "react";

const EventPartener = () => {
  return (
    <div className=" bg-white pt-[60px] font-helvetica">
      <div className="   px-[32px] font-helvetica bg-EventPartner">
        <div className="py-[41px] ">
          <h1 className=" font-bold  font-helvetica text-[24px] leading-[36px] ">
            <span className="text-buttonCustomColor">Building Memories -</span>
            Your Trusted Event Partner
          </h1>
          <p
            className="text-[12px] leading-[18px] font-helvetica 
          font-normal  pt-[10px] pb-[15px] "
          >
            Find out more about our team, vision, and dedication to creating
            extraordinary experiences. In this section, we share our story and
            our commitment to the success of each event
          </p>
          <div className="grid grid-cols-2 gap-[20px] ">
            {/* card 1 */}
            <div className="bg-buttonCustomColor rounded-[5px] pt-[14px] px-[17px] pb-[14px] text-white">
              <p className="font-helvetica font-bold  text-[20px] leading-[26px]">
                2.5 crores
              </p>
              <p
                className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]
                 "
              >
                of people from around the world visit kolkata durga puja
                ArtEvents That Took Place
              </p>
            </div>
            {/* card2 */}
            <div
              className=" bg-[#D9D9D9] pl-[17px] pt-[19px] pb-[20px] rounded-[5px] text-black
            hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
            >
              <p className="font-helvetica font-bold  text-[20px] leading-[26px] ">
                3,000 +
              </p>
              <p
                className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]
                 "
              >
                durga puja Art installations
              </p>
            </div>

            {/* card3 */}
            <div
              className=" bg-[#D9D9D9] rounded-[5px] text-black pt-[7px] px-[17px] pb-[8px]
            hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
            >
              <p className="font-helvetica font-bold  text-[20px] leading-[26px]  ">
                2 million
              </p>
              <p
                className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]
                 "
              >
                people find scope of earning livelihood in the sphere of
                tourism, transport, food and artisanry
              </p>
            </div>
            {/* card4 */}
            <div
              className=" bg-[#D9D9D9] rounded-[5px] text-black pt-[19px] px-[17px] pb-[20px]
            hover:bg-buttonCustomColor hover:text-white transition-colors duration-300 ease-in-out"
            >
              <p className="font-helvetica font-bold  text-[20px] leading-[26px]  ">
                4.6%
              </p>
              <p
                className="font-helvetica text-[8px] font-normal leading-[12px] pt-[2px]
                 "
              >
                turnover amount shares in bengal gdp
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPartener;
