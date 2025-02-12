import React, { useContext, useEffect, useState } from "react";
import Footer from "./Footer";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import NavBar from "./NavBar";
import { Loader2 } from "lucide-react";

const PendingAssign = () => {
  const { user } = useContext(AuthContext);
  const axiossecure = UseAxiosSecure();
  const navigate = useNavigate();
  const [assignment, setAssignment] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axiossecure
      .get(`https://group-study-zeta.vercel.app/pendingassignment`)
      .then((res) => {
        const filteredAssignment = res.data.filter((item) => item.status === "pending");
        setAssignment(filteredAssignment);
        setLoading(false); 
      })
      .catch((err) => {
        console.error(err);
        setLoading(false); 
      });
  }, [user.email]);

  return (
    <div className="text-white  min-h-screen">
      <NavBar />
      <div className="min-h-[60vh] py-4 px-4 md:px-6">
        <h2 className="text-xl font-semibold mb-4">
          Pending Assignments: {assignment.length}
        </h2>

        {loading ? (
          <div className="flex justify-center min-h-screen items-center h-40">
            <Loader2 className="animate-spin text-purple-400" size={50} />
          </div>
        ) : (
          <div className="overflow-x-auto min-h-screen bg-gray-800  rounded-lg shadow-md">
            <table className="table w-full">

              <thead>
                <tr className="border-b text-gray-400">
                  <th className="py-2">Title</th>
                  <th className="py-2">Marks</th>
                  <th className="py-2">Submitted By</th>
                  <th className="py-2"></th>
                </tr>
              </thead>

              <tbody>
                {assignment.map((item) => (
                  <tr key={item._id} className="border-b hover:bg-gray-700">
                    <td className="py-2">{item.title}</td>
                    <td className="py-2">{item.marks}</td>
                    <td className="py-2">{item?.name}</td>
                    <td className="py-2">
                      <button
                        onClick={() => {
                          if (user.email === item.email) {
                            Swal.fire({
                              title: "Error!",
                              text: "You can't mark it, as this assignment was created by you!",
                              icon: "error",
                              confirmButtonText: "OK",
                            });
                          } else {
                            navigate(`/givemark/${item._id}`);
                          }
                        }}
                        className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded-md"
                      >
                        Give Marks
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PendingAssign;
