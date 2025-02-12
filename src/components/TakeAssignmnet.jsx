import React, { useContext } from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import NavBar from './NavBar';
import Footer from './Footer';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import UseAxiosSecure from './UseAxiosSecure';

const TakeAssignmnet = () => {
    const { user } = useContext(AuthContext)

    const data = useLoaderData();
    const axiossecure = UseAxiosSecure()
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = new FormData(e.target);
        const title = data.title
        const link = form.get("link");
        const notes = form.get("notes");
        const marks = data.marks;
        const email = user.email;
        const name = user.displayName;
        const obtainedmarks = 0;
        const status = "pending";
        const feedback = "";
        const date = data.date;
        const assignment_id = data._id

        const formData = {
            title,
            link,
            notes,
            email,
            marks,
            obtainedmarks,
            status,
            feedback,
            date,
            assignment_id,
            name
        };

        axiossecure.post(`https://group-study-zeta.vercel.app/takeassignment`, formData, { withCredentials: true })
            .then((res) => {
                if (res.data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Assignment submitted successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/pendingassignments');
                }
            });
    }

    return (
        <div className=" text-white">
            <NavBar />
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-gradient-to-br from-[#1e293b] to-[#0f172a] max-w-lg w-full p-8 rounded-lg shadow-lg border border-gray-700">
                    <h2 className="text-2xl font-semibold text-center text-gray-400">
                        Assignment Submission Form
                    </h2>
                    <form onSubmit={handleSubmit} className="card-body p-0 mt-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-sm font-semibold text-gray-300">
                                    Document
                                </span>
                            </label>
                            <input
                                name="link"
                                type="text"
                                placeholder="Google Doc link"
                                className="input input-bordered bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-purple-500"
                                required
                            />
                        </div>

                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text text-sm font-semibold text-gray-300">
                                    Quick Notes
                                </span>
                            </label>
                            <textarea
                                name="notes"
                                required
                                className="textarea textarea-bordered bg-gray-700 text-white border-gray-600 focus:ring-2 focus:ring-purple-500"
                                placeholder="Quick notes text"
                            ></textarea>
                        </div>

                        <div className="form-control mt-6">
                            <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-2 rounded-md font-semibold transition duration-300">
                                Submit
                            </button>
                        </div>
                    </form>

                    <div className="pt-2"></div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default TakeAssignmnet;
