import ItemForm from '../../components/ItemForm/ItemForm';
import ItemList from '../../components/ItemList/ItemList';
import './ManageItems.css';

const ManageItems = () => {
    return (
        <div className="items-container text-light">
            <div className="left-Column">
                <ItemForm/>
            </div>
            <div className="right-Column">
                <ItemList/>
            </div>
        </div>
    )
}

export default ManageItems;