import React from 'react'

const PendingTab = () => {
  return (
    <div className='mb-5'>
        <h2 className='text-xl font-semibold text-center py-5'>Pending Assignments Tab</h2>
        <div className='md:flex justify-between gap-3 bg-slate-300 rounded-lg border-2'>
        <div className='flex ml-2 justify-center items-center mb-5 text-lg font-semibold'>
                
                In this section <br /> -- User can see pending assignments, it's title, marks etc.. <br />
                -- User can evaluate assignments give marks button, it will redirect you another page<br />
                -- here user can just evaluate another assignmet not his submitted assignment
            </div>
            <div>
                <img className='p-1' src="https://i.ibb.co.com/JQdMZSk/Ass-5.png" alt="" />
            </div>
            

        </div>
    </div>
  )
}

export default PendingTab