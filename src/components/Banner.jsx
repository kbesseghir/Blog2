import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
    <div className='text-white text-center'>
    <h1 className='text-white text-5xl leading-snug lg:text-7xl font-bold mb-5'>Welcome to Our Blog</h1>
    <p className='text-grey-100 mx-auto lg:w-3/5 mb-5 font-primary'>Explore a world of knowledge and inspiration on our blog. Uncover insightful articles, compelling stories, and expert perspectives. Stay informed, stay inspired – your journey begins here.</p>
    
    <div>
   <Link to='/' className='text-white inline-flex  font-medium items-center hover:text-orange-500 py-1'>Learn more<FaArrowRightLong className='ml-2 mt-1' /></Link>
    </div>
    </div>
    </div>
  )
}

export default Banner;