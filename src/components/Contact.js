import { FiPhoneCall } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
const Contact = () => {
  return (
    <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] grid grid-cols xl:mt-[187px] lg:mt-[100px] mt-[50px]">
      <div className="flex flex-col bg-gray-100 p-8 rounded-[10px]">
        <div className="xl:text-[50px] text-[24px] font-bold mb-6 text-buttonCustomColor">Get in Touch</div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mb-8 mb-4 md:text-[24px] text-[12px]">
          <input type="text" placeholder="First Name" className="black-placeholder pt-0 md:pb-8 pb-4 border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0" />
          <input type="text" placeholder="Last Name" className="black-placeholder pt-0 md:pb-8 pb-4 border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0" />
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mb-8 mb-4 md:text-[24px] text-[12px]">
          <input type="tel" placeholder="Phone" className="black-placeholder pt-0 md:pb-8 pb-4 border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0" />
          <input type="email" placeholder="Email" className="black-placeholder pt-0 md:pb-8 pb-4 border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0" />
        </div>
        <input type="text" placeholder="Address" className="md:text-[24px] text-[12px] md:pb-8 pb-4 pt-0 black-placeholder border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0 md:mb-8 mb-4" />
        <input type="text" placeholder="Area Code" className="md:text-[24px] text-[12px] md:pb-8 pb-4 pt-0 black-placeholder border-b-[1px] bg-transparent outline-none border-black  p-4 ps-0 mb-4 " />
        <textarea placeholder="Message" className="md:text-[24px] text-[12px] black-placeholder md:pb-8 pb-4 h-[200px] border-[1px] bg-transparent outline-none border-black  p-4 rounded-[10px] mt-4"></textarea>
        <button className=" text-white font-bold lg:h-[48px] lg:leading-[48px] h-[32px] leading-[32px] md:text-[18px] text-[12px] bg-buttonCustomColor md:mt-[60px] mt-[30px] rounded-[50px]">Send Now</button>
      </div>


      <div className="flex justify-between items-center bg-white-100 grid md:grid-cols-3 p-4 grid-cols-1 md:my-[52px] my-[45px]">

        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px]  flex justify-center items-center text-white rounded-full">
              <FiPhoneCall className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px] mt-2">Have Queries?</p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">Chat with live assistant</p>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px] flex justify-center items-center text-white rounded-full">
              <FaLocationDot className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px]  mt-2">Locate & Visit Us</p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">+966 573 5737</p>
          </div>
        </div>

        <div className="flex items-center md:mb-0 mb-6">
          <div className="me-4">
            <div className="bg-buttonCustomColor lg:w-[81px] lg:h-[81px] w-[42px] h-[42px] flex justify-center items-center text-white rounded-full">
              <IoIosMail className="text-[20px] lg:text-[39px]" />
            </div>
          </div>

          <div>
            <p className="font-bold xl:text-[30px] lg:text-[24px] text-[18px] mt-2">Mail us Today</p>
            <p className="xl:text-[18px] lg:text-[15px] text-[12px] text-[#6E6E6E]">Seestrasse 7, Zurich, CH</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Contact;
