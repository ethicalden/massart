import Image from "next/image";

const Concept = () => {
  return (
    <div className="pt-[60px] px-[32px] ">
      <div className="relative group mb-[15px]">
        <div className="h-[285px] w-full ">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/conceptOfDurgaPuja.jpg"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="">
          <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            concept of durga puja Art
          </p>
        </div>
      </div>
      <div className="relative group mb-[15px]">
        <div className="h-[285px] w-full ">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/preview show-min.jpg"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="">
          <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            preview show 2024.... View More
          </p>
        </div>
      </div>
      <div className="relative group xs:mb-[15px]">
        <div className="h-[285px] w-full ">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/Previewpass-234-min.jpg"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="">
          <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            preview pass.... View More
          </p>
        </div>
      </div>
      <div className="relative group">
        <div className="h-[285px] w-full ">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/nominationProcess.jpg"
            height={100}
            width={100}
            alt=""
          />
        </div>
        <div className="">
          <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold absolute left-[10px] text-white bottom-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            nomination process....<span className="underline">View More</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Concept;
