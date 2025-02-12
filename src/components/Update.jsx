import React, { useContext, useState } from "react";

import Footer from "./Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import NavBar from "./NavBar";

const Update = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const navigate = useNavigate();
  const axiossecure = UseAxiosSecure();

  const [title1, setTitle] = useState(data.title);
  const [photo1, setPhoto] = useState(data.photo);
  const [difficulty1, setDifficulty] = useState(data.type);
  const [marks1, setMarks] = useState(data.marks);
  const [description1, setDescription] = useState(data.description);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = {
      title: title1,
      photo: photo1,
      type: difficulty1,
      marks: marks1,
      description: description1,
    };

    axiossecure
      .put(`https://group-study-zeta.vercel.app/update/${data._id}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/assignments");
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] min-h-screen text-white">
      <NavBar />
      <div className="flex justify-center items-center min-h-[85vh] px-4">
        <div className="w-full max-w-lg bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-center text-gray-200">
            Update Assignment
          </h2>
          <form onSubmit={handleUpdate} className="mt-6">
            {/* Title */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">
                Assignment Title
              </label>
              <input
                name="title"
                value={title1}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Assignment Title"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Photo URL */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">
                Thumbnail URL
              </label>
              <input
                name="photo"
                value={photo1}
                onChange={(e) => setPhoto(e.target.value)}
                type="text"
                placeholder="Photo URL"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Difficulty Level */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">
                Difficulty Level
              </label>
              <select
                value={difficulty1}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Marks */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">
                Marks
              </label>
              <input
                name="marks"
                value={marks1}
                onChange={(e) => setMarks(e.target.value)}
                type="number"
                placeholder="Marks"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">
                Description
              </label>
              <textarea
                name="description"
                value={description1}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Description"
                required
              ></textarea>
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-300">
                Created On:
              </label>
              <DatePicker
                selected={new Date(data.date)}
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-white"
                disabled
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full p-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
            >
              Update
            </button>
          </form>

          {/* Back Button */}
          <Link
            to="/assignments"
            className="block text-center mt-4 p-3 bg-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-600 transition"
          >
            Go Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Update;
