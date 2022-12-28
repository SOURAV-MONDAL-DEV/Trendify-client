import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {

    const {providerLogin, createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(err => console.log(err));
    }


    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result => {
            const user =result.user;
            console.log(user);
        })
        .catch(err => console.log(err))
    }



    return (
        <div className="hero ">
        <div className="hero-content ">
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUp} className="card-body">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        
                    </div>
                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type='submit' value="Sign Up" />
                    </div>
                </form>
                <button onClick={handleGoogleSignIn} className='btn bg-base-300 text-black mx-8'>Sign In with Google</button>
                <p className='text-center my-5 font-semibold'>Already have an account? <Link className='text-violet-700 font-bold' to ="/login"> Log in</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default SignUp;