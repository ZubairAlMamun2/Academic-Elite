import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import NavBar from './Navbar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosSecure from './UseAxiosSecure';

const TakeAssignmnet = () => {
    const {user}=useContext(AuthContext)
    console.log(user)
    const data =useLoaderData();
    const axiossecure=UseAxiosSecure()
    const navigate =useNavigate();
    // console.log(data)
    const handleSubmit=(e)=>{
        e.preventDefault();

    const form = new FormData(e.target);
    const title=data.title
    const link = form.get("link");
    const notes = form.get("notes");
    const marks = data.marks;
    const email = user.email;
    const name = user.displayName;
    const obtainedmarks=0;
    const status="pending";
    const feedback="";
    const date=data.date;
    const assignment_id=data._id

    const formData = {
        title,
        link,
        notes,
        email,
        marks,
        obtainedmarks,
        status,
        feedback,
        date,
        assignment_id,
        name
      };

      axiossecure.post(`http://localhost:5000/takeassignment`,formData,{withCredentials:true}  )
            
            .then((res) => {
              console.log(res.data);
              if(res.data.acknowledged){
                Swal.fire({
                  title: 'Success!',
                  text: 'Assignment submited succesfully',
                  icon: 'success',
                  confirmButtonText: 'Cool'
                })
                navigate('/pendingassignments');
              }
            });

      

    }
  return (
    <div className="w-11/12 mx-auto">
        <NavBar />
            <div className="min-h-screen flex justify-center items-center">
                    <div className="card rounded-none bg-base-100 w-full max-w-lg shrink-0 p-10">
                      <h2 className="text-2xl font-semibold text-center">
                        Assignment Submission Form
                      </h2>
                      <form onSubmit={handleSubmit} className="card-body p-0">
                        
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-sm font-semibold">
                              Document
                            </span>
                          </label>
                          <input
                            name="link"
                            type="text"
                            placeholder="google doc link"
                            className="input input-bordered"
                            required
                          />
                        </div>
                        
                        
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text text-sm font-semibold">
                              Quick Notes 
                            </span>
                          </label>
                          <textarea
                            name="notes"
                            required
                            className="textarea textarea-bordered"
                            placeholder="Quick notes text"
                          ></textarea>
                        </div>

                        <div className="form-control mt-6">
                          <button className="btn btn-neutral rounded-none">Submit</button>
                        </div>
                      </form>
            
                      <div className="pt-2"></div>
                    </div>
                  </div>
        <Footer />
    </div>
  )
}

export default TakeAssignmnet