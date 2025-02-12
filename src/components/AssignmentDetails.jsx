import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';
import DatePicker from 'react-datepicker';
import UseAxiosSecure from './UseAxiosSecure';

const AssignmentDetails = () => {
    const [data, setData] = useState(null);
    const axiossecure = UseAxiosSecure();
    const { id } = useParams();

    useEffect(() => {
        axiossecure.get(`https://group-study-zeta.vercel.app/assignment/${id}`)
            .then(res => setData(res.data))
    }, [id]);

    return (
        <div className=" text-white">
            <NavBar />
            <div className="flex justify-center min-h-[60vh] items-center m-4 my-4">
                <div className="card bg-gradient-to-br  from-[#1e293b] to-[#0f172a] mx-4 shadow-xl rounded-lg p-6 text-white border border-gray-700">
                    <figure>
                        <img
                            className='p-3 h-48 border-none rounded-lg'
                            src={data?.photo}
                            alt="Assignment"
                        />
                    </figure>
                    <div className="card-body ">
                        <h2 className="card-title text-xl font-bold text-gray-400">{data?.title}</h2>
                        <p className="text-gray-300">{data?.description}</p>
                        <p className="font-semibold text-gray-300">Difficulty: <span className="text-purple-400">{data?.type}</span></p>
                        <p className="font-semibold text-gray-300">Marks: <span className="text-purple-400">{data?.marks}</span></p>
                        <p className="font-semibold text-gray-300">Created On: <DatePicker selected={data?.date} className="bg-gray-700 text-white p-2 rounded-md" /></p>

                        <div className="card-actions justify-center mt-4 ">
                            <Link to={`/take/${data?._id}`} className="btn btn-primary text-white bg-purple-500 hover:bg-purple-600 rounded-md">
                                Take Assignment
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AssignmentDetails;
