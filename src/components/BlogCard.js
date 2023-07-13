import React from 'react'

function BlogCard({ image, title, description, littleDescription, author, date }) {
  return (
    <div className='flex w-7/12 h-1/3 mt-5 p-2 hover:shadow-lg cursor-pointer'>
      <div className='w-1/3 mr-10'>
        <img src={image} alt={title} className='w-full h-full' />
      </div>
      <div className='w-1/2'>
        <h1 className='font-bold text-2xl mt-2'>{title}</h1>
        <div className='flex w-full'>
          <p className='font-medium'>{author}</p>
          <p className='font-semibold text-stone-500 ml-5'>{date}</p>
        </div>
        <p className='mt-2 text-sm font-normal'>{littleDescription}</p>
      </div>
    </div>
  )
}

export default BlogCard