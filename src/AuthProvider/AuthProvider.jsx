import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase.init';
export const AuthContext=createContext(null)
const AuthProvider = ({children}) => {
    const googlePro=new GoogleAuthProvider();
    const [user,setUser]=useState(null)
    const [loadingStat,setLoadingStat]=useState(true)
    const createAccount=(email,password)=>{
        setLoadingStat(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn=()=>{
        return signInWithPopup(auth,googlePro)
    }
    const signIn=(email,password)=>{
        setLoadingStat(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signOutUser=()=>{
        return signOut(auth)
    }
    useEffect(()=>{
        const getCurrentUser= onAuthStateChanged(auth,currentUser=>{
            console.log(currentUser)
            setUser(currentUser)
            setLoadingStat(false)
        })
        return ()=>{
            getCurrentUser();
        }
    },[])
    const authInfo={
        name:'Mahin',
        createAccount,
        signIn,
        signOutUser,
        googleSignIn,
        loadingStat,
        user
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;