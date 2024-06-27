// components/EventCarousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const EventCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="w-80 mx-auto">
      <Slider {...settings}>
        <div>
          <div className="relative">
            <img src="/event1.jpg" alt="Event 1" className="rounded-lg" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white rounded-b-lg">
              <h2 className="text-lg font-bold">Brush & Palette Masterclass</h2>
              <p>Brandon Levan</p>
              <p>Grand City Convention Center</p>
            </div>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500 rounded-full p-2`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <FaArrowRight className="text-white" />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-red-500 rounded-full p-2`}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <FaArrowLeft className="text-white" />
    </div>
  );
};

export default EventCarousel;
