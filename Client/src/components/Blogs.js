import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Axios from 'axios'
import BlogSkeleton from './BlogSkeleton';
// import Cookies from 'js-cookie'

function Blogs() {

    const [blogs, setBlogs] = useState("");

    useEffect(() => {
        Axios.get('/blog')
        .then((res) => setBlogs(res.data.blogs))
        .catch(err => console.log(err))
        console.log("",blogs)
    }, [blogs])

 
    return (
        <div className='flex flex-col w-full items-center h-screen my-5'>
            {blogs ? blogs.map(blog => (
                <BlogCard key={blog._id} id={blog._id} image={blog.image} title={blog.title} description={blog.description} summary={blog.summary} author={blog.author.name} date={blog.date} />
            )) : <BlogSkeleton />}
        </div>
    )
}

export default Blogs