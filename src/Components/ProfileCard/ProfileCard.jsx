import React from 'react';

const ProfileCard = () => {
  return (
    <div className="container min-h-screen flex justify-center items-center">
      <div className="card w-96 h-96 bg-white shadow-md rounded-lg overflow-hidden relative cursor-pointer">
        <div className="cover h-40 bg-cover bg-center" style={{ backgroundImage: 'url(https://wallpaperaccess.com/full/84248.png)' }}></div>
        <div className="image absolute flex justify-center top-16 w-full">
          <div className="outer border-2 border-white rounded-full flex justify-center items-center h-32 w-32">
            <div className="inner h-28 w-28 overflow-hidden rounded-full">
              <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?cs=srgb&dl=pexels-italo-melo-2379005.jpg&fm=jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="name mt-20 text-center font-bold text-xl">John Doe</div>
        <div className="stat text-center text-gray-400">
          <span>1.4M Followers</span>
          <span className="mx-2">11 Following</span>
          <i className="fa-solid fa-square-check text-blue-500"></i>
        </div>
        <div className="buttons flex justify-between mx-10 mt-4">
          <button className="flex items-center justify-center h-10 w-24 rounded-md bg-blue-500 text-white">
            <i className="fa-solid fa-envelope text-white mr-2"></i>Message
          </button>
          <button className="flex items-center justify-center h-10 w-24 rounded-md bg-white shadow-md">
            <i className="fa-regular fa-square-plus text-black mr-2"></i>Follow
          </button>
        </div>
        <div className="about pl-4 mt-4 text-sm text-gray-500">
          <ul className="list-none">
            <li className="flex items-center">
              <i className="fa-solid fa-briefcase text-black mr-2"></i>CEO at Code Academy
            </li>
            <li className="flex items-center">
              <i className="fa-solid fa-graduation-cap text-black mr-2"></i>Engineering in Computer Science and Psychology
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
