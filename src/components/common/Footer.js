import Image from "next/image";

import SocialContributor from "../SocialContributor/SocialContributer";
import { LuSend } from "react-icons/lu";

const Footer = () => {
  return (
    <>
      <SocialContributor />
      <footer className="bg-footerColor ">
        <div className="footer text-white xs:px-[32px] xs:pt-[35px] xs:pb-[25px]">
          <div className="h-[57] ">
            <Image
              className="w-full h-full object-cover "
              src="/images/massart 1.png"
              height={100}
              width={100}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-x-[45px]">
            <div>
              <nav className="xs:py-[25px]">
                <p className="xs:text-[12px] xs:leading-[17px] font-normal font-helvetica">
                  a non-profit organization conceived in june 2022 with the
                  objective of promoting Art and culture of bengal.
                </p>
              </nav>

              <nav>
                <h6 className=" xs:text-[16px] xs:leading-[24px]  font-helvetica font-bold text-white">
                  Learn More
                </h6>
                <p className="link link-hover xs:pt-[10px] xs:pb-[8px]  xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Terms Of Use
                </p>
                <p className="link link-hover xs:pb-[8px] xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Privacy policy
                </p>
                <p className="link link-hover  xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  FAQ
                </p>
              </nav>
              <nav>
                <p className="xs:pt-[25px] xs:text-[8px] xs:leading-[12px] font-normal xs:text-left">
                  Copyright © 2024 massArt, Designed & Developed Ethically by
                  Ethical Den
                </p>
              </nav>
            </div>

            <div>
              <nav>
                <h6 className="xs:pb-[10px]  xs:text-[16px] xs:leading-[24px]  font-helvetica font-bold text-white">
                  Navigation
                </h6>
                <p className="xs:pb-[8px]  link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Get Ticket
                </p>
                <p className="xs:pb-[8px] link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Schedule
                </p>
                <p className="xs:pb-[35px] link link-hover xs:text-[12px] xs:leading-[12px] font-normal font-helvetica">
                  Speakers
                </p>
              </nav>

              <form>
                <h6 className="xs:pb-[6px] xs:text-[16px] xs:leading-[24px]  font-helvetica font-bold text-white">
                  Newsletter
                </h6>
                <p className=" font-helvetica font-normal xs:pb-[13px] xs:text-[12px] xs:leading-[16px]">
                  Don't miss the latest information on this platform
                </p>
                <fieldset className="form-control h-[30px]">
                  <div className="join">
                    <input
                      type="text"
                      placeholder="Email address"
                      className="w-full h-full input input-bordered join-item xs:text-[12px] xs:leading-[20px] font-normal bg-emailColor font-helvetica"
                    />
                    <button className="btn bg-buttonCustomColor join-item">
                      <LuSend />
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
