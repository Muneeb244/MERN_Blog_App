import Axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContext';


export default function Header() {

    // const [token, setToken] = useState(Cookies.get('token'))

    const { user, setUser, userToken, setUserToken } = useContext(UserContext);
    const navigate = useNavigate();


    useEffect(() => {
        document.title = "Blog"
        let token = Cookies.get('token');
        setUserToken(token)
    }, [])


    const logout = () => {
        Cookies.remove('token')
        setUserToken(null)
        setUser({})
        navigate('/')
    }

    return (
        <header className='flex justify-between p-5 sticky top-0 bg-white shadow'>
            <Link to='./' className='text-lg'>
                <img src={require('../assets/images/blog.png')} alt='logo' className='w-25 h-10' />
            </Link>
            <nav className='flex justify-around w-1/6'>
                <Link to={userToken ? '/create' : "/login"} className='text-lg font-bold'>{userToken ? "Create new post" : "Login"}</Link>
                <Link to={userToken ? '' : "/register"} className='text-lg font-bold' onClick={logout}>{userToken ? "logout" : "SignUp"}</Link>
            </nav>
        </header>
    )
}