import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';
import './ManageUsers.css';

const ManageUser  = () => {
    return (
       <div className="users-container text-light">
            <div className="left-Column">
                <UserForm/>
            </div>
            <div className="right-Column">
                <UserList/> 
            </div>
        </div>
    )
}

export default ManageUser;