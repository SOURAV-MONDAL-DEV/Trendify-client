import React, { children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../../Firebase/firebase.config';


export const AuthContext = createContext();
    const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userInfo, setUserInfo] = useState("");
    const [doFetch, setDoFetch] = useState(false);




    useEffect(() => {
        fetch(`https://trendify-server.vercel.app/users/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                if(data[0]){
                    setUserInfo(data[0])
                }
                
            })
    }, [user?.uid])




    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
        })
    },[])


    const authInfo = {
        user,
        userInfo,
        loading,
        createUser,
        signIn,
        updateUser,
        providerLogin,
        logOut,
        doFetch,
        setDoFetch
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}  
        </AuthContext.Provider>
    );
};

export default AuthProvider;