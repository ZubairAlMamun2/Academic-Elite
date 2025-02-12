import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-6xl font-semibold text-gray-400 mb-5">404</h2>
        <h3 className="text-3xl font-medium text-gray-300 mb-4">Page Not Found</h3>
        <p className="text-lg text-gray-500 mb-6">Sorry, the page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="btn bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage;
