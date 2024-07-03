import React from "react";

const GuidanceHeading = () => {
  return (
    <div className="lg:px-[120px] xl:px-[120px] md:px-[120px]  sm:px-[60px]  text-center bg-white lg:pt-[151px] md:pt-[151px] sm:pt-[51px]">
      <h1 className="lg:text-[50px] md:text-[50px] sm:text-[24px] xs:text-[24px] font-bold font-helvetica">
        Your Guide to <br />
        Hassle-Free{" "}
        <span className="text-buttonCustomColor">Event Registration</span>
      </h1>
      <p
        className="lg:text-[16px] lg:pt-[9px] md:pt-[9px] sm:py-[15px] xs:py-[15px] md:text-[16px] sm:text-[12px] 
       xs:text-[12px] Plus Jakarta Sans font-normal "
      >
        Provide step-by-step guidance on how to register and get tickets for
        events. Ensure <br />
        visitors understand the registration process easily
      </p>
      <p></p>
    </div>
  );
};

export default GuidanceHeading;
