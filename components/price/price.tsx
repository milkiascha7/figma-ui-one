import React from "react";

const Price = () => {
  return (
    <div className="w-full h-full mt-20 flex flex-col gap-y-10 lg:gap-y-8 md:items-center justify-start md:justify-center mx-20 overflow-x-hidden relative">
      <div className="p-px bg-gradient-to-r from-primary-blue-600 to-primary-purple-600 w-fit rounded-full z-10 mx-5 md:mx-0">
        <button className="bg-gradient-to-b from-neutral-13 to-brand-dark flex justify-center items-center text-washed-purple-400 rounded-full px-3 py-1">
          <span className="text-[13px] md:text-lg px-8">Plans</span>
        </button>
      </div>

      <h2 className="px-5 md:px-0 text-washed-purple-400 text-[40px] md:text-[50px] lg:text-[60px] leading-tight w-full md:w-2/3 md:text-center font-bold z-10">
        Choose the perfect plan for you
      </h2>
      <p className="px-5 md:px-0 text-washed-purple-700 text-md w-full md:w-1/3 md:text-center">
        Join thousands of Satisfied users who rely on our platform for their
        personal and professional productivity needs
      </p>

      <div className="w-1/2 h-[303px] purple-gradient absolute right-0 top-52" />

      {/* cards */}
      <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:w-2/3 h-full justify-around md:gap-x-10 lg:gap-x-28 gap-y-8 md:gap-y-0 px-5 md:px-10 border-washed-blue-900 z-50">
        {/* card one */}
        <div className="w-full md:w-2/4 lg:w-2/3 h-full flex flex-col  border-[1px] border-neutral-11 rounded-3xl">
          <div className="w-full mt-4">
            <h3 className="text-neutral-2 pl-10 text-4xl font-bold">Free</h3>
          </div>
          <div className="mt-10 text-neutral-6 pl-10 text-2xl">
            <h3>$0</h3>
            <p className="text-base text-neutral-8 pt-4">
              Limited block trias for teams
            </p>
          </div>

          {/* get started button */}
          <div className="px-10 mt-4">
            <div className="bg-gradient-to-r from-borderColor-gradient-2 to-neutral-7 rounded-md p-px hover:bg-gradient-to-r hover:from-borderColor-gradient-2 hover:to-brand-washedPurple transition delay-150 duration-300 ease-in-out">
              <button className="text-md md:text-lg w-full bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 py-2 px-4 rounded-md  text-neutral-6 hover:border-primary-primary-purple-600 hover:text-brand-washedPurple">
                <span className="ml-4 text-md md:text-lg font-bold">
                  Get Started
                </span>
              </button>
            </div>
          </div>

          {/* points */}
          <div className="flex flex-col px-10 gap-y-4 my-8">
            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Unlimited blocks for teams</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Limited file uploads</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">15 day page history</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Limited blocks for teams</p>
            </div>
          </div>
        </div>

       
        {/* Card two */}
        <div className="w-full md:w-2/4 lg:w-2/3 h-full flex flex-col border-[1px] border-washed-blue-900 rounded-3xl relative">
             {/* icon of tag */}
        <div className=" relative -right-6 top-2">
          <svg
            width="38"
            height="38"
            viewBox="0 0 38 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute right-0"
          >
            <path
              d="M33.7484 24.2043L24.3386 33.6197C22.7213 35.238 20.2219 35.238 18.6046 33.6197L5.2251 20.2322C3.90185 19.0552 3.16672 17.2899 3.16672 15.5245V5.81483C3.16672 4.34367 4.34293 3.16675 5.81321 3.16675H15.517C17.2813 3.16675 19.0457 3.90233 20.2219 5.07925L33.6014 18.4668C35.2187 20.0851 35.2187 22.7331 33.7484 24.2043Z"
              fill="#B5B2FF"
            />
            <path
              d="M13.4713 13.4212C14.4123 12.4802 14.4123 10.9544 13.4713 10.0133C12.5302 9.07229 11.0045 9.07229 10.0634 10.0133C9.12233 10.9544 9.12233 12.4802 10.0634 13.4212C11.0045 14.3623 12.5302 14.3623 13.4713 13.4212Z"
              fill="#6889FF"
            />
          </svg>
        </div>
          <div className="w-full mt-2">
            <h3 className="text-neutral-2 pl-10 text-4xl font-bold">
              Pro Plans
            </h3>
          </div>
          <div className="mt-10 text-neutral-6 pl-10 text-2xl">
            <h3>
              $72.99 <span className="text-neutral-8 text-base">/yr</span>
            </h3>
            <p className="text-base text-neutral-8 pt-2">billed annually</p>
            <p className="text-base text-neutral-8 ">$17 billed monthly</p>
          </div>

          {/* get started button */}
          <div className="px-10 mt-2">
            <div className="bg-gradient-to-r from-borderColor-gradient-2 to-neutral-7 rounded-md p-px hover:bg-gradient-to-r hover:from-borderColor-gradient-2 hover:to-brand-washedPurple transition delay-150 duration-300 ease-in-out">
              <button className="text-md md:text-lg w-full bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 py-2 px-4 rounded-md  text-neutral-6 hover:border-primary-primary-purple-600 hover:text-brand-washedPurple">
                <span className="ml-4 text-md md:text-lg font-bold">
                Get Started
                </span>
              </button>
            </div>
          </div>

          {/* points */}
          <div className="flex flex-col px-10 gap-y-4 my-8">
            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Unlimited blocks for teams</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Unlimited file uploads</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">30 day page history</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">10+ Email accounts</p>
            </div>

            <div className="flex w-full gap-x-4">
              <div className="">
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_8_821)">
                    <path
                      d="M7.96965 9.85248C7.59775 9.4859 7.03991 9.4859 6.66802 9.85248C6.29612 10.2191 6.29612 10.7689 6.66802 11.1355L10.4799 15.1679C10.6659 15.3512 10.9448 15.4428 11.1308 15.4428C11.4097 15.4428 11.6886 15.3512 11.7816 15.0762L20.893 3.80391C21.1719 3.43733 21.1719 2.79582 20.7071 2.52088C20.4281 2.24595 19.8703 2.24595 19.4984 2.70417L17.6389 4.9953C15.9654 3.34569 13.5481 2.33759 11.1308 2.33759C6.0172 2.33759 1.83337 6.46162 1.83337 11.5021C1.83337 16.5426 6.0172 20.6666 11.1308 20.6666C16.2443 20.6666 20.4281 16.5426 20.4281 11.5021C20.4281 10.6773 20.3352 9.85248 20.0563 9.02767C19.8703 8.56945 19.4054 8.29451 18.9406 8.38616C18.4757 8.4778 18.1968 9.02767 18.2898 9.4859C18.4757 10.1274 18.5687 10.8606 18.5687 11.5021C18.5687 15.5345 15.2216 18.8337 11.1308 18.8337C7.03991 18.8337 3.69285 15.5345 3.69285 11.5021C3.69285 7.46971 7.03991 4.17049 11.1308 4.17049C13.1762 4.17049 15.0357 4.9953 16.5232 6.46162L11.1308 13.1517L7.96965 9.85248Z"
                      fill="#B5B2FF"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_8_821">
                      <rect
                        width="22"
                        height="22"
                        fill="white"
                        transform="translate(0 0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <p className="text-neutral-6">Unlimited blocks for teams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
