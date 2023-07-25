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
import person from "../../img/person.png";


const Menu = () => {

    const { userInfo } = useContext(AuthContext);
    const { _id, email, name, userPhoto, work, address, college, } = userInfo;


    return (
        <div>
            <ul className="mt-4">
                <li className="my-2">
                    <a href="/" className="hover:text-blue-200">Home</a>
                </li>
                <li className="my-2">
                    <a href="/profile" className="hover:text-blue-200">Profile</a>
                </li>
                {/* Add more navigation items here */}
            </ul>

        </div>
    );
};

export default Menu;