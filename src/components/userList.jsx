import React from 'react'
import Item from './item'

const List = (props) => {
  return (
    <div>
        {props.usersList.map((user,index) => (
            <Item key={index} details={user}/>
        )
        )}
    </div>
  )
}

export default List