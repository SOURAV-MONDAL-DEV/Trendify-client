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
            <div className='mt-4 mx-8 w-fit'>

                <div className='flex items-center gap-3 mt-4 mb-4'>
                    <input type="text" placeholder="Search tredify" className="p-2 border border-secondary w-full  " />
                    <BsSearch className='text-2xl text-secondary'></BsSearch>
                </div>

                {/* {
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
                } */}

                {/* <div className="flex items-center gap-3 mt-4">
                    <FaEdit className='text-3xl text-secondary' />
                    <p className=' font-semibold  md:text-lg'>Write a post</p>
                </div> */}
                <Link className="flex items-center gap-3 py-[6px] px-3   w-48 rounded-md mt-2 border-[1px] border-cyan-500 ">
                    <div className=" p-2 rounded-lg bg-blue-100">
                        <BiNews className=" text-2xl text-[#0362fc]"></BiNews>
                    </div>
                    {/* <BiNews className='text-3xl text-secondary' /> */}
                    <p className=' text-gray-700 font-[500]  md:text-lg'>NewsFeed</p>
                </Link>
                <Link className="flex items-center gap-3 py-[6px] px-3   w-48 rounded-md mt-2 border-[1px] border-cyan-500 ">
                    <div className=" p-2 rounded-lg bg-cyan-100">
                        <FaFacebookMessenger className=" text-2xl text-[#03fce3]"></FaFacebookMessenger>
                    </div>
                    {/* <FaFacebookMessenger className='text-3xl text-secondary' /> */}
                    <p className=' text-gray-700 font-[500]  md:text-lg'>Chats</p>
                </Link>
                <Link className="flex items-center gap-3 py-[6px] px-3   w-48 rounded-md mt-2 border-[1px] border-cyan-500 ">
                    <div className=" p-2 rounded-lg bg-yellow-100">
                        <BsPeopleFill className=" text-2xl text-[#e3a936]"></BsPeopleFill>
                    </div>
                    {/* <BsPeopleFill className='text-3xl text-secondary' /> */}
                    <p className=' text-gray-700 font-[500]  md:text-lg'>Friends</p>
                </Link>
                <Link className="flex items-center gap-3 py-[6px] px-3   w-48 rounded-md mt-2 border-[1px] border-cyan-500 ">
                    <div className=" p-2 rounded-lg bg-red-100">
                        <MdVideoLibrary className=" text-2xl text-[#fc0303]"></MdVideoLibrary>
                    </div>
                    {/* <MdVideoLibrary className='text-3xl text-secondary' /> */}
                    <p className=' text-gray-700 font-[500]  md:text-lg'>Videos</p>
                </Link>
                <Link className="flex items-center gap-3 py-[6px] px-3   w-48 rounded-md mt-2 border-[1px] border-cyan-500 ">
                    <div className=" p-2 rounded-lg bg-purple-100">
                        <MdBookmarks className=" text-2xl text-[#8403fc]"></MdBookmarks>
                    </div>
                    {/* <MdBookmarks className='text-3xl text-secondary' /> */}
                    <p className=' text-gray-700 font-[500]  md:text-lg'>Saved</p>
                </Link>
            </div>
        </div>
    );
};

export default Menu;