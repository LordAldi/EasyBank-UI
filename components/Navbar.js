import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import Burger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <div className="bg-white z-50  sticky top-0 contain">
      <div className="flex flex-row h-16 items-center ">
        <div className="flex items-center px-6 justify-between bg-white w-full h-full z-50 ">
          <Image src={Logo} alt="Easybank" height="20" width="140" />
          <Image src={Burger} alt="Easybank" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
