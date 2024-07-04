import Image from "next/image";

const SocialContributor = () => {
  return (
    <div
      className="xl:mt-[150px] lg:mt-[150px] md:mt-[150px] sm:mt-[150px] xs:mt-[150px]
      xl:mx-[120px] lg:mx-[120px] md:mx-[120px] sm:mx-[120px] xs:mx-[120px]
   "
    >
      <div
        className="grid grid-cols-3 
         "
      >
        <div>
          <Image
            className=" h-[98px] object-cover"
            src="/images/logo 01.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div className="">
          <Image
            className=" h-[98px] object-cover"
            src="/images/logo 02.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div>
          <Image
            className=" h-[98px] object-cover"
            src="/images/logo 03.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
      </div>
      <hr className="xl:my-[39px] bg-black" />
      <div className="grid grid-cols-3">
        <Image
          className="  h-[98px] object-cover"
          src="/images/logo 01.png"
          alt="logo"
          width={100}
          height={100}
        />
        <Image
          className=" h-[98px] object-cover"
          src="/images/logo 02.png"
          alt="logo"
          width={100}
          height={100}
        />
        <Image
          className=" h-[98px] object-cover"
          src="/images/logo 03.png"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default SocialContributor;
