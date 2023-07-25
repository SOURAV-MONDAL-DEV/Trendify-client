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
            <h1>menu page</h1>

        </div>
    );
};

export default Menu;