import Image from 'next/image'
import React from 'react'

function Servicess({title,disc,src}) {
  return (
    <div className='w-100 h-100  flex px-10
    py-5 justify-start flex-col gap-10'>
        <Image
        className=''
        src={src}
        width={80}
        height={80}
        alt='hi'
        />

        <h1 className='text-2xl text-red-700 '>{title}</h1>

        <p className='text-sm'>{disc}</p>

        

    </div>
  )
}

export default Servicess