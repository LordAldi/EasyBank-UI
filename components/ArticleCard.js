import React from "react";
import Image from "next/dist/client/image";
import SlideIn from "./Animation/SlideIn";
const ArticleCard = ({ img, author, title, desc }) => {
  return (
    <SlideIn>
      <div className="rounded-lg transition duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl ">
        <div className=" p-2 ">
          <div className="object-cover overflow-hidden lg:h-52 xl:h-40 w-full flex justify-center">
            <Image src={img} className="object-cover" />
          </div>
        </div>

        <div className="px-8 py-6">
          <p className="font-light text-xs text-text-gray">By {author}</p>
          <h5 className="text-base transition duration-500 ease-in-out hover:text-primary-green">
            {title}
          </h5>
          <p className="font-light text-sm text-text-gray max-w-lg">{desc}</p>
        </div>
      </div>
    </SlideIn>
  );
};

export default ArticleCard;
