import React, { useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
export const AuthContext = createContext(null)
    //Auth declare 
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
 
//  const user = {displayName:'I am Shalahuddin'};
const createUser =(email,password)=>{
 createUserWithEmailAndPassword(auth,email,password)
}
    const authInfo ={
       user,
       createUser,
    }
    // value set on AuthContext.Provider 
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;