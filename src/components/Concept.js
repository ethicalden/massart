import Image from "next/image";

const Concept = () => {

  return (
    <div>

      <div className="xl:ms-[125px] ms-[33px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[33px] md:mt-[150px] mt-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[106px] gap-[17px] md:mb-[61px] mb-7">
          <div>
            <Image
              src="/photos/big screen/concept/picture 01.png"
              className="md:block hidden"
              alt="img"
              width={527}
              height={777}
            />
            <Image
              src="/photos/phone screen/concept/picture 1.png"
              className="md:hidden block"
              alt="img"
              width={366}
              height={347}
            />
          </div>
          <div>
            <div className="font-[Helvetica] md:text-[49px] leading-[56px] text-[24px] font-bold mb-[5px]">
              <span className="text-red-600">What</span> is durga puja Art
            </div>

            <div className="md:text-[15px] leading-[24px] text-[12px]">
              <p className="md:mb-6 mb-5" style={{ fontFamily: 'sans-serif' }}>
                durga puja is bengal’s biggest festival that takes place over a week  or so in september-october, on dates varying every year but announced  well in advance. at the centre of the celebration is the figure of  goddess durga, crafted traditionally in clay, who is worshipped in the  act of vanquishing the demon mahishasura. it is particularly in the  streets of kolkata (calcutta), the capital of the state, that durga puja  transcends religious bounds and serves as the cradle for the world’s  largest publicly funded Art show. while the worship of durga and her  four divine children remains the ritualistic core, the temporary  shelters of the idols – structures created from months in advance in  street corners – become exquisite works of artistic expression, unique  to each locality every year. thus there is a different artistic  interpretation offered in every locality through the choice of a  different theme to which the entire structure conforms.


              </p>

              <p className="md:mb-6 mb-5" style={{ fontFamily: 'sans-serif' }}>
                every autumn, the entire city wakes up to an explosion of creativity,  with every neighbourhood decked up in unique templates that are a  mélange of traditional Art and contemporary concepts, that are diverse  and creative enough to rival any international art biennale. commercial  promotion and sponsorship have kept pace with the explosion of Art,  providing an eco-system of community support.
              </p>

              <p className="md:mb-6 mb-5" style={{ fontFamily: 'sans-serif' }}>
                as a result, every year, the durga puja experience is different and  diverse. the evolution of durga puja of kolkata into an inclusive,  community-driven celebration of Art has been hailed by unesco, which  describes it as "the best instance of the public performance of religion  and Art, and as thriving ground for collaborative artists and  designers...”. durga puja has been inscribed on its list of intangible  cultural heritage of humanity in 2021.
              </p>
            </div>
          </div>
        </div>



        <div className="md:grid md:grid-cols-3 grid-cols-2 gap-5 mb-[157px] hidden">
          <div className="relative group rounded-lg overflow-hidden justify-center flex">
            <Image
              className="lg:w-[387px] lg:h-[491px] float-left"
              width={387}
              height={491}
              src="/photos/big screen/concept/picture 02.png"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
              }}
            >
              <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                contemporary durga puja Art
              </p>
              <div>
                <a
                  className="text-[18px] text-white text-opacity-50 w-auto"

                >
                  Brandon Levin
                </a>
              </div>
            </div>
          </div>

          <div className="relative group rounded-lg overflow-hidden justify-center flex">
            <Image
              className="w-[387px] h-[491px] float-left"
              width={387}
              height={491}
              src="/photos/big screen/concept/picture 03.png"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
              }}
            >
              <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                contemporary durga puja Art
              </p>
              <div>
                <a
                  className="text-[18px] text-white text-opacity-50 w-auto"

                >
                  Brandon Levin
                </a>
              </div>
            </div>
          </div>

          <div className="relative group rounded-lg overflow-hidden justify-center flex">
            <Image
              className="w-[387px] h-[491px] float-left"
              width={387}
              height={491}
              src="/photos/big screen/concept/picture 04.png"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
              }}
            >
              <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
                contemporary durga puja Art
              </p>
              <div>
                <a className="text-[18px] text-white text-opacity-50 w-auto"

                >
                  Brandon Levin
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>

      {/* Show on mobile */}
      <div className="md:hidden grid grid-flow-col auto-cols-max gap-5 mb-[17px]  px-[33px]  overflow-x-auto  no-scrollbar">
        <div className="relative group rounded-lg overflow-hidden justify-center flex duration-150">
          <Image
            className=""
            width={165}
            height={249}
            src="/photos/phone screen/concept/picture 2.png"
            alt=""
          />
          <div
            className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white"           
          >
            <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
              contemporary durga puja Art
            </p>

          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden justify-center flex">
          <Image
            className=""
            width={165}
            height={249}
            src="/photos/phone screen/concept/picture 3.png"
            alt=""
          />
          <div
            className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white"
          
          >
            <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
            Multi Genre Music Festival 2024
            </p>
        
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden justify-center flex">
          <Image
            className=""
            width={165}
            height={249}
            src="/photos/phone screen/concept/picture 2.png"
            alt=""
          />
          <div
            className="hidden absolute text-[12px] top-0 bottom-0 left-0 right-0 group-hover:flex flex-col justify-end p-2 text-white"
            style={{
              background:
                "linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))",
            }}
          >
           <p className="text-[12px] leading-[15px] font-[Helvetica] mb-[10px]">
            Multi Genre Music Festival 2024
            </p>
          
          </div>
        </div>
      </div>


    </div>
  );
};

export default Concept;
