"use client";
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
    <div className="relative h-[430px] sm:pl-[34px] sm:pr-[36px]">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      <div className="relative navbar md:px-[120px] md:py-[30px] h-[137px]">
        <div className="navbar-start flex-row-reverse items-center justify-between w-full lg:w-auto relative">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="lg:hidden"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            {menuOpen && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-white rounded-box w-52 absolute right-0 lg:right-auto lg:left-1/2 lg:transform lg:-translate-x-1/2"
              >
                <li className="text-black font-helvetica">
                  <a>Get Ticket</a>
                </li>
                <li className="text-black font-helvetica">
                  <a>Schedule</a>
                </li>
                <li className="text-black font-helvetica">
                  <a>Speakers</a>
                </li>
                <li className="text-black font-helvetica">
                  <a>FAQ</a>
                </li>
                <li>
                  <button className="text-white bg-buttonCustomColor pt-2 pb-2 w-[80px] h-[30px] rounded-md font-helvetica">
                    Register
                  </button>
                </li>
              </ul>
            )}
          </div>
          <img
            src="https://i.ibb.co/LDFmLLK/Group-1171274734.png"
            alt="Logo"
            className=" ml-4"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-white font-helvetica">
              <a>Get Ticket</a>
            </li>
            <li className="text-white font-helvetica">
              <a>Schedule</a>
            </li>
            <li className="text-white font-helvetica">
              <a>Speakers</a>
            </li>
            <li className="text-white font-helvetica">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <button className="text-white bg-buttonCustomColor py-2 px-3 md:px-4 rounded-3xl font-helvetica text-sm md:text-base">
            Register
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 mb-[41px] text-black">
        <h1 className="sm:text-[32px] ml-[65px] mr-[65px] font-bold w-[300px] h-[41px]">
          Witness Bengal
        </h1>
        <div className="flex items-center gap-[14px] pt-[23px] ml-[115px] mr-[115px]">
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`text-[12px] border border-buttonCustomColor w-[92px] h-[32px] leading-[24px] text-white rounded-[100px] ${
                activeButton === button.id
                  ? "bg-buttonCustomColor  text-white"
                  : "border border-buttonCustomColor text-black"
              }`}
              onClick={() => setActiveButton(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
