const HomeAboutUs = () => {
  return (
    <div
      className="  pt-[60px] bg-white font-helvetica grid xl:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 
      xl:gap-[106px]
     
      xl:mx-[120px] 
      lg:mx-[100px]
        md:mx-[60px] 
        sm:mx-[45px]
        xs:mx-[30px]
    
    "
    >
      <div className="">
        <h1 className="">
          <span className="text-buttonCustomColor text-[50px]">About</span> us
        </h1>
        <p
          className="text-[18px] font-normal font-helvetica xl:pt-[25px] lg:pt-[25px] md:pt-[20px] 
        sm:pt-[15px] xs:pt-[15px] xl:pb-[35px] lg:pb-[25px] md:pb-[20px] 
        sm:pb-[15px] xs:pb-[15px]
        "
        >
          Durga puja is Bengal’s biggest festival that takes place over a week
          or so in September-October, on dates varying every year but announced
          well in advance. At the centre of the celebration is the figure of
          goddess Durga, crafted traditionally in clay, who is worshipped in the
          act of vanquishing the demon Mahishasura.
        </p>

        <button
          className="md:mb-[35px] 
            bg-buttonCustomColor text-white  
          xs:px-[36px] xs:py-[12px] 
        lg:px-[36px] lg:py-[12px] 
        xl:text-[18px]
        lg:text-[16px]
        md:text-[14px]
        sm:text-[12px] 
        xs:text-[12px] 
        rounded-[100px]"
        >
          Know more
        </button>
      </div>

      <img
        src="/images/picture (16).png"
        alt="Durga Puja"
        className="w-full h-[358px] object-cover rounded-[20px]
             "
      />
    </div>
  );
};

export default HomeAboutUs;
