import React, { useContext, useEffect, useState } from 'react';
import PostCard from '../../Components/PostCard/PostCard';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const HomeMid = () => {

    const { user, userInfo, } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [ doFetch, setDoFetch] = useState();

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
                                // toast('product add successfully')
                                // console.log(data, "post success");
                                form.reset();
                                // navigate('/dashbord/myProducts')
                            }
                        })
                        .catch(er => console.error(er));



                }
                // console.log(imgData);
            })
        // console.log(url);
    }


    useEffect(() => {
        fetch('http://localhost:5000/posts/popular')
            .then(res => res.json())
            .then(data =>{
                setPosts(data)
                setDoFetch(false)
            })
    }, [doFetch])


    return (
        <div>
            <p>this is main home middel</p>

            {
                user?.uid ?
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Whats on your mind?</span>
                            </label>
                            <textarea name="text" className="textarea textarea-bordered h-24 w-full" placeholder="Write here" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Add photo</span>
                            </label>
                            <input name="image" type="file" placeholder="Add photo"></input>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-secondary' type='submit' value="POST" />
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