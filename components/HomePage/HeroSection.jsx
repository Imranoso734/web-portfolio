import React from "react";
import { FaGreaterThan } from "react-icons/fa";
import Image from 'next/image'

export const HeroSection = () => {
  return (
    <div>
      <div className="bg-main bg-[#011627]">
        <div className="mt-10 pb-80 mx-5 md:mx-10">
          <div className="">
            <p className="text-white text-lg">Hi all. I am</p>
            <h1 className="text-white text-2xl md:text-5xl py-3">Muhammad Imran</h1>
            <h2 className="text-[#4D5BCE] text-xl md:text-4xl flex gap-3 items-center">
              <FaGreaterThan /> Full-stack Developer
            </h2>
            <p className="text-[#607B96] pt-4 text-[16px]">
              Welcome to my digital space, where creativity meets functionality.
              In this corner of the internet, I showcase my journey, projects, and the things that make my heart beat a little faster. I believe in the power of design, the magic of code, and the impact of a well-told story.
            </p>
            <p className="text-[#607B96] pt-4 text-[16px]">
              Whether you're here to explore my latest projects, learn more about my skills, or simply curious about the person behind the screen, I'm thrilled to have you. Feel free to browse around, and don't hesitate to reach out if you have any questions or exciting opportunities to discuss.
            </p>
            <p className="text-[#607B96] pt-4 text-[16px]">
              Thank you for stopping by. Let's create something amazing together!
            </p>
            {/* <p className="text-[#607B96] pb-4 text-[16px]">
                // you can also see it on my Github page
            </p> */}

            <span className="text-[#4D5BCE] pr-2">const</span>
            <span className="text-[#43D9AD]">github</span>
            <span className="text-white px-2">=</span>{" "}
            <a href="">
              <span className="text-[#E99287] border-b border-b-gray-800">
                “https://github.com/example/url”
              </span>
            </a>
          </div>
          <div className="img">
            <Image alt='image' src="/my-photo.png" width={400} height={500}></Image>
          </div>

        </div>
      </div>
    </div>
  );
};
