import React from 'react'
import Item from './item'

const List = (props) => {
  return (
    <div>
        <h1 className='text-3xl font-semibold text-slate-800 text-center mb-6'>Users List</h1>
        {props.usersList.map((user,index) => (
            <Item key={index} details={user}/>
        )
        )}
    </div>
  )
}

export default List