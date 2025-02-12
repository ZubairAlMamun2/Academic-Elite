import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";

import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { Loader2 } from "lucide-react";
import NavBar from "./NavBar";

const Assignments = () => {
  const { user } = useContext(AuthContext);
  const loadeddata = useLoaderData();
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState(loadeddata);
  const [loading, setLoading] = useState(false);

  const handledelete = (_id, email) => {
    if (email !== user?.email) {
      Swal.fire({
        title: "Error!",
        text: "You Can't Delete it, Cause This is not created by you!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://group-study-zeta.vercel.app/assignment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Assignment Deleted successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              setData(data.filter((user) => user._id !== _id));
            }
          });
      }
    });
  };

  const fetchAssignments = () => {
    setLoading(true);
    let url = `https://group-study-zeta.vercel.app/assignments?`;
    if (difficulty) url += `difficulty=${difficulty}&`;
    if (search) url += `search=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const sortedAssignments = data.sort((a, b) => {
          if (a.type === difficulty) return -1;
          if (b.type === difficulty) return 1;
          return 0;
        });
        setData(sortedAssignments);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchAssignments();
  }, [difficulty, search]);

  return (
    <div className=" text-white   min-h-screen">
      <NavBar />
      <div className="md:flex justify-center gap-5 my-5">
  <input
    type="text"
    placeholder="Search assignments..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="px-4 py-2 rounded-md text-black dark:text-white bg-white dark:bg-gray-700 border-gray-400 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
  />
  <select
    className="h-12 px-4 py-2 border-gray-400 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
    onChange={(e) => setDifficulty(e.target.value)}
    required
    value={difficulty}
  >
    <option disabled value="">
      Select Difficulty
    </option>
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
  </select>
</div>

      {loading ? (
        <div className="flex justify-center min-h-screen items-center h-40">
          <Loader2 className="animate-spin text-purple-400" size={50} />
        </div>
      ) : (
        <div className="grid gap-3 px-4 my-4 md:px-6 grid-cols-6 min-h-[60vh]">
          {data.map((items) => (
            <div
              key={items._id}
              className="card bg-gray-800 text-white col-span-6 md:col-span-3 lg:col-span-2 shadow-xl rounded-lg"
            >
              <figure>
                <img
                  className="p-3 h-48 border-none rounded-lg"
                  src={items.photo}
                  alt="Assignment"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-purple-400">{items.title}</h2>
                <p>{items.description}</p>
                <p>Difficulty: {items.type}</p>
                <p>Marks: {items.marks}</p>
                <div className="card-actions justify-center">
                  <button
                    className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-md"
                    onClick={() => handledelete(items._id, items.email)}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      if (user?.email === items.email) {
                        navigate(`/update/${items._id}`);
                      } else {
                        Swal.fire({
                          title: "Error!",
                          text: "You Can't Update it, Cause This is not created by you!",
                          icon: "error",
                          confirmButtonText: "OK",
                        });
                      }
                    }}
                    className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-md"
                  >
                    Update
                  </button>
                  <Link
                    to={`/details/${items._id}`}
                    className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-md"
                  >
                    View Assignment
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Assignments;
