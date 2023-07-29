import React, { useContext } from 'react';
import { BsPersonFill, BsPersonPlusFill, BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { TbListDetails } from 'react-icons/tb';
import { AiOutlineRight } from 'react-icons/ai';
import { IoMdSettings } from 'react-icons/io';
import cover from '../../img/cover.jpg'

const MoreOption = () => {

    const navigate = useNavigate();


    const { user, logOut, userInfo } = useContext(AuthContext);




    return (
        <div className=' min-h-screen pt-4 ml-4'>



            <div className="cover-container w-full relative">
                <img className="cover-image w-full h-48 object-cover rounded-lg" src={cover} />
                <img className="profile-picture w-24 h-24 rounded-full bg-blue-400 absolute left-1/2 transform translate-x-[-50%] translate-y-[-50%] " src={userInfo?.userPhoto} />
            </div>




            <div className="mt-20">
                {
                    user?.uid ?
                        <div className="flex flex-col items-center">
                            {
                                userInfo?.userPhoto ?
                                    <img src={userInfo?.userPhoto} className='w-8 rounded-full md:mx-3 lg:hidden' alt=''></img>
                                    :
                                    <BsPersonFill className="text-4xl hidden md:block"></BsPersonFill>
                            }

                            <span className='mx-1  font-semibold text-lg'>{user?.displayName || userInfo?.name}</span>
                            <button onClick={() => navigate("/profilepage")} className="btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3" > View Profile</button>
                            <p>or,</p>
                            <button onClick={logOut} className="btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3" > Log out</button>

                        </div>
                        :
                        <div className="flex flex-col items-center">
                            <BsPersonPlusFill className="text-4xl "></BsPersonPlusFill>
                            <Link to='/login'><button className=" btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3">Login</button></Link>
                        </div>
                }
            </div>



            <div className="flex items-center gap-3 mt-4">
                <IoMdSettings className='text-3xl text-secondary' />
                <p className=' font-semibold md:text-lg'>Settings</p>
                <AiOutlineRight></AiOutlineRight>
            </div>

            <div className="flex items-center gap-3 mt-4">
                <TbListDetails className='text-3xl text-secondary' />
                <p className=' font-semibold md:text-lg'>More Options</p>
                <AiOutlineRight></AiOutlineRight>
            </div>

        </div>
    );
};

export default MoreOption;