import Axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


export default function Header() {

    const {setUser, setUserToken, userToken } = useContext(UserContext);
    const [token, setToken] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Blog"
        let token = Cookies.get('token');
        setToken(token);
        console.log("from header",token)
    }, [userToken])


    const logout = () => {
        Cookies.remove('token')
        setUserToken(null)
        setToken(null)
        setUser({})
        navigate('/')
    }

    return (
        <header className='flex justify-between items-center p-5 sticky w-full top-0 bg-white shadow z-10'>
            <Link to='./' className='text-lg'>
                <img src={require('../assets/images/blog.png')} alt='logo' className='w-25 h-10' />
            </Link>
            <nav className='flex justify-around w-3/6 md:w-2/6 xl:w-3/12'>
                <Link to={token ? '/create' : "/login"} className='text-sm md:text-md lg:text-lg font-bold'>{token ? "Create new post" : "Login"}</Link>
                <Link to={token ? '' : "/register"} className='text-sm md:text-md lg:text-lg font-bold' onClick={token ? logout : ""}>{token ? "logout" : "SignUp"}</Link>
            </nav>
        </header>
    )
}