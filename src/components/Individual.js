"use client";

import Image from "next/image";
import { useState } from "react";

import { GoDash } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi2";

const Individual = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter((item) => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className=" xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div>
          <Image
            width={527}
            height={777}
            className="md:w-[527] md:h-[777] w-[367] h-[588]"
            src="/images/picture 01.png"
            alt="Image 1" />
        </div>

        <div className="md:ms-[65px]">
          <div className="lg:text-[50px] lg:leading-[56px] md:text-left text-[24px] leading-[36px] font-bold lg:mb-[60px] mb-[40px] md:mt-0 mt-[28px]">
            arjunpur amra sabai <br className="md:block hidden" />
            <span className="text-red-600"> club</span>
          </div>
          <div className="">
            {[
              {
                title: "title",
                content:
                  "To implement this functionality in a Next.js application, you can create a component that manages the image gallery and modal functionality. Here's how you can set it up:",
              },
              { title: "concept", content: "Concept content" },
              {
                title: "area of Installation",
                content: "Area of Installation content",
              },
            ].map((section, index) => (
              <div className="mb-4" key={index}>
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="lg:text-[32px] text-[20px] font-bold">
                    {section.title}
                  </div>
                  <div className="lg:text-[32px] text-[20px]">
                    {openSections.includes(index) ? (
                      <GoDash />
                    ) : (
                      <HiOutlinePlus />
                    )}
                  </div>
                </div>
                <div
                  className={`accordion-content lg:text-[24px] text-[16px] font-bold md:border-b-[1px] border-0 mt-[15px] border-black ${openSections.includes(index) ? "open" : ""}`}
                >
                  <p className="text-gray-500 pb-[10px]">{section.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 my-[51px] md:block hidden">
        <div className="grid gap-6 md:grid-cols-2 grid-cols-1 w-full">
          <div>
            <Image
              width={605}
              height={341}
              className="md:w-[605px] md:h-[341px] w-[367px] h-[588px]"
              src="/images/picture 01.png"
              alt="Image 1" />
            <div className="grid gap-6 md:grid-cols-2 grid-cols-1  mt-6">
              <div>
              <Image
              width={288}
              height={341}
              className="md:w-[288px] md:h-[341px] w-[367px] h-[588px]"
              src="/images/picture 02.png"
              alt="Image 1" />
              </div>
              <div>
              <Image
              width={288}
              height={341}
              className="md:w-[288px] md:h-[341px] w-[367px] h-[588px]"
              src="/images/picture 01.png"
              alt="Image 1" />
              </div>
            </div>
          </div>
          <div>
          <Image
              width={565}
              height={712}
              className="md:w-[565px] md:h-[712px] w-[367px] h-[588px]"
              src="/images/picture 01.png"
              alt="Image 1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individual;
