import React from 'react'
import Servicess from '../component/Services'

function Services() {
  return (
    <>
    <h1 className="text-6xl text-red-600 text-center my-12 tracking-widest font-bold">
       Services
      </h1>
    <div className=' h-screen w-screen px-40 grid grid-cols-2  '>
      <Servicess src={"/web.png"}  title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>

     
      <Servicess src={"/web.png"} title={"Web Devolpment"} disc={"lorem is lorem is a lorem that is a lorem where lorem is a lorem and whatsa is a lorem lets lorem and a lorem"}/>
      
    </div>
    </>
  )
}

export default Services