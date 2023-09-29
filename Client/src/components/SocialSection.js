import React, { useState } from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { BiMessageRounded } from "react-icons/bi";
import { useSpring, animated } from 'react-spring';
import Cookies from 'js-cookie';
import Axios from 'axios';


function SocialSection({ id, userId, likedBy }) {
    const [liked, setLiked] = useState(likedBy.includes(userId));



    const heartSpring = useSpring({
        transform: liked ? 'scale(1.2)' : 'scale(1)',
        config: {
            tension: 400,
            friction: 20,
        },
    });

    const Icon = liked ? HiHeart : HiOutlineHeart;
    const IconColor = liked ? "red" : "#000";
    const token = Cookies.get('token');

    const likePost = () => {
        if (!token) return alert("Please login first")
        setLiked(true);
        Axios.post(`/like/${id}`, null, {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                if (res?.data.error) return setLiked(false);
            })
            .catch(err => {
                setLiked(false)
                alert("Error liking blog")
                console.log("error from like", err)
            }
            )
    }


    const unLikePost = () => {
        if (!token) return alert("Please login first")
        setLiked(false);
        Axios.delete(`/like/${id}`, {
            headers: {
                'authorization': token
            }
        })
            .then(res => {
                if (res?.data.error) return setLiked(true);
                const userIndex = likedBy.indexOf(userId);
                likedBy.splice(userIndex, 1);
            })
            .catch(err => {
                setLiked(true)
                console.log("error from unlike", err.response)
            }
            )
    }

    const scrollToBottom = () => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth', // This creates a smooth scrolling effect
        });
      };



    return (
        <div className='flex flex-col xl:space-y-3 relative bottom-0 right-0'>
            <animated.div
                style={{
                    ...heartSpring,
                    cursor: 'pointer',
                }}
                onClick={() => liked ? unLikePost() : likePost()}
            >
                <Icon size={30} color={IconColor} className='w-[20px] lg:w-[30px]' />
            </animated.div>
            <BiMessageRounded size={30} color='#000' className='w-[20px] lg:w-[30px] cursor-pointer' onClick={scrollToBottom} />
        </div>
    );
}

export default SocialSection