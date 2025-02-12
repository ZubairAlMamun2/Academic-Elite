import React, { useContext, useRef, useState } from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const Update = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  // console.log(data);
  const navigate = useNavigate();
  const axiossecure = UseAxiosSecure();
  const [title1, setTitle] = useState(data.title);
  const [photo1, setphoto] = useState(data.photo);
  const [difficulty1, setDifficulty] = useState(data.type);
  const [marks1, setMarks] = useState(data.marks);
  const [description1, setDescription] = useState(data.description);

  // console.log(data.title);
  //   const [title, setTitle] = useState(data.title);

  const handleupdate = (e) => {
    // if(user.email!==data.email){
    //     Swal.fire({
    //         title: 'Error!',
    //         text: "Sorry, You Can't Update it, Cause This is not created by you!",
    //         icon: 'error',
    //         confirmButtonText: 'OK'
    //       })

    //     navigate("/assignments");
    //     return;
    // }
    e.preventDefault();
    const form = new FormData(e.target);
    const title = title1;
    const photo = photo1;
    const type = difficulty1;
    const marks = marks1;
    const description = description1;

    const formData = {
      title,
      photo,
      type,
      marks,
      description,
    };

    // console.log(formData);
    axiossecure
      .put(`https://group-study-zeta.vercel.app/update/${data._id}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Updated succesfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate(location?.state ? location.state : "/assignments");
        }
      });
  };
  return (
    <div className="w-11/12 mx-auto">
      <NavBar />

      <div className="min-h-screen flex justify-center items-center">
        <div className="card rounded-none bg-base-100 w-full max-w-lg shrink-0 p-10">
          <h2 className="text-2xl font-semibold text-center">
            Update Assignment Page
          </h2>
          <form onSubmit={handleupdate} className="card-body p-0">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Assignment title
                </span>
              </label>
              <input
                // value={title}
                // onChange={(title2) => setTitle(title2)}
                name="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title1}
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
                onChange={(e) => setphoto(e.target.value)}
                value={photo1}
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
                onChange={(e) => setDifficulty(e.target.value)}
                required
                value={difficulty1}
              >
                <option disabled value="">
                  Select Difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">Marks</span>
              </label>
              <input
                name="marks"
                onChange={(e) => setMarks(e.target.value)}
                value={marks1}
                type="number"
                placeholder="marks"
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
                onChange={(e) => setDescription(e.target.value)}
                value={description1}
                required
                className="textarea textarea-bordered"
                placeholder="description"
              ></textarea>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                  Created On: <DatePicker selected={data.date} />
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Update</button>
            </div>
          </form>

          <div className=" mt-6">
            <Link
              className="btn btn-primary flex justify-center rounded-none"
              to={`/assignments`}
            >
              Go Back
            </Link>
          </div>

          <div className="pt-2"></div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Update;
