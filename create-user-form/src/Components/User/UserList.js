import './UserList.css'
import User from './User';
import AlertModal from './AlertModal';

const UserList = (props) => {

    const { users } = props;
    console.log(users, 'users in userList component')

    let invalidUsers = users.filter( (user) => user['user-name'] === '' || user['user-age'] === '' );
    
    return (
        <div className="main">
            <div className="user-list">
                {invalidUsers.length > 0 ? <AlertModal /> : users.map((user, index) => <User key={index} user={user} /> )}
            </div>
        </div>
    )
}

export default UserList;