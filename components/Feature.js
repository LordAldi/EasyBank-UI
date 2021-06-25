import Image from "next/image";
import React from "react";

const Feature = ({ title, desc, img, className, ...props }) => {
  return (
    <div
      className={`${className} text-center transition duration-500 ease-in-out transform hover:scale-110`}
      {...props}
    >
      <div className="mb-6">
        <Image src={img} />
      </div>
      <h3 className="text-xl text-text-black mb-4">{title}</h3>
      <p className="text-base  tracking-tighter	leading-6 font-bold lg:font-normal  text-text-gray mb-0">
        {desc}
      </p>
    </div>
  );
};

export default Feature;
