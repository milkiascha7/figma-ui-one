"use client";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { opacity } from "./animate";

const slider1 = [
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
    images: "Ellipse 1.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
    images: "Ellipse 2.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
    images: "Ellipse 3.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
    images: "Ellipse 4.png",
  },
];
const slider2 = [
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

    images: "Ellipse 2.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

    images: "Ellipse 1.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

    images: "Ellipse 4.png",
  },
  {
    name: "Helen Top",
    handle: "@webprodigies",
    text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

    images: "Ellipse 3.png",
  },
];
const Testimonial = () => {
  const container = useRef(null);
  const isInViewText = useInView(container);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <div
      ref={container}
      className="w-full h-full mt-20 flex flex-col gap-y-10 lg:gap-y-8 md:items-center justify-start md:justify-center mx-20 overflow-x-hidden"
    >
      <motion.div
        variants={opacity}
        animate={isInViewText ? "open" : "closed"}
        className="p-px bg-gradient-to-r from-primary-blue-600 to-primary-purple-600 w-fit rounded-full z-10 mx-5 md:mx-0"
      >
        <button className="bg-gradient-to-b from-neutral-13 to-brand-dark bg-transparent flex justify-center items-center text-washed-purple-400 rounded-full px-3 py-1">
          <span className="text-[13px] md:text-lg px-8">Tesimonial</span>
        </button>
      </motion.div>

      <motion.h2
        variants={opacity}
        animate={isInViewText ? "open" : "closed"}
        className="px-5 md:px-0 text-washed-purple-400 text-[40px] md:text-[50px] lg:text-[60px] leading-tight w-full md:w-2/3 md:text-center font-bold z-10"
      >
        Trusted By All
      </motion.h2>

      <motion.p
        variants={opacity}
        animate={isInViewText ? "open" : "closed"}
        className="px-5 md:px-0 text-washed-purple-700 text-md w-full md:w-1/3 md:text-center"
      >
        Join thousands of Satisfied users who rely on our platform for their
        personal and professional productivity needs
      </motion.p>
      <div className="w-full h-[203px] purple-gradient absolute" />

      {/* tesimonial cards here */}
      {/* cards one */}
      <motion.div
        style={{ x: x1 }}
        className="flex justify-between items-center md:w-[170vw] lg:w-full gap-x-5 mt-10 z-50 relative -left-28"
      >
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[500px] md:w-[400px] h-40 flex flex-col bg-gradient-to-b border-neutral-11 from-brand-dark to-neutral-12 pt-2 pb-4 gap-y-2 lg:gap-y-4 rounded-md"
            >
              {/* image and person */}
              <div className="flex w-full items-center gap-x-2 px-4">
                <div className="w-16 h-16 relative rounded-full">
                  <Image
                    src={`/${project.images}`}
                    alt="person"
                    fill
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <h4 className="text-sm text-washed-purple-600">
                    {project.name}
                  </h4>
                  <h5 className="text-[10px] text-washed-purple-700">
                    {project.handle}
                  </h5>
                </div>
              </div>

              {/*  testimonial */}
              <div className="w-full px-5">
                <p className="text-washed-purple-800 text-[13px]">
                  {project.text}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>

      {/* cards two */}
      <motion.div
        style={{ x: x2 }}
        className="flex justify-between items-center md:w-[170vw] lg:w-full gap-x-5 mt-10 z-50 relative -right-20"
      >
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[500px] md:w-[400px] h-40 flex flex-col bg-gradient-to-b border-neutral-11 from-brand-dark to-neutral-12 pt-2 pb-4 gap-y-2 lg:gap-y-4 rounded-md"
            >
              {/* image and person */}
              <div className="flex w-full items-center gap-x-2 px-4">
                <div className="w-16 h-16 relative rounded-full">
                  <Image
                    src={`/${project.images}`}
                    alt="person"
                    fill
                    className="w-full h-full object-cover object-center rounded-full"
                  />
                </div>
                <div className="flex flex-col ">
                  <h4 className="text-sm text-washed-purple-600">
                    {project.name}
                  </h4>
                  <h5 className="text-[10px] text-washed-purple-700">
                    {project.handle}
                  </h5>
                </div>
              </div>

              {/*  testimonial */}
              <div className="w-full px-5">
                <p className="text-washed-purple-800 text-[13px]">
                  {project.text}
                </p>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="flex justify-between items-center"></div>
    </div>
  );
};

export default Testimonial;
