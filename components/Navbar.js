import React, { useState } from "react";
import CloseIcon from "../assets/images/icon-close.svg";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
import Logo from "../assets/images/logo.svg";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="bg-white z-50  sticky top-0 ">
        <div className="flex flex-row h-16 items-center contain">
          <div className="flex items-center px-6 justify-between  bg-white w-full h-full z-50 ">
            <Logo />

            <nav className="hidden lg:flex text-text-gray items-center">
              <div className="nav-item">Home</div>
              <div className="nav-item">About</div>
              <div className="nav-item">Contact</div>
              <div className="nav-item">Blog</div>
              <div className="nav-item">Carrers</div>
            </nav>
            <div className="btn hidden lg:flex">Request Invite</div>

            <div
              className="lg:hidden"
              onClick={() => {
                console.log("click");
                setOpen(!open);
              }}
            >
              {open ? <CloseIcon /> : <HamburgerIcon />}
            </div>
          </div>
        </div>
        {open && (
          <div className="lg:hidden z-40  absolute top-16 w-full">
            <div className="w-full  bg-gray-100">
              <nav className="flex flex-col justify-center text-text-gray items-center py-8">
                <div className="nav-item">Home</div>
                <div className="nav-item">About</div>
                <div className="nav-item">Contact</div>
                <div className="nav-item">Blog</div>
                <div className="nav-item">Carrers</div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
