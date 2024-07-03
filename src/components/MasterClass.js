"use client";
import { CiLocationOn } from "react-icons/ci";
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
            <div className="bg-gray-900 rounded-lg overflow-hidden relative group">
              <img
                src={event.image}
                alt={event.title}
                className="xl:w-full md:w-full lg:w-full sm:w-full xs:w-full lg:h-[300px] 
                  xl:h-[300px] md:h-[300px] sm:h-[300px] xs:h-[300px] object-cover"
              />
              <div
                className="absolute top-0 left-2 bg-buttonCustomColor
                 text-white xl:ml-[20px] xl:mr-[290px] lg:ml-[15px] md:ml-[12px] 
                 sm:ml-[10px] xs:ml-[8px] rounded group-hover:opacity-100 opacity-0"
              >
                <p
                  className="xl:text-[32px] sm:text-[18px] xs:text-[18px] font-inter font-semibold xl:px-[17px] xl:pt-[4px]
                  lg:px-[8px] lg:pt-[10px] md:px-[8px] md:pt-[10px] sm:px-[8px] sm:pt-[10px]
                  xs:px-[8px] xs:pt-[10px]"
                >
                  {event.date}
                </p>
                <p
                  className="xl:text-[24px] sm:text-[12px] xs:text-[12px] font-inter font-semibold xl:px-[7px] xl:pb-[4px]
                  md:px-[7px] md:pb-[10px] lg:px-[7px] lg:pb-[10px] sm:px-[7px] sm:pb-[10px]
                  xs:px-[7px] xs:pb-[10px]"
                >
                  {event.month}
                </p>
              </div>
              <div className="absolute bottom-0 left-0 p-4  bg-opacity-75 text-white june group-hover:opacity-100 opacity-0">
                <p className="font-bold xl:text-[24px] sm:text-[12px] xs:text-[14px] lg:text-[18px] md:text-[18px] ">
                  {event.title}
                </p>
                <p className=" lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px]  font-normal font-inter">
                  {event.author}
                </p>
                <p className="flex items-center xl:text-[18px] lg:text-[16px] md:text-[14px] sm:text-[12px] xs:text-[12px] font-normal font-inter">
                  <CiLocationOn />
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
