import './User.css';

const User = (props) => {

    return (
        <p className="user">{props.user['user-name']}, {props.user['user-age']}</p>
    )
}

export default User;