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
    <div className="bg-white sm:pt-[11px] lg:pt-[43px] md:pt-[21px] md:pb-[150px] sm:pl-[30px] sm:pr-[30px] md:pl-[60px] md:pr-[60px] lg:pl-[120px] lg:pr-[120px]">
      <Slider {...settings}>
        {events.map((event, index) => (
          <div key={index} className="p-2">
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-[300px] object-cover"
                />
                <div
                  className="absolute top-0 left-2 bg-buttonCustomColor
                 text-white 
                 xl:ml-[20px] xl:mr-[290px]
                 lg:ml-[15px] md:ml-[12px] 
                 sm:ml-[10px] xs:ml-[8px]  rounded "
                >
                  <h1 className="xl:text-[32px] font-inter font-semibold xl:px-[8px] xl:pt-[10px]">
                    {event.date}
                  </h1>
                  <p className="xl:text-[24px] font-inter font-semibold  xl:px-[7px] xl:pb-[10px]">
                    {event.month}
                  </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-white xs:text-[6px] lg:text-[18px] md:text-[18px] sm:text-[12px]">
                  {event.title}
                </h3>
                <p className="text-white xs:text-[6px] lg:text-[18px] md:text-[18px] sm:text-[12px] font-normal font-inter">
                  {event.author}
                </p>
                <p className="flex text-white lg:text-[18px] md:text-[18px] sm:text-[12px] font-normal font-inter">
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
