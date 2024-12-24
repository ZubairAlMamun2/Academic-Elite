import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./Navbar";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Assignments = () => {
  const{user}=useContext(AuthContext)
  
  const loadeddata = useLoaderData();
  // const { user } = useContext(AuthContext);
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const navigate =useNavigate()

  const [data, setData] = useState(loadeddata);
  // console.log(data);
  const handledelete = (_id, email) => {
    // console.log(_id, email);
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
        fetch(`http://localhost:5000/assignment/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.deletedCount > 0) {
              Swal.fire({
                title: "Success!",
                text: "Assignment Deleted succesfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              const filtereddata = data.filter((user) => user._id !== _id);
              setData(filtereddata);
            }
          });
      }
    });
  };

  const fetchAssignments = () => {
    let url = `http://localhost:5000/assignments?`;

    // Append query parameters for filtering and searching
    if (difficulty) url += `difficulty=${difficulty}&`;
    if (search) url += `search=${search}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Sort the assignments: Place selected difficulty at the top
        const sortedAssignments = data.sort((a, b) => {
          if (a.type === difficulty) return -1; // Move selected difficulty type to the top
          if (b.type === difficulty) return 1;
          return 0;
        });
        setData(sortedAssignments); // Set the sorted assignments to state
      })
      .catch((error) => console.error("Error fetching assignments:", error));
  };

  useEffect(() => {
    fetchAssignments();
  }, [difficulty, search]);

  return (
    <div className="w-11/12 mx-auto">
      <NavBar />

     <div className="flex justify-center gap-5 my-5">
     <input
        type="text"
        placeholder="Search assignments..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input input-bordered mb-4"
      />

      <select
        onChange={(e) => setDifficulty(e.target.value)} required 
        value={difficulty}
      >
        <option disabled value="">Select Difficulty</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        
      </select>
     </div>

      <div className=" grid gap-3 grid-cols-6 min-h-[60vh]">
        {data &&
          data.map((items) => {
            return (
              <div
                key={items._id}
                className="card  bg-base-100 col-span-6 md:col-span-3 lg:col-span-2 shadow-xl"
              >
                <figure>
                  <img
                    className="p-3 h-48 border-none rounded-lg"
                    src={items.photo}
                    alt="Assignment"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{items.title}</h2>
                  <p>{items.description}</p>
                  <p>Difficulty: {items.type}</p>
                  <p>Marks: {items.marks}</p>
                  <div className="card-actions justify-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        handledelete(items._id, items.email);
                      }}
                    >
                      Delete
                    </button>
                    <button
                      // to={`/update/${items._id}`}
                      onClick={()=>{
                        if(user?.email==items.email){
                          navigate(`/update/${items._id}`)
                        }
                        else{
                          Swal.fire({
                            title: "Error!",
                            text: "You Can't Update it, Cause This is not created by you!",
                            icon: "error",
                            confirmButtonText: "OK",
                          });
                        }
                      }}
                      className="btn btn-primary"
                    >
                      Update
                    </button>

                    <Link
                      to={`/details/${items._id}`}
                      className="btn btn-primary"
                    >
                      View Assignment
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <Footer />
    </div>
  );
};

export default Assignments;
