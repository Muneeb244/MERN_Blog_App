import React from 'react'

function BlogCard({image, title, description, littleDescription, author, date}) {
  return (
    <div className='flex justify-between w-8/12 h-1/3 bg-red-200 p-2'>
        <img src={image} alt={title} className='w-full h-full mr-10' />
        <div>
            <h1 className='font-bold text-2xl mt-2'>{title}</h1>
            <div className='flex w-full'>
                <p className='font-medium'>{author}</p>
                <p className='font-light ml-5'>{date}</p>
            </div>
            <p className='mt-7'>{littleDescription}</p>
        </div>
    </div>
  )
}

export default BlogCard