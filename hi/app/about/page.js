import Image from "next/image";
import React from "react";
import Heading from "../component/Heading";

function About() {
  return (
    <>
      {/* Page Title */}
      <h1 className="text-6xl text-red-600 text-center my-12 tracking-widest font-bold">
        MY INFO
      </h1>
      <div>

      <div className="min-h-screen flex items-center px-20 gap-10">
        
        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <div className="relative">
            <Image
              src="/sohail.png"
              alt="Sohail Asif"
              width={450}
              height={450}
              priority
              className="object-contain grayscale hover:grayscale-0 transition duration-500"
            />

            {/* glow effect */}
            <div className="absolute inset-0 bg-red-600 blur-3xl opacity-20 -z-10"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-1/2 text-white space-y-6">
          <Heading title="About Me" />

          <p className="text-2xl text-gray-300 leading-relaxed">
            <span className="text-red-500 font-semibold">
              AI-driven Full-Stack Developer
            </span>
            <br />
            Specializing in <span className="text-white">React, Node.js</span>, and
            REST APIs.
          </p>

          <p className="text-gray-400">
            Passionate about building <span className="text-red-400">performant</span>,
            accessible, and scalable user interfaces with a dark-creative edge.
          </p>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-black transition-all duration-300 tracking-wider"
          >
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      <div className="px-20">
        <Heading title={"Experience"}/>
       

      </div>
      </div>
    </>
  );
}

export default About;
