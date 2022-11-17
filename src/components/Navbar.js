import React from 'react';
import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleclick=()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='hidden md:flex'>
    <ul className='flex'>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </div>
  <div onClick={handleclick} className='md:hidden z-10'>
  {!nav ? <FaBars /> : <FaTimes />}
  </div> 
   <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
        }>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </div>
    
  )
}

export default Navbar