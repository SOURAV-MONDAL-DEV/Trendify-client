import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import PostCard from '../../Components/PostCard/PostCard';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const HomeMid = () => {

    const { user, userInfo, } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [doFetch, setDoFetch] = useState(false);

    // console.log(user, "ok");

    const imageHostKey = process.env.REACT_APP_imgbb_key;


    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const postText = form.text.value;
        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`




        if (!image) {

            const postAllData = {
                userEmail: user?.email,
                userName: userInfo?.name,
                postText: postText,
                likeCount: 0,
                loveCount: 0,
                totalReact: 0,
            }



            fetch('http://localhost:5000/posts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(postAllData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        console.log("post hoise");
                        toast('posted successfully')
                        form.reset();
                        setDoFetch(true)
                        // navigate('/dashbord/myProducts')
                    }
                })
                .catch(er => console.error(er));


        }
        else {

            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    if (imgData.success) {
                        const postAllData = {
                            userEmail: user?.email,
                            userName: userInfo?.name,
                            postText: postText,
                            postPhoto: imgData.data.url,
                            likeCount: 0,
                            loveCount: 0,
                            totalReact: 0,
                        }


                        fetch('http://localhost:5000/posts', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(postAllData)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast('Posted successfully')
                                    form.reset();
                                    setDoFetch(true)
                                    // navigate('/dashbord/myProducts')
                                }
                            })
                            .catch(er => console.error(er));



                    }
                    // console.log(imgData);
                })
            // console.log(url);



        }





    }




    // post section


    useEffect(() => {
        fetch('http://localhost:5000/posts/popular')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setDoFetch(false)
            })
    }, [doFetch])


    return (
        <div>

            {
                user?.uid ?
                    <form onSubmit={handleSubmit} className="card-body p-2 pb-5">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Whats on your mind?</span>
                            </label>
                            <textarea name="text" className="textarea textarea-bordered h-24 w-full" placeholder="Write here" required></textarea>
                        </div>
                        <div className='flex justify-around'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Add photo</span>
                                </label>
                                <input name="image" type="file" placeholder="Add photo" ></input>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn btn-secondary btn-sm' type='submit' value="POST" />
                            </div>
                        </div>
                    </form>
                    :
                    <div>
                        <p>please login first for post something !</p>
                    </div>
            }

            <div className=''>
                {

                    posts.map(post => <PostCard
                        key={post._id}
                        post={post}

                    ></PostCard>)

                }
            </div>

        </div>
    );
};

export default HomeMid;