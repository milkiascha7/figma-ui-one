"use client";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="bg-brand-dark text-neutral-5 w-full h-[100px] flex items-center justify-between px-20 gap-x-5 border-b-[1px] border-neutral-11">
      <div className="w-full">
        {/* logo */}
        <Link href="/">Logo</Link>
      </div>
      <div className="w-full">
        {/* middle */}
        <ul className="flex w-full justify-between items-center gap-x-10 border-2 border-neutral-11 rounded-full p-4">
          <li className="w-full">
            <Link href="/">Product</Link>
          </li>
          <li className="w-full">
            <Link href="/">Pricing</Link>
          </li>
          <li className="w-full">
            <Link href="/">About</Link>
          </li>
          <li className="w-full">
            <Link href="/">Resources</Link>
          </li>
          <li className="w-full">
            <Link href="/">Download</Link>
          </li>
        </ul>
      </div>
      <div className="w-full flex justify-end items-center gap-x-10">
        {/* Signup */}
        <Link href="/">Login</Link>
        <div className="bg-gradient-to-r from-borderColor-gradient-2 to-neutral-2 rounded-md p-px hover:bg-gradient-to-r hover:from-borderColor-gradient-2 hover:to-brand-washedPurple transition delay-150 duration-300 ease-in-out">
          <button className="w-full bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 py-2 px-4 rounded-md  text-neutral-6 hover:border-primary-primary-purple-600 hover:text-brand-washedPurple">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
