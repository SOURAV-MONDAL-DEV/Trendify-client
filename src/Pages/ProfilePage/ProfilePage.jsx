import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdSchool } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { GrMailOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import person from "../../img/person.png";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import cover from "../../img/cover.jpg";
import BackButton from "../../Components/BackButton/BackButton";

const ProfilePage = () => {
  const { userInfo } = useContext(AuthContext);

  const { _id, email, name, userPhoto, work, address, college } = userInfo;

  return (
    <div>
      <div className="cover-container w-full relative mx-auto">
        <img
          className="mx-auto w-full h-48 md:h-48 lg:h-48 object-cover "
          src={cover}
        />
        <div className=" w-auto  rounded-lg bg-gray-200  mx-5 translate-y-[-50px] ">
          <img
            className=" w-24 h-24 rounded-md bg-cyan-300 border-2 border-white mx-auto translate-y-[-50%] "
            src={userInfo?.userPhoto}
          />

          <div className=" -mt-16 pb-20">
            <div className="flex justify-end mx-6 my-3">
              <Link className="w-fit mr-0" to="/editUser">
                <FaRegEdit className="text-secondary text-2xl"></FaRegEdit>
              </Link>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <p className="text-xl font-bold">{name}</p>
            </div>

            <div className=" flex items-center justify-evenly gap-14 flex-wrap m-10">
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-20 font-bold">4</h3>
                <p>Posts</p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-20 font-bold">15.8 K</h3>
                <p>Followers</p>
              </div>
              <div className="flex flex-col items-center justify-center ">
                <h3 className="text-20 font-bold">60</h3>
                <p>Following</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" absolute top-0 left-0">
            <BackButton></BackButton>
        </div> */}
      </div>

      {/* <div className='flex flex-row'>
                <div className='basis-5/6 flex flex-col items-center my-5'>
        
                    <p className='text-2xl font-bold'>{name}</p>
                    <p className=' font-semibold text-gray-500'>New profile page</p>
                    <p className=' font-semibold text-gray-500'>No Friends yet</p>
                </div>
                <Link to="/editUser" ><FaRegEdit className='basis-1/6 mt-10 text-secondary text-2xl'></FaRegEdit></Link>
            </div> */}
      <div className="m-8 lg:">
        <div className="flex items-center my-2  mx-auto">
          <MdEmail className="inline text-2xl text-gray-500"></MdEmail>
          <p className=" font-semibold ml-5">Email: {email} </p>
        </div>
        <div className="flex items-center my-2  mx-auto">
          <BsFillBriefcaseFill className="inline text-2xl text-gray-500"></BsFillBriefcaseFill>
          <p className=" font-semibold ml-5">Works at: {work}</p>
        </div>
        <div className="flex items-center my-2  mx-auto">
          <MdLocationOn className="inline -ml-1 text-3xl text-gray-500"></MdLocationOn>
          <p className=" font-semibold ml-5">Address : {address} </p>
        </div>
        <div className="flex items-center my-2  mx-auto">
          <IoMdSchool className="inline -ml-1 text-3xl text-gray-500"></IoMdSchool>
          <p className=" font-semibold ml-5">College/University: {college} </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
