import React from 'react';
import userClasses from './UserList.module.css'
import classes from '../../App.module.css';
import User from './User';
import Card from '../Shared/Card';

const UserList = (props) => {

    const { users } = props;
    
    return (
        <Card className={classes.main}>
            <div className={userClasses['user-list']}>
                {users.map((user, index) => <User key={index} user={user} /> )}
            </div>
        </Card>
    )
}

export default UserList;