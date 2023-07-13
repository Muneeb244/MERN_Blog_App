import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='flex justify-between p-5 sticky top-0 bg-white shadow'>
            <Link to='./' className='text-lg'>
                <img src={require('../assets/images/blog.png')} alt='logo' className='w-25 h-10' />
            </Link>
            <nav className='flex justify-between w-1/12'>
                <Link to='/login' className='text-lg font-bold'>Login</Link>
                <Link to='/register' className='text-lg font-bold'>SignUp</Link>
            </nav>
        </header>
    )
}