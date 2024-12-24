import React from 'react'

const Faqsection = () => {
  return (
    <div className='mb-10'>
      <h2 className='text-xl font-semibold text-center py-5'>Faq Section</h2>
      <div className="join join-vertical w-full">
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" defaultChecked />
      <div className="collapse-title text-xl font-medium">AnyOne can delete or update assignment?</div>
      <div className="collapse-content">
        <p>No, Who create the assignment, only he/she just can delete or update the assignment</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">AnyOne can create or evaluate assignment?</div>
      <div className="collapse-content">
        <p>No, only loged In user can</p>
      </div>
    </div>
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-xl font-medium">Which technologies are use in this application?</div>
      <div className="collapse-content">
        <p>Here React,express,mongoDB,firebase,axios,JWT etc... are uses</p>
      </div>
    </div>
  </div></div>
  )
}

export default Faqsection