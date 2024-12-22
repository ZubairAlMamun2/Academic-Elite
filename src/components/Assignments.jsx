import React from 'react'
import Footer from './Footer'
import NavBar from './Navbar'
import { useLoaderData } from 'react-router-dom'

const Assignments = () => {
  const data=useLoaderData();
  console.log(data)
  return (
    <div className='w-11/12 mx-auto'>
        <NavBar />
        <div className=" grid gap-3 grid-cols-6 min-h-[60vh]">
          {data.map(items=>{
            return <div key={items._id} className="card  bg-base-100 col-span-6 md:col-span-3 lg:col-span-2 shadow-xl">
            <figure>
              <img className='p-3 border-none rounded-lg'
                src={items.
                  photo
                  }
                alt="Assignment" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{items.title}</h2>
              <p>{items.description}</p>
              <p>Difficulty: {items.type}</p>
              <p>Marks: {items.marks}</p>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Delete</button>
                <button className="btn btn-primary">Update</button>
                <button className="btn btn-primary">View Assignment</button>
              </div>
            </div>
          </div>
          })}
        </div>
        <Footer />
    </div>
  )
}

export default Assignments