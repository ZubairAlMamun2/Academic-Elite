import axios from 'axios'
import React, { useContext, useEffect } from 'react'

import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'

const axiosInstance=axios.create({
    baseURL:'https://group-study-zeta.vercel.app',
    withCredentials:true,
})

const UseAxiosSecure = () => {

    const{Logout}=useContext(AuthContext)
    const navigate=useNavigate()

    useEffect(()=>{
        axiosInstance.interceptors.response.use(response=>{
            return response
        },error=>{

            if(error.status==401||error.status==403){
                console.log("need to logout")
                Logout()
                .then(()=>{
                    console.log("logout User")
                    navigate('/auth/login')
                })
                .catch(error=>console.log(error))
            }
            return Promise.reject(error);
        })
    },[])

    return axiosInstance
}

export default UseAxiosSecure