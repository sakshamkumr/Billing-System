import './ManageCategory.css';
import CategoryForm from '../../components/CategoryForm/CategoryForm';
import CategoryList from '../../components/CategoryList/CategoryList';
const ManageCategory = () =>{
    return (
        <div className="category-container text-light">
            <div className="left-Column">
                <CategoryForm/>
            </div>
            <div className="right-Column">
                <CategoryList/> 
            </div>
        </div>

    )
}
export default ManageCategory;