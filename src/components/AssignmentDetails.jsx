import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import NavBar from './Navbar';
import Footer from './Footer';
import DatePicker from 'react-datepicker';

const AssignmentDetails = () => {
    const data=useLoaderData();
    // console.log(data)
  return (
    <div className="w-11/12 mx-auto">
        <NavBar />
        <div className='flex justify-center'>
        <div className="card  bg-base-100 max-w-96 shadow-xl">
            <figure>
              <img className='p-3 h-48 border-none rounded-lg'
                src={data.
                  photo
                  }
                alt="Assignment" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{data.title}</h2>
              <p>{data.description}</p>
              <p>Difficulty: {data.type}</p>
              <p>Marks: {data.marks}</p>
              <p> Created On: <DatePicker selected={data.date}  /></p>
              <div className="card-actions justify-center">
               
                <Link to={`/take/${data._id}`} className="btn btn-primary">Take Assignment</Link>

              </div>
            </div>
          </div>
        </div>
        <Footer />
        </div>
  )
}

export default AssignmentDetails