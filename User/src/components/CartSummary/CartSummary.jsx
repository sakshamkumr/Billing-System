import './CartSummary.css';
import { useContext } from 'react';
import { AppContext } from '../../context/AppContext.jsx';
import ReceiptPopup from '../ReceiptPopup/ReceiptPopup.jsx';

const CartSummary = ({customerName,setCustomerName,mobileNumber,setMobileNumber}) => {
    const {cartItems} = useContext(AppContext);
    const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = (totalAmount * 0.01)// 1% tax
    const grandTotal = (totalAmount + tax);
    return (
        <div className="mt-2">
            <div className="cart-summary-details">
                <div className="d-flex justify-content-between mb-2">
                    <span className="text-light">Item: </span>
                    <span className="text-light">₹{totalAmount.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span className='text-light'>Tax (1%):</span>
                    <span className="text-light">₹{tax.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    <span className='text-light'>Total:</span>
                    <span className="text-light">₹{grandTotal.toFixed(2)}</span>
                </div>

                <div className="d-flex gap-3">
                    <button className="btn btn-success flex-grow-1">
                        Cash
                    </button>
                    <button className="btn btn-primary flex-grow-1">
                        UPI
                    </button>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <button className="btn btn-warning flex-grow-1">
                        Place Order
                    </button>
                </div>
                
            </div>
        </div>
    )
}
export default CartSummary;