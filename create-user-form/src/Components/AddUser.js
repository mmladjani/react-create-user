import { useState } from 'react';
import './AddUser.css';

const AddUser = () => {

    let DUMMY_USER = {
        'user-name': 'John Doe',
        'age': 25
    }

    const [userData, setUserData] = useState(DUMMY_USER);

    const inputChangeHandler = (value, input) => {
        setUserData((previousValue) => {
            return {
                ...previousValue,
                [input]: value
            }
        })
    }

    console.log(userData);

    const submitHandler = (event) => {
        event.preventDefault();
        
    }

    return (
        <div className="main">
            <form onSubmit={submitHandler} className="form">
                <div className='form-input__section'>
                    <label htmlFor="user-name" className='form-input__label'>Username</label>
                    <input type="text" id="user-name" className='form-input__field' value={userData['user-name']} onChange={(event) => inputChangeHandler(event.target.value, 'user-name')}></input>
                </div>
                <div className='form-input__section'>
                    <label htmlFor="age" className='form-input__label'>Age</label>
                    <input type="number" id="age" className='form-input__field' value={userData['age']} onChange={(event) => inputChangeHandler(event.target.value, 'age')}></input>
                </div>
                <button className={'form-button'}>Add user</button>
            </form>
        </div>
    )
}

export default AddUser;

