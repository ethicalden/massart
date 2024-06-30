
import { GiAirplaneDeparture } from "react-icons/gi";
import { FaTrainSubway } from "react-icons/fa6";
import { FaRoad } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";



const PreviewShow_one = () => {


  return (

    <div>
      <div className=" xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">

        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-7 md:mb-[157px] mb-7">
          <div>
            <img
              className="w-full h-auto rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="font-[Helvetica] md:text-[50px] text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2024</span></div>

            <div className="md:text-[18px] text-[12px]">
              <p className="md:mb-9 mb-5">
                The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
              </p>

              <p className="md:mb-9 mb-5">
                MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
              </p>

              <p className="md:mb-9 mb-5">
                Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
              </p>
            </div>
          </div>

        </div>

        <div className="font-[Helvetica] md:text-[50px] w-full text-center text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2024</span></div>

        <div class="flex lg:space-x-9 space-x-0 lg:space-y-0 space-y-4 lg:flex-row flex-col items-center justify-center mb-12">
          <button class="w-[173px] h-[48px] font-bold text-[18px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">Plan your visit</button>

          <button class="w-[173px] h-[48px] font-bold text-[18px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">programme</button>

          <button class="w-[173px] h-[48px] font-bold text-[18px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">events</button>

          <button class="w-[173px] h-[48px] font-bold text-[18px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">beyond Art</button>
        </div>
      </div>

      <div
        className="w-full h-full relative rounded-lg bg-cover mb-[150px]"
        style={{
          backgroundImage: 'url("https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg")'
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 rounded-lg"></div>

        <div className="relative grid md:grid-cols-3 grid-cols-1 p-10 py-16 items-center">
          <div className="col-span-2 xl:mx-[200px] lg:mx-[150px] text-white">
            <span className="text-buttonCustomColor text-[50px] font-bold">Lorem Ipsum</span> is simply
            <div className="text-[18px] text-white">
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </div>
          </div>

          <div className="col-span-1 text-center">
            <button className="w-[173px] h-[48px] font-bold text-[18px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">Get Ticket</button>
          </div>
        </div>
      </div>

      {/* how to reach kolkata section */}

      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold mb-[40px]">
        How to reach <br></br> <span className="text-buttonCustomColor">Kolkata?</span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white transition duration-300">
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
            <p className="text-black text-base group-hover:text-white transition duration-300">
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
            <p className="text-black text-base group-hover:text-white transition duration-300">
              Kolkata is directly connected by national and state highways.
            </p>
          </div>
        </div>

      </div>

      {/* getting arround kolkata section */}

      <div className="bg-[#EFEDED] py-20 mb-[160px]">
        <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px]  font-bold mb-[20px]">
          Getting arround<br></br> <span className="text-buttonCustomColor">Kolkata</span>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px]">
          <div className="flex justify-center items-center">
            <div style={{
              boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
            }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                  <FaPeopleGroup className="group-hover:text-red-500 text-white" />
                </div>
              </div>
              <p className="text-black text-base group-hover:text-white transition duration-300">
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
              <p className="text-black text-base group-hover:text-white transition duration-300">
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
              <p className="text-black text-base group-hover:text-white transition duration-300">
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
              <p className="text-black text-base group-hover:text-white transition duration-300">
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
              <p className="text-black text-base group-hover:text-white transition duration-300">
                Netaji Subhas Chandra Bose International Airport, Kolkata, and its neighboring district airport, Kazi Nazrul Islam Airport in Andal, Burdwan, have airways access to almost all major cities of India and abroad.
              </p>
            </div>
          </div>

        </div>

      </div>
      {/* where to stay section */}

      <div className="text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold mb-[40px]">
        where to <span className="text-buttonCustomColor">stay?</span>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] mb-[150px]">
        <div className="flex justify-center items-center">
          <div style={{
            boxShadow: '3px 4px 8.2px 4px rgba(0, 0, 0, 0.25)',
          }} className="group bg-red-50 p-10 h-full rounded-lg text-center hover:bg-red-500 transition duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-red-500 p-4 rounded-full group-hover:bg-white transition duration-300">
                <GiAirplaneDeparture className="group-hover:text-red-500 text-white" />
              </div>
            </div>
            <p className="text-black text-base group-hover:text-white transition duration-300">
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
            <p className="text-black text-base group-hover:text-white transition duration-300">
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
            <p className="text-black text-base group-hover:text-white transition duration-300">
              Kolkata is directly connected by national and state highways.
            </p>
          </div>
        </div>

      </div>



    </div>
  );
};

export default PreviewShow_one;
