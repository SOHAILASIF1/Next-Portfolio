import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className=' container  text-white flex items-center justify-between h-20 border-b-4   px-20'>
        <div className=' logo text-white '>
            <h3 className='font-bold text-xl'  >MyPortfolio</h3>
          

        </div>
        <div id="links" className='flex  items-center justify-between'>
          <ul className='flex  items-center justify-between gap-8 text-2xl '>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/project">Project</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>



          </ul>
          

        </div>
        
        

        
    </nav>
  )
}

export default Navbar