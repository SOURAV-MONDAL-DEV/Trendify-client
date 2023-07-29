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
        <div className=' min-h-screen pt-4'>

            <div className="cover-container w-full relative mx-auto">
                <img className="mx-auto w-full h-36 md:h-48 lg:h-36 object-cover " src={cover} />
                <img className=" w-24 h-24 rounded-full bg-blue-400 border-2 border-secondary absolute left-1/2 transform translate-x-[-50%] translate-y-[-50%] " src={userInfo?.userPhoto} />
            </div>




            <div className="mt-14 ">
                {
                    user?.uid ?
                        <div className="flex flex-col items-center">
                            <span className='mx-1  font-semibold text-lg'>{user?.displayName || userInfo?.name}</span>
                            <button onClick={() => navigate("/profilepage")} className=" rounded-md px-3 py-2 text-xs bg-secondary text-white md:mx-3 hover:bg-purple-600" > View Profile</button>
                            <p>or,</p>
                            <button onClick={logOut} className=" rounded-md px-3 py-2 text-xs bg-secondary text-white md:mx-3 hover:bg-purple-600" > Log out</button>

                        </div>
                        :
                        <div className="flex flex-col items-center">
                            <BsPersonPlusFill className="text-4xl "></BsPersonPlusFill>
                            <Link to='/login'><button className=" btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3">Login</button></Link>
                        </div>
                }
            </div>



            <div className='mx-4'>
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

        </div>
    );
};

export default MoreOption;