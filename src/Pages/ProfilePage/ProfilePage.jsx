import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import person from "../../img/person.png";
import ProfileCard from '../../Components/ProfileCard/ProfileCard';


const ProfilePage = () => {

    const { userInfo } = useContext(AuthContext);
    const { _id, email, name, userPhoto, work, address, college, } = userInfo;


    return (
        <div>
            <ProfileCard></ProfileCard>
            <div className='flex flex-row'>
                <div className='basis-5/6 flex flex-col items-center my-5'>
                    {
                        userPhoto?
                        <img src={userPhoto} className='w-24 rounded-full md:mx-3' alt=''></img>
                        :
                        <img src={person} className='w-24 rounded-full md:mx-3' alt=''></img>

                    }
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className=' font-semibold text-gray-500'>New profile page</p>
                    <p className=' font-semibold text-gray-500'>No Friends yet</p>
                </div>
                <Link to="/editUser" ><FaRegEdit className='basis-1/6 mt-10 text-secondary text-2xl'></FaRegEdit></Link>
            </div>
            <div className='m-8 lg:'>
                <div className='flex items-center my-2  mx-auto'>
                    <MdEmail className='inline text-2xl text-gray-500'></MdEmail>
                    <p className=' font-semibold ml-5'>Email: {email} </p>
                </div>
                <div className='flex items-center my-2  mx-auto'>
                    <BsFillBriefcaseFill className='inline text-2xl text-gray-500'></BsFillBriefcaseFill>
                    <p className=' font-semibold ml-5'>Works at: {work}</p>
                </div>
                <div className='flex items-center my-2  mx-auto'>
                    <MdLocationOn className='inline -ml-1 text-3xl text-gray-500'></MdLocationOn>
                    <p className=' font-semibold ml-5'>Address : {address} </p>
                </div>
                <div className='flex items-center my-2  mx-auto'>
                    <IoMdSchool className='inline -ml-1 text-3xl text-gray-500'></IoMdSchool>
                    <p className=' font-semibold ml-5'>College/University: {college} </p>
                </div>
            </div>

        </div>
    );
};

export default ProfilePage;