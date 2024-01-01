import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const BlogPage = () => {
    const  [blogs,setBlogs] = useState([])
    let url = 'http://localhost:5000/blogs'
    const  [selectedCategory,setSelectedCategory] = useState(null)
    const pageSize=12
    const [currentPage,setCurrentPage] = useState(1)
    const [activeCategory,setActiveCategory] =useState(null)
  
    useEffect(()=>
    {
      async function fetchData(){
        if (selectedCategory){
            url+=`&category=${selectedCategory}`;
        }
        const response = await fetch(url)
        const data = await response.json()
        setBlogs(data)
      }
  
  fetchData()
  
    },[currentPage,pageSize,selectedCategory])

    const handelPageChange= (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const handelCategoryChange= (category)=>{
        setSelectedCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    } co
   
  return (
    <div>
    <div>page</div>

    <div>
    <BlogCard blogs ={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />
    hi
    </div>

    <div></div>
    
    </div>
  )
}

export default BlogPage