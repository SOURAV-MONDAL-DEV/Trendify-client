import React from "react";
import facebook from "../../img/facebook.png";
import instagramc from "../../img/instagramc.png";
import linkedin from "../../img/linkedin.png";
import youtube from "../../img/youtube.png";
import twitter from "../../img/twitter.png";
import { FaFacebookSquare } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";


import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
// import Image from "next/image";

const ContactLinks = () => {
  return (
      <div className="flex justify-center flex-wrap gap-8 md:gap-12 rounded-md transform scale-90 origin-center">
        <div className="flex flex-col  items-center justify-center">
          <div className=" p-2 rounded-lg bg-blue-100">
            <FaFacebookSquare className=" text-2xl text-blue-500"></FaFacebookSquare>
          </div>
          {/* <p className=" text-xs">Facebook</p> */}
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className=" p-2 rounded-lg bg-red-100">
            <GrInstagram className=" text-2xl text-[#ec03fc]"></GrInstagram>
          </div>
          {/* <p className=" text-xs">Youtube</p> */}
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className=" p-2 rounded-lg bg-cyan-100">
            <BsTwitter className=" text-2xl text-cyan-500"></BsTwitter>
          </div>
          {/* <p className=" text-xs">Linkedin</p> */}
        </div>
        <div className="flex flex-col  items-center justify-center">
          <div className=" p-2 rounded-lg bg-red-100">
            <BsYoutube className=" text-2xl text-red-500"></BsYoutube>
          </div>
          {/* <p className=" text-xs">Instagram</p> */}
        </div>
        
      </div>


  );
};

export default ContactLinks;
