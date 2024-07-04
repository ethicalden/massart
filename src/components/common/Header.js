"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [activeButton, setActiveButton] = useState("Get ticket");

  const buttons = [
    { label: "Get ticket", id: "Get ticket" },
    { label: "View more", id: "View more" },
  ];

  return (
    <div className="relative xl:h-[778px] lg:h-[778px] md:h-[778px]  xs:h-[778px]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/Header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="navbar relative  md:pl-[120px] md:pr-[120px] md:pt-[30px] 
        xl:px-[120px] xl:pr-[120px] 
      lg:pl-[120px] lg:pr-[120px] lg:pt-[30px]
       xl:pt-[30px]
      2xl:pl-[120px] 2xl:pr-[120px] 2xl:pt-[30px] 
      "
      >
        <div className="navbar-start  grid grid-cols-2 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-1 space-x-[294px] md:space-x-[0px] lg:space-x-[0px] xl:space-x-[0px] 2xl:space-x-[0px]  ">
          <div className="dropdown ">
            <div
              tabIndex={0}
              role="button"
              className=" bg-transparent text-white h-[32px] w-[32px]  md:hidden xl:hidden 2x:hidden lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52"
            >
              <li className="text-black font-inter">
                <a>Get Ticket</a>
              </li>
              <li className="text-black font-inter">
                <a>Schedule</a>
              </li>
              <li className="text-black font-inter">
                <a>Speakers</a>
              </li>
              <li className="text-black font-inter">
                <a>FAQ</a>
              </li>
              <li className="">
                <a className=" bg-buttonCustomColor rounded-[10px]    text-white font-poppins text-[18px]">
                  Button
                </a>{" "}
              </li>
            </ul>
          </div>

          <Link href="/">
            <Image
              src="/images/Group 1171274734 (2).png"
              alt="massart-logo"
              width={100}
              height={100}
              className=" h-[76px]  object-contain"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white font-inter">
              <a>Get Ticket</a>
            </li>
            <li className="text-white font-inter">
              <a>Schedule</a>
            </li>
            <li className="text-white font-inter">
              <a>Speakers</a>
            </li>
            <li className="text-white font-inter">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden  md:flex lg:flex xl:flex 2xl:flex ">
          <a className=" bg-buttonCustomColor rounded-[1000px]  px-[36px] py-[12px] leading-[24px] text-white font-poppins text-[18px]">
            Button
          </a>
        </div>
      </div>

      <div
        className="
        
        absolute bottom-[85px] left-0 w-full grid justify-center items-center 
   
    text-black font-helvetica"
      >
        <div className="">
          <div className="">
            <h1 className="xs:text-[36px] xs:leading-[40px] text-white font-helvetica font-bold xs:pb-[27px]">
              Witness Bengal
            </h1>
            <div className="flex gap-x-[14px] justify-center ">
              <button className="text-white xs:px-[17px] xs:py-[4px] font-helvetica font-bold xs:text-[12px] xs:leading-[24px] bg-buttonCustomColor xs:rounded-full hover:bg-transparent transition-colors duration-300 ease-in-out border-transparent border hover:border-buttonCustomColor">
                Get Ticket
              </button>
              <button className="text-white xs:px-[17px] xs:py-[4px] font-helvetica font-bold xs:text-[12px] xs:leading-[24px] border border-buttonCustomColor xs:rounded-full hover:bg-buttonCustomColor hover:border-transparent transition-colors duration-300 ease-in-out">
                View More
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/public/images/unescoHeader.png"
          width={100}
          height={100}
          alt=""
          className="absolute bottom-0 right-0 hidden block-md
       md:h-[130px]  lg:h-[130px]  xl:h-[130px] object-cover
       mr-[87px]"
        />
      </div>
    </div>
  );
};

export default Header;
