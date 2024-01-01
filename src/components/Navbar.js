import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebook,FaTwitter ,FaDribbble, FaBars} from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
    const navItems =[
        {path:"/",link:"Home"},
        {path:"/blogs",link:"Blog"},
        {path:"/services",link:"Service"},
        {path:"/about",link:"About"},
        {path:"/contact",link:"Contact"},

    ]

    const [isMenuOpen,setMenuOpen] = useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!isMenuOpen)
    }

  return (
<<<<<<< HEAD
   <header className='bg-black  text-white fixed top-0 right-0 left-0'>
=======
   <header className='bg-black text-white fixed top-0 right-0 left-0'>
>>>>>>> c92627ef80d08e65507ff4547c5a2ec7ed10e7b0
   <nav className='px-4 py-4 flex justify-between items-center max-w-7xl mx-auto' > 
   <a href='/' className=' text-xl text-white font-bold' >Design<span className='text-orange-500'>BK</span></a>
    <ul className='md:flex gap-12 text-lg hidden'>
    {navItems.map(({path,link})=>
        <li  className='text-white' key={path}>
<<<<<<< HEAD
        <NavLink   className={({ isActive }) =>
        isActive ? "active" : ""
      } to={path}>{link}</NavLink>
=======
        <NavLink to={path}>{link}</NavLink>
>>>>>>> c92627ef80d08e65507ff4547c5a2ec7ed10e7b0
        </li>)}
    </ul>
    <div className='text-white lg:flex gap-4 hidden items-center'>
    <a  href='/' className='hover:text-orange-500'><FaFacebook /></a>
    <a  href='/' className='hover:text-orange-500'><FaTwitter /></a>
    <a  href='/' className='hover:text-orange-500'><FaDribbble /></a>
    <button className="bg-orange-500 hover:bg-white hover:text-orange-500 text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline-orange duration-200 ease-in ">Log in</button>
    </div>
    <div className='md:hidden'><button  onClick={toggleMenu} className='cursor-pointer'>
    { isMenuOpen?<FaXmark className='w-5 h-5' />:<FaBars  className='w-5 h-5'/>}
    
    </button>
    </div>
    </nav>
    <div>
    <ul className={`md:hidden  gap-12 block bg-white text-lg mt-14 space-y-4 px-4 py-6 ${isMenuOpen ? " fixed top-0 left-0  w-full transition-all ease-out duration-150" : "hidden"} `}>
    {navItems.map(({path,link})=>
        <li  className='text-black' key={path}>
        <NavLink  onClick={toggleMenu} to={path}>{link}</NavLink>
        </li>)}
    </ul>
    </div>
   </header>
  )
}

export default Navbar