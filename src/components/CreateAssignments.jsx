import React, { useContext, useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const CreateAssignment = () => {
  const { user } = useContext(AuthContext);
  const [type1, setType] = useState("easy");
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const title = form.get("title");
    const photo = form.get("photo");
    const type = type1;
    const marks = form.get("marks");
    const description = form.get("description");
    const date = startDate;
    const email = user.email;
    const name = user.displayName;

    const formData = {
      title,
      photo,
      type,
      email,
      name,
      marks,
      description,
      date,
    };

    axios
      .post(`https://group-study-zeta.vercel.app/addnewassignment`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          Swal.fire({
            title: "Success!",
            text: "Assignment added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/assignments");
        }
      });
  };

  return (
    <div className="min-h-screen  text-white ">
      <NavBar />

      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-gray-800 shadow-lg my-4 rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-semibold text-center text-purple-400 mb-6">
            Add New Assignment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Assignment Title
              </label>
              <input
                name="title"
                type="text"
                placeholder="Enter assignment title"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Thumbnail */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Thumbnail URL
              </label>
              <input
                name="photo"
                type="text"
                placeholder="Enter image URL"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Assignment Difficulty Level
              </label>
              <select
                onChange={(e) => setType(e.target.value)}
                required
                value={type1}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
              >
                <option disabled value="">
                  Select Difficulty
                </option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            {/* Marks */}
            <div>
              <label className="block text-sm font-semibold mb-1">Marks</label>
              <input
                name="marks"
                type="number"
                placeholder="Enter marks"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Description
              </label>
              <textarea
                name="description"
                required
                placeholder="Enter description"
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
              ></textarea>
            </div>

            {/* Starting Date */}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Starting Date
              </label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:ring-2 focus:ring-purple-400"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4">
              <button
                type="submit"
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-semibold transition duration-300"
              >
                Add Assignment
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateAssignment;
