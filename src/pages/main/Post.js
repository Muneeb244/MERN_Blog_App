import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlinePencilAlt } from "react-icons/hi";
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import Lottie from 'lottie-react';
import loading from '../../lottieFile/loading.json';
import Cookies from 'js-cookie';

function Post() {

    const { userToken } = useContext(UserContext)
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        if (Cookies.get('token')) {
            userData();
        }
        blogPost();

    }, []);

    const userData = () => {
        Axios.get('http://localhost:5000/api/auth/profile', {
            headers: {
                'authorization': Cookies.get('token')
            }
        })
            .then(res => {
                setUser(res.data.user)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const blogPost = () => {
        Axios.get(`http://localhost:5000/api/blog/${id}`, {
            headers: {
                'authorization': userToken
            }
        })
            .then(res => {
                setPost(res.data.blog)
            })
            .catch(err => {
                console.log(err)
            }
            )
    }
    return (
        <>
            {post ? <div className='my-5 flex flex-col items-center'>
                <h1 className='text-center text-2xl font-bold'>{post.title}</h1>
                <p className='text-gray-400 mt-2'>{post.date}</p>
                <h1 className='text-xl font-bold'>by @{post.author.name}</h1>
                {post.author._id === user?._id && <Link to={`/edit/${id}`} state={{id}}>
                    <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1'>
                        <HiOutlinePencilAlt size={30} color='#fff' />
                        <p className='text-white'>edit this post</p>
                    </div>
                </Link>}
                <img src={post.image} alt={post.title} className='w-1/2 h-1/4 mx-auto mt-3' />
                <p className='text-left w-1/2 mx-auto mt-5' dangerouslySetInnerHTML={{ __html: post.description }}></p>
            </div>
                :
                <Lottie animationData={loading} style={{ width: '100%', height: "80vh" }} />}
        </>
    )
}

export default Post