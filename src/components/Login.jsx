import React, { useContext, useState } from "react";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState("");
  const [passtype, setPasstype] = useState(false);
  const auth = getAuth(app);
  const { Login, setUser,resetEmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location)


  const handleChange=(e)=>{
    e.preventDefault()
        const email=e.target.value
        // ResetUserPassword(email)
        // console.log(resetEmail)
  }


  const handlesubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    Login(email, password)
      .then((result) => {
        // console.log(result.user);
        setUser(result.user);
        setError("");
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          title: 'Success!',
          text: 'User Loged in succesfully',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        setError(errorCode, errorMessage);
        e.target.reset();
      });
    // console.log({ email, password });
    //   createUserWithEmailAndPassword(auth,email,password).
    //   then(res=>console.log(res.user) ).
    //   catch(err=>console.log(err))
  };
  const SignInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        // console.log(res.user);
        setUser(res.user);
        setError("");
        // navigate("/");
        navigate(location?.state?location.state:"/")
        Swal.fire({
          title: 'Success!',
          text: 'User Loged in succesfully',
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
      <div className="card rounded-lg  bg-gray-800  w-full max-w-sm shrink-0 p-10">
        <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">
          Login your account
        </h2>
        <form onSubmit={handlesubmit} className="card-body p-0">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              value={resetEmail}
              onChange={handleChange}
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
              type={passtype ? "text" : "password"}
              placeholder="password"
              className="input input-bordered"
              required
            />
            <span
              onClick={() => setPasstype(!passtype)}
              className="absolute right-5 top-14 "
            >
              {passtype ? <FaEyeSlash /> : <FaEye />}
            </span>
            <label className="label">
              <Link className="label-text-alt link link-hover">
                Forgot password?
              </Link>
            </label>
          </div>
          <h2 className="text-red-500">{error && error}</h2>
          <div className="form-control mt-6">
            <button className="btn  text-white border-none bg-purple-500 hover:bg-purple-600 rounded-md">Login</button>
          </div>
        </form>
        <p className="text-center text-white text-sm">
          Dont’t Have An Account ?{" "}
          <Link className="text-red-500" to="/auth/register">
            Register
          </Link>
        </p>

        <div className="pt-2">
          <div className="*:w-full space-y-2">
            <button onClick={SignInWithGoogle} className="btn  text-white border-none bg-gray-700 hover:bg-gray-600 rounded-md">
              <FaGoogle />
              LogIn With Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
