import React, { useContext } from 'react';
import { BsPersonFill, BsPersonPlusFill, BsSearch } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MoreOption = () => {

    const navigate = useNavigate();


    const { user, logOut, userInfo } = useContext(AuthContext);




    return (
        <div>
            <p className='m-5 text-xl font-bold'>More option</p>

            <div className='flex items-center my-2  mx-auto'>
                <input type="text" placeholder="Search tredify" className="input input-bordered input-success w-full lg:w-48 max-w-xs m-5" />
                <BsSearch></BsSearch>
            </div>
            <div className="">
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
                            <button  onClick={()=> navigate("/menu")} className="btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3" > View Profile</button>
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
        </div>
    );
};

export default MoreOption;