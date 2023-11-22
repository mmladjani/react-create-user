import React from 'react';
import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
import AlertModal from './Components/Shared/AlertModal';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  const addUserMessage = (message) => {
    setUserMessage(message);
  }

  const addUserToList = (user) => {
    setUsers((previousData) => {
      return [
        ...previousData,
        user
      ]
    })
    setUserMessage('');
  }

  const closeModal = () => {
    setUserMessage(null);
  }

  console.log({users})

  return (
      <div>
        <AddUser onAddUser={addUserToList} onAddUserMessage={addUserMessage}/>
        {users.length > 0 && <UserList users={users} />}
        {userMessage && <AlertModal onConfirm={closeModal} message={userMessage} />}
      </div>
  );
}

export default App;
