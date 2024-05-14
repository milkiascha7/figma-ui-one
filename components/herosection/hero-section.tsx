import Imagesvg from "@/lib/image-svg";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className=" w-full h-full mt-20 flex flex-col gap-y-10 lg:gap-y-8 md:items-center justify-start md:justify-center mx-20 overflow-x-hidden">
      {/* button */}
      <div className="p-px bg-gradient-to-r from-primary-blue-600 to-primary-purple-600 w-fit rounded-full z-10 mx-5 md:mx-0">
        <button className="bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 flex justify-center items-center text-washed-purple-400 rounded-full px-3 py-1">
          <svg
            width="22"
            height="22"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.03271 26.5833C8.42898 26.5833 7.82524 26.3416 7.2215 25.9791C6.25551 25.2541 5.65178 24.0458 5.89327 22.8375L6.61776 18.125L3.35757 14.7416C2.51233 13.8958 2.15009 12.5666 2.63308 11.3583C2.99532 10.15 3.96131 9.42496 5.16878 9.18329L9.7572 8.45829L11.8099 4.22913C12.2929 3.14163 13.3796 2.41663 14.5871 2.41663C15.7946 2.41663 16.8813 3.14163 17.4851 4.22913L19.417 8.45829L23.8847 9.18329C25.0922 9.30412 26.0582 10.15 26.4204 11.3583C26.7826 12.5666 26.5411 13.775 25.6959 14.7416L22.4357 18.125L23.1602 22.8375C23.4017 24.0458 22.9187 25.375 21.832 25.9791C20.866 26.7041 19.6585 26.7041 18.5718 26.2208L14.5871 23.925L10.6024 26.1C10.1194 26.4625 9.63645 26.5833 9.03271 26.5833ZM14.5871 4.83329C14.4664 4.83329 14.1041 4.83329 13.9834 5.31663L11.6892 10.15C11.4477 10.5125 11.0854 10.7541 10.7232 10.7541L5.53103 11.6C5.16878 11.6 5.04804 11.9625 4.92729 12.0833C4.92729 12.2041 4.80654 12.5666 5.16878 12.9291L8.91197 16.675C9.15346 16.9166 9.27421 17.2791 9.27421 17.7625L8.42898 23.0791C8.30823 23.5625 8.67047 23.8041 8.79122 23.925C8.91197 24.0458 9.15346 24.1666 9.51571 23.925L14.1041 21.3875C14.4664 21.1458 14.9494 21.1458 15.3116 21.3875L19.9 23.925C20.2623 24.0458 20.5038 23.925 20.6245 23.925C20.7453 23.8041 20.9867 23.5625 20.9867 23.0791L20.1415 17.7625C20.0208 17.4 20.1415 17.0375 20.5038 16.675L24.2469 12.9291C24.3677 12.6875 24.2469 12.2041 24.2469 12.0833C24.2469 11.9625 24.0054 11.6 23.6432 11.6L18.451 10.875C18.0888 10.875 17.7266 10.5125 17.4851 10.15L15.1909 5.31663C15.0701 4.83329 14.7079 4.83329 14.5871 4.83329Z"
              fill="#B5B2FF"
            />
          </svg>
          <span className="ml-2 md:ml-4 text-[13px] md:text-lg">
            Your Workspace, Perfected
          </span>
        </button>
      </div>

      <h2 className="px-5 md:px-0 text-washed-purple-400 text-[40px] md:text-[50px] lg:text-[60px] leading-tight w-full md:w-2/3 md:text-center font-bold z-10">
        All-In-One collaboration and productivity Platform
      </h2>

      {/* button */}
      <div className="mx-5 md:mx-0 w-fit p-px bg-gradient-to-r from-primary-purple-600 to-primary-blue-300 rounded-md animate-pulse cursor-pointer z-10">
        <button className="cursor-pointer bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 flex justify-center items-center text-washed-purple-400 rounded-md px-4 py-2">
          <span className="ml-4 text-md md:text-lg font-bold">
            Get Cypress for Free
          </span>
        </button>
      </div>

      {/* Image in SVG */}
      <div className="flex flex-col w-full h-full relative md:justify-center lg:items-center mt-10 lg:mt-0">
        <div className="w-full md:w-1/2 h-[153px] purple-gradient border-2 absolute -top-32 left-0 animate-pulse z-50" />
        <div className="w-full md:w-1/2 h-[153px] purple-gradient border-2 absolute -top-32 right-0 animate-pulse z-50" />
        <Imagesvg />
        <div className="w-full absolute h-[150px] md:h-[350px] bottom-[0px] left-0 bottom-gradient" />
      </div>

      {/* Logo Images */}
      <div className="flex w-full h-full px-4 md:px-10 gap-x-4 justify-between items-center realtive">
        <div className="relative w-[200px] md:w-[100px] h-[50px]">
          <Image
            src="/logo/Company logo.png"
            alt="logo"
            fill
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative w-[200px] md:w-[100px] h-[50px]">
          <Image
            src="/logo/Company logo-1.png"
            alt="logo"
            fill
            className="top-0 left-0 w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative w-[200px] md:w-[100px] h-[50px]">
          <Image
            src="/logo/Company logo-2.png"
            alt="logo"
            fill
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative w-[200px] md:w-[100px] h-[50px]">
          <Image
            src="/logo/Company logo-3.png"
            alt="logo"
            fill
            className="w-full h-full object-contain object-center"
          />
        </div>
        <div className="relative w-[200px] md:w-[100px] h-[50px]">
          <Image
            src="/logo/Company logo-4.png"
            alt="logo"
            fill
            className=" top-0 left-0 w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
