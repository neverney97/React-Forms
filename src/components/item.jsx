import React from 'react'

const Item = ({details}) => {
  return (
    <div >
        <div className='flex grid grid-cols-2 items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md p-4 mb-4 transition-transform transform hover:scale-105'>
            <h1 className='text-xl font-semibold text-slate-800'>
                {details.name}
            </h1>
            <h3>
                {details.email}
            </h3>
            <div>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600 mr-2'>
                    Edit
                </button>
                <button className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-slate-600'>
                    Delete
                </button>
            </div>
        </div>
    </div>
  )
}

export default Item