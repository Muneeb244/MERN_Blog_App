import React from 'react'

export default function Header() {
    return (
        <header className='flex justify-between p-5 sticky top-0 bg-white'>
            <a href='./' className='text-lg'>
                <img src={require('../assets/images/blog.png')} alt='logo' className='w-25 h-10' />
            </a>
            <nav className='flex justify-between w-1/12'>
                <a href='./' className='text-lg font-bold'>Login</a>
                <a href='./' className='text-lg font-bold'>SignUp</a>
            </nav>
        </header>
    )
}