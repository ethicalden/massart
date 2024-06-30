
const PreviewShow_one = () => {

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
          <div className="font-[Helvetica] md:text-[50px] text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2024</span></div>

          <div className="md:text-[18px] text-[12px]">
            <p className="md:mb-9 mb-5">
              The preview show, conceived by massArt, received overwhelming response in its inaugural year in 2022, being hailed at home and abroad as a breakthrough idea by creating a space to accommodate tourists who want to soak in the creative aspect of Durga Puja without jostling with the crowd.
            </p>

            <p className="md:mb-9 mb-5">
              MassArt is back this year with its 3rd initiative, the preview show 2024 of Durga Puja Art. Over five days - from September 30 to October 4 - the preview show will showcase a selection of the finest creations: 22 contemporary, 2 traditional, and 2 aristocrat household Durga Pujas. Before pre-registered tourists from beyond the borders of the state and the country.
            </p>

            <p className="md:mb-9 mb-5">
              Alongside the preview show at the puja sites, an exhibition on ‘Making of Durga Puja Art’ will take place during the period at the iconic town hall. The exhibition is a journey through the entire process, from conception to execution, using audio-visual footage and live demonstration. There is also an opportunity to sample the craftsmanship of artists and collect specimens of their art before stepping out to enjoy the creations on view at the chosen puja sites.
            </p>
          </div>
        </div>

        <div className="font-[Helvetica] md:text-[50px] text-center text-[24px] font-bold mb-[20px]">Preview Show <span className="text-red-600">2024</span></div>

      </div>
    </div>
  );
};

export default PreviewShow_one;
