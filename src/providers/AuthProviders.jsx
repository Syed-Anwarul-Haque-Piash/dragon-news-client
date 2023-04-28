import React from 'react';
import { getAuth } from "firebase/auth";
import { createContext } from 'react';
import app from '../firebase/firebase.config';

const auth=getAuth(app)
export const AuthContext=createContext(null)
const AuthProviders = ({children}) => {
    const user=null;
    const authInfo={
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;