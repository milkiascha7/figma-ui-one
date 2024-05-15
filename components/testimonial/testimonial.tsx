import Image from "next/image";

const Testimonial = () => {
  const slider1 = [
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
      images: "Ellipse 1.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
      images: "Ellipse 2.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
      images: "Ellipse 3.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",
      images: "Ellipse 4.png",
    },
 
  ];
  const slider2 = [
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

      images: "Ellipse 2.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

      images: "Ellipse 1.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

      images: "Ellipse 4.png",
    },
    {
      name: "Helen Top",
      handle: "webprodigies",
      text: " This platform has revolutionized the way i work. It’s intuitive,flexible and has made me more productive that ever before",

      images: "Ellipse 3.png",
    },
  ];
  return (
    <div className="w-full h-full mt-20 flex flex-col gap-y-10 lg:gap-y-8 md:items-center justify-start md:justify-center mx-20 overflow-x-hidden">
      <div className="p-px bg-gradient-to-r from-primary-blue-600 to-primary-purple-600 w-fit rounded-full z-10 mx-5 md:mx-0">
        <button className="bg-gradient-to-b from-neutral-13 to-borderColor-gradient-2 flex justify-center items-center text-washed-purple-400 rounded-full px-3 py-1">
          <span className="text-[13px] md:text-lg">Tesimonial</span>
        </button>
      </div>

      <h2 className="px-5 md:px-0 text-washed-purple-400 text-[40px] md:text-[50px] lg:text-[60px] leading-tight w-full md:w-2/3 md:text-center font-bold z-10">
        Trusted By All
      </h2>

      <p className="px-5 md:px-0 text-washed-purple-700 text-md w-full md:w-1/3 md:text-center">
        Join thousands of Satisfied users who rely on our platform for their
        personal and professional productivity needs
      </p>
      <div className="w-full h-[203px] purple-gradient absolute" />

      {/* tesimonial cards here */}
      {/* cards one */}
      <div className="flex justify-between items-center w-full gap-x-10 mt-10 z-50">
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[400px] h-40 flex flex-col bg-gradient-to-b border-neutral-11 from-brand-dark to-neutral-12 pt-2 pb-4 gap-y-4 rounded-md"
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
                  <h4 className="font-sm text-washed-purple-600">
                    {project.name}
                  </h4>
                  <h5 className="font-sm text-washed-purple-700">
                    {project.handle}
                  </h5>
                </div>
              </div>

              {/*  testimonial */}
              <div className="w-full px-5">
                <p className="text-washed-purple-800 text-sm">
                {project.text}
                </p>
              </div>
            </div>
          );
        })}

      </div>

      {/* cards two */}
      <div className="flex justify-between items-center w-full gap-x-10 mt-10 z-50">
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[400px] h-40 flex flex-col bg-gradient-to-b border-neutral-11 from-brand-dark to-neutral-12 pt-2 pb-4 gap-y-4 rounded-md"
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
                  <h4 className="font-sm text-washed-purple-600">
                    {project.name}
                  </h4>
                  <h5 className="font-sm text-washed-purple-700">
                    {project.handle}
                  </h5>
                </div>
              </div>

              {/*  testimonial */}
              <div className="w-full px-5">
                <p className="text-washed-purple-800 text-sm">
                {project.text}
                </p>
              </div>
            </div>
          );
        })}

      </div>
      <div className="flex justify-between items-center"></div>
    </div>
  );
};

export default Testimonial;
