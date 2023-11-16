import './UserList.css'
import User from './User'; 
import { useState } from 'react';

const UserList = (props) => {

    const { users } = props;
    
    return (
        <div className="main">
            <div className="user-list">
                {users.map((user, index) => <User key={index} user={user} /> )}
            </div>
        </div>
    )
}

export default UserList;