"use client";

import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "/public/styles/MasterClass.css";
import "slick-carousel/slick/slick.css";

const testimonials = [
  {
    id: 1,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "/images/Ellipse 115.png",
    video: "/images/Group .png",
  },
  {
    id: 2,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "/images/Ellipse 115.png",
    video: "/images/Group .png",
  },
  {
    id: 3,
    name: "Sagnik Roy",
    title: "Founder & CEO",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    rating: 5,
    image: "/images/Ellipse 115.png",
    video: "/images/Group .png",
  },
];

const Review = () => {
  const settings = {
    dots: false,
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
    <div className=" bg-white custom-widhth-silck ">
      <div className="xs:pl-[32px] xs:pr-[56px] xs:pb-[25px] xs:pt-[60px]">
        <h2 className="xs:text-[24px] font-bold xs:leading-[36px] xs:text-left">
          What our <span className="text-red-500">popular customers </span>are
          saying
        </h2>
        <p className="xs:pt-[10px] xs:text-[12px] font-normal xs:leading-[18px]  ">
          Find out more about our team, vision, and dedication to creating
          extraordinary experiences. In this section, we share our story and our
          commitment to the success of each event.
        </p>
      </div>
      <div className="px-[22px] ">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-[10px] ">
              <div className="bg-white p-[25px]  shadow-lg  ">
                <div>
                  <Image
                    src={testimonial.video}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-full h-[137px]"
                  />
                </div>
                <p
                  className="text-[12px] ] pt-[15px] pb-[35px] 
              font-helvetica md:text-[18px]  font-normal text-gray-600"
                >
                  {testimonial.text}
                </p>
                <div className="flex items-center ">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-gray-900 font-helvetica lg:text-[18px] md:text-[18px] sm:text-[12px] xs:text-[12px] font-bold">
                      {testimonial.name}
                    </p>
                    <p className="font-helvetica text-gray-500 xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] xs:text-[12px] font-normal">
                      {testimonial.title}
                    </p>
                  </div>
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
