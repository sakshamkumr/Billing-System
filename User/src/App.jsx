import MenuBar from "./components/MenuBar/MenuBar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Explore from "./pages/Explore/explore.jsx";
import ManageCategory from "./pages/ManageCategory/ManageCategory.jsx";
import ManageItems from "./pages/ManageItems/ManageItem.jsx";
import ManageUser from "./pages/ManageUsers/ManageUser.jsx";
import { Routes, Route, useLocation, Navigate} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login/Login.jsx";
import OrderHistory from "./pages/OrderHistory/OrderHistory.jsx";
import { useContext } from "react";
import { AppContext } from "./context/AppContext.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";

const App = () => {
    const location = useLocation();
    const {auth} = useContext(AppContext);

    const LoginRoute = ({element}) => {
        if(auth.token){
            return <Navigate to="/dashboard"/>
        }
        return element;
    }

    const ProtectedRoute = ({element , allowedRoles}) => {
        if(!auth.token){
            return <Navigate to="/login" replace/>
        }
        if(allowedRoles && !allowedRoles.includes(auth.role)){
            return <Navigate to="/dashboard" replace/>
        }

        return element;
    }
    return (
        <div>
            {location.pathname !== "/login" && <MenuBar/>}
            <Toaster/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/explore" element={<Explore/>} />
                {/*Admin Only routes*/}
                <Route path="/category" element={<ProtectedRoute element={<ManageCategory />} allowedRoles={['ROLE_ADMIN']} />} />
                <Route path="/items" element={<ProtectedRoute element={<ManageItems />}allowedRoles={['ROLE_ADMIN']} />} />
                <Route path="/users" element={<ProtectedRoute element={<ManageUser />} allowedRoles={['ROLE_ADMIN']}/>} />
                
                <Route path="/login" element={<LoginRoute element={<Login/>}/>} />
                <Route path="/orders" element={<OrderHistory />} />
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                

            </Routes>
        
        
        </div>
    );
}
export default App;