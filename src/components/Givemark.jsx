import React from "react";
import Footer from "./Footer";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import UseAxiosSecure from "./UseAxiosSecure";
import Swal from "sweetalert2";
import NavBar from "./NavBar";

const Givemark = () => {
  const data = useLoaderData();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const obtainedmarks = form.get("obtainedmarks");
    const feedback = form.get("feedback");
    const status = "completed";

    const formData = { obtainedmarks, feedback, status };

    axiosSecure
      .put(`https://group-study-zeta.vercel.app/givemark/${data._id}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Assignment marked successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/pendingassignments");
        }
      });
  };

  return (
    <div className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] min-h-screen text-white">
      <NavBar />
      <div className="flex justify-center my-4 items-center min-h-[85vh] px-4">
        <div className="w-full max-w-lg bg-[#0f172a] p-8 rounded-2xl shadow-lg border border-gray-700">
          <h2 className="text-2xl font-bold text-center text-gray-200">Check Assignment</h2>
          <form onSubmit={handleUpdate} className="mt-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-300">{data.title}</h3>
              <p className="text-sm text-gray-400 mt-1">Marks: {data.marks}</p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-300">Google Doc Link: 
              <a href={data.link} target="_blank" rel="noopener noreferrer" className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-md">
                see pdf
              </a>
              </p>
            </div>

            <div className="mb-4">
              <p className="font-semibold text-gray-300">Notes:</p>
              <p className="text-gray-400">{data.notes || "No additional notes provided."}</p>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">Marks</label>
              <input
                name="obtainedmarks"
                type="number"
                placeholder="Enter obtained marks"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                required
                max={data.marks}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-300">Feedback</label>
              <textarea
                name="feedback"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500"
                placeholder="Provide feedback"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition"
            >
              Submit
            </button>
          </form>

          <Link
            to="/pendingassignments"
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

export default Givemark;
