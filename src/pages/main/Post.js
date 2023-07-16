import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { HiOutlinePencilAlt } from "react-icons/hi";
import UserContext from '../../context/UserContext';

function Post() {

    const {userToken, user} = useContext(UserContext);

    const location = useLocation();
    const { image, title, author, description, date, id, authorId } = location.state;
    return (
        <div className='my-5 flex flex-col items-center'>
            <h1 className='text-center text-2xl font-bold'>{title}</h1>
            <p className='text-gray-400 mt-2'>{date}</p>
            <h1 className='text-xl font-bold'>by @{author}</h1>
            {authorId === user._id && <Link to={`/edit/${id}`}>
                <div className='flex justify-center items-center bg-black p-3 w-fit rounded cursor-pointer mt-1'>
                    <HiOutlinePencilAlt size={30} color='#fff' />
                    <p className='text-white'>edit this post</p>
                </div>
            </Link>}
            <img src={image} alt={title} className='w-1/2 h-1/4 mx-auto mt-3' />
            <p className='text-left w-1/2 mx-auto mt-5' dangerouslySetInnerHTML={{ __html: description }}></p>


        </div>
    )
}

export default Post