import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { IoSend } from "react-icons/io5";
import { AiFillDelete } from "react-icons/ai";
import Cookies from 'js-cookie';


function CommentSection({ blogId, userId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        getComments()
        console.log("comments are", comments)
    }, [blogId]);

    const getComments = () => {
        Axios.get(`/comment/${blogId}`)
            .then((res) => setComments(res.data))
            .catch((error) => console.error(error));
    }

    const handleCommentSubmit = () => {
        Axios.post('/comment', {
            text: newComment,
            user: userId,
            blog: blogId,
        }, {
            headers: {
                'authorization': Cookies.get("token")
            }
        })
            .then((res) => {
                setComments([...comments, res.data]);
                setNewComment('');
            })
            .catch((error) => console.error(error));
    };

    const handleCommentDelete = (commentId) => {
        Axios.delete(`/comment/${commentId}`)
            .then(() => {
                setComments(comments.filter((comment) => comment._id !== commentId));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className="w-[80%] xl:w-1/2 flex flex-col items-center">
            <div className='w-[80%] my-7 h-[1px] bg-neutral-700'></div>
            <h2 className="text-2xl font-semibold mb-4">Comments</h2>

            {/* Add a new comment */}
            <div className='w-full flex flex-row justify-around items-center'>
                <input
                    type="text"
                    placeholder='Add a comment...'
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[80%] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black'
                />
                <button className='shadow bg-black text-white font-bold py-2 px-4 rounded flex justify-center' onClick={handleCommentSubmit} type='submit'>
                    <IoSend color='#fff' size={20} />
                </button>
            </div>

            {/* Display comments */}
            <div className="space-y-4 w-full xl:w-full flex flex-col items-center">
                {comments.map((comment) => (
                    <div
                        key={comment._id}
                        className="w-full sm:w-[93%] bg-gray-200 p-4 rounded-lg shadow-md mt-2"
                    >
                        <div className="flex justify-between">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-semibold">
                                    {comments[0].user.name.charAt(0)}
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-gray-600 font-bold">
                                        {comments[0].user.name}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {new Date(comment.createdAt).toLocaleDateString()}{' '}
                                        {new Date(comment.createdAt).toLocaleTimeString()}
                                    </p>
                                </div>
                            </div>
                            {comment.user._id === userId && (
                                <button
                                    onClick={() => handleCommentDelete(comment._id)}
                                    className="hover:text-red-700 w-10 h-10 bg-red-600 rounded-full flex justify-center items-center"
                                >
                                    <AiFillDelete color='#fff' size={20} />
                                </button>
                            )}
                        </div>
                        <p className="mt-2">{comment.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentSection;
