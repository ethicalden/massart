import Image from "next/image";

const HomeAboutUs = () => {
  return (
    <div
      className=" bg-white font-helvetica
      pt-[60px]
      xs:pl-[120px] 
      
       md:pl-[120px] md:pr-[120px] 
    
     lg:pl-[90px] lg:pr-[90px]"
    >
      <div
        className="grid md:grid-cols-2 lg:grid-cols-2 lg:items-center md:items-center
         md:gap-[106px]
         xl:gap-[106px]
      lg:gap-[106px] "
      >
        <div className="sm:pl-[32px] sm:pr-[32px">
          <h1
            className="xs:text-[24px] sm:text-[24px] md:text-[32px]  
           lg:text-[50px] font-bold xs:pb-[20px]"
          >
            <span className="text-buttonCustomColor">About</span> us
          </h1>
          <p className="xs:pb-[5px] lg:text-[18px] lg:w-[467px] xs:text-[12px] md:text-[12px] sm:text-[12px] sm:w-[342px] lg:font-normal font-helvetica">
            Durga puja is Bengal’s biggest festival that takes place over a week
            or so in September-October, on dates varying every year but
            announced well in advance. At the centre of the celebration is the
            figure of goddess Durga, crafted traditionally in clay, who is
            worshipped in the act of vanquishing the demon Mahishasura.
          </p>

          <button
            className="md:mb-[35px] 
            bg-buttonCustomColor text-white  
            md:h-[48px]
            md:w-[170px]
            lg:h-[48px]
          lg:w-[170px]
          xl:w-[170px] xl:h-[48px]
          2xl:w-[170px] 2xl:h-[48px]
          xs:px-[36px] xs:py-[12px] xs:text-[12px]
        lg:px-[36px] lg:py-[12px] lg:text-[18px]
        md:text-[12px] rounded-[100px]"
          >
            Know more
          </button>
        </div>
        <div
          className="sm:pl-[32px] sm:pr-[32px] lg:w-[447px] lg:h-[358px] 
        
        xl:w-[447px] xl:h-[358px]
        pt-[25px] md:pt-[0] "
        >
          <Image
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt="Durga Puja"
            className="sm:w-[366px] sm:h-[347px] xs:h-[167px] md:h-[190px] 
             
            lg:w-full lg:h-full  xl:w-full xl:h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
