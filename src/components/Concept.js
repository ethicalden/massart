const Concept = () => {
  return (
    <div className="px-[32px] text-black bg-white font-helvetica">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Item 1 */}
        <div className="relative mb-[15px] w-full rounded-md">
          <img
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt=""
            className="w-full h-[285px] object-cover rounded-[10px]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F2E2E] to-[#2F2E2E00] p-4 rounded-[10px]">
            <p className="text-[18px] font-medium font-helvetica text-white pb-2">
              Concept of Durga Puja
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="relative mb-[15px] w-full rounded-md">
          <img
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt=""
            className="w-full h-[285px] object-cover rounded-[10px]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F2E2E] to-[#2F2E2E00] p-4 rounded-[10px]">
            <p className="text-[18px] font-medium font-helvetica text-white60 pb-2">
              Our preview show 2024 to be staged at a prominent Kolkata venue...{" "}
              <span>
                <a href="/" className="underline">
                  View More
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="relative mb-[15px] w-full rounded-md">
          <img
            src="https://i.ibb.co/B2NSKPj/picture-02.png"
            alt=""
            className="w-full h-[285px] object-cover rounded-[10px]"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2F2E2E] to-[#2F2E2E00] p-4 rounded-[10px]">
            <p className="text-[18px] font-medium font-helvetica text-white60 pb-2">
              Our preview show 2024 to be staged at a prominent Kolkata venue...{" "}
              <span>
                <a href="/" className="underline">
                  View More
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concept;
