import Imagesvg from "@/lib/image-svg";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="w-full h-full mt-40 flex flex-col gap-y-10 lg:gap-y-8 md:items-center justify-start md:justify-center mx-20 overflow-x-hidden py-10">
      <div className="p-px bg-gradient-to-r from-primary-blue-600 to-primary-purple-600 w-fit rounded-full z-10 mx-5 md:mx-0">
        <button className="bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 flex justify-center items-center text-washed-purple-400 rounded-full px-3 py-1">
          <span className="px-4 text-[13px] md:text-lg">Features</span>
        </button>
      </div>

      <h2 className="px-5 md:px-0 text-washed-purple-400 text-[40px] md:text-[50px] lg:text-[60px] leading-tight w-full md:w-2/3 md:text-center font-bold z-10">
        Keep track of your meeting all in one place
      </h2>
      <p className="px-5 md:px-0 text-washed-purple-700 text-md w-full md:w-1/3 md:text-center">
        Capture your ideas, thoughts and meeting notes in a structured and
        organized manner
      </p>

      <div className="flex flex-col w-full h-full relative md:justify-center lg:items-center mt-10 lg:mt-0">
        <div className="w-full h-[203px] purple-gradient absolute" />
        <div className="w-full lg:w-1/2 h-[50vh] md:h-[80vh] relative">
          <Image
            src="/Calendar 1.png"
            alt="calander"
            fill
            className="w-full h-full absolute top-0 left-0 object-center object-contain"
          />
        </div>
      </div>



    </div>
  );
};

export default Features;
