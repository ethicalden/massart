"use client";

import React, { useState } from 'react';
import { HiOutlinePlus } from "react-icons/hi2";
import { GoDash } from "react-icons/go";

const IndividualPage = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleAccordion = (index) => {
    if (openSections.includes(index)) {
      setOpenSections(openSections.filter(item => item !== index));
    } else {
      setOpenSections([...openSections, index]);
    }
  };

  return (
    <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] grid grid-cols-2 md:mt-[150px] mt-[50px]">
      <div className="me-[107px]">
        <img className="w-full" src="/images/picture 01.png" alt="Image 1" />
      </div>

      <div>
        <div>
          <div className="max-w-md mx-auto p-6">
            <h1 className="text-4xl font-bold mb-[60px]">
              arjunpur amra sabai
              <span className="text-red-600 ms-2">club</span>
            </h1>
            <div className="mt-6">
              {[{ title: "Title", content: "Title content" }, { title: "Concept", content: "Concept content" }, { title: "Area of Installation", content: "Area of Installation content" }].map((section, index) => (
                <div className="mb-4" key={index}>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="text-[32px] font-bold">{section.title}</div>
                    <div className="text-[32px]">
                      {openSections.includes(index) ? <GoDash /> : <HiOutlinePlus />}
                    </div>
                  </div>
                  <div className={`accordion-content text-[24px] font-bold border-b-[1px] mt-[15px] border-black ${openSections.includes(index) ? 'open' : ''}`}>
                    <p className="text-gray-500 pb-[10px]">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
          </div>
          <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default IndividualPage;
