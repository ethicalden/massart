"use client";

import React, { useState } from "react";
import { HiMiniMinusSmall, HiMiniPlusSmall } from "react-icons/hi2";

const AccordionItem = ({ number, title, content, isOpen, onClick }) => (
  <div className="rounded-lg overflow-hidden mb-4">
    <button
      onClick={onClick}
      className={`w-full text-left  font-bold flex 
        ${
          isOpen ? "bg-buttonCustomColor text-white" : "bg-white"
        } transition-colors duration-300`}
    >
      <div className="flex justify-between place-items-baseline">
        <div className="w-1/6  ">
          <span className="font-bold font-helvetica text-[24px] leading-[27px] ">
            {number}
          </span>
        </div>
        <div className="w-5/6 ">
          <div className=" flex  font-bold justify-between items-center">
            <span className="font-helvetica text-[20px] leading-[26px] font-bold">
              {title}
            </span>

            {isOpen ? (
              <HiMiniMinusSmall className="text-buttonCustomColor bg-white xl:w-[28px] xl:h-[28px] lg:w-[28px] lg:h-[28px] md:w-[28px] md:h-[28px]  xs:w-[28px] xs:h-[28px] sm:w-[28px] sm:h-[20px] flex items-center justify-center rounded-[24px]" />
            ) : (
              <HiMiniPlusSmall className="text-black bg-circleColor xl:w-[28px] xl:h-[28px] lg:w-[28px] lg:h-[28px] md:w-[28px] md:h-[28px]  xs:w-[28px] xs:h-[28px] sm:w-[28px] sm:h-[20px]  flex items-center justify-center  rounded-[24px]" />
            )}
          </div>
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              isOpen ? "max-h-90" : "max-h-0"
            }`}
          >
            <div
              className={`  xs:pt-[25px]    xs:text-[12px] font-normal ${
                isOpen ? "bg-buttonCustomColor pb-[25px]" : "bg-white"
              } text-white`}
            >
              {content}
            </div>
          </div>
        </div>
      </div>
    </button>
  </div>
);

const GuidenceStep = () => {
  const [openIndex, setOpenIndex] = useState(0); // Set the first item as open by default

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "what is durga puja Art ?",
      content:
        "Durga puja is bengal’s biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura. it is particularly in the streets of kolkata (calcutta), the capital of the state, that durga puja transcends religious bounds and serves as the cradle for the world’s largest publicly funded Art show. the idols and structures created from months in advance in street corners – become exquisite works of artistic expression, unique to each locality every year. thus there is a different artistic interpretation offered in every locality through the choice of a different theme to which the entire structure conforms. every autumn, the entire city wakes up to an explosion of creativity, with every neighbourhood decked up in unique templates that are a mélange of traditional Art and contemporary concepts, that are diverse and creative enough to rival any international Art biennale. ",
    },
    {
      title: "What is massArt ?",
      content:
        "To cancel or change your ticket order, please contact our support team.",
    },
    {
      title:
        "How did suddenly kolkata durga puja Art come in the national and international limelight ?",
      content:
        "Yes, we also accept PayPal and other electronic payment methods.",
    },
    {
      title: "Why durga puja Art is the world’s biggest public Art festival ?",
      content:
        "Refund policies vary depending on the event. Please refer to the event's specific refund policy for details.",
    },
    {
      title: "What is the main objective behind psdpa ?",
      content:
        "You can find more information about specific events on our events page or by contacting our support team.",
    },
    {
      title: "What is the main objective behind psdpa ?",
      content:
        "If you lose your ticket, please contact our support team to reissue your ticket.",
    },
  ];

  return (
    <div className=" rounded-lg">
      <div className="flex flex-wrap  -mx-2 xs:px-[32px] xs:pt-[]">
        <div className="w-full md:w-1/2  px-2">
          {items.slice(0, 3).map((item, index) => (
            <AccordionItem
              key={index}
              number={`0${index + 1}`}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 px-2">
          {items.slice(3).map((item, index) => (
            <AccordionItem
              key={index + 3}
              number={`0${index + 4}`}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index + 3}
              onClick={() => handleItemClick(index + 3)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuidenceStep;
