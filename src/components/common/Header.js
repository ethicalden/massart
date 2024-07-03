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
    <div className="relative xl:h-[778px] lg:h-[778px] md:h-[778px] sm:h-[778px] xs:h-[778px]">
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
        
        absolute bottom-0 left-0 grid grid-cols-2 
    md:mt-[430px] lg:mt-[430px] xl:mt-[430px] xs:mt-[430px] sm:mt-[430px]
    md:mb-[112px] lg:mb-[112px] xl:mb-[112px] xs:mb-[112px] sm:mb-[112px]
    text-black font-helvetica"
      >
        <div className="">
          <h1
            className="text-white xl:text-[80px] lg:text-[70px] md:text-[60px] sm:text-[40px] xs:text-[40px]
            
        md:ml-[120px] md:mr-[1014px]
        lg:ml-[120px] lg:mr-[1014px]
        xl:ml-[120px] xl:mr-[1014px]
        xs:ml-[120px] sm:ml-[120px]
        sm:pb-[20px] xs:pb-[20px]
        md:pb-[30px] lg:pb-[40px] xl:pb-[50px] leading-[80px] text-center 
        "
          >
            Witness <br /> Biggests
          </h1>
          <div
            className="flex items-center h-[48px] xl:space-x-[25px] lg:space-x-[20px] md:space-x-[20px] 
            sm:space-x-[15px] xs:space-x-[15px]
           xs:ml-[120px] sm:ml-[120px] md:ml-[120px] lg:ml-[120px] xl:ml-[120px] "
          >
            {buttons.map((button) => (
              <button
                key={button.id}
                className={`xl:text-[18px] lg:text-[18px] md:text-[12px] sm:text-[12px] xs:text-[12px] 
                xl:px-[36px] xl:py-[12px] 
                lg:px-[32px] lg:py-[12px]
                md:px-[15px] md:py-[10px]
                sm:px-[15px] sm:py-[10px]
                xs:px-[13px] xs:py-[10px]
                 font-bold border rounded-[100px]  text-white ${
                   activeButton === button.id
                     ? "bg-buttonCustomColor"
                     : "border border-buttonCustomColor"
                 } 
           `}
                onClick={() => setActiveButton(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <Image
          src="/images/unesco.png"
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
