import React from "react";

const Explore = () => {
  return (
    <div
      className=" xl:mt-[150px] lg:mt-[100px]  md:mt-[100px]  sm:mt-[100px]  xs:mt-[100px]
       lg:mb-[30px] xl:mb-[43px] md:mb-[25px] sm:mb-[20px] xs:mb-[20px]
      xl:mx-[120px]   
    md:mx-[70px]   
    sm:mx-[60px] 
    xs:mx-[30px]  
     lg:mx-[100px]  
     e font-helvetica "
    >
      <div
        className="  
        lg:gap-[120px]
        md:gap-[60px]
        sm:gap-[15px]


        grid sm:grid-cols-1 xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1  "
      >
        <h1
          className="  xl:text-[50px] lg:text-[40px] font-helvetica md:text-[30px]  sm:text-[24px] 
        xs:text-[18px] font-bold lg:pb-[25px] xl:pb-[25px] md:pb-[25px] sm:pb-[25px] xs:pb-[25px]"
        >
          <span className="text-buttonCustomColor">Explore</span> and Join Our{" "}
          <br />
          Exciting <span className="text-buttonCustomColor">Lineup</span>
        </h1>

        <p className="  font-normal xl:text-[18px] sm:text-[10px] xs:text-[10px]  font-helvetica  md:text-[12px] lg:text-[12px] ">
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
