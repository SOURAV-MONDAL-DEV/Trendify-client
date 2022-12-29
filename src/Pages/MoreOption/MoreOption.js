import React, { useContext } from 'react';
import { BsPersonFill, BsPersonPlusFill, BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MoreOption = () => {


    const { user, logOut, userInfo } = useContext(AuthContext);




    return (
        <div>
            <p>more option</p>

            <div className='flex items-center my-2  mx-auto'>
                <input type="text" placeholder="Search tredify" className="input input-bordered input-success w-full lg:w-48 max-w-xs m-5" />
                <BsSearch></BsSearch>
            </div>
            <div className="">
                {
                    user?.uid ?
                        <div className="flex flex-col items-center">
                            {
                                user?.photoURL ?
                                    <img src={user?.photoURL} className='w-8 rounded-full md:mx-3 lg:hidden' alt=''></img>
                                    :
                                    <BsPersonFill className="text-4xl hidden md:block"></BsPersonFill>
                            }

                            <span className='mx-1 hidden lg:block  font-semibold text-xs md:text-lg'>{user?.displayName || userInfo?.name}</span>
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