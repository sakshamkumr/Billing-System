import { useEffect, useState } from "react";
import "./OrderHistory.css";
import { latestOrders, deleteOrder } from "../../service/OrderService"; // 👈 add delete API here

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await latestOrders();
        setOrders(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const formatItems = (items) => {
    return items.map((item) => `${item.name} x ${item.quantity}`).join(", ");
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleDelete = async (orderId) => {
    if (!window.confirm("Are you sure you want to delete this order?")) return;
    try {
      await deleteOrder(orderId); // 👈 backend delete API
      setOrders(orders.filter((o) => o.orderId !== orderId));
    } catch (err) {
      console.error(err);
      alert("Failed to delete order!");
    }
  };

  // Filter orders by search query
  const filteredOrders = orders.filter((order) =>
  order.customerName.toLowerCase().includes(search.toLowerCase()) ||
  order.phoneNumber.toLowerCase().includes(search.toLowerCase()) ||
  order.orderId.toLowerCase().includes(search.toLowerCase()) ||
  order.items.some(item => item.name.toLowerCase().includes(search.toLowerCase()))
);

  if (loading) {
    return <div className="text-center py-4">Loading orders...</div>;
  }

  if (orders.length === 0) {
    return <div className="text-center py-4">No Past Orders</div>;
  }

  return (
    <div className="order-history-container">
      <h2 className="mb-2">All Orders</h2>

      {/* 🔍 Search Bar */}
      <input
        type="text"
        placeholder="Search by customer name or phone or id ..."
        className="form-control mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="table-wrapper">
        <table className="table table-striped table-hover">
          <thead className="table-dark sticky-header">
            <tr>
              <th>Order Id</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Date</th>
              <th>Action</th> {/* 👈 New column */}
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((order) => (
              <tr key={order.orderId}>
                <td>{order.orderId}</td>
                <td>
                  {order.customerName} <br />
                  <small className="text-muted">{order.phoneNumber}</small>
                </td>
                <td>{formatItems(order.items)}</td>
                <td>₹{order.grandTotal}</td>
                <td>{order.paymentMethod}</td>
                <td>
                  <span
                    className={`badge ${
                      order.paymentDetails?.status === "COMPLETED"
                        ? "bg-success"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {order.paymentDetails?.status || "PENDING"}
                  </span>
                </td>
                <td>{formatDate(order.createdAt)}</td>
                <td>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDelete(order.orderId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {filteredOrders.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-muted">
                  No orders found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderHistory;
