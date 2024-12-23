import React, { useContext, useEffect, useState } from 'react'
// import NavBar from './NavBar'
import Footer from './Footer'
import NavBar from './Navbar'
import axios from 'axios'
import { AuthContext } from '../provider/AuthProvider'
import UseAxiosSecure from './UseAxiosSecure'

const MyAemptedAssignments = () => {
  const {user}=useContext(AuthContext)
  const axiossecure=UseAxiosSecure()
  const [assignment,setAssignment]=useState([]);
  useEffect(()=>{
    axiossecure.get(`http://localhost:5000/attemptassignment`)
    .then((res)=>{
      console.log(res.data)
      setAssignment(res.data)
  })
  },[user.email])
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <div className=" min-h-[60vh]">
                    {assignment.length}
                </div>
            
        <Footer />
    </div>
  )
}

export default MyAemptedAssignments