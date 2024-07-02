import React from "react";

const Video = () => {
  return (
    // <div className="h-[626px] pt-[150px] bg-white">
    <div
      className="relative xl:h-[626px] lg:h-[500px] md:h-[450px] sm:h-[400px]
      xl:mt-[300px] xl:mb-[150px]  lg:mt-[100px] lg:mb-[100px] md:mt-[170px] md:mb-[70px]
      sm:mt-[60px] sm:mb-[60px]
      xs:mt-[30px] xs:mb-[30px]
     xs:h-[626px] "
    >
      <video
        autoPlay
        loop
        muted
        className="rounded-[10px]  xl:w-full lg:w-full md:w-full sm:w-full xs:w-full xl:h-full lg:h-full  md:h-full
        sm:h-full xs:h-full
       object-cover"
      >
        <source src="/videos/Header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
