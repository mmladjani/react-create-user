import React from 'react';
import classes from './User.module.css';

const User = (props) => {

    return (
        <p className={classes.user}>{props.user['user-name']}, {props.user['user-age']}</p>
    )
}

export default User;