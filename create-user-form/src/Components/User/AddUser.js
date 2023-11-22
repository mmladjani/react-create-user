import React from 'react';
import { useState } from 'react';
import addUserClasses from './AddUser.module.css';
import classes from '../../App.module.css';
import Card from '../Shared/Card';
import Button from '../Shared/Button';

const DUMMY_USER = {
    'user-name': 'John Doe',
    'user-age': 25
}

const AddUser = (props) => {

    let customMessage = '';

    const [userData, setUserData] = useState(DUMMY_USER);

    const inputChangeHandler = (event) => {
        
        setUserData((previousValue) => {
            return {
                ...previousValue,
                [event.target.id]: event.target.value
            }
        }) 
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(userData['user-name'].trim().length < 3 && userData['user-age'] < 3) {
            customMessage = 'user name must be at least 3 characters long, and user age must be greater then 3...';
            props.onAddUserMessage(customMessage);
        } else if(userData['user-age'] < 3) {
            customMessage = 'user age must be at greater then 3...';
            props.onAddUserMessage(customMessage);
        } else if(userData['user-name'].trim().length < 3) {
            customMessage = 'user name must be at least 3 characters long...'
            props.onAddUserMessage(customMessage);
        } else {
            props.onAddUser(userData)
            setUserData({'user-name': '', 'user-age': ''});
        }
    }


    return (
        <Card className={classes.main}>
            <form onSubmit={submitHandler} className={addUserClasses.form}>
                <div className={addUserClasses['form-input__section']}>
                    <label htmlFor="user-name" className={addUserClasses['form-input__label']}>Username</label>
                    <input type="text" id="user-name" className={addUserClasses['form-input__field']} value={userData['user-name']} onChange={inputChangeHandler}></input>
                </div>
                <div className={addUserClasses['form-input__section']}>
                    <label htmlFor="user-age" className={addUserClasses['form-input__label']}>Age</label>
                    <input type="number" id="user-age" className={addUserClasses['form-input__field']} value={userData['user-age']} onChange={inputChangeHandler}></input>
                </div>
                <Button type='submit'>Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;

