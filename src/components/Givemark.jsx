import React from 'react'
import NavBar from './Navbar'
import Footer from './Footer'
import { Link, useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import UseAxiosSecure from './UseAxiosSecure'
import Swal from 'sweetalert2'

const Givemark = () => {
   
    const data=useLoaderData()
    console.log(data._id)
    const axiossecure=UseAxiosSecure()
    const navigate=useNavigate();
    let location=useLocation();
    console.log(location.pathname)
    location.pathname='/pendingassignments'

    const handleupdate = (e) => {
        
        e.preventDefault();
        const form = new FormData(e.target);
        const obtainedmarks= form.get("obtainedmarks");
        const feedback = form.get("feedback");
        const status="completed"
    
        const formData = {
            obtainedmarks,
            feedback,
            status,
          };
    
        console.log(formData,data._id);
        axiossecure.put(`https://group-study-zeta.vercel.app/givemark/${data._id}`,formData,{withCredentials:true})
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Assignment marked succesfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
                  navigate("/pendingassignments");
            }
          });
      };


  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <div className="min-h-screen flex justify-center items-center">
        <div className="card rounded-none bg-base-100 w-full max-w-lg shrink-0 p-10">
          <h2 className="text-2xl font-semibold text-center">
            Check Assignment Page
          </h2>
          <form onSubmit={handleupdate} className="card-body p-0">

            <div className='mt-5 font-semibold text-center' >
                {data.title}
            </div>
            <div  >
                <p className='font-semibold'>Google Doc link:</p> <a target='blank' href={data.link}>{data.link}</a>
            </div>
            <div className=''>
              <p className='font-semibold'> Notes: </p> {data.notes}
            </div>


            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                 Marks
                </span>
              </label>
              <input
                name="obtainedmarks"
                type="number"
                placeholder="input marks"
                className="input input-bordered"
                required
                max={data.marks}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-sm font-semibold">
                Feedback
                </span>
              </label>
              <textarea
                name="feedback"
                required
                className="textarea textarea-bordered"
                placeholder="give some feedback"
              ></textarea>
            </div>


            <div className="form-control mt-6">
              <button className="btn btn-neutral rounded-none">Submit</button>
            </div>
          </form>

          <div className=" mt-6">
          <Link className="btn btn-primary flex justify-center rounded-none" to={`/pendingassignments`}>Go Back</Link>
            </div>
          <div className="pt-2"></div>
        </div>
      </div>

        <Footer />
    </div>
  )
}

export default Givemark