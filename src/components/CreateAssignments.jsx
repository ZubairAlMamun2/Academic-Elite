import React, { useContext, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title");
    const photo = form.get("photo");
    const type = form.get("type");
    const marks = form.get("marks");
    const description = form.get("description");
    const date = form.get("date");
    const email = user.email;
    const name = user.displayName;
    // const donatedby='';

    // console.log(typeof(amount))

    const formData = {
      title,
      photo,
      type,
      email,
      name,
      marks,
      description,
      date
    };

    fetch(`http://localhost:5000/addnewassignment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.acknowledged){
          Swal.fire({
            title: 'Success!',
            text: 'Assignment added succesfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          navigate('/');
        }
      });

    console.log(formData);
    // e.target.reset();
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />

      <div className="min-h-screen flex justify-center items-center">
        <div className="card rounded-none bg-base-100 w-full max-w-lg shrink-0 p-10">
          <h2 className="text-2xl font-semibold text-center">
            Add New Assignment Page
          </h2>
          <form onSubmit={handleSubmit} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                Assignment title
                </span>
              </label>
              <input
                name="title"
                type="text"
                placeholder="Assignment title"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Thumbnail
                </span>
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
                <span className="label-text text-sm font-semibold">
                Assignment difficulty level
                </span>
              </label>
              <select
                name="type"
                required
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Select Anyone
                </option>
                <option>easy</option>
                <option>medium</option>
                <option>hard</option>
                
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                Marks
                </span>
              </label>
              <input
                name="marks"
                type="number"
                placeholder="marks"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Deadline
                </span>
              </label>
              <input
                name="date"
                type="date"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Description
                </span>
              </label>
              <textarea
                name="description"
                required
                className="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
            
            

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Add</button>
            </div>
          </form>

          <div className="pt-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAssignment;
