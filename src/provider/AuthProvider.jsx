import {  createContext, useEffect, useState } from "react";

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  updateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const UpdateUserProfile=(updateddata)=>{
    return updateProfile(auth.currentUser,updateddata);
  }

  const ResetUserPassword=(Email)=>{
    return sendPasswordResetEmail(auth,Email);
  }

  const SignInWithGoogle=(auth,provider)=>{
    return signInWithPopup(auth, provider)
  }

  

  const UserInfo = { user, setUser, createNewUser, Logout, Login, loading,UpdateUserProfile,SignInWithGoogle,ResetUserPassword };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      if(currentuser?.email){
        const user={email:currentuser.email}
            axios.post('http://localhost:5000/jwt',user,{withCredentials:true})
            .then((res)=>{
                console.log(res.data)
                setLoading(false);
            })
        }
        else{
            axios.post('http://localhost:5000/logout',{},{withCredentials:true})
            .then((res)=>{
                console.log('logout',res.data)
                setLoading(false);
            }) 
        }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={UserInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
