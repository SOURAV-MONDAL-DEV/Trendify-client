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
import person from "../../img/person.png";


const EditUser = () => {
    const { userInfo , doFetch, setDoFetch } = useContext(AuthContext);
    const { _id, email, name, userPhoto, work, address, college, } = userInfo;
    const [openInput, setOpenInput] = useState(false)


    const imageHostKey = process.env.REACT_APP_imgbb_key;



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
            })
            .catch(er => console.error(er));




    }




    const handleEditBtn = () => {
        setOpenInput(!openInput)

    }


    const handleUploadPhoto = (event) =>{
        event.preventDefault();
        const form = event.target;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`


        

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    const userData = {
                        name,
                        email,
                        work,
                        address,
                        college,
                        userPhoto : imgData.data.url,
                    }
            


                    fetch(`https://trendify-server.vercel.app/users/${email}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.acknowledged) {
                                toast('Photo uploaded')
                                setOpenInput(false);
                                setDoFetch(true)

                                // form.reset();
                                // setDoFetch(true)
                                // navigate('/dashbord/myProducts')
                            }
                        })
                        .catch(er => console.error(er));



                }
                // console.log(imgData);
            })
        // console.log(url);





    }




    return (
        <div>
            <div className=' flex flex-col items-center my-5'>
                    
                    {
                        userPhoto ?
                            <img src={userPhoto} className='w-24 rounded-full md:mx-3' alt=''></img>
                            :
                            <img src={person} className='w-24 rounded-full md:mx-3' alt=''></img>
                    }

                    <div className='flex justify-end'>
                        <button onClick={handleEditBtn} ><MdOutlineDriveFileRenameOutline className='text-4xl text-secondary m-2'></MdOutlineDriveFileRenameOutline></button>
                    </div>

                    {
                        openInput && <form onSubmit={handleUploadPhoto} className='flex  items-end justify-around mb-10'>
                            <div className="form-control pr-2">
                                <label className="label">
                                    <span className="label-text">Add new profile photo</span>
                                </label>
                                <input className='text-gray-600 p-3 border border-pink-500 rounded-md' name="image" type="file" placeholder="Add photo" ></input>
                            </div>
                            <div className="form-control flex ">
                                <input className='btn btn-secondary btn-sm' type='submit' value="upload" />
                            </div>
                        </form>

                    }

                <p className='text-2xl font-bold'>{name}</p>
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