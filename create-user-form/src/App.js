import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
import AlertModal from './Components/User/AlertModal';
import { useState } from 'react';
import './App.css';

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

  return (
      <div>
        <AddUser onAddUser={addUserToList} onAddUserMessage={addUserMessage}/>
        {users.length > 0 && <UserList users={users} />}
        {userMessage && <AlertModal message={userMessage} />}
    </div>
  );
}

export default App;
