import React, { useContext, useEffect, useState } from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import { AuthContext } from '../provider/AuthProvider'
import UseAxiosSecure from './UseAxiosSecure'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const PendingAssign = () => {
  const {user}=useContext(AuthContext)
  const axiossecure=UseAxiosSecure()
  const navigate=useNavigate()
  const [assignment,setAssignment]=useState([]);
  useEffect(()=>{
    axiossecure.get(`https://group-study-zeta.vercel.app/pendingassignment`)
    .then((res)=>{
      setAssignment(res.data)
      const filtredassignment=res.data.filter(item=>item.status=="pending")
      setAssignment(filtredassignment);
      // console.log(assignment)
  })
  },[user.email])
  
  
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <div className=" min-h-[60vh]">
        <div>
            <h2 className="text-xl font-md">Pending Assignments: {assignment.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='border'>
                            <th className='border'>Title</th>
                            <th className='border'>Marks</th>
                            <th className='border'>Submited By</th>
                            <th className='border'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            assignment.map(item => <tr className='border' key={item._id}>
                                
                                <td className='border'>
                                  {item.title}
                                </td>
                                <td className='border'>
                                  {item.marks}
                                    </td>
                                <td className='border'>{item?.name}</td>
                                <th className='border'>
                                    {/* <Link to={`/givemark/${item._id}`} className="btn btn-primary btn-xs">Give Marks</Link> */}
                                    <button onClick={()=>{
                                      if(user.email==item.email){
                                        Swal.fire({
                                                title: 'Error!',
                                                text: "You Can't Marked it, Cause This is created by you!",
                                                icon: 'error',
                                                confirmButtonText: 'OK'
                                              })
                                      }
                                      else{
                                        navigate(`/givemark/${item._id}`)
                                      }
                                    }} className="btn btn-primary btn-xs">Give Marks</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default PendingAssign