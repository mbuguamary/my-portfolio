import React from 'react';
import { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';

const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleclick=()=> setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#332c94f1] text-gray-300'>
      <div>
    <ul className='hidden md:flex'>
      <li>Home</li>
      <li>About</li>
      <li>Skills</li>
      <li>Projects</li>
      <li>Contact</li>
    </ul>
  </div>
  {/* <div onClick={handleclick} className='md:hidden z-10'>
    <FaBars/>
  </div> */}
   <ul >
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