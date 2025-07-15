import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore/explore.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageItems from "./pages/ManageItems/ManageItem.jsx";
import ManageUser from "./pages/ManageUsers/ManageUser.jsx";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login.jsx";

const App = () => {
    const location = useLocation();
    return (
        <div>
            {location.pathname !== "/login" && <MenuBar/>}
            <Toaster/>
            <Routes>
                <Route path="/category" element={<ManageCategory />} />
                <Route path="/items" element={<ManageItems />} />
                <Route path="/users" element={<ManageUser />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        
        
        </div>
    );
}
export default App;