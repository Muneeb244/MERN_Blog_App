import React from 'react';
import { Link } from 'react-router-dom';

function BlogCard({ image, title, description, summary, author, date, id, authorId}) {

  return (
    <div className='flex w-7/12 h-1/3 mt-5 p-2 hover:shadow-lg cursor-pointer'>
      <div className='w-3/6 mr-10'>
        <Link to="/post/id" state={{image, title, author, description, date, id, authorId}}>
          <img src={image} alt={title} className='w-full h-full' />
        </Link>
      </div>
      <div className='w-1/2'>
        <Link to="/post/id" state={{image, title, author, description, date, id, authorId}}>
          <h1 className='font-bold text-2xl mt-2'>{title}</h1>
        </Link>
        <div className='flex w-full'>
          <p className='font-medium'>{author}</p>
          <p className='font-semibold text-stone-500 ml-5'>{date}</p>
        </div>
        <p className='mt-2 text-sm font-normal'>{summary}</p>
      </div>
    </div>
  )
}

export default BlogCard