import Image from "next/image";

const SocialContributor = () => {
  return (
    <div
      className=" xs:px-[32px] xs:pt-[72px] xs:pb-[72px]
   "
    >
      <div
        className="grid grid-cols-3 xs:gap-x-[25px] justify-between items-center
         "
      >
        <div className=" h-[25px]  ">
          <Image
            className=" w-full h-full object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[61px] bg-EventPartner px-[23px] py-[12px]">
          <Image
            className="w-full h-full  object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[40px] ">
          <Image
            className="w-full h-full object-cover"
            src="/images/india.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>

      <hr className="xs:my-[10px] bg-black" />

      <div
        className="grid grid-cols-3 xs:gap-x-[25px] justify-between items-center
         "
      >
        <div className=" h-[25px]">
          <Image
            className=" w-full h-full object-cover"
            src="/images/BritishCouncil_Logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[61px] bg-EventPartner px-[23px] py-[12px]">
          <Image
            className="w-full h-full  object-cover"
            src="/images/unesco.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="h-[40px] ">
          <Image
            className="w-full h-full object-cover"
            src="/images/india.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
};

export default SocialContributor;
