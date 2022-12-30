import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { MdLocationOn } from 'react-icons/md';
import { MdEmail } from 'react-icons/md';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { FaRegEdit } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const EditUser = () => {
    const { userInfo } = useContext(AuthContext);
    const { _id, email, name, userPhoto, work, address, college, } = userInfo;





    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target

        const name = form.name.value;
        const email = form.email.value;
        const work = form.work.value;
        const address = form.address.value;
        const college = form.college.value;


        const userData = {
            name,
            email,
            work,
            address,
            college,
            userPhoto
        }



        fetch(`https://trendify-server.vercel.app/users/${userInfo?.email}`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                toast("Update success")
                                console.log(data);                                
                            })
                            .catch(er => console.error(er));




    }




    return (
        <div>
            <div className='flex flex-row'>
                <div className='basis-5/6 flex flex-col items-center my-5'>
                    <img src={userPhoto} className='w-24 rounded-full md:mx-3' alt=''></img>
                    <p className='text-2xl font-bold'>{name}</p>
                </div>
                {/* <Link to="/editUser" ><FaRegEdit className='basis-1/6 mt-10 text-2xl'></FaRegEdit></Link> */}
            </div>
            <form onSubmit={handleSubmit} className='m-8 lg:'>

                <div className='flex items-center my-2  mx-auto'>
                    <MdOutlineDriveFileRenameOutline className='inline text-2xl text-gray-500'></MdOutlineDriveFileRenameOutline>
                    <p className=' font-semibold ml-5'>Edit Name:</p>
                </div>
                <input
                    className="input input-bordered input-secondary w-full max-w-xs"
                    type="text"
                    name='name'
                    defaultValue={name}
                />



                <div className='flex items-center my-2  mx-auto'>
                    <MdEmail className='inline text-2xl text-gray-500'></MdEmail>
                    <p className=' font-semibold ml-5'>Edit Email :</p>
                </div>
                <input
                    className="input input-bordered input-secondary w-full max-w-xs"
                    type="text"
                    name='email'
                    defaultValue={email}
                />



                <div className='flex items-center my-2  mx-auto'>
                    <BsFillBriefcaseFill className='inline text-2xl text-gray-500'></BsFillBriefcaseFill>
                    <p className=' font-semibold ml-5'>Edit Works :</p>
                </div>
                <input
                    className="input input-bordered input-secondary w-full max-w-xs"
                    type="text"
                    name='work'
                    defaultValue={work}
                />



                <div className='flex items-center my-2  mx-auto'>
                    <MdLocationOn className='inline -ml-1 text-3xl text-gray-500'></MdLocationOn>
                    <p className=' font-semibold ml-5'>Edit Address : </p>
                </div>
                <input
                    className="input input-bordered input-secondary w-full max-w-xs"
                    type="text"
                    name='address'
                    defaultValue={address}
                />



                <div className='flex items-center my-2  mx-auto'>
                    <IoMdSchool className='inline -ml-1 text-3xl text-gray-500'></IoMdSchool>
                    <p className=' font-semibold ml-5'>Edit College :</p>
                </div>
                <input
                    className="input input-bordered input-secondary w-full max-w-xs"
                    type="text"
                    name='college'
                    defaultValue={college}
                />


                <div className='flex justify-center mx-10 mt-5 mb-20'>
                    <button type='submit' className='btn btn-secondary px-10 btn-md'>Submit</button>
                </div>

            </form>




        </div>
    );
};

export default EditUser;