import React from "react";

const Video = () => {
  return (
    <div className="h-[626px] pt-[150px] bg-white">
      <video
        autoPlay
        loop
        muted
        className="rounded-[10px] w-full h-full object-cover"
      >
        <source src="/videos/Header.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
