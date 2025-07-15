import axios from "axios";

export const addUser = async (user) => {
    return await axios.post(`http://localhost:8080/api/v1.0/admin/register`, user, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`
        }
    });
}
