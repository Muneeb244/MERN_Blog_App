import React from 'react';
import Lottie from 'lottie-react';
import Moon404 from '../../lottieFile/Moon404.json';

function NotFound() {
    return (
        <div className='w-full h-full flex justify-center items-center bg-white absolute top-0 left-0 z-10'>
            <Lottie animationData={Moon404} className='w-1/2 h-1/2' />
        </div>
    )
}

export default NotFound