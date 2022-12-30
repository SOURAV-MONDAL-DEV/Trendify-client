import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import PostCard from '../../Components/PostCard/PostCard';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const Media = () => {

    const { user, userInfo, } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const [doFetch, setDoFetch] = useState(false);


    // const current = new Date();
    // const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
    // const imageHostKey = process.env.REACT_APP_imgbb_key;


    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const form = event.target;
    //     const postText = form.text.value;
    //     const image = form.image.files[0];
    //     const formData = new FormData();
    //     formData.append('image', image);
    //     const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`

    //     if (!image) {
    //         const postAllData = {
    //             userEmail: user?.email,
    //             userName: userInfo?.name,
    //             postText: postText,
    //             likeCount: 0,
    //             postingDate:date,
    //         }
    //         fetch('https://trendify-server.vercel.app/posts', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(postAllData)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 if (data.acknowledged) {
    //                     console.log("post hoise");
    //                     toast('posted successfully')
    //                     form.reset();
    //                     setDoFetch(true)
    //                     // navigate('/dashbord/myProducts')
    //                 }
    //             })
    //             .catch(er => console.error(er));
    //     }
    //     else {
    //         fetch(url, {
    //             method: 'POST',
    //             body: formData
    //         })
    //             .then(res => res.json())
    //             .then(imgData => {
    //                 if (imgData.success) {
    //                     const postAllData = {
    //                         userEmail: user?.email,
    //                         userName: userInfo?.name,
    //                         postText: postText,
    //                         postPhoto: imgData.data.url,
    //                         likeCount: 0,
    //                         postingDate:date,
    //                     }
    //                     fetch('https://trendify-server.vercel.app/posts', {
    //                         method: 'POST',
    //                         headers: {
    //                             'content-type': 'application/json'
    //                         },
    //                         body: JSON.stringify(postAllData)
    //                     })
    //                         .then(res => res.json())
    //                         .then(data => {
    //                             if (data.acknowledged) {
    //                                 toast('Posted successfully')
    //                                 form.reset();
    //                                 setDoFetch(true)
    //                             }
    //                         })
    //                         .catch(er => console.error(er));
    //                 }
    //             })
    //     }
    // }




    // post section


    useEffect(() => {
        fetch('https://trendify-server.vercel.app/posts/new')
            .then(res => res.json())
            .then(data => {
                setPosts(data)
                setDoFetch(false)
            })
    }, [doFetch])


    return (
        <div>

            <div className=''>
                {

                    posts.map(post => <PostCard
                        key={post._id}
                        post={post}
                        doFetch={doFetch}
                        setDoFetch={setDoFetch}

                    ></PostCard>)

                }
            </div>

        </div>
    );
};

export default Media;