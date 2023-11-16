import AddUser from './Components/User/AddUser';
import UserList from './Components/User/UserList';
import AlertModal from './Components/User/AlertModal';
import { useState } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);

  const addUserToList = (user) => {
    setUsers((previousData) => {
      return [
        ...previousData,
        user
      ]
    })
  }

  return (
      <div>
        <AddUser onAddUser={addUserToList}/>
        {users.length > 0 ? <UserList users={users}/> : <AlertModal/>}
    </div>
  );
}

export default App;
