import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function PostSkeleton() {
    return (
        <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DFE3EE">
            <div className='flex w-full h-3/4 mt-5 p-2 bg-red-600 justify-center'>
                <div className='w-1/2 bg-blue-100 h-1/2'>
                    <h1 className='font-bold text-4xl mt-2'><Skeleton /></h1>
                    <div className='flex flex-col w-6/8 items-center h-1/4'>
                        <p className='w-1/3 h-1/2'><Skeleton /></p>
                        <p className='w-1/3 h-full'><Skeleton /></p>
                    </div>
                    <p className='w-full h-full'><Skeleton /></p>
                </div>
            </div>
            <div className='w-full h-3/5 bg-green-500'>
                <h1 className='h-full text-10xl'>
                    <Skeleton className='h-full' />
                </h1>
            </div>
        </SkeletonTheme>
    )
}

export default PostSkeleton