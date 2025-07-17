import { createContext,useEffect,useState } from "react";
import { fetchCategories } from "../service/CategoryService.js";
import { fetchItems } from "../service/ItemService.js";


export const AppContext = createContext(null);

export const AppContextProvider = (props)=>{
    
    const [categories,setCategories] = useState([]);
    const [itemsData,setItemsData] = useState([]);
    const [auth,setAuth] = useState({token:null,role:null});
   
    useEffect(() => {
        async function loadData() {
            const response = await fetchCategories();
            const itemResponse = await fetchItems();
            setCategories(response.data);
            setItemsData(itemResponse.data);
        }
        loadData();
    }, []);

    const setAuthData = (token, role) => {
        setAuth({ token, role });
        localStorage.setItem("token", token);
        localStorage.setItem("role", role);
    }
    const contextValue = {
        categories,
        setCategories,
        auth,
        setAuthData,
        itemsData,
        setItemsData

    }
    return <AppContext.Provider value={contextValue}>
        {props.children}
    </AppContext.Provider>
    
    
}