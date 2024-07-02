import Image from "next/image";

const SocialContributor = () => {
  return (
    <div
      className="xl:mt-[150px] lg:mt-[150px] md:mt-[150px] sm:mt-[150px] xs:mt-[150px]
    xl:mb-[150px] lg:mb-[150px] md:mb-[150px] sm:mb-[150px] xs:mb-[150px]"
    >
      <div
        className="grid grid-cols-3 xl:mx-[62px] xl:gap-x-[59px] lg:mx-[50px]  lg:gap-x-[50px] 
      sm:mx-[30px]  sm:gap-x-[35px]  xs:mx-[25px]  xs:gap-x-[25px] "
      >
        <div>
         <Image
          className="xl:h-[98px] lg:h-[98px] md:h-[98px] sm:h-[98px] xs:h-[98px]  xl:w-full md:w-full sm:w-full xs:w-full"
          src="/images/BritishCouncil_Logo_Indigo_RGB 2 (1).png"
          alt="logo"
           width={100}
           height={100}
        />
        </div>
       

      <div className="w-100 h-50 flex items-center justify-center">
        <Image
                className="xl:w-full md:w-full sm:w-full xs:w-full  bg-[#EFEDED]"
                src="/images/pngwing.com (1) 1.png"
                alt="logo"
                width={100}
                height={100}
              />
      </div>
      

        <div>
            <Image
                  className="xl:h-[98px] lg:h-[98px] md:h-[98px] sm:h-[98px] xs:h-[98px] xl:w-full md:w-full sm:w-full xs:w-full "
                  src="/images/India UK Season of Culture - Third Party Badge_RGB 1.png"
                  alt="logo"
                  width={100}
                  height={100}
                />
        </div>
      
      </div>
      <hr className="xl:my-[39px] bg-black" />
      <div className="grid grid-cols-3  xl:mx-[62px] xl:gap-x-[59px]">
        <Image
          className="xl:h-[98px] lg:h-[98px] md:h-[98px] sm:h-[98px] xs:h-[98px] xl:w-full md:w-full sm:w-full xs:w-full "
          src="/images/BritishCouncil_Logo_Indigo_RGB 2 (1).png"
          alt="logo"
           width={100}
           height={100}
        />
        <Image
          className="xl:h-[98px] lg:h-[98px] md:h-[98px] sm:h-[98px] xs:h-[98px] w-full bg-[#EFEDED]"
          src="/images/pngwing.com (1) 1.png"
          alt="logo"
           width={100}
           height={100}
        />
        <Image
          className="xl:h-[98px] lg:h-[98px] md:h-[98px] sm:h-[98px] xs:h-[98px] w-full "
          src="/images/India UK Season of Culture - Third Party Badge_RGB 1.png"
          alt="logo"
           width={100}
           height={100}
        />
      </div>
    </div>
  );
};

export default SocialContributor;
