import { useState } from 'react';
import './AddUser.css';

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
        if(userData['user-name'].length < 3 && userData['user-age'] < 3) {
            customMessage = 'user name must be at least 3 characters long, and user age must be greater then 3...';
            props.onAddUserMessage(customMessage);
        } else if(userData['user-age'] < 3) {
            customMessage = 'user age must be at greater then 3...';
            props.onAddUserMessage(customMessage);
        } else if(userData['user-name'].length < 3) {
            customMessage = 'user name must be at least 3 characters long...'
            props.onAddUserMessage(customMessage);
        } else {
            props.onAddUser(userData)
        }
    }


    return (
        <div className="main">
            <form onSubmit={submitHandler} className="form">
                <div className='form-input__section'>
                    <label htmlFor="user-name" className='form-input__label'>Username</label>
                    <input type="text" id="user-name" className='form-input__field' value={userData['user-name']} onChange={inputChangeHandler}></input>
                </div>
                <div className='form-input__section'>
                    <label htmlFor="user-age" className='form-input__label'>Age</label>
                    <input type="number" id="user-age" className='form-input__field' value={userData['user-age']} onChange={inputChangeHandler}></input>
                </div>
                <button className={'form-button'}>Add user</button>
            </form>
        </div>
    )
}

export default AddUser;

