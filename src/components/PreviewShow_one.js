
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoMdBus } from 'react-icons/io';




const PreviewShow_one = () => {



  return (

    <div>
      <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5">
          <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
            Preview Show <span className="text-red-600">2024</span>
          </div>
          <div>
            <img
              className="w-full h-auto rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="md:block hidden font-[Helvetica] md:text-[50px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
              Preview Show <span className="text-red-600">2024</span>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block hidden">
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
              </p>
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
              </p>
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
              </p>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] leading-[18px] md:hidden block -mt-3">
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                Durga puja is bengal's biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura.
              </p>
            </div>
          </div>
        </div>
        <div className="font-[Helvetica] md:text-[50px] md:leading-[56px] w-full md:text-center text-left text-[24px] font-bold md:mb-[50px] mb-[28px]">
          Preview Show <span className="text-red-600">2024</span>
        </div>
      </div>

      <div className="scroll-container">
        <div className="w-full overflow-x-auto">
          <div className="grid grid-flow-col md:gap-5 gap-3 md:mb-[50px] mb-[30px] xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[0]">
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Plan your visit
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">
              Programme
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">
              Events
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">
              Beyond Art
            </button>
          </div>
        </div>
        <div className="md:hidden block blur-effect"></div>
      </div>


      <div
        className="w-full h-full relative rounded-lg bg-cover md:mb-[150px] mb-[60px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>
        <div className="relative grid md:grid-cols-3 grid-cols-1 p-10 md:py-[75px] py-[40px] items-center">
          <div className="col-span-2 lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor md:text-[50px] md:leading-[56px] text-[24px] leading-[36px] font-bold">Lorem Ipsum <span className="text-white">is simply</span></span>
            <div className="md:mt-[15px] mt-[5px] md:text-[18px] md:leading-[30px] text-[13px] leading-[22px] text-white" style={{ fontFamily: 'sans-serif' }}>
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>
          <div className="col-span-1 md:text-center text-left">
            <button className="md:w-[173px] md:h-[48px] w-[92px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Get Ticket
            </button>
            
          </div>
        </div>
      </div>

      {/* how to reach kolkata section */}
      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold md:mb-[50px] mb-[30px]">
        How to reach <br /> <span className="text-buttonCustomColor">Kolkata?</span>
      </div>
      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-[18px] leading-[30px] text-base group-hover:text-white transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <FaTrainSubway className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              Kolkata is directly connected for railways also in terms of Indian major cities. There are two main railway stations for the city - Sealdah and Howrah.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }}
            className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <IoMdBus className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              The city is well-connected by the road network to the rest of the country. NH 2 connects Delhi with Kolkata. Other important national highways are NH 6 (Mumbai), NH 34 (Siliguri), and NH 41 (Haldia).
            </p>
          </div>
        </div>
      </div>

   

      {/* getting arround kolkata section */}

      <div className="bg-[#EFEDED] py-20 md:mb-[160px] mb-[60px]">
        <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px]  font-bold mb-[20px]">
          Getting arround<br></br> <span className="text-buttonCustomColor">Kolkata</span>
        </div>

        <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px]">
          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <FaPeopleGroup className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
                We offer group coaches in which you can travel in comfort from one location to another, in the company of friends and fellow visitors. Do let us know in advance should you wish to make reservations.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* where to stay section */}

      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold md:mb-[50px] mb-[30px]">
        where to <span className="text-buttonCustomColor">stay?</span>
      </div>

      <div className="md:grid hidden lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <FaTrainSubway className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              Kolkata is directly connected for railways also in terms of Indian major cities. There are two main railway stations for the city - Sealdah and Howrah.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <FaRoad className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white text-[18px] leading-[30px] transition duration-300" style={{ fontFamily: 'sans-serif' }}>
              Kolkata is directly connected by national and state highways.
            </p>
          </div>
        </div>

      </div>

     
    </div>

  );
};

export default PreviewShow_one;
