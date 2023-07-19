import React, { useContext, useEffect, useState } from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HiOutlinePencilAlt } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import UserContext from '../../context/UserContext';
import Axios from 'axios';
import Lottie from 'lottie-react';
import loading from '../../lottieFile/loading.json';
import deleted from '../../lottieFile/deleted.json';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Post() {

    const navigate = useNavigate();

    const { userToken } = useContext(UserContext)
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [del, setDel] = useState(false);
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


    const deletePost = () => {
        Axios.delete(`http://localhost:5000/api/blog/${id}`, {
            headers: {
                'authorization': Cookies.get('token')
            }
        })
            .then(res => {
                setDel(true)
                setTimeout(() => {
                    return navigate('/')
                }, 2000)
            })
            .catch(err => {
                console.log(err)
                toast.error('Something went wrong', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                });
            })
    }




    return (
        <>
            {post ? <div className='my-5 flex flex-col items-center'>
                <h1 className='text-center text-2xl font-bold'>{post.title}</h1>
                <p className='text-gray-400 mt-2'>{post.date}</p>
                <h1 className='text-xl font-bold'>by @{post.author.name}</h1>
                {
                    post.author._id === user?._id &&
                    <div className='flex'>
                        <Link to={`/edit/${id}`} state={{ id }}>
                            <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1'>
                                <HiOutlinePencilAlt size={30} color='#fff' />
                                <p className='text-white'>edit this post</p>
                            </div>
                        </Link>
                        <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1 ml-3' onClick={deletePost}>
                            <MdDelete size={30} color='#fff' />
                            <p className='text-white'>delete this post</p>
                        </div>
                        <ToastContainer />
                        {del && <div className='w-full h-full flex justify-center items-center bg-white absolute top-0 left-0 z-10'>
                            <Lottie animationData={deleted} className='w-1/2 h-1/2' />
                        </div>}
                    </div>
                }
                <img src={post.image} alt={post.title} className='w-1/2 h-1/4 mx-auto mt-3' />
                <p className='text-left w-1/2 mx-auto mt-5' dangerouslySetInnerHTML={{ __html: post.description }}></p>
            </div>
                :
                <Lottie animationData={loading} style={{ width: '100%', height: "80vh" }} />}
        </>
    )
}

export default Post