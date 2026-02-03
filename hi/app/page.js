"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="min-h-screen bg-linear-to-r from-red-500 via-orange-500 to-yellow-500">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="text-center lg:text-left space-y-6">

            <h1 className="text-4xl lg:text-5xl font-extrabold text-red-900 leading-tight">
              Hey, I’m{" "}
              <span className="text-red-950 underline decoration-red-700">
                Sohail Asif
              </span>
            </h1>

            <h2 className="text-2xl lg:text-3xl font-semibold">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-red-900 to-black">
                <Typewriter
                  words={[
                    "a Frontend Developer",
                    "a MERN Developer",
                    "a JavaScript Lover",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <button className="mt-4 px-6 py-3 bg-gray-800 text-white rounded-lg border border-gray-700 hover:bg-gray-900 transition duration-300">
              Download Resume
            </button>

          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
          <Image
            src="/Img.png"
            alt="Sohail Asif"
            width={450}
            height={450}
            priority
            className="object-contain"
          />
        </div>

      </div>
    </section>
  );
}
