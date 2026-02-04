"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen">

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center">
          <div className="text-center lg:text-left space-y-8">

            <h1 className="text-4xl lg:text-6xl text-red-600 tracking-wider drop-shadow-[0_0_15px_rgba(255,0,0,0.7)]">
              Hey, I’m{" "}
              <span className="text-red-700 underline decoration-red-900 decoration-wavy">
                Sohail Asif
              </span>
            </h1>

            <h2 className="text-2xl lg:text-4xl text-gray-200">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-400 to-gray-300 drop-shadow-[0_0_10px_rgba(255,0,0,0.6)]">
                <Typewriter
                  words={[
                    "a Frontend Developer",
                    "a MERN Developer",
                    "a JavaScript Addict",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="▮"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <button className="mt-6 px-8 py-3 bg-red-900 text-red-100 rounded-lg border border-red-700 shadow-[0_0_20px_rgba(255,0,0,0.5)] hover:bg-red-800 hover:shadow-[0_0_30px_rgba(255,0,0,0.8)] transition duration-300">
              Download Resume 🩸
            </button>

          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-10 lg:mb-0">
          <Image
            src="/sohail.png"
            alt="Sohail Asif"
            width={450}
            height={450}
            priority
            className="object-contain drop-shadow-[0_0_40px_rgba(255,0,0,0.6)] grayscale hover:grayscale-0 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}
