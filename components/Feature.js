import React from "react";
import SlideIn from "./Animation/SlideIn";

const Feature = ({ title, desc, Image, className, ...props }) => {
  return (
    <SlideIn reverse>
      <div
        className={`${className} text-center flex items-center flex-col transition duration-500 ease-in-out transform hover:scale-110`}
        {...props}
      >
        <div className="mb-6">
          <Image />
        </div>
        <h3 className="text-xl text-text-black mb-4">{title}</h3>
        <p className="text-base  tracking-tighter	leading-6 font-light   text-text-gray mb-0">
          {desc}
        </p>
      </div>
    </SlideIn>
  );
};

export default Feature;
