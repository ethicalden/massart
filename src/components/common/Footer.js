/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable prettier/prettier */

import Image from "next/image"

import SocialContributor from "../SocialContributor/SocialContributer"

const Footer = () => {
  return (
    <>
       <SocialContributor />
      <div className="bg-[#000000] relative overflow-hidden font-helvetica">
        {/*        <div className="absolute top-0 left-1/2 transform translate-x--1/2 translate-y--1/2">
          <div className="relative">
            <Image src="/photos/phone screen/logo/logo 01.png" width={128} height={103} alt="logo" />
            <svg className="absolute right" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="25" transform="rotate(180 25 25)" fill="white"></circle><path d="M35 26C35.5523 26 36 25.5523 36 25C36 24.4477 35.5523 24 35 24L35 26ZM14.2929 24.2929C13.9024 24.6834 13.9024 25.3166 14.2929 25.7071L20.6569 32.0711C21.0474 32.4616 21.6805 32.4616 22.0711 32.0711C22.4616 31.6805 22.4616 31.0474 22.0711 30.6569L16.4142 25L22.0711 19.3431C22.4616 18.9526 22.4616 18.3195 22.0711 17.9289C21.6805 17.5384 21.0474 17.5384 20.6569 17.9289L14.2929 24.2929ZM35 24L15 24L15 26L35 26L35 24Z" fill="#A3A3A3"></path></svg>
            <svg className="absolute" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><circle cx="25" cy="25" r="24.5" fill="#ED2127" stroke="#EE5A34"></circle><path d="M15 24C14.4477 24 14 24.4477 14 25C14 25.5523 14.4477 26 15 26V24ZM35.7071 25.7071C36.0976 25.3166 36.0976 24.6834 35.7071 24.2929L29.3431 17.9289C28.9526 17.5384 28.3195 17.5384 27.9289 17.9289C27.5384 18.3195 27.5384 18.9526 27.9289 19.3431L33.5858 25L27.9289 30.6569C27.5384 31.0474 27.5384 31.6805 27.9289 32.0711C28.3195 32.4616 28.9526 32.4616 29.3431 32.0711L35.7071 25.7071ZM15 26H35V24H15V26Z" fill="white"></path></svg>
          </div>
        </div>
        <div>
        </div> */}
        <div className="h-[0.5px] w-full bg-[#FFFFFF] mt-[190px] hidden md:block"></div>
        <div className=" text-[rgb(255,255,255)] text-xs flex flex-wrap justify-between md:justify-between md:ml-[120px] md:mr-[120px] pb-6 ml-8 mt-[35px] md:mt-[50px]">
          <div className="flex flex-col md:contents gap-6 basis-1/2">
            <div className="flex flex-col md:gap-[15px] gap-[25px]">
              <Image src="/photos/message.png" alt="logo" width={48} height={57} />
              <p className="max-w-[170px] md:hidden">a non-profit organization conceived in june 2022 with the objective of  promoting Art and culture of bengal.</p>
              <p className="max-w-[277px] text-base hidden md:block text-[#9FA9BC] text-[17px]">Lepeakers is a company in the field of technology, we were founded in 1998</p>
            </div>
            <div >
              <ul className="text-[#FFFFFF99] md:text-base md:text-[#9FA9BC] flex flex-col gap-2">
                <li className="text-base text-[#FFFFFF] font-bold">Learn More</li>
                <li className="cursor-pointer">Terms of Use</li>
                <li className="cursor-pointer">Privacy & Policy</li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
            <p className="#FFFFFF w-[36vw] text-[8px] md:hidden">
              Copyright @{new Date().getFullYear()}massArt, Designed & Developed Ethically by
              <span><a href="https://www.ethicalden.com/" target="-blank"> Ethical Den</a></span>
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
                  {/* <input className="border-none outline-none" type="email" placeholder="Email Address out" /> */}
                  <input className="border-none outline-none bg-[transparent] md:w-[250px] md:h-[48px]" type="email" placeholder="Email Address out" />
                  {/* <input type="email" placeholder="Email Address out"  /> */}
                  <svg className="h-fit w-[30px] md:w-[48px] bg-[#EC2027] flex items-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M21.9941 2L10.9941 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.9941 2L14.9941 22L10.9941 13L1.99414 9L21.9941 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer