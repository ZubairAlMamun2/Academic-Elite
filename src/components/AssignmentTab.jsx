import React from 'react'

const AssignmentTab = () => {
  return (
    <div className='mb-5'>
        <h2 className='text-xl font-semibold text-center py-5'>Assignments Tab</h2>
        <div className='md:flex gap-3 bg-slate-300 rounded-lg border-2'>
            <div>
                <img src="https://i.ibb.co.com/DkjFszW/ass-4.png" alt="" />
            </div>
            <div className='flex justify-center mt-5 items-center text-lg font-semibold'>
                
                In this section <br /> -- User can see assignment title, description , marks etc.. <br />
                -- User can update delete and view assignments <br />
                -- here also have search and select difficulty section
            </div>

        </div>
    </div>
  )
}

export default AssignmentTab