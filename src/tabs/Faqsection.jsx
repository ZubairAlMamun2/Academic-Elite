import React from 'react'

const Faqsection = () => {
  return (
    <div className="mb-10 mx-4 bg-gray-900 md:mx-6 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center py-5 text-gray-100">FAQ Section</h2>
      <div className="join join-vertical w-full">
        <div className="collapse collapse-arrow join-item  border border-gray-600">
          <input type="radio" name="my-accordion-4" defaultChecked />
          <div className="collapse-title text-xl font-medium text-gray-100">Can anyone delete or update an assignment?</div>
          <div className="collapse-content">
            <p className="text-gray-100">No, only the person who created the assignment can delete or update it.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item  border border-gray-600">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-gray-100">Can anyone create or evaluate an assignment?</div>
          <div className="collapse-content">
            <p className="text-gray-100">No, only logged-in users can create or evaluate assignments.</p>
          </div>
        </div>

        <div className="collapse collapse-arrow join-item  border border-gray-600">
          <input type="radio" name="my-accordion-4" />
          <div className="collapse-title text-xl font-medium text-gray-100">Which technologies are used in this application?</div>
          <div className="collapse-content">
            <p className="text-gray-100">This application uses React, Express, MongoDB, Firebase, Axios, JWT, and more.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faqsection;
