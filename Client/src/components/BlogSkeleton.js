import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BlogSkeleton() {
  return (
    // <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DFE3EE">
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
      {/* <div className='w-[60%] flex gap-8 animate-pulse mt-5'>
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
      </div> */}
      {/* <div className='flex w-10/12 xl:w-7/12 h-fit lg:h-1/3 mt-5 p-2 hover:shadow-lg'>
          <div className='w-3/6 md:w-3/6 mr-3 lg:mr-10'>
            <Skeleton className='h-full' />
          </div>
          <div className='w-1/2'>
            <h1 className='font-bold text-[13px] md:text-lg lg:text-5xl lg:mt-2'><Skeleton /></h1>
            <div className='flex w-full flex-col md:flex-row lg:my-2'>
              <p className='w-full md:w-1/3 h-1/2'><Skeleton /></p>
              <p className='md:ml-5 w-full md:w-1/3 h-full'><Skeleton /></p>
            </div>
            <p className='text-[5rem] w-full'><Skeleton /></p>
          </div>
        </div> */}
    </>
    // </SkeletonTheme>
    /* // <SkeletonTheme baseColor="#D3D3D3" highlightColor="#DFE3EE"> */
    /* //   <div className='flex flex-col items-center w-screen my-24'> */
    //     {/* <div className='flex w-10/12 xl:w-7/12 h-fit lg:h-1/3 mt-5 p-2 hover:shadow-lg'>
    //       <div className='w-3/6 md:w-3/6 mr-3 lg:mr-10'>
    //         <Skeleton className='h-full' />
    //       </div>
    //       <div className='w-1/2'>
    //         <h1 className='font-bold text-[13px] md:text-lg lg:text-5xl lg:mt-2'><Skeleton /></h1>
    //         <div className='flex w-full flex-col md:flex-row lg:my-2'>
    //           <p className='w-full md:w-1/3 h-1/2'><Skeleton /></p>
    //           <p className='md:ml-5 w-full md:w-1/3 h-full'><Skeleton /></p>
    //         </div>
    //         <p className='text-[5rem] w-full'><Skeleton /></p>
    //       </div>
    //     </div> */}
    //     {/* <div className='flex w-10/12 xl:w-7/12 h-fit lg:h-1/3 mt-5 p-2 hover:shadow-lg'>
    //       <div className='w-3/6 md:w-3/6 mr-3 lg:mr-10'>
    //         <Skeleton className='h-full' />
    //       </div>
    //       <div className='w-1/2'>
    //         <h1 className='font-bold text-[13px] md:text-lg lg:text-5xl lg:mt-2'><Skeleton /></h1>
    //         <div className='flex w-full flex-col md:flex-row lg:my-2'>
    //           <p className='w-full md:w-1/3 h-1/2'><Skeleton /></p>
    //           <p className='md:ml-5 w-full md:w-1/3 h-full'><Skeleton /></p>
    //         </div>
    //         <p className='text-[5rem] w-full'><Skeleton /></p>
    //       </div>
    //     </div> */}
    //     {/* <div className='flex w-10/12 xl:w-7/12 h-fit lg:h-1/3 mt-5 p-2 hover:shadow-lg'>
    //       <div className='w-3/6 md:w-3/6 mr-3 lg:mr-10'>
    //         <Skeleton className='h-full' />
    //       </div>
    //       <div className='w-1/2'>
    //         <h1 className='font-bold text-[13px] md:text-lg lg:text-5xl lg:mt-2'><Skeleton /></h1>
    //         <div className='flex w-full flex-col md:flex-row lg:my-2'>
    //           <p className='w-full md:w-1/3 h-1/2'><Skeleton /></p>
    //           <p className='md:ml-5 w-full md:w-1/3 h-full'><Skeleton /></p>
    //         </div>
    //         <p className='text-[5rem] w-full'><Skeleton /></p>
    //       </div>
    //     </div> */}
    //   </div>
    // </SkeletonTheme>

  )
}

export default BlogSkeleton