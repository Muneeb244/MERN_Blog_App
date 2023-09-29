import React from 'react';

function BlogSkeleton() {
  return (
    <>

      <div className='w-[80%] lg:w-[60%] flex gap-5 lg:gap-8 animate-pulse mt-5'>
        <div className='w-[50%] h-64 bg-[#D3D3D3] rounded'>
        </div>
        <div className='w-[50%]  flex flex-col gap-8'>
          <div className='bg-[#D3D3D3]  h-16 rounded'>
          </div>
          <div className='flex gap-4'>
            <span className='bg-[#D3D3D3] w-[50%] h-8 rounded'></span>
            <span className='bg-[#D3D3D3] w-[50%] h-8 rounded'></span>
          </div>
          <div className='bg-[#D3D3D3] h-full rounded'>
          </div>
        </div>
      </div>
      <div className='w-[80%] lg:w-[60%] flex gap-5 lg:gap-8 animate-pulse mt-5'>
        <div className='w-[50%] h-64 bg-[#D3D3D3] rounded'>
        </div>
        <div className='w-[50%]  flex flex-col gap-8'>
          <div className='bg-[#D3D3D3]  h-16 rounded'>
          </div>
          <div className='flex gap-4'>
            <span className='bg-[#D3D3D3] w-[50%] h-8 rounded'></span>
            <span className='bg-[#D3D3D3] w-[50%] h-8 rounded'></span>
          </div>
          <div className='bg-[#D3D3D3] h-full rounded'>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSkeleton