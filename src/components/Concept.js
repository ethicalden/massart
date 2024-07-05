import Image from "next/image";

const Concept = () => {
  return (
    <div className="pt-[60px] px-[32px] ">
      {/* card1 */}
      <div className="relative group mb-[15px]">
        <div className="h-[285px] w-full relative">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/conceptOfDurgaPuja.jpg"
            height={100}
            width={100}
            alt=""
          />

          <div className="relative group">
            <div className="absolute inset-0 bg-black-to-t to-black from-transparent rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold text-white">
                Concept of Durga Puja Art
              </p>
              <div className="pt-[10px]">
                <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                  Durga Puja is technically West Bengal’s largest religious
                  festival, centred on the goddess Durga, destroyer of the demon
                  Mahishasura. But increasingly, Durga Puja is also the world’s
                  largest publicly funded Art show.
                </p>
                <div className="pt-[10px]">
                  <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card 2 */}
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
        <div className="relative group">
          <div className="absolute inset-0 bg-black-to-t to-black from-transparent rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold text-white">
              preview show 2024
            </p>
            <div className="pt-[10px]">
              <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                our preview show 2024 to be staged at a prominent kolkata venue
                is intended to show you how durga puja in bengal has evolved
                into a display of contemporary Art while remaining deeply rooted
                in tradition.
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className="relative group mb-[15px]">
        <div className="h-[285px] w-full ">
          <Image
            className="w-full h-full object-cover rounded-[10px]"
            src="/images/Previewpass-234-min.jpg"
            height={100}
            width={100}
            alt=""
          />
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-black-to-t to-black from-transparent rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold text-white">
              preview pass
            </p>
            <div className="pt-[10px]">
              <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                the third edition of preview show of durga puja Art 2024
                kolkata, is going to be held on 30 september to 4 october. the
                show time being 6 pm to 5 am.
              </p>
              <div className="pt-[10px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* card4 */}
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
        <div className="relative group">
          <div className="absolute inset-0 bg-black-to-t to-black from-transparent rounded-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="absolute left-[25px] bottom-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="xs:text-[20px] leading-[23px] font-helvetica font-bold text-white">
              nomination process
            </p>
            <div className="pt-[10px]">
              <p className="text-[8px] pr-[25%] leading-[14px] text-white font-normal font-helvetica">
                the durga puja committees willing to participate as the selected
                Art venue, will have to apply for registration. judging from
                their detailed and valid application and presentation complying
                requisite parameters, a jury comprising national and
                international artist members will select the 24 durga puja Art
                venues.
              </p>
              <div className="flex gap-x-[15px] pt-[25px]">
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  guideline
                </button>
                <button className="bg-buttonCustomColor text-white text-[12px] leading-[24px] font-helvetica font-bold px-[17px] py-[4px] rounded-full">
                  registration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
