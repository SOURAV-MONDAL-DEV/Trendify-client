import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiFillHeart } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';
import { IoMdPaperPlane } from 'react-icons/io';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const AboutPost = () => {
    const { state } = useLocation();

    const { _id, userEmail, userName, postText, postPhoto, totalReact, likeCount, loveCount } = state.post;

    const { user, userInfo, } = useContext(AuthContext)
    const [comments, setComments] = useState('');






    const handlePostComments = (event) => {
        event.preventDefault();
        const form = event.target;

        const commentText = event.target.comment.value;

        const commentInfo = {
            userEmail: user?.email,
            userName: userName,
            postId: _id,
            commentText: commentText
        }

        fetch('https://trendify-server.vercel.app/comments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(commentInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("comment success")
                    form.reset();
                }
            })
            .catch(er => console.error(er));


    }








    useEffect(()=> {

        fetch(`https://trendify-server.vercel.app/comments?postId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })

    }, [])











    return (



        <div className=''>
            <div className="card w-screen lg:w-full bg-base-100 shadow-xl m-2 mx-auto">

                {
                    postPhoto && <figure><img src={postPhoto} alt="postPhoto" /></figure>
                }
                <div className="card-body">

                    <p>Post owner: </p>

                    <div className='flex items-center'>
                        {
                            state.post?.userPhoto ?
                                <>
                                    <img src={state.post?.photoURL} className='w-8 rounded-full md:mx-3' alt=''></img>
                                </>
                                :
                                <>
                                    <BsPersonCircle className="text-2xl "></BsPersonCircle>
                                </>
                        }
                        <span className='mx-1 hidden lg:block text- font-semibold text-xs md:text-lg'>{userName}</span>
                    </div>

                    <div className=''>
                        <p>Post Message: </p>
                        <p className='border p-5'>{postText}</p>

                    </div>

                    <div>
                        <div className='flex items-center my-2  mx-auto'>
                            <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart>
                            <p className=' font-semibold ml-5'>Total : {likeCount} </p>
                        </div>
                        <div className='flex items-center my-2  mx-auto'>
                            <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane>
                            <p className=' font-semibold ml-5'>Total : </p>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handlePostComments} className='flex items-center'>
                            <input name="comment" type="text" className='border border-secondary rounded mr-2 px-2 w-full' placeholder='write a comments' required ></input>
                            <button type='submit' className='btn btn-secondary btn-xs'>comment</button>
                        </form>
                    </div>

                    <div>
                        <p>All Comments:</p>

                        {
                        comments && comments?.map(comment => <div key={comment?._id}>
                            <div className='flex items-center'>
                                <BsPersonCircle className="text- "></BsPersonCircle>
                                <span className='mx-1 hidden lg:block text- md:text-lg'>{comment?.userName}</span>
                            </div>
                            <h1 className='ml-7'>{comment?.commentText}</h1>
                        </div>)
                    } 

                    </div>





                </div>



                <div className="card-body">





                    {/* <div className='grid grid-cols-3 text-center'>
                        <button onClick={handleDisLike} className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>
                        <button onClick={handleLike} className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                        <div>
                            <button onClick={handleClickComment} className='' > <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane> </button>
                        </div>
                        <div>
                            <button onClick={handleClickMore} className='' > <FiMoreHorizontal className='text-2xl text-secondary font-bold ml-2'></FiMoreHorizontal> </button>
                        </div>

                    </div> */}



                    {/*  */}

                    {/* {
                        comments && comments?.map(comment => <div key={comment?._id}>
                            <div className='flex items-center'>
                                <BsPersonCircle className="text- "></BsPersonCircle>
                                <span className='mx-1 hidden lg:block text- md:text-lg'>{comment?.userName}</span>
                            </div>
                            <h1 className='ml-7'>{comment?.commentText}</h1>
                        </div>)
                    } */}



                </div>

            </div>


        </div>




    );
};

export default AboutPost;