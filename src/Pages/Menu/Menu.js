import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { BsFillHouseDoorFill, BsSearch } from 'react-icons/bs';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
import person from "../../img/person.png";
import { BsPersonPlusFill } from 'react-icons/bs';
import { FaEdit } from 'react-icons/fa';
import { BiNews } from 'react-icons/bi';
import { FaFacebookMessenger } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import { MdVideoLibrary } from 'react-icons/md';
import { MdBookmarks } from 'react-icons/md';
import BackButton from '../../Components/BackButton/BackButton'


const Menu = () => {

    const { user, logOut, userInfo } = useContext(AuthContext);
    const navigate = useNavigate();
    const { _id, email, name, userPhoto, work, address, college, } = userInfo;


    return (
        <div className=' min-h-screen'>
            <BackButton></BackButton>
            <div className='mt-4 ml-4'>

                <div className='flex items-center gap-3 mt-4'>
                    <input type="text" placeholder="Search tredify" className="p-2 w-full border border-secondary lg:w-48 max-w-xs " />
                    <BsSearch className='text-2xl text-secondary'></BsSearch>
                </div>

                {
                    user?.uid ?
                        <div className="flex items-center gap-3 mt-4">
                            {
                                userInfo?.userPhoto && <img onClick={() => navigate("/profilepage")} src={userInfo?.userPhoto} className='w-8 rounded-full' alt=''></img>
                            }
                            <span className=' font-semibold  md:text-lg'>{user?.displayName || userInfo?.name}</span>
                        </div>
                        :
                        <div className="flex items-center mt-4">
                            <BsPersonPlusFill className="text-4xl "></BsPersonPlusFill>
                        </div>
                }

                <div className="flex items-center gap-3 mt-4">
                    <FaEdit className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Write a post</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <BiNews className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>NewsFeed</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <FaFacebookMessenger className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Chats</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <BsPeopleFill className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Friends</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <MdVideoLibrary className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Videos</p>
                </div>
                <div className="flex items-center gap-3 mt-4">
                    <MdBookmarks className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Saved</p>
                </div>
            </div>
        </div>
    );
};

export default Menu;