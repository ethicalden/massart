

import Image from "next/image";

import SocialContributor from "../SocialContributor/SocialContributer";

const Footer = () => {
  return (
    <>
      <SocialContributor />
      <div className="bg-[#000000] relative overflow-hidden font-helvetica">
        <div className="h-[0.5px] w-full bg-[#FFFFFF] mt-[190px] hidden md:block"></div>
        <div className=" text-[rgb(255,255,255)] text-xs flex flex-wrap justify-between md:justify-between md:ml-[120px] md:mr-[120px] pb-6 ml-8 mt-[35px] md:mt-[50px]">
          <div className="flex flex-col md:contents gap-6 basis-1/2">
            <div className="flex flex-col md:gap-[15px] gap-[25px]">
              <Image
                src="/photos/message.png"
                alt="logo"
                width={48}
                height={57}
              />
              <p className="max-w-[170px] md:hidden">
                a non-profit organization conceived in june 2022 with the
                objective of promoting Art and culture of bengal.
              </p>
              <p className="max-w-[277px] text-base hidden md:block text-[#9FA9BC] text-[17px]">
                Lepeakers is a company in the field of technology, we were
                founded in 1998
              </p>
            </div>
            <div>
              <ul className="text-[#FFFFFF99] md:text-base md:text-[#9FA9BC] flex flex-col gap-2">
                <li className="text-base text-[#FFFFFF] font-bold">
                  Learn More
                </li>
                <li className="cursor-pointer">Terms of Use</li>
                <li className="cursor-pointer">Privacy & Policy</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
            <p className="#FFFFFF w-[36vw] text-[8px] md:hidden">
              Copyright @{new Date().getFullYear()}massArt, Designed & Developed
              Ethically by
              <span>
                <a href="https://www.ethicalden.com/" target="-blank">
                  {" "}
                  Ethical Den
                </a>
              </span>
            </p>
          </div>
          <div className="flex flex-col gap-6 mt-20 basis-1/2 md:md:contents">
            <ul className="text-[#FFFFFF99] md:text-base flex flex-col gap-2 md:text-[#9FA9BC]">
              <li className="text-base text-[#FFFFFF] font-bold">Navigation</li>
              <li className="cursor-pointer">Get Ticket</li>
              <li className="cursor-pointer">Schedule</li>
              <li className="cursor-pointer">Speakers</li>
            </ul>
            <ul className="text-[#FFFFFF99] md:text-base flex flex-col gap-2 md:text-[#9FA9BC]">
              <li className="text-base text-[#FFFFFF] font-bold">Newsletter</li>
              <li className="w-[150px] md md:min-w-fit">
                <p className="md:text-base">
                  Don&apos;t miss the latest information on this platform
                </p>
              </li>
              <li className="mt-1 md:text-base">
                <div className="inline-flex items-center p pl-2 bg-[#434343] min-h-[30px] min-w-[147px] md:max-w-278px">
                  <input
                    className="border-none outline-none bg-[transparent] md:w-[250px] md:h-[48px]"
                    type="email"
                    placeholder="Email Address out"
                  />
                  {/* <input type="email" placeholder="Email Address out"  /> */}
                  <svg
                    className="h-fit w-[30px] md:w-[48px] bg-[#EC2027] flex items-center"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21.9941 2L10.9941 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21.9941 2L14.9941 22L10.9941 13L1.99414 9L21.9941 2Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
