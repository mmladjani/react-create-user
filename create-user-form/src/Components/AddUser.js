import './AddUser.css';

const AddUser = () => {
    return (
        <div className="main">
            <form className="form">
                <div className='form-input__section'>
                    <label htmlFor="user-name" className='form-input__label'>Username</label>
                    <input type="text" id="user-name" className='form-input__field'></input>
                </div>
                <div className='form-input__section'>
                    <label htmlFor="age" className='form-input__label'>Age</label>
                    <input type="number" id="age" className='form-input__field'></input>
                </div>
            </form>
        </div>
    )
}

export default AddUser;

