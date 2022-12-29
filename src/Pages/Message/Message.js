import React from 'react';
import { TbMessages } from 'react-icons/tb';
import { HiOutlineEmojiHappy } from "react-icons/hi";


const Message = () => {
    return (
        <div>

            <div className='flex items-center justify-center my-5  mx-auto'>
                <p className=' text-2xl font-bold text-secondary m-10'>Message option are coming soon </p>
                <HiOutlineEmojiHappy className='text-4xl text-secondary ml-2'></HiOutlineEmojiHappy>
            </div>
            <TbMessages className='text-4xl font-bold text-gray-400 m-10 text-center' ></TbMessages>
        </div>
    );
};

export default Message;