import React, { useContext, useEffect, useState } from "react";
// import NavBar from './NavBar'
import Footer from "./Footer";
import NavBar from "./Navbar";
import axios from "axios";
import { AuthContext } from "../provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";

const MyAemptedAssignments = () => {
  const { user } = useContext(AuthContext);
  const axiossecure = UseAxiosSecure();
  const [assignment, setAssignment] = useState([]);
  useEffect(() => {
    axiossecure.get(`http://localhost:5000/attemptassignment`).then((res) => {
      // console.log(res.data);
      const allAssignments = res.data;
      // console.log('check this',assignment[0].email)
      const filteredData=allAssignments.filter(item=>item.email==user?.email)
      setAssignment(filteredData)
      // console.log(filteredData)
      // setAssignment(filteredData)
    });
  }, [user.email]);



  

  return (
    <div className="w-11/12 mx-auto">
      <NavBar />
      <div className="grid gap-3 grid-cols-6 ">
        {
          assignment.map(items=>{
            return <div key={items._id} className="card col-span-6 md:col-span-3 lg:col-span-2 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{items.title}</h2>
              <p className="font-semibold">Assignment status: {items.status}</p>
              <p className="font-semibold">Assignment marks: {items.marks}</p>
              {items.status!=="pending"?<><p className="font-semibold">Your obtained marks: {items.obtainedmarks}</p>
              <p className="font-semibold"> Feedback: {items.feedback}</p></>:<div></div>}
              
            </div>
          </div>
          })
        }
      </div>

      <Footer />
    </div>
  );
};

export default MyAemptedAssignments;
