import React from 'react'
import { useState } from 'react'
import Form from './components/form'
import List from './components/userList'

const App = () => {
  const [users, setUsers] = useState([
    {
      id: 1, name: 'Emma', email: 'nani@example.com'
    },
    {
      id: 2, name: 'Olivia', email: 'oli@example.com'
    },
    {
      id: 3, name: 'Ava', email: 'ava@example.com'
    }
  ]);

  console.log(users);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div className='grid grid-cols-2'>
      <Form  addUser={addNewUser}/>
      <List  usersList={users}/>
    </div>
  )
}

export default App