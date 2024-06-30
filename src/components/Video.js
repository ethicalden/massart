import React from "react";

const Video = () => {
  return (
    // <div className="h-[626px] pt-[150px] bg-white">
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
    </div>
  );
};

export default Video;
