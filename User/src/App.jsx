import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore/explore.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageItems from "./pages/ManageItems/ManageItem.jsx";
import ManageUser from "./pages/ManageUsers/ManageUser.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
    return (
        <div>
            <MenuBar />
            <Toaster/>
            <Routes>
                <Route path="/category" element={<ManageCategory />} />
                <Route path="/items" element={<ManageItems />} />
                <Route path="/users" element={<ManageUser />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore/>} />
                <Route path="/" element={<Dashboard />} />
            </Routes>
        
        
        </div>
    );
}
export default App;