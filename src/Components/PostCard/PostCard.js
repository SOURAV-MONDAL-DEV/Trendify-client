import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';


const PostCard = ({ post }) => {
    const { _id, userEmail, userName, postText, postPhoto, totalReact, likeCount, loveCount } = post;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl my-2 mx-auto">
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

                    {/* <h2 className="">{postText}</h2> */}
                    <p>{postText}</p>

                </div>
                <figure><img src={postPhoto} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='grid grid-cols-3'>
                        <div>
                            <button className='' > <AiOutlineLike className='text-2xl text-secondary mr-2'></AiOutlineLike> </button>
                            {/* <button className='' > <AiFillLike className='text-2xl text-secondary mr-2'></AiFillLike> </button> */}
                            <button className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                            {/* <button className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>  */}
                        </div>
                        <button className='text-secondary font-semibold'>Comment</button>
                        <button className='text-secondary font-semibold'>Details</button>
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