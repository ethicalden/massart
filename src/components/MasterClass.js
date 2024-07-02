"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "/public/styles/MasterClass.css";

const events = [
  {
    date: "20",
    month: "Jan",
    image: "https://i.ibb.co/F8mcvH3/Card-1.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "https://i.ibb.co/2MbcNMV/Card-2.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "https://i.ibb.co/cJsW2dY/Card-3.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "https://i.ibb.co/F8mcvH3/Card-1.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
  {
    date: "20",
    month: "Jan",
    image: "https://i.ibb.co/2MbcNMV/Card-2.png",
    title: "Brush & Palette Masterclass",
    location: "Grand City Convention Center",
    author: "Brandon Levin",
  },
];

const MasterClass = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="custom-widhth-silck sm:mt-[11px] xl:mt-[43px] lg:mt-[30px] 
     md:mt-[25px] xs:pt-[11px] md:mb-[150px] lg:mb-[100px] sm:mb-[70px] xs:mb-[50px]
     xs:mx-[30px] sm:mx-[30px] md:mx-[60px] lg:mx-[100px] xl:mx-[120px]"
    >
      <Slider {...settings} className="">
        {events.map((event, index) => (
          <div key={index} className="p-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden relative">
              <img
                src={event.image}
                alt={event.title}
                className="xl:w-full md:w-full lg:w-full sm:w-full xs:w-full lg:h-[300px] 
                  xl:h-[300px] md:h-[300px] sm:h-[300px] xs:h-[300px] object-cover"
              />
              <div
                className="absolute top-0 left-2 bg-buttonCustomColor
                 text-white xl:ml-[20px] xl:mr-[290px] lg:ml-[15px] md:ml-[12px] 
                 sm:ml-[10px] xs:ml-[8px] rounded"
              >
                <h1
                  className="xl:text-[32px] font-inter font-semibold xl:px-[8px] xl:pt-[10px]
                  lg:px-[8px] lg:pt-[10px] md:px-[8px] md:pt-[10px] sm:px-[8px] sm:pt-[10px]
                  xs:px-[8px] xs:pt-[10px]"
                >
                  {event.date}
                </h1>
                <p
                  className="xl:text-[24px] font-inter font-semibold xl:px-[7px] xl:pb-[10px]
                  md:px-[7px] md:pb-[10px] lg:px-[7px] lg:pb-[10px] sm:px-[7px] sm:pb-[10px]
                  xs:px-[7px] xs:pb-[10px]"
                >
                  {event.month}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-75 text-white june">
                <h3 className="font-bold xs:text-[6px] lg:text-[18px] md:text-[18px] sm:text-[12px]">
                  {event.title}
                </h3>
                <p className="xs:text-[6px] lg:text-[18px] md:text-[18px] sm:text-[12px] font-normal font-inter">
                  {event.author}
                </p>
                <p className="flex lg:text-[18px] md:text-[18px] sm:text-[12px] font-normal font-inter">
                  <svg
                    className="h-4 w-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9c-.78.78-2.047.78-2.828 0l-4.243-4.243a2 2 0 010-2.828l4.243-4.243m1.414-1.414L16.95 7.05a2 2 0 012.828 0l4.243 4.243a2 2 0 010 2.828l-4.243 4.243M7.05 16.95a2 2 0 000-2.828L2.808 11.879a2 2 0 000-2.828L7.05 4.808m5.657-1.414L8.464 2.464A2 2 0 016.343 2H3.464a2 2 0 00-2 2v2.879c0 .53.21 1.04.586 1.414l4.243 4.243"
                    ></path>
                  </svg>
                  {event.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MasterClass;
