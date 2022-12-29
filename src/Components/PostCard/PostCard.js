import React, { useContext, useEffect, useState } from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { AiFillLike } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoMdPaperPlane } from 'react-icons/io';
import { FiMoreHorizontal } from 'react-icons/fi';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const PostCard = ({ post }) => {
    const { _id, userEmail, userName, postText, postPhoto, totalReact, likeCount, loveCount } = post;


    const { user, userInfo, } = useContext(AuthContext)
    const [doFetch, setDoFetch] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const [comments, setComments] = useState('');
    const [commentOpen, setCommentOpen] = useState(false);

    const navigate = useNavigate();



    // fetch like information \/



    useEffect(() => {
        fetch(`http://localhost:5000/isLiked/?email=${user?.email}&postId=${_id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.postId === _id) {
                    setIsLiked(true)
                }
                setDoFetch(false)
            })
    }, [])


    // fetch like information /\








    // do like \/

    const handleLike = () => {

        const likeInfo = {
            userEmail: user?.email,
            postId: _id
        }



        fetch('http://localhost:5000/likes', {
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
                    setDoFetch(true)
                    setIsLiked(true)
                }
            })
            .catch(er => console.error(er));




            fetch('http://localhost:5000/posts', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id:_id, increase: 1})
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast(1)
                    // setDoFetch(true)
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

        fetch('http://localhost:5000/likes', {
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


            
            fetch('http://localhost:5000/posts', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({id:_id, increase: -1})
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast("--")
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
            userName: userName,
            postId: _id,
            commentText: commentText
        }

        fetch('http://localhost:5000/comments', {
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

        fetch(`http://localhost:5000/comments?postId=${_id}`)
            .then(res => res.json())
            .then(data => {
                setComments(data)
            })

    }




    // more details \/


    const handleClickMore = () => {

        navigate("/aboutPost", { state: { post } })

    }








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

                    {
                        userInfo ?
                            <div className='grid grid-cols-3 text-center'>
                                <div>
                                    {
                                        isLiked ?
                                            <button onClick={handleDisLike} className='' > <AiFillHeart className='text-2xl text-secondary ml-2'></AiFillHeart> </button>
                                            :
                                            <button onClick={handleLike} className='' > <AiOutlineHeart className='text-2xl text-secondary ml-2'></AiOutlineHeart> </button>
                                    }
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
                <div className="card-body">
                    {
                        comments && commentOpen && comments?.map(comment => <div key={comment?._id}>
                            <div className='flex items-center'>
                                <BsPersonCircle className="text- "></BsPersonCircle>
                                <span className='mx-1 hidden lg:block text- md:text-lg'>{comment?.userName}</span>
                            </div>
                            <h1 className='ml-7'>{comment?.commentText}</h1>
                        </div>)
                    }
                </div>
            </div>


        </div>
    );
};

export default PostCard;