import './User.css';

const User = (props) => {
    console.log(props, 'user')

    return (
        <p className="user">{props.user['user-name']}, {props.user['user-age']}</p>
    )
}

export default User;