import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../img/Fire-Logo.png"
import logo2 from "../../img/Fire-Logo2.png"
import { FaHome } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { MdMessage } from 'react-icons/md';
import { BsPersonPlusFill } from 'react-icons/bs';
import { BsPersonFill } from 'react-icons/bs';
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FiMoreVertical } from "react-icons/fi";
import { TbListDetails } from "react-icons/tb";

export default function NavBar() {

    const { user, logOut, userInfo } = useContext(AuthContext);
    const navigate = useNavigate()

    const handlePlusClick = () =>{
        navigate("/login")
    }


    return (
        <nav className=" w-ful bg-secondary  sticky top-0 z-10 shadow  ">
            <div className="text-white justify-between h-16 px-4 md:mx-24 mx-auto lg:max-w-7xl items-center flex md:px-8">
                <div>
                    <div className="flex items-center">
                        <img className=" w-12 bg-gradient-to-r from-pink-500 via-yellow-400 to-pink-500 rounded-full lg:w-12 max-w-12 " src={logo2} alt="logo"></img>
                        <p className="text-4xl text-bold hidden md:block">Trendify</p>
                    </div>
                </div>
                <div className="flex lg:gap-8">
                    <NavLink to="/"><FaHome className="text-2xl mx-3"> </FaHome></NavLink>
                    <NavLink to="/media"><MdPermMedia className="text-2xl mx-3"></MdPermMedia></NavLink>
                    <NavLink to="/message"><MdMessage className="text-2xl mx-3"></MdMessage></NavLink>
                    <NavLink to="/menu"><TbListDetails className="text-2xl mx-3 lg:hidden"></TbListDetails></NavLink>

                </div>
                <div className="">
                    {
                        user?.uid ?
                            <div className="flex items-center">
                                {
                                    userInfo?.userPhoto && <img onClick={() => navigate("/profilepage") } src={userInfo?.userPhoto} className='w-8 rounded-full md:mx-3' alt=''></img>
                                }
                                
                                <span className='mx-1 hidden lg:block text-white font-semibold text-xs md:text-lg'>{user?.displayName || userInfo?.name}</span>
                                <button onClick={logOut} className=" hidden btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3" > Log out</button>
                                <Link to="/moreOption" className="lg:hidden"><FiMoreVertical className="ml-3 text-2xl" ></FiMoreVertical></Link>
                            </div>
                            :
                            <div className="flex items-center">
                                {/* pleceholder image bosbe,,, mobile a dakhabe */}
                                <BsPersonPlusFill onClick={handlePlusClick} className="text-4xl "></BsPersonPlusFill>
                                {/* <Link to='/login'><button className=" hidden md:block btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 md:mx-3">Login</button></Link> */}
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
}