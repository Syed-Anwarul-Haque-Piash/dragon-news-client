import React, { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
    const [user,setUser]=useState(null)

    const[loading,setLoading] = useState(true)

    const createUser=(email,password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut=()=>{
        setLoading(true)
        signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggedUser=>{
            console.log("user auth change",loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    
    const authInfo={
        user,
        createUser,
        login,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;