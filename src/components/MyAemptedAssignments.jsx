import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import NavBar from "./NavBar";
import ThemeToggle from "./ThemeTogole";
// import ThemeToggle from "./ThemeToggle"; // Importing the ThemeToggle component

const MyAttemptedAssignments = () => {
  const { user } = useContext(AuthContext);
  const axiossecure = UseAxiosSecure();
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiossecure
      .get(`https://group-study-zeta.vercel.app/attemptassignment`)
      .then((res) => {
        const filteredData = res.data.filter((item) => item.email === user?.email);
        setAssignment(filteredData);
        setLoading(false);
      })
      .catch(() => setLoading(false)); // Stop loading on error
  }, [user.email]);

  return (
    <div className=" ">
      <NavBar />

      <div className="min-h-[60vh]  flex flex-col items-center justify-center">
        {loading ? (
          <div className="flex justify-center min-h-screen items-center">
            <span className="loading loading-spinner loading-lg text-purple-400"></span>
          </div>
        ) : (
          <div className="grid gap-5 px-4 md:px-6 my-4 min-h-screen grid-cols-6 w-full">
            {assignment.map((items) => (
              <div
                key={items._id}
                className="card col-span-6 md:col-span-3 lg:col-span-2 bg-gradient-to-br from-[#1e293b] to-[#0f172a] shadow-lg p-4 text-white border border-gray-700"
              >
                <div className="card-body">
                  <h2 className="card-title text-xl font-bold text-gray-400">{items.title}</h2>
                  <p className="font-semibold">Assignment Status: <span className="text-gray-400">{items.status}</span></p>
                  <p className="font-semibold">Assignment Marks: <span className="text-gray-400">{items.marks}</span></p>
                  
                  {items.status !== "pending" && (
                    <>
                      <p className="font-semibold">Your Obtained Marks: <span className="text-gray-400">{items.obtainedmarks}</span></p>
                      <p className="font-semibold">Feedback: <span className="italic text-gray-400">{items.feedback}</span></p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default MyAttemptedAssignments;
