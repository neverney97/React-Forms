import React from 'react'

const Item = ({details}) => {
  return (
    <div className='flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md p-4 mb-4 transition-transform transform hover:scale-105'>
        <h1 className='text-xl font-semibold text-slate-800'>
            {details.name}
        </h1>
        <h3>
            {details.email}
        </h3>
    </div>
  )
}

export default Item