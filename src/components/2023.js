
"use client";

import { useState, useEffect } from 'react';
const TwoZeroTwoThree = () => {

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


  // const nextSlide = () => {
  //   setCurrentSlide((prev) => (prev + 1) % slides.length);
  // };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 3000); // Change slide every 3 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [slides.length]);


  return (
    <div className=" xl:ms-[125px] ms-[38px] xl:me-[125px] lg:ms-[100px] lg:me-[100px] me-[38px] md:mt-[150px] mt-[60px]">

      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-[106px] gap-7 md:mb-[157px] mb-7">
        <div>
          <img
            className="w-full h-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
        </div>
        <div>
          <div className="font-[Helvetica] md:text-[50px] text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2023</span></div>

          <div className="md:text-[18px] leading-[24px] text-[12px]">
            <p className="md:mb-9 mb-5">
              Every year, we are confronted with new categories of Durga Puja Art and artists, displaying ever newer templates of contemporary Art and design—diverse and creative enough to rival any international Art biennale, though perhaps not yet positioned as such. Commercial promotion and sponsorship have kept pace with the explosion of Art, making far-reaching changes to the very nature of the festival.
            </p>

            <p className="md:mb-9 mb-5">
              While the creativity comes from artists and Art designers, the work of setting up and decorating a pandal, or transporting the idols from the place of production to pandals, is still mostly done by a hired workforce.
            </p>

            <p className="md:mb-9 mb-5">
              Our preview show is a journey through the entire process. From conception to the final outcome, using cutting-edge audio-visual techniques, we provide an immersive experience that will leave you with unforgettable memories of Bengal’s largest festival. It convincingly claims its place as the world’s largest public Art exhibition. Even international names such as Suvaprasanna, Jogen Chowdhury, and Samira Ich have entered the fray at various times, along with professional Art directors from cinema, commercial and graphic artists, and even textile designers.
            </p>
          </div>
        </div>
      </div>

      <div className="md:grid lg:grid-cols-2 grid-cols-1 md:gap-[106px] gap-7 md:mb-[157px] mb-7 hidden">
        <div className="font-[Helvetica] md:text-[50px] text-[24px] font-bold">
          selected Art <span className="text-red-600">venue</span>
        </div>
        <div>

          <div className="text-[18px]  font-normal">
            <p>
              Out of a pool of over 3000 Durga Puja organizing associations who are keen to be in the list, only 26 Durga Puja Art venues were selected for PSDP2023. Among them, 22 were contemporary, 2 traditional, and 2 aristocrat household (bonedibari) Puja Art venues. An exhibition titled ‘Making of Durga Puja Art’ held in Kolkata Town Hall was an important venue for Durga Puja Art lovers
            </p>

          </div>
        </div>
      </div>

      <div className="md:grid lg:grid-cols-3 grid-cols-1 gap-5 mb-[157px] hidden">

        <div className="relative group rounded-lg overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
          >
            <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
              contemporary durga puja Art
            </p>
            <div>
              <a className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto" href="#">
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
          >
            <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
              contemporary durga puja Art 1
            </p>
            <div>
              <a className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto" href="#">
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
          >
            <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
              contemporary durga puja Art
            </p>
            <div>
              <a className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto" href="#">
                read more
              </a>
            </div>
          </div>
        </div>

        <div className="relative group rounded-lg overflow-hidden">
          <img
            className="w-full h-auto"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
          <div
            className="absolute text-[12px] top-0 bottom-0 left-0 right-0 flex flex-col justify-end p-6 text-white opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            style={{ background: 'linear-gradient(2deg, rgba(129, 129, 129, 0.5), rgba(0, 0, 0, 0.5))' }}
          >
            <p className="text-[23px] leading-[30px] font-bold font-[Helvetica] mb-[10px]">
              contemporary durga puja Art
            </p>
            <div>
              <a className="text-[18px] text-white text-opacity-50 border-b border-white border-opacity-50 hover:border-opacity-100 hover:text-white w-auto" href="#">
                read more
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* show on mobile */}
      <div className="md:hidden block font-[Helvetica] md:text-[50px] text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2023</span>
      </div>
      <div className="relative w-full mb-[60px] md:hidden block">
        <div className="relative h-64 overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="absolute w-full h-full transition-opacity duration-300 ease-in-out"
              style={{ opacity: index === currentSlide ? 1 : 0 }}

            >
              <img
                src={slide.imageUrl}
                alt=""
                className="w-full object-cover"
              />
              <div className="absolute inset-0 bg-[rgbe 0 0 0 0] flex flex-col justify-end p-3 text-white opacity-0 transition-opacity duration-300 ease-in-out" style={{
                opacity: index === currentSlide ? 1 : 0,
                background: 'linear-gradient(360deg, black, rgba(249, 0, 0, 0), rgba(249, 0, 0, 0), rgba(249, 0, 0, 0))'
              }}>
                <p className="text-[20px] leading-[23px] font-bold mb-2">{slide.title}</p>
              </div>

            </div>
          ))}
        </div>
        <div className="justify-center flex space-x-2 mt-4">
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
  );
};

export default TwoZeroTwoThree;
