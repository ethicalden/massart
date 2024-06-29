import React from "react";

const Explore = () => {
  return (
    <div
      className=" lg:pt-[60px] lg:pb-[43px]
    md:pl-[60px] md:pr-[60px] md:pt-[40px] 
    sm:pl-[30px] sm:pr-[30px] sm:pt-[20px]
    md:pb-[43px] lg:pl-[120px] lg:pr-[120px] 
     bg-white font-helvetica "
    >
      <div
        className="  
        lg:gap-[120px]
        md:gap-[60px]
        sm:gap-[15px]


        grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2   "
      >
        <h1 className="   lg:text-[50px] font-helvetica md:text-[25px]  sm:text-[24px] font-bold">
          <span className="text-buttonCustomColor">Explore</span> and Join{" "}
          <br /> Our Exciting{" "}
          <span className="text-buttonCustomColor">Lineup</span>
        </h1>

        <p className="sm-pt[15px]  font-normal sm:text-[12px]  font-helvetica  md:text-[12px] lg:text-[12px] ">
          durga puja Art is the world’s biggest public Art festival as the
          entire city turns into an public Art gallery. it is thus many times
          bigger than any other famous Art biennales in the world.every year
          durga puja is created in public space through a mass involvement
          process. and the public space is being somewhat transformed into
          different Art spaces
        </p>
      </div>
    </div>
  );
};

export default Explore;
