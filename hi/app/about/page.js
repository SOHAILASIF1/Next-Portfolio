import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <>
      <h1 className=' text-6xl text-white text-center my-12'>MY INFO</h1>

    <div className='h-screen flex items-center justify-between p-20 '>
       <div className="w-[50%] flex items-center justify-center">
        <Image
          src="/Img.png"
          alt="Sohail Asif"
          width={450}
          height={450}
          priority
          className="object-contain"
        />
      </div>
      <div>

      </div>
     
    </div>
    </>
  )
}

export default About