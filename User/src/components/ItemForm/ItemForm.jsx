import { useContext,useState } from 'react';
import { assets } from '../../assets/assets.js';
import {AppContext} from '../../context/AppContext.jsx';
import { addItem } from '../../service/ItemService.js';
import toast from "react-hot-toast";

const ItemForm = () => {

    const {categories,setItemsData,itemsData} = useContext(AppContext);
    const [image, setImage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: '',
        categoryId: '',
        price: '',
        description: '',
    });

    const onChangeHandler = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setData((data)=> ({
            ...data,
            [name]: value
        }));
    }

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('item', JSON.stringify(data));
        formData.append('file', image);
        try{
            if(!image){
                toast.error("Please select an image");
                return;
                }
            const response = await addItem(formData);
            if(response.status === 201){
                setItemsData([...itemsData, response.data]);
                //TODO update the category State
                toast.success("Item added successfully");
                setData({
                    name: '',
                    categoryId: '',
                    price: '',
                    description: '',
                });
                setImage(false);
            }else{
                toast.error("Failed to add item");
            }
        }catch(error){
            console.error(error);
            toast.error("Unable to add the item");
        }

    }

    return(
        <div className="item-form-container" style={{height: '100vh',overflowY: 'auto',overflowX: 'hidden'}}>
            <div className="mx-2 mt-2">
            <div className="row">
                <div className="card col-md-8 form-container">
                    <div className="card-body">
                        <form onSubmit={onSubmitHandler}>
                            <div className="mb-3">
                                <label htmlFor="image" className="form-label">
                                    <img src={image ? URL.createObjectURL(image) : assets.cloud} alt="" width={48}/>
                                </label>
                                <input type="file" name="image" id="image" className="form-control" hidden onChange={(e) => setImage(e.target.files[0])}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    className="form-control" 
                                    placeholder="Item name"
                                    onChange={onChangeHandler}
                                    value={data.name}
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="category" className="form-label">
                                    Category
                                </label>
                                <select name="categoryId" id="category" className="form-control" onChange={onChangeHandler} value={data.categoryId}>
                                    <option value="">---Select Category---</option>
                                    {categories.map((category, index) => (
                                        <option key={index} value={category.categoryId}>
                                            {category.name}
                                        </option>
                                    ))}
                                </select>

                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" name="price" id="price" className="form-control" placeholder="&#8377;200.00"  onChange={onChangeHandler} value={data.price} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea 
                                    rows="5" 
                                    name="description" 
                                    id="description" 
                                    className="form-control" 
                                    placeholder="Write Content here .." onChange={onChangeHandler} value={data.description}></textarea>
                            </div>
                            <button type="submit" className="btn btn-warning w-100 " disabled={loading}>
                                {loading ? "Loading..." : "Save"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}
export default ItemForm;