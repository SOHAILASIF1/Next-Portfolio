"use client"
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter'


export default function Home() {
  return (
    <>
      <div className=" container flex items-center justify-between px-20   bg-linear-to-r from-red-500 via-orange-500 to-yellow-500 h-[100vh]">
        <div className="w-[50%] `h-[100vh]` flex items-center justify-center ">
          <div className="text-center space-y-4">

            <h1 className="text-5xl font-extrabold text-red-900 leading-tight">
              Hey, I’am{' '}
              <span className="text-red-950 underline decoration-red-600">
                Sohail Asif
              </span>
            </h1>

            <h2 className="text-3xl font-semibold">

              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-900 to-black">
                <Typewriter
                  words={[
                    'a Frontend Developer',
                    'a MERN Developer',
                    'a JavaScript Lover',
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

          </div>
        </div>

        <div className='flex items-center justify-center'>
         <Image
      src="/Img.png"
      alt="Hero image"
      width={500}
      height={300}
    />
          

        </div>
      </div>


    </>


  );
}
