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
    <div className=" xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">
      
    <div className='grid md:grid-cols-2 grid-cols-1'>
    <div>
        <img className="w-full" src="/images/picture 01.png" alt="Image 1" />
      </div>

    
   
          <div className='md:ms-[65px]'>
            <div className="md:text-[50px] md:text-left text-center text-[24px] font-bold md:mb-[60px] mb-[40px] md:mt-0 mt-[28px]">
              arjunpur amra sabai
              <span className="text-red-600 ms-2">club</span>
            </div>
            <div className="">
              {[{ title: "Title", content: "To implement this functionality in a Next.js application, you can create a component that manages the image gallery and modal functionality. Here's how you can set it up:" }, { title: "Concept", content: "Concept content" }, { title: "Area of Installation", content: "Area of Installation content" }].map((section, index) => (
                <div className="mb-4" key={index}>
                  <div
                    className="flex justify-between cursor-pointer"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="md:text-[32px] text-[20px] font-bold">{section.title}</div>
                    <div className="text-[32px]">
                      {openSections.includes(index) ? <GoDash /> : <HiOutlinePlus />}
                    </div>
                  </div>
                  <div className={`accordion-content md:text-[24px] text-[16px] font-bold border-b-[1px] mt-[15px] border-black ${openSections.includes(index) ? 'open' : ''}`}>
                    <p className="text-gray-500 pb-[10px]">{section.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
       
    
    </div>


      <div className='container mx-auto px-4 my-[51px]'>
        <div className='grid gap-6 md:grid-cols-2 grid-cols-1 w-full'>
          <div>
            <img className="w-full h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
            <div className='grid gap-6 md:grid-cols-2 grid-cols-1  mt-6'>
              <div>
                <img className="w-full h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
              </div>
              <div>
                <img className="w-full h-auto rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
              </div>
            </div>
          </div>
          <div>
            <img className="w-full h-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg" alt="" />
          </div>
        </div>
      </div>



    </div>
  );
};

export default IndividualPage;
