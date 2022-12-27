import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../img/Fire-Logo.png"
import { FaHome } from 'react-icons/fa';
import { MdPermMedia } from 'react-icons/md';
import { MdMessage } from 'react-icons/md';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className=" w-ful bg-pink-500  sticky top-0 z-10 shadow  ">
            <div className="text-white justify-between h-16 px-4 md:mx-24 mx-auto lg:max-w-7xl items-center flex md:px-8">
                <div>
                    <div className="flex items-center">
                        <img className=" w-16 bg-pink-300 rounded-full lg:w-16 max-w-16 "  src={logo} alt="logo"></img>
                        <p className="text-4xl text-bold hidden md:block">Trendify</p>
                    </div>
                </div>
                <div className="flex gap-4 lg:gap-8">
                    <NavLink to="/"><FaHome  className="text-4xl"> </FaHome></NavLink>
                    <NavLink to="/media"><MdPermMedia className="text-4xl"></MdPermMedia></NavLink>
                    <NavLink to="/message"><MdMessage className="text-4xl"></MdMessage></NavLink>
                    <NavLink to="/menu" className='lg:hidden' >...</NavLink>

                </div>
                <div className="">
                    <p></p>
                </div>
            </div>
        </nav>
    );
}