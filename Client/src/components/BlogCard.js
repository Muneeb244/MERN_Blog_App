import React from 'react';
import { Link } from 'react-router-dom';
import CommentSection from './CommentSection';

function BlogCard({ image, title, summary, author, date, id}) {

  return (
    <div className='flex w-11/12 xl:w-7/12 h-fit lg:h-1/3 mt-5 p-2 hover:shadow-lg cursor-pointer'>
      <div className='w-3/6 md:w-3/6 mr-3 lg:mr-10'>
        <Link to={`/post/${id}`} state={{id}}>
          <img src={image} alt={title} className='w-full h-full' />
        </Link>
      </div>
      <div className='w-1/2'>
        <Link to={`/post/${id}`} state={{id}}>
          <h1 className='font-bold text-[13px] md:text-lg lg:text-xl xl:text-2xl lg:mt-2 overflow-hidden overflow-ellipsis'>{title}</h1>
        </Link>
        <div className='flex w-full flex-col md:flex-row'>
          <p className='font-medium text-[10px] sm:text-[12px] md:text-md lg:text-base'>{author}</p>
          <p className='font-semibold text-stone-500 md:ml-10 text-[10px] sm:text-[12px] md:text-md lg:text-base'>{date}</p>
        </div>
        <p className='lg:mt-2 text-[10px] md:text-[15px] md:leading-5 font-normal lg:text-base mt-1 leading-3 overflow-hidden overflow-ellipsis'>{summary}</p>
      </div>
    </div>
  )
}

export default BlogCard