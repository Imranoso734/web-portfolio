import React from "react";
import { FaGreaterThan } from "react-icons/fa";
export const HeroSection = () => {
  return (
    <div>
      <div className="bg-main bg-[#011627]">
        <div className="mt-32 pb-80 mx-5 md:mx-10">
            <div className="">
              <p className="text-white text-lg">Hi all. I am</p>
              <h1 className="text-white text-2xl md:text-5xl py-3">Muhammad Imran</h1>
              <h2 className="text-[#4D5BCE] text-xl md:text-4xl flex gap-3 items-center">
                <FaGreaterThan /> Full-stack Developer
              </h2>
              <p className="text-[#607B96] pt-4 text-[16px]">
                // welcome here 
             
              </p>
              <p className="text-[#607B96] pb-4 text-[16px]">
              
                // you can also see it on my Github page
              </p>
              <span className="text-[#4D5BCE] pr-2">const</span>
              <span className="text-[#43D9AD]">github</span>
              <span className="text-white px-2">=</span>{" "}
              <a href="">
                <span className="text-[#E99287] border-b border-b-gray-800">
                  “https://github.com/example/url”
                </span>
              </a>
            </div>
            {/* <div className="img">
              <Image alt='image' src="/main-img.jpg" width={400} height={500} alt="my-img"></Image>
            </div> */}
         
        </div>
      </div>
    </div>
  );
};
