
import React, { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
    const provider = new GoogleAuthProvider();
    const auth=getAuth(app)
  const { createNewUser,setUser,UpdateUserProfile } = useContext(AuthContext);
    const[error,setError]=useState("");
    const[passtype,setPasstype]=useState(false);
    const navigate=useNavigate();
    const location =useLocation();
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if(!passwordRegex.test(password)){
        setError("Must have an Uppercase letter,a Lowercase letter and must be at least 6 character")
            return;
        
    }

    createNewUser(email, password)
      .then((result) => {
        setUser(result.user);
        // console.log(result.user)
        setError("")
        
        UpdateUserProfile({displayName:name,photoURL:photo}).
        then((res)=>{
            // navigate("/")
            navigate(location?.state?location.state:"/")
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode,errorMessage)
        setError(errorMessage)
        e.target.reset();
      });

    // console.log({ name, photo, email, password });
  };

  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        setError("");
        navigate(location?.state ? location.state : "/");
        // navigate("/");
        Swal.fire({
          title: 'Success!',
          text: 'User Registred succesfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch((err) => {
        // console.log(err);
        setError(err.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card rounded-lg my-4  bg-gray-800  w-full max-w-lg shrink-0 p-10">
        <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            
            <input
              name="password"
              type={passtype?"text":"password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span onClick={()=>setPasstype(!passtype)} className="absolute right-5 top-14 ">{passtype?<FaEyeSlash />:<FaEye />}</span>
           
          </div>
          <h2 className="text-red-500">{error&&error}</h2>
          <div className="form-control mt-6">
            <button className="btn  text-white border-none bg-purple-500 hover:bg-purple-600 rounded-md">Register</button>
          </div>
        </form>
        <p className="text-center text-white text-sm">
          Already Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/login">
            Login
          </Link>
        </p>

        <div className="pt-2">
        <div className='*:w-full space-y-2'>
        <button onClick={SignInWithGoogle} className="btn  text-white border-none bg-gray-700 hover:bg-gray-600 rounded-md"><FaGoogle />LogIn With Google</button>
        </div>
    </div>
        
      </div>
    </div>
  );
};

export default Register;
