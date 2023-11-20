import React from 'react';
import './UserList.css'
import User from './User';
import Card from '../Shared/Card';

const UserList = (props) => {

    const { users } = props;
    
    return (
        <Card className="main">
            <div className="user-list">
                {users.map((user, index) => <User key={index} user={user} /> )}
            </div>
        </Card>
    )
}

export default UserList;