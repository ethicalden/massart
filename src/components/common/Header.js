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
    <div className="relative h-[970px] ">
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
      lg:pl-[120px] lg:pr-[120px] lg:pt-[30px]
      xl:pl-[120px] xl:pr-[120px] xl:pt-[30px]
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
          src="https://i.ibb.co/LDFmLLK/Group-1171274734.png"
          alt="Logo"
          width={100}
          height={100}
          className=" md:h-[65px] -ms-32 md:w-[75px] lg:h-[65px] lg:w-[75px] xl:h-[65px] xl:w-[75px] 2xl:h-[65px] 2xl:w-[75px]"
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
    md:mt-[430px] lg:mt-[430px] xl:mt-[430px] 2xl:mt-[430px]
    md:mb-[112px] lg:mb-[112px] xl:mb-[112px] 2xl:mb-[112px]
    text-black font-helvetica"
      >
        <div className="">
          <h1
            className="text-white
            
        md:ml-[119px] md:mr-[1014px]
        lg:ml-[119px] lg:mr-[1014px]
        xl:ml-[119px] xl:mr-[1014px]
        2xl:ml-[119px] 2xl:mr-[1014px]
        // ---
        md:mb-[15px] lg:mb-[15px] xl:mb-[15px]
        2xl:mb-[15px]"
          >
            Witness Biggests
          </h1>
          <div className="flex items-center lg:space-x-[25px] md:ml-[119px] lg:ml-[119px] xl:ml-[119px] 2xl:ml-[119px]">
            {buttons.map((button) => (
              <button
                key={button.id}
                className={`text-[18px] font-bold border border-buttonCustomColor text-white rounded-[100px] ${
                  activeButton === button.id
                    ? "bg-buttonCustomColor"
                    : "border border-buttonCustomColor"
                } 
          md:w-[159px] md:h-[48px] lg:w-[159px] lg:h-[48px] xl:w-[159px] xl:h-[48px] 2xl:w-[159px] 2xl:h-[48px]`}
                onClick={() => setActiveButton(button.id)}
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
        <Image
          src="/images/logo 01.png"
          width={100}
          height={100}
          alt=""
          className="absolute bottom-0 right-0
      md:w-[167px] md:h-[130px] lg:w-[167px] lg:h-[130px] xl:w-[167px] xl:h-[130px]
      2xl:w-[167px] 2xl:h-[130px]"
        />
      </div>
    </div>
  );
};

export default Header;
