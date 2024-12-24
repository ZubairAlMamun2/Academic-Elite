import React from 'react'

const AddnewAssignmentTab = () => {
  return (
    <div className='mb-5'>
        <h2 className='text-xl font-semibold text-center py-5'>Add New Assignments Tab</h2>
        <div className='md:flex gap-3 bg-slate-300 rounded-lg border-2'>
            <div>
                <img src="https://i.ibb.co.com/XYgGtBL/ass-6.png" alt="" />
            </div>
            <div className='flex justify-center mt-5 items-center text-lg font-semibold'>
                
                In this section <br /> -- User can see add assignment <br />
                -- User can't access this tab without login <br />
                -- User have to fill the all field otherwise user can't add
            </div>

        </div>
    </div>
  )
}

export default AddnewAssignmentTab