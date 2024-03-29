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
import { MdPersonAddAlt } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import person from "../../img/person.png";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
import cover from "../../img/cover.jpg";
import BackButton from "../../Components/BackButton/BackButton";
import ContactLinks from "../../Components/ContactLinks/ContactLinks";
import PostCard from "../../Components/PostCard/PostCard";

const ProfilePage = () => {
  const { userInfo } = useContext(AuthContext);
  const { _id, email, name, userPhoto, work, address, college } = userInfo;


  const posts = [{"_id":"63ae5bbff5aba09be67b6156","userEmail":"souravmondalcode@gmail.com","userName":"SOURAV MONDAL","userPhoto":"https://lh3.googleusercontent.com/a/AEdFTp65LYwqFSFJjFpZyntgH8O7eODAloOuogWgRCTY=s96-c","postText":"একই ফ্রেমে বর্তমান ও ভবিষ্যৎ।\nবেকুটিয়া সেতু, পিরোজপুর। ","postPhoto":"https://i.ibb.co/GnHdxvW/20221230-001321.jpg","likeCount":8,"postingDate":"2022-12-30"},{"_id":"63add956dbbedde6d021c97d","userEmail":"souravmondal1315@gmail.com","postText":"Today's captured. ","postPhoto":"https://i.ibb.co/9tV43qg/20221230-001207.jpg","likeCount":5,"postingDate":"2022-12-30","userPhoto":"https://lh3.googleusercontent.com/a/AEdFTp65LYwqFSFJjFpZyntgH8O7eODAloOuogWgRCTY=s96-c","userName":"SOURAV MONDAL"},{"_id":"63af1ae8b81ae6d3b2675afd","userEmail":"sa@kib.com","userName":"Sakib Shekh","userPhoto":"https://i.ibb.co/pv47VHn/messi.png","postText":"My imagination destination 💚","postPhoto":"https://i.ibb.co/TWHZ8Lx/ggg.jpg","likeCount":4,"postingDate":"2022-12-30"}]



  return (
    <div>
      <div className="cover-container w-full relative mx-auto">
        <img
          className="mx-auto w-full h-48 md:h-48 lg:h-48 object-cover "
          src={cover}
        />
        <div className=" w-auto  rounded-xl bg-white shadow-xl mx-5 translate-y-[-50px] ">
          <img
            className=" w-24 h-24 object-cover rounded-md bg-cyan-300 border-2 border-white mx-auto translate-y-[-50%] "
            src={userInfo?.userPhoto}
          />

          <div className=" -mt-20 pb-10">
            <div className="flex justify-end items-center mx-6 my-3">
              <p className="mr-2 text-sm">Edit Profile</p>
              <Link className="w-fit mr-0" to="/editUser">
                <FaRegEdit className="text-secondary text-xl"></FaRegEdit>
              </Link>
            </div>
            <div className="flex flex-col  items-center justify-center">
              <p className="text-xl font-bold">{name}</p>
            </div>

            <div className=" flex flex-wrap items-center justify-center mt-1 mb-4">
              <div
                style={{ fontFamily: " serif" }}
                className="flex items-center mx-2 text-gray-700 text- "
              >
                {" "}
                <MdLocationOn className=" mr-1 text-gray-500"></MdLocationOn>{" "}
                {address}
              </div>
              <div
                style={{ fontFamily: " serif" }}
                className="flex items-center mx-2 text-gray-700 text- "
              >
                {" "}
                <BsFillBriefcaseFill className=" mr-1 text-gray-500"></BsFillBriefcaseFill>
                {work}
              </div>
            </div>

            <div className=" flex items-center justify-center  gap-5 md:gap-10 flex-wrap my-3 md:mx-10">
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

            <div className=" flex items-center justify-center gap-6  mb-5">
              <button className=" text-white px-4 py-[6px] flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500 brightness-110">
                {" "}
                <MdPersonAddAlt className=" mr-1"></MdPersonAddAlt> Follow
              </button>
              <button className=" text-white px-4 py-[6px] flex items-center rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500 brightness-110">
                {" "}
                <FaTelegramPlane className=" mr-1"></FaTelegramPlane> Messege
              </button>
            </div>

            <ContactLinks></ContactLinks>
          </div>
        </div>
        {/* <div className=" absolute top-0 left-0">
            <BackButton></BackButton>
        </div> */}
      </div>

      <div className="">
        {posts.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            // doFetch={doFetch}
            // setDoFetch={setDoFetch}
          ></PostCard>
        ))}
      </div>

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
