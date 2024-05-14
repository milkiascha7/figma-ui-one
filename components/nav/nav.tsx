"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-brand-dark text-neutral-5 w-full h-[100px] flex items-center justify-center md:justify-between px-5 md:px-10 lg:px-20 gap-x-5 border-b-[1px] border-neutral-11">
      <div className="w-1/2 md:w-full flex">
        {/* logo */}
        <Link href="/" className="w-full">Logo</Link>
      </div>
      <div className="hidden md:flex w-full">
        {/* middle */}
        <ul className="hidden md:flex w-full justify-between items-center gap-x-10 border-2 border-neutral-11 rounded-full p-4">
          <li className="w-full">
            <Link href="/" className="text-md">Product</Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">Pricing</Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">About</Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">Resources</Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">Download</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/2 md:w-full flex justify-around md:justify-end items-center md:gap-x-10">
        {/* Signup */}
        <Link href="/">Login</Link>
        <div className="bg-gradient-to-r from-borderColor-gradient-2 to-neutral-2 rounded-md p-px hover:bg-gradient-to-r hover:from-borderColor-gradient-2 hover:to-brand-washedPurple transition delay-150 duration-300 ease-in-out">
          <button className="text-md md:text-lg w-full bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 py-2 px-4 rounded-md  text-neutral-6 hover:border-primary-primary-purple-600 hover:text-brand-washedPurple">
            Sign Up
          </button>
        </div>
      </div>
      <div className="flex md:hidden justify-center items-center">
        {/* <ul className="flex flex-col justify-center items-center gap-y-2 w-full">
          <li className="w-10 h-[0.2px] border-2 border-white"></li>
          <li className="w-10 h-[0.2px] border-2 border-white"></li>
          <li className="w-10 h-[0.2px] border-2 border-white"></li>
        </ul> */}
        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="18" height="2" fill="#D9D9D9"/>
          <rect y="4" width="18" height="2" fill="#D9D9D9"/>
          <rect y="8" width="18" height="2" fill="#D9D9D9"/>
        </svg>

      </div>
    </div>
  );
};

export default Nav;
