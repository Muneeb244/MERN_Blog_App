import React, { useContext, useEffect, useState, useRef } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
import SocialSection from '../../components/SocialSection';
import CommentSection from '../../components/CommentSection';

function Post() {

    const navigate = useNavigate();

    const { userToken } = useContext(UserContext)
    const [user, setUser] = useState(null);
    const [post, setPost] = useState(null);
    const [del, setDel] = useState(false);
    const location = useLocation();
    const { id } = location.state;
    const token = Cookies.get("token")

    useEffect(() => {


        if (token) {
            userData();
        }
        blogPost();

    }, []);

    const commentSectionRef = useRef(null);

    const scrollToCommentSection = () => {
        if (commentSectionRef.current) {
            commentSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const userData = () => {
        Axios.get('http://localhost:5000/api/auth/profile', {
            headers: {
                'authorization': token
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
                'authorization': token
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
                'authorization': token
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
                <h1 className='text-center text-lg md:text-2xl font-bold p-2 lg:p-0'>{post.title}</h1>
                <span className='text-gray-400 mt-0 lg:mt-2'>{post.date}</span>
                <h1 className='text-lg lg:text-xl font-bold'>by @{post.author.name}</h1>
                {
                    post.author._id === user?._id &&
                    <div className='flex'>
                        <Link to={`/edit/${id}`} state={{ id }}>
                            <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1'>
                                <HiOutlinePencilAlt size={30} color='#fff' className='w-[20px] lg:w-[30px] mr-1 lg:mr-0' />
                                <p className='text-white'>edit this post</p>
                            </div>
                        </Link>
                        <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1 ml-3' onClick={deletePost}>
                            <MdDelete size={30} color='#fff' className='w-[20px] lg:w-[30px] mr-1 lg:mr-0' />
                            <p className='text-white'>delete this post</p>
                        </div>
                        <ToastContainer />
                        {del && <div className='w-full h-full flex justify-center items-center bg-white absolute top-0 left-0 z-10'>
                            <Lottie animationData={deleted} className='w-1/2 h-1/2' />
                        </div>}
                    </div>
                }
                <div className='flex justify-center w-[80%] mt-3 xl:w-1/2 mx-auto space-x-3'>
                    <img src={post.image} alt={post.title} className='w-[80%]' />
                    {token && <SocialSection id={id} userId={user?._id} likedBy={post.likedBy} scrollToCommentSection={scrollToCommentSection} />}
                </div>
                <p className='text-left w-[80%] xl:w-1/2 mx-auto mt-5' dangerouslySetInnerHTML={{ __html: post.description }}></p>
                <div ref={commentSectionRef} className='w-full flex justify-center'>
                    {token && <CommentSection blogId={id} userId={user?._id} />}
                </div>
            </div>
                :
                <Lottie animationData={loading} style={{ width: '100%', height: "80vh" }} />}
        </>
    )
}

export default Post