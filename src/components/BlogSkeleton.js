import React from 'react';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BlogSkeleton() {
  return (
    <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DFE3EE">
      <div className='flex w-7/12 h-1/3 mt-5 p-2 hover:shadow-lg cursor-pointer'>
        <div className='w-3/6 mr-10 h-full'>
          <Skeleton className='h-full'/>
        </div>
        <div className='w-1/2'>
          <h1 className='font-bold text-4xl mt-2'><Skeleton /></h1>
          <div className='flex w-6/8 justify-start h-1/4 mt-2'>
            <p className='w-1/3 h-1/2'><Skeleton /></p>
            <p className='ml-5 w-1/3 h-full'><Skeleton /></p>
          </div>
          <p className='text-6xl w-full'><Skeleton /></p>
        </div>
      </div>
      <div className='flex w-7/12 h-1/3 mt-5 p-2 hover:shadow-lg cursor-pointer'>
        <div className='w-3/6 mr-10 h-full'>
          <Skeleton className='h-full'/>
        </div>
        <div className='w-1/2'>
          <h1 className='font-bold text-4xl mt-2'><Skeleton /></h1>
          <div className='flex w-6/8 justify-start h-1/4 mt-2'>
            <p className='w-1/3 h-1/2'><Skeleton /></p>
            <p className='ml-5 w-1/3 h-full'><Skeleton /></p>
          </div>
          <p className='text-6xl w-full'><Skeleton /></p>
        </div>
      </div>
    </SkeletonTheme>
  )
}

export default BlogSkeleton