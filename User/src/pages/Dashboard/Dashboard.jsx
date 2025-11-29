import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Dashboard.css';
import { fetchDashboardData } from '../../service/DashBoard.js';
import toast from 'react-hot-toast';
import assets from '../../assets/assets';

const DashBoard = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isOrdersCollapsed, setIsOrdersCollapsed] = useState(false);
    const username = "User"; // Replace with dynamic username
    const salesGoal = 20000; // Example: ₹20,000 daily sales goal

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchDashboardData();
                setData(response.data);
            } catch (error) {
                console.error(error);
                toast.error('Unable to view the Data');
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const toggleOrders = () => {
        setIsOrdersCollapsed(!isOrdersCollapsed);
    };

    if (loading) return <div className="dashboard-loading">Loading dashboard...</div>;
    if (!data) return <div className="dashboard-error">Failed to load the dashboard data...</div>;

    return (
        <div className="dashboard-wrapper">
            {/* Sticky Header */}
            <header className="dashboard-header">
                <h2 className="dashboard-title">ZapBill Dashboard</h2>
                <div className="header-actions">
                    <button className="refresh-button" onClick={() => window.location.reload()}>
                        <i className="bi bi-arrow-repeat"></i> Refresh
                    </button>
                </div>
            </header>

            {/* Welcome Section */}
            <div className="welcome-section">
                <div className="welcome-overlay">
                    <h1 className="welcome-title">Welcome to ZapBill, {username}!</h1>
                    <p className="welcome-subtitle">Manage your sales and orders with ease.</p>
                    <Link to="/orders" className="cta-button">View All Orders</Link> {/* Updated CTA */}
                    <div className="welcome-images">
                        <img 
                            src={assets.DashBoardill}
                            alt="Dashboard Illustration" 
                            className="welcome-image"
                        />
                        <img 
                            src={assets.sales} 
                            alt="Sales Illustration" 
                            className="welcome-image"
                        />
                    </div>
                </div>
            </div>

            {}
            <div className="dashboard-container">
                <div className="stats-grid">
                    <div className="stat-card" style={{ animationDelay: '0.1s' }}>
                        <div className="stat-icon green-bg">
                            <i className="bi bi-currency-rupee"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Today's Sales</h3>
                            <p>₹{data.todaySales.toFixed(2)}</p>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill green-bg" 
                                    style={{ width: `${(data.todaySales / salesGoal) * 100}%` }}
                                ></div>
                            </div>
                            <p className="progress-text">
                                {((data.todaySales / salesGoal) * 100).toFixed(0)}% of ₹{salesGoal.toFixed(2)} goal
                            </p>
                        </div>
                    </div>
                    <div className="stat-card" style={{ animationDelay: '0.2s' }}>
                        <div className="stat-icon blue-bg">
                            <i className="bi bi-cart-check"></i>
                        </div>
                        <div className="stat-content">
                            <h3>Today's Orders</h3>
                            <p>{data.todayOrderCount}</p>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill blue-bg" 
                                    style={{ width: `${(data.todayOrderCount / 50) * 100}%` }}
                                ></div>
                            </div>
                            <p className="progress-text">
                                {((data.todayOrderCount / 50) * 100).toFixed(0)}% of 50 orders goal
                            </p>
                        </div>
                    </div>
                </div>

                <div className="recent-orders-card">
                    <div className="recent-orders-header">
                        <h3 className="recent-orders-title">
                            <i className="bi bi-clock-history"></i> Recent Orders
                        </h3>
                        <button className="toggle-button" onClick={toggleOrders}>
                            <i className={`bi ${isOrdersCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'}`}></i>
                        </button>
                    </div>
                    {!isOrdersCollapsed && (
                        <div className="orders-table-container">
                            <table className="orders-table">
                                <thead>
                                    <tr>
                                        <th>Order Id</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Payment</th>
                                        <th>Status</th>
                                        <th>Time</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.recentOrders.map((order, index) => (
                                        <tr key={order.orderId} style={{ animationDelay: `${index * 0.1}s` }}>
                                            <td>{order.orderId.substring(0, 8)}...</td>
                                            <td>{order.customerName}</td>
                                            <td>₹{order.grandTotal.toFixed(2)}</td>
                                            <td>
                                                <span className={`payment-method ${order.paymentMethod.toLowerCase()}`}>
                                                    <i className={`bi ${order.paymentMethod.toLowerCase() === 'cash' ? 'bi-cash' : 'bi-credit-card'}`}></i>
                                                    {order.paymentMethod}
                                                </span>
                                            </td>
                                            <td>
                                                <span className={`status-badge ${order.paymentDetails.status.toLowerCase()}`}>
                                                    <i className={`bi ${order.paymentDetails.status.toLowerCase() === 'completed' ? 'bi-check-circle' : 'bi-hourglass-split'}`}></i>
                                                    {order.paymentDetails.status}
                                                </span>
                                            </td>
                                            <td>
                                                {new Date(order.createdAt).toLocaleString('en-IN', {
                                                    day: '2-digit',
                                                    month: '2-digit',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                })}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
export default DashBoard;