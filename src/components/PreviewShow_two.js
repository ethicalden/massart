
"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';



const PreviewShow_two = () => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
      title: "contemporary durga puja Art",

    },
    {
      imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
      title: "contemporary durga puja Art",

    },
    {
      imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
      title: "contemporary durga puja Art",

    },
    {
      imageUrl: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
      title: "contemporary durga puja Art",

    }
  ];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (

    <div>
      <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">
        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5">
          <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
            Preview Show <span className="text-red-600">2025</span>
          </div>
          <div>
            <Image
              className="w-full h-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="md:block hidden font-[Helvetica] md:text-[50px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
              Preview Show <span className="text-red-600">2025</span>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block hidden">
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
              </p>
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
              </p>
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
              </p>
            </div>
            <div className="md:text-[18px] md:leading-[30px] text-[12px] leading-[18px] md:hidden block -mt-3">
              <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
                Durga puja is bengal's biggest festival that takes place over a week or so in september-october, on dates varying every year but announced well in advance. at the centre of the celebration is the figure of goddess durga, crafted traditionally in clay, who is worshipped in the act of vanquishing the demon mahishasura.
              </p>
            </div>
          </div>
        </div>
        <div className="font-[Helvetica] md:text-[50px] md:leading-[56px] w-full md:text-center text-left text-[24px] font-bold md:mb-[50px] mb-[28px]">
          Preview Show <span className="text-red-600">2024</span>
        </div>
      </div>

      <div className="scroll-container">
        <div className="w-full overflow-x-auto flex justify-center">
          <div className="md:w-1/2 w-full grid grid-flow-col md:gap-9 gap-3 md:mb-[50px] mb-[30px]  ms-[38px]  me-[0]">
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] bg-buttonCustomColor text-white">
              Plan your visit
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">
              Programme
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black">
              Events
            </button>
            <button className="md:w-[173px] md:h-[48px] w-[117px] h-[32px] font-bold md:text-[18px] text-[12px] font-helvetica rounded-[100px] border border-buttonCustomColor text-black ms:[100px]">
              Beyond Art
            </button>
          </div>
        </div>
        <div className="md:hidden block blur-effect"></div>
      </div>



      <div className="md:grid hidden  lg:grid-cols-2 grid-cols-1 xl:gap-[106px] lg:gap-[90px] gap-[30px] md:mb-[157px] mb-5 xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] ">
        <div className="font-[Helvetica] md:hidden block text-[24px] leading-[30px] font-bold">
          Preview Show <span className="text-red-600">2024</span>
        </div>
        <div>
          <Image
            className="w-full h-auto rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="md:block hidden font-[Helvetica] md:text-[50px] md:leading-[56px] text-[24px] leading-[30px] font-bold mb-[20px]">
            Events
          </div>
          <div className="md:text-[18px] md:leading-[30px] text-[12px] md:block hidden">
            <p className="md:mb-9 mb-5" style={{ fontFamily: 'sans-serif' }}>
              being a socially inclined organisation, massArt takes an endeavor of including in preview show of durga puja Art (psdpa) the faces of those who are not so privileged. thus we have multiple inclusive events for the orphans, old age people and differently abled children

              also we have mission eco-care programmes named- ecopaddle- a bicycle journey to durga puja Art venues without carbon footprint and greenitiative- a plantation drive in and around puja Art venues
            </p>
          </div>

        </div>
      </div>


      {/* how to reach kolkata section */}
      <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px] text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold">

        <div className="md:mb-[40px] mb-[30px]">Inclusive <span className="text-buttonCustomColor">Events</span></div>

        <div className="md:grid lg:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">

          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>


        </div>

    {/* show on mobile */}

     <div className="relative w-full mb-[60px]">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image src={slide.imageUrl} alt="" className="w-full object-cover" />
            <div
              className="absolute inset-0 bg-[rgba(0, 0, 0, 0)] flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                background: 'linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))',
              }}
            >
              <p className="text-lg font-bold mb-2">{slide.title}</p>
            </div>
          </div>
        ))}
       
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>




      </div>

      {/* how to reach kolkata section */}
      <div className="xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px] text-center font-[Helvetica] md:text-[50px] text-[24px] md:leading-[56px] leading-[30px] font-bold">

        <div className="md:mb-[40px] mb-[30px]">Mission <span className="text-buttonCustomColor">Eco-Care</span></div>

        <div className="md:grid lg:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">

          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg group h-56">
            <Image
              className="w-full h-56"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
              alt=""
            />
            <div
              className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
              style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
            >
              <p className="text-[24px] text-left leading-[32px] font-semibold font-[Helvetica] mb-[10px]">
                Bring back their memories
              </p>
              <div>
              </div>
            </div>
          </div>


        </div>

          {/* show on mobile */}

     <div className="relative w-full mb-[60px]">
      <div className="relative h-64 overflow-hidden rounded-lg">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
            style={{ opacity: index === currentSlide ? 1 : 0 }}
          >
            <Image src={slide.imageUrl} alt="" className="w-full object-cover" />
            <div
              className="absolute inset-0 bg-[rgba(0, 0, 0, 0)] flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out"
              style={{
                opacity: index === currentSlide ? 1 : 0,
                background: 'linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))',
              }}
            >
              <p className="text-lg font-bold mb-2">{slide.title}</p>
            </div>
          </div>
        ))}
       
      </div>
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-black' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
      </div>

   


    </div>

  );
};

export default PreviewShow_two;
