"use client";

import React from "react";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "https://via.placeholder.com/150",
  },
];

const Review = () => {
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
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">
          What our <span className="text-red-500">popular</span> customers are
          saying
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Find out more about our team, vision, and dedication to creating
          extraordinary experiences. In this section, we share our story and our
          commitment to the success of each event.
        </p>
      </div>
      <div className="mt-10 lg:px-[120px] md:px-[120px] sm:px-[120px]">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-72 bg-white rounded-lg shadow-lg p-6"
            >
              <div
                className="flex items-center lg:h-[14px] lg:w-[90px] md:h-[14px] md:w-[90px]
                sm:h-[7px] sm:w-[45px]"
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
              <p className="mt-4 lg:text-[18px] font-helvetica md:text-[18px] sm:text-[10px] font-normal text-gray-600">
                {testimonial.text}
              </p>
              <div className="flex items-center mt-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-900 font-helvetica lg:text-[18px] md:text-[18px] sm:text-[10px] font-bold">
                    {testimonial.name}
                  </p>
                  <p className="font-helvetica text-gray-500 lg:text-[12px] md:text-[12px] sm:text-[8px] font-normal">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
