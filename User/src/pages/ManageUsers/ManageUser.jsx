import UserForm from '../../components/UserForm/UserForm';
import UserList from '../../components/UserList/UserList';
import { fetchUsers } from '../../service/userService';
import './ManageUsers.css';
import { useEffect,useState } from 'react';
import toast from 'react-hot-toast';

const ManageUser  = () => {

    const [users,setUsers] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        async function loadUsers() {
            try{
                setLoading(true);
                const response = await fetchUsers();
                setUsers(response.data);

            }catch(error){
                console.error(error);
                toast.error("Failed to fetch users");
            }finally {
                setLoading(false);
            }
        }
        loadUsers();
    
    },[]);

    return (
       <div className="users-container text-light">
            <div className="left-Column">
                <UserForm setUsers={setUsers}/>
            </div>
            <div className="right-Column">
                <UserList users={users} setUsers={setUsers}/> 
            </div>
        </div>
    )
}

export default ManageUser;