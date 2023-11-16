import { useState } from 'react';
import './AddUser.css';

const DUMMY_USER = {
    'user-name': 'John Doe',
    'user-age': 25
}

const AddUser = (props) => {

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
            props.onAddUser(userData)
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

