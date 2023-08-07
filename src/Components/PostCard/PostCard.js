import React, { useContext, useEffect, useRef, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdPaperPlane } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GrMoreVertical } from 'react-icons/gr';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { FaBookmark } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';



const PostCard = ({ post }) => {
    const { _id, userEmail, userName, userPhoto, postText, postPhoto, totalReact, likeCount, loveCount, postingDate } = post;


    const { user, userInfo, doFetch, setDoFetch } = useContext(AuthContext)
    // const [doFetch, setDoFetch] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState('');
    const [commentOpen, setCommentOpen] = useState(false);

    const navigate = useNavigate();



    // fetch like information \/



    useEffect(() => {
        user?.email && fetch(`https://trendify-server.vercel.app/isLiked/?email=${user?.email}&postId=${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.postId === _id) {
                    setIsLiked(true)
                }
                // setDoFetch(true)
            })
    }, [])


    // fetch like information /\








    // do like \/

    const handleLike = () => {

        const likeInfo = {
            userEmail: user?.email,
            postId: _id
        }



        fetch('https://trendify-server.vercel.app/likes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("Liked")
                    // setDoFetch(false)
                    setIsLiked(true)
                }
            })
            .catch(er => console.error(er));




        fetch('https://trendify-server.vercel.app/posts', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: _id, increase: 1 })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    setDoFetch(true)
                    // setIsLiked(true)
                }
            })
            .catch(er => console.error(er));



    }

    // do like /\











    // handle dislike \/



    const handleDisLike = () => {


        const likeInfo = {
            userEmail: user?.email,
            postId: _id
        }

        fetch('https://trendify-server.vercel.app/likes', {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(likeInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data) {
                    setIsLiked(false)
                }
            })
            .catch(er => console.error(er));



        fetch('https://trendify-server.vercel.app/posts', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: _id, increase: -1 })
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("unliked")
                    // setDoFetch(true)
                    // setIsLiked(true)
                }
            })
            .catch(er => console.error(er));


    }





    // handle dislike /\


    // handle comments \/


    const handlePostComments = (event) => {
        event.preventDefault();
        const form = event.target;

        // console.log("hit");

        const commentText = event.target.comment.value;

        const commentInfo = {
            userEmail: user?.email,
            userName: userInfo.name,
            postId: _id,
            commentText: commentText,
            userPhoto: userInfo?.userPhoto
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



    // handle comments /\







    const handleClickComment = () => {

        setCommentOpen(!commentOpen);

        fetch(`https://trendify-server.vercel.app/comments?postId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })

    }




    // more details \/


    const handleClickMore = () => {

        navigate("/aboutPost", { state: { post } })

    }





    // open option--\/
    const [newStatus, setNewStatus] = useState("Available")
    const [isStOpen, setIsStOpen] = useState(false)
    const divRef = useRef(null);
    const handleStatusClick = (st) => {
        setNewStatus(st);
        setIsStOpen(false)
    }
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsStOpen(false)
            }
        };
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);
    //open option--/\



    // console.log(userPhoto)




    return (
        <div className=''>
            <div className="card w-screen lg:w-full bg-base-100 shadow-xl m-2 mx-auto">
                <div className="card-body pb-2">
                    <div className='flex justify-between'>
                        <div className='flex items-center'>
                            {
                                userPhoto ?
                                    <>
                                        <img src={userPhoto} className='w-12 h-12 object-cover rounded-full md:mx-3' alt=''></img>
                                    </>
                                    :
                                    <>
                                        <BsPersonCircle className="text-2xl "></BsPersonCircle>
                                    </>
                            }
                            <div>
                                <span className='mx-1  font-semibold text-lg'>{userName}</span>
                                <p className='mx-1 text-gray-500 text-sm' >Posted on: {postingDate}</p>
                            </div>
                        </div>


                        <div ref={divRef} className=' relative'>
                            {
                                isStOpen && userInfo.email && <div className='absolute top-0 right-6 border-[1px] border-gray-500 rounded-lg px-4 py-2 backdrop-blur-[2px] bg-white shadow-lg'>
                                    <div className="flex items-center flex-grow  text-purple-600 whitespace-nowrap"><FaBookmark className="w-7 h-7 p-[7px] mr-1 text-purple-600 bg-purple-100 rounded-md"></FaBookmark> Save Post</div>
                                    {
                                        userEmail === userInfo.email && <div className="flex items-center flex-grow mt-3 text-red-600 whitespace-nowrap"><RiDeleteBin6Line className="w-7 h-7 p-[6px] mr-1 text-red-600 bg-red-100 rounded-md"></RiDeleteBin6Line> Delete Post</div>
                                    }
                                </div>

                            }
                            <GrMoreVertical onClick={() => setIsStOpen(!isStOpen)} className='w-8 h-8 p-[6px] bg-gray-100 rounded-md'></GrMoreVertical>
                        </div>


                    </div>
                    <p>{postText}</p>
                </div>

                {
                    postPhoto && <figure><img src={postPhoto} alt="Shoes" /></figure>
                }

                <div className="card-body  py-2">

                    {
                        userInfo ?
                            <div className='grid grid-cols-3 text-center'>
                                <div className='inline justify-center items-center'>
                                    {
                                        isLiked ?
                                            <button onClick={handleDisLike} className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>
                                            :
                                            <button onClick={handleLike} className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                                    }
                                    <p className='pl-2 inline text-gray-500'>{likeCount}</p>
                                </div>
                                <div>
                                    <button onClick={handleClickComment} className='' > <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane> </button>
                                </div>
                                <div>
                                    <button onClick={handleClickMore} className='' > <FiMoreHorizontal className='text-2xl text-secondary font-bold ml-2'></FiMoreHorizontal> </button>
                                </div>

                            </div>
                            :
                            <div className='grid grid-cols-3 text-center'>
                                <div>
                                    {
                                        isLiked ?
                                            <button className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>
                                            :
                                            <button className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                                    }
                                </div>
                                <div>
                                    <button onClick={handleClickComment} className='' > <IoMdPaperPlane className='text-2xl text-secondary ml-2'></IoMdPaperPlane> </button>
                                </div>
                                <div>
                                    <button className='' > <FiMoreHorizontal className='text-2xl text-secondary font-bold ml-2'></FiMoreHorizontal> </button>
                                </div>
                            </div>
                    }






                    {
                        userInfo ?

                            <form onSubmit={handlePostComments} className='flex items-center'>
                                <input name="comment" type="text" className='border border-secondary rounded mr-2 px-2 w-full' placeholder='write comments' required ></input>
                                <button type='submit' className='btn btn-secondary btn-xs'>comment</button>
                            </form>

                            :

                            <p className='text-gray-500 text-center'>please login first for like and comment</p>


                    }


                </div>
                <div className="card-body py-2">
                    {
                        comments && commentOpen && comments?.map(comment => <div key={comment?._id}>
                            <div className='flex items-center'>
                                {
                                    comment?.userPhoto ?
                                        <>
                                            <img src={comment?.userPhoto} className='w-6 h-6 object-cover rounded-full ' alt=''></img>
                                        </>
                                        :
                                        <>
                                            <BsPersonCircle className="text-2xl "></BsPersonCircle>
                                        </>
                                }
                                <span className='mx-1  text- font-semibold text-lg'>{comment?.userName}</span>
                            </div>
                            <h1 className='ml-6 pl-2'>{comment?.commentText}</h1>
                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default PostCard;