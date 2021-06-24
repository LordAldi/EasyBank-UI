import React from "react";
import Image from "next/image";
import Logo from "../assets/images/logo.svg";
import Burger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="flex flex-row h-16 items-center">
        <div className="flex items-center mx-6 justify-between w-full">
          <Image src={Logo} alt="Easybank" height="20" width="140" />
          <Image src={Burger} alt="Easybank" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
