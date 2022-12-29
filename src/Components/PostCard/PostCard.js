import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdPaperPlane } from 'react-icons/io';
import { CiCircleMore } from 'react-icons/ci';
import { FiMoreHorizontal } from 'react-icons/fi';


const PostCard = ({ post }) => {
    const { _id, userEmail, userName, postText, postPhoto, totalReact, likeCount, loveCount } = post;
    return (
        <div className=''>
            <div className="card w-screen lg:w-full bg-base-100 shadow-xl m-2 mx-auto">
                <div className="card-body">

                    <div className='flex items-center'>
                        {
                            post?.userPhoto ?
                                <>
                                    <img src={post?.photoURL} className='w-8 rounded-full md:mx-3' alt=''></img>
                                </>
                                :
                                <>
                                    <BsPersonCircle className="text-2xl "></BsPersonCircle>
                                </>
                        }
                        <span className='mx-1 hidden lg:block text- font-semibold text-xs md:text-lg'>{userName}</span>
                    </div>
                    <p>{postText}</p>
                </div>

                {
                    postPhoto && <figure><img src={postPhoto} alt="Shoes" /></figure>
                }

                <div className="card-body">
                    <div className='grid grid-cols-3 text-center'>
                        <div>
                            <button className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                            {/* <button className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>  */}
                        </div>
                        <div>
                            <button className='' > <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane> </button>
                        </div>
                        <div>
                            <button className='' > <FiMoreHorizontal className='text-2xl text-secondary font-bold ml-2'></FiMoreHorizontal> </button>
                        </div>

                    </div>
                    <form className='flex items-center'>
                        <input name="comment" type="text" className='border border-secondary rounded mr-2 px-2 w-full' placeholder='write comments ' ></input>
                        <button type='submit' className='btn btn-secondary btn-xs'>comment</button>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default PostCard;