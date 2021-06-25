import React from "react";
import bgMobile from "../assets/images/bg-intro-mobile.png";
import bgDesktop from "../assets/images/bg-intro-desktop.png";
import mockupImg from "../assets/images/image-mockups.png";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3   mb-20 md:mb-0 max-h-192 contain-left">
      <div className="relative sm:order-1 sm:col-span-2 flex justify-end">
        <div className="relative top-0 sm:hidden">
          <Image src={bgMobile} className="" />
        </div>
        <div className="relative -top-36  hidden sm:block max-w-384 ">
          <Image src={bgDesktop} />
        </div>
        <div className="absolute -top-32 w-full sm:-right-32 flex justify-center items-center">
          <Image src={mockupImg} />
        </div>
      </div>

      <div className="flex flex-col sm:justify-start sm:mt-32 md:mt-44 items-center sm:items-start sm:max-w-md  px-6 text-center sm:text-left font-light z-10">
        <h3 className="text-4xl sm:text-5xl	text-text-black mb-4">
          Next generation digital banking
        </h3>
        <p className="text-base sm:text-lg tracking-tighter	leading-6 font-bold sm:font-normal  text-text-gray mb-8">
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <div className="btn">Request Invite</div>
      </div>
    </div>
  );
};

export default Hero;
