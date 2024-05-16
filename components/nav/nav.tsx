"use client";
import Link from "next/link";
import { useRef } from "react";

import { motion, useInView } from "framer-motion";
import { opacity } from "./animate";

const Nav = () => {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      className="animate-in bg-brand-dark text-neutral-5 w-full h-[100px] flex items-center justify-center md:justify-between px-5 md:px-10 lg:px-10 gap-x-5  border-neutral-11"
    >
      <motion.div
        className="w-1/2 md:w-full flex"
        // variants={opacity}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={{
          initail: { opacity: 0, y: "0%" },
          visible: { opacity: 1, y: "0%" },
          hidden: { opacity: 0, y: "100%" },
        }}
        // animate={isInView ? "open" : "closed"}
      >
        {/* logo */}
        <Link href="/" className="w-full flex items-center justify-center">
          <div className="p-px rounded-full">
            <button className="flex justify-center items-center text-washed-purple-400 rounded-full px-4 py-2">
              <svg
                width="30"
                height="30"
                viewBox="0 0 38 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.6162 5.53912L18.0914 9.91264L14.6903 14.029L9.75401 20.1707H16.2215C17.096 20.1707 17.8049 20.8796 17.8049 21.754V32.9728L24.8951 24.0826L28.1297 20.1302L29.8402 17.9435H23.1995C22.325 17.9435 21.6162 17.2347 21.6162 16.3602V5.53912ZM22.9185 1.74079C23.9952 2.12356 24.7828 3.15674 24.7828 4.46213V14.7769H30.502C31.7737 14.7769 32.621 15.6242 32.9866 16.4582C33.3422 17.2692 33.3828 18.3422 32.8251 19.2508C32.7938 19.3018 32.7597 19.3509 32.7228 19.3981L30.6132 22.095L30.5914 22.1222L27.3521 26.0805L19.8936 35.4325C19.8231 35.5209 19.7434 35.6015 19.6557 35.6728C18.7436 36.4159 17.5495 36.6036 16.5285 36.2293C15.4563 35.8363 14.6382 34.8322 14.6382 33.4934V23.3373H9.08132C7.80961 23.3373 6.96232 22.49 6.59669 21.656C6.24116 20.845 6.20056 19.772 6.75821 18.8634C6.79316 18.8065 6.83167 18.7518 6.87352 18.6998L12.2421 12.0202L15.6439 7.90306L19.8248 2.71544C20.59 1.65172 21.8654 1.36646 22.9185 1.74079Z"
                  fill="#B5B2FF"
                />
              </svg>
              <span className="text-lg">ChatProdigy</span>
            </button>
          </div>
        </Link>
      </motion.div>
      <motion.div
        className="hidden lg:flex w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={{
          initail: { opacity: 0, y: "0%" },
          visible: { opacity: 1, y: "0%" },
          hidden: { opacity: 0, y: "100%" },
        }}
      >
        {/* middle */}
        <ul className="flex w-full justify-between items-center gap-x-10 border-2 border-neutral-11 rounded-full p-4">
          <li className="w-full">
            <Link href="/" className="text-md">
              Product
            </Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">
              Pricing
            </Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">
              About
            </Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">
              Resources
            </Link>
          </li>
          <li className="w-full">
            <Link href="/" className="text-md">
              Download
            </Link>
          </li>
        </ul>
      </motion.div>
      <motion.div
        className="w-1/2 md:w-full flex justify-around md:justify-end items-center md:gap-x-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        variants={{
          initail: { opacity: 0, y: "0%" },
          visible: { opacity: 1, y: "0%" },
          hidden: { opacity: 0, y: "100%" },
        }}
      >
        {/* Signup */}
        <Link href="/">Login</Link>
        <div className="bg-gradient-to-r from-borderColor-gradient-2 to-neutral-2 rounded-md p-px hover:bg-gradient-to-r hover:from-borderColor-gradient-2 hover:to-brand-washedPurple transition delay-150 duration-300 ease-in-out">
          <button className="text-md md:text-lg w-full bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 py-2 px-4 rounded-md  text-neutral-6 hover:border-primary-primary-purple-600 hover:text-brand-washedPurple">
            Sign Up
          </button>
        </div>
      </motion.div>

      {/* mobile hamburger */}
      <div className="flex md:hidden justify-center items-center">
        <svg
          width="18"
          height="10"
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="18" height="2" fill="#D9D9D9" />
          <rect y="4" width="18" height="2" fill="#D9D9D9" />
          <rect y="8" width="18" height="2" fill="#D9D9D9" />
        </svg>
      </div>
    </motion.div>
  );
};

export default Nav;
