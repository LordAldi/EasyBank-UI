import React from "react";
import Image from "next/image";
import Facebook from "./icons/Facebook";
import Youtube from "./icons/Youtube";
import Twitter from "./icons/Twitter";
import Pinterest from "./icons/Pinterest";
import Instagram from "./icons/Instagram";
const Footer = () => {
  return (
    <div className="bg-footer flex flex-col lg:flex-row lg:justify-between lg:items-center py-10 contain items-center justify-center">
      <div className="">
        <div className="mb-8">
          <Image src="/img/logo-white.svg" width="139" height="20" />
        </div>
        <div className="grid grid-cols-5 gap-4 mb-8 lg:mb-0">
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </div>
      </div>
      <div className="text-white text-base mb-8 lg:mb-0 flex flex-col lg:flex-row lg:flex-grow lg:justify-center ">
        <div className="flex flex-col items-center lg:items-start lg:mr-20">
          <p className="hover:text-primary-green cursor-pointer mb-2">
            About Us
          </p>
          <p className="hover:text-primary-green cursor-pointer mb-2">
            Contact
          </p>
          <p className="hover:text-primary-green cursor-pointer mb-2">Blog</p>
        </div>
        <div className="flex flex-col items-center lg:items-start ">
          <p className="hover:text-primary-green cursor-pointer mb-2">
            Carrers
          </p>
          <p className="hover:text-primary-green cursor-pointer mb-2">
            Support
          </p>
          <p className="hover:text-primary-green cursor-pointer mb-2">
            Privacy Policy
          </p>
        </div>
      </div>

      <div>
        <div className="btn mb-6">Request Invite</div>
        <div className="text-sm text-text-gray font-light">
          © Easybank. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
