import { Link, NavLink } from "react-router-dom";
import logo from "../../img/Fire-Logo.png"
import { FaHome } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { MdMessage } from 'react-icons/md';
import { BsPersonPlusFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

export default function NavBar() {

    const { user, logOut, userInfo } = useContext(AuthContext);


    return (
        <nav className=" w-ful bg-secondary  sticky top-0 z-10 shadow  ">
            <div className="text-white justify-between h-16 px-4 md:mx-24 mx-auto lg:max-w-7xl items-center flex md:px-8">
                <div>
                    <div className="flex items-center">
                        <img className=" w-16 bg-pink-300 rounded-full lg:w-16 max-w-16 " src={logo} alt="logo"></img>
                        <p className="text-4xl text-bold hidden md:block">Trendify</p>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-8">
                    <NavLink to="/"><FaHome className="text-4xl"> </FaHome></NavLink>
                    <NavLink to="/media"><MdPermMedia className="text-4xl"></MdPermMedia></NavLink>
                    <NavLink to="/message"><MdMessage className="text-4xl"></MdMessage></NavLink>
                    <NavLink to="/menu" className='lg:hidden' >...</NavLink>

                </div>
                <div className="">
                    {
                        user?.uid ?
                            <div className="flex items-center">
                                {
                                    user?.photoURL && <img src={user?.photoURL} className='w-8 rounded-full md:mx-3' alt=''></img>
                                }
                                
                                <span className='mx-1 hidden lg:block text-white font-semibold text-xs md:text-lg'>{user?.displayName || userInfo?.name}</span>
                                <button onClick={logOut} className=" hidden md:block btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3" > Log out</button>
                            </div>
                            :
                            <div className="flex items-center">
                                {/* pleceholder image bosbe,,, mobile a dakhabe */}
                                <BsPersonPlusFill className="text-4xl md:hidden"></BsPersonPlusFill>
                                <BsPersonFill className="text-4xl hidden md:block"></BsPersonFill>
                                <Link to='/login'><button className=" hidden md:block btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3">Login</button></Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
}