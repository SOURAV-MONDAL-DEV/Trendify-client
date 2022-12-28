import React, { useContext } from 'react';
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";


const HomeMid = () => {

    const { user } = useContext(AuthContext)

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
                    console.log(imgData.data.url);
                    const postAllData = {
                        userEmail: user?.email,
                        userName: user?.displayName,
                        postText: postText,
                        postPhoto: imgData.data.url,
                        likeCount: 0,
                        loveCount: 0,

                    }
                }
                // console.log(imgData);
            })

        // console.log(url);
    }


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

        </div>
    );
};

export default HomeMid;