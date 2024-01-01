import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const BlogCard = ({blogs}) => {

    const filteredBlogs = blogs ;

  return (
    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-8'>

    { filteredBlogs.map((blog)=>
        { return (
            <Link key={blog.id} className="max-w-md mx-auto bg-white  rounded-xl   shadow-lg mb-4">
            <img className="w-full h-60 object-cover object-center" src={blog.image} alt={blog.title} />
            <div className="p-6">
              <h2 className="text-xl fontbold text-gray-800 mt-4 mb-2 hover:text-blue-600 ">{blog.title}</h2>
              <p className="text-sm mb-2  text-gray-600 flex items-center "><FaUser className='mr-2' />{blog.author}</p>
              <p className="text-sm mb-2  text-gray-500  " >Published: {blog.published_date}</p>

                <div>
              </div>
            </div>
          </Link>
        )



        })}
    
    
    </div>
  )
}

export default BlogCard