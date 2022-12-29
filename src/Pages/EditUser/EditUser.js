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

const EditUser = () => {
    const { userInfo } = useContext(AuthContext);
    const { _id, email, name, userPhoto } = userInfo;



    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-5/6 flex flex-col items-center my-5'>
                    <img src={userPhoto} className='w-24 rounded-full md:mx-3' alt=''></img>
                    <p className='text-2xl font-bold'>{name}</p>
                </div>
                {/* <Link to="/editUser" ><FaRegEdit className='basis-1/6 mt-10 text-2xl'></FaRegEdit></Link> */}
            </div>
            <div className='m-8 lg:'>
                <div className='flex items-center my-2  mx-auto'>
                    <BsFillBriefcaseFill className='inline text-2xl text-gray-500'></BsFillBriefcaseFill>
                    <p className=' font-semibold ml-5'>Works at:</p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
                <div className='flex items-center my-2  mx-auto'>
                    <BsFillHouseDoorFill className='inline  text-2xl text-gray-500'></BsFillHouseDoorFill>
                    <p className=' font-semibold ml-5'>Lives in:</p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
                <div className='flex items-center my-2  mx-auto'>
                    <MdLocationOn className='inline -ml-1 text-3xl text-gray-500'></MdLocationOn>
                    <p className=' font-semibold ml-5'>Address : </p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
                <div className='flex items-center my-2  mx-auto'>
                    <IoMdSchool className='inline -ml-1 text-3xl text-gray-500'></IoMdSchool>
                    <p className=' font-semibold ml-5'>College/University: </p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
                <div className='flex items-center my-2  mx-auto'>
                    <BsFillTelephoneFill className='inline text-xl text-gray-500'></BsFillTelephoneFill>
                    <p className=' font-semibold ml-5'>No number </p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
                <div className='flex items-center my-2  mx-auto'>
                    <MdEmail className='inline text-xl text-gray-500'></MdEmail>
                    <p className=' font-semibold ml-5'>{email} </p>
                </div>
                <input type="text" placeholder="" className="input input-bordered input-secondary w-full max-w-xs" />
            </div>
            <div className='flex justify-end mx-10 mb-20'>
            <button type='submit' className='btn btn-secondary px-10 btn-md'>Submit</button>
            </div>



        </div>
    );
};

export default EditUser;