
const HomeAboutUs = () => {
  return (
    <div className="pl-[32px] pr-[32px] pt-[60px] pb-[60px] bg-white font-helvetica md:pl-[60px] md:pr-[60px] md:pt-[80px] md:pb-[80px] lg:pl-[120px] lg:pr-[120px] lg:pt-[100px] lg:pb-[100px]">
      <div className="md:flex md:items-center lg:gap-[60px]">
        <div className="md:w-1/2">
          <h1 className="pr-[32px] text-[24px] font-bold md:pr-[0] md:text-[32px] lg:text-[40px]">
            <span className="text-buttonCustomColor">About</span> us
          </h1>
          <p className="text-[12px] font-normal pr-[32px] pt-[15px] leading-[18px] md:text-[16px] md:leading-[24px] md:pr-[0] md:pt-[20px] lg:text-[18px] lg:leading-[28px] lg:pt-[30px]">
            Durga puja is Bengal’s biggest festival that takes place over a week
            or so in September-October, on dates varying every year but
            announced well in advance. At the centre of the celebration is the
            figure of goddess Durga, crafted traditionally in clay, who is
            worshipped in the act of vanquishing the demon Mahishasura.
          </p>
        </div>
        <div className="pt-[25px] md:pt-[0] md:w-1/2 md:pl-[32px] lg:pl-[60px]">
          <img
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt="Durga Puja"
            className="h-[347px] w-full md:h-auto md:max-w-full lg:max-w-full lg:h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeAboutUs;
