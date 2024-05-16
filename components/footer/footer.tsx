import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-10 mb-10 mt-10">
      <div className="w-full flex flex-col justify-start items-start">
        {/* logo */}
        <Link href="/" className="w-full flex">
          <div className="p-px rounded-full">
            <button className="flex justify-center items-center text-washed-purple-400 rounded-full px-10 md:px-20 py-2">
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
        <p className="py-2 px-10 md:px-20 w-full md:w-1/2 text-washed-purple-700 text-sm">
          Join thousands of Satisfied users who rely on our platform for their
          personal and professional productivity needs, Join thousands of
          Satisfied users who rely on our platform for their personal{" "}
        </p>
      </div>

      <div className="w-full flex flex-wrap lg:flex-nowrap lg:flex-row px-10 gap-y-10 md:px-20 justify-normal md:justify-around lg:justify-between">
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">About</Link>
            <Link href="/" className="text-neutral-7 ">About Us</Link>
            <Link href="/" className="text-neutral-7 ">Blog</Link>
            <Link href="/" className="text-neutral-7 ">Careers</Link>
            <Link href="/" className="text-neutral-7 ">Jobs</Link>
            <Link href="/" className="text-neutral-7 ">In Press</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">Support</Link>
            <Link href="/" className="text-neutral-7 ">Contact Us</Link>
            <Link href="/" className="text-neutral-7 ">Online Chat</Link>
            <Link href="/" className="text-neutral-7 ">Whatsapp</Link>
            <Link href="/" className="text-neutral-7 ">Telegram</Link>
            <Link href="/" className="text-neutral-7 ">Ticketing</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">FAQ</Link>
            <Link href="/" className="text-neutral-7 ">Account</Link>
            <Link href="/" className="text-neutral-7 ">Manage Deliveries</Link>
            <Link href="/" className="text-neutral-7 ">Orders</Link>
            <Link href="/" className="text-neutral-7 ">Payments</Link>
            <Link href="/" className="text-neutral-7 ">Returns</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">Resources</Link>
            <Link href="/" className="text-neutral-7 ">About Us</Link>
            <Link href="/" className="text-neutral-7 ">Blog</Link>
            <Link href="/" className="text-neutral-7 ">Careers</Link>
            <Link href="/" className="text-neutral-7 ">Jobs</Link>
            <Link href="/" className="text-neutral-7 ">In Press</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">Work</Link>
            <Link href="/" className="text-neutral-7 ">Work With Us</Link>
            <Link href="/" className="text-neutral-7 ">Work Chat</Link>
            <Link href="/" className="text-neutral-7 ">Whatsapp</Link>
            <Link href="/" className="text-neutral-7 ">Email Marketing</Link>
            <Link href="/" className="text-neutral-7 ">Ticketing</Link>
        </div>
        <div className="flex flex-col gap-y-2 w-1/2 lg:w-full text-center lg:text-left">
            <Link href="/" className="text-neutral-1 font-bold">Privacy</Link>
            <Link href="/" className="text-neutral-7 ">Private Works</Link>
            <Link href="/" className="text-neutral-7 ">Manage Deliveries</Link>
            <Link href="/" className="text-neutral-7 ">Orders</Link>
            <Link href="/" className="text-neutral-7 ">Transactions</Link>
            <Link href="/" className="text-neutral-7 ">Security</Link>
        </div>
      </div>
      <h5 className="text-center font-bold text-neutral-1 flex flex-col ">Write us On
      
      <span className="text-center text-washed-purple-600">Chatprodigy@gmail.com</span>
      </h5>
     
    </div>
  );
};

export default Footer;
