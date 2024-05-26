import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext=createContext(null);
const auth=getAuth(app)

const AuthProvider=({children})=>{
    // const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const authInfo={signInUser,loading}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default(AuthProvider)