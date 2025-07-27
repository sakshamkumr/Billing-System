import "./CustomerForm.css";

const CustomerForm = ({ customerName, setCustomerName, mobileNumber, setMobileNumber }) => {
  return (
    <div
      className="p-2 pt-1 w-100 d-flex justify-content-center align-items-center"
      // consider removing fixed height if parent is not fixed height
      style={{ marginTop: "-10px" /* , height: "100%" */ }}
    >
      <div style={{ width: "100%", maxWidth: "400px" }}>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2 w-100">
            <label
              htmlFor="customerName"
              className="form-label mb-0"
              style={{ width: "40%" }}
            >
              Customer Name
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="customerName"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>
        <div className="mb-3">
          <div className="d-flex align-items-center gap-2 w-100">
            <label
              htmlFor="mobileNumber"
              className="form-label mb-0"
              style={{ width: "40%" }}
            >
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control form-control-sm"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              style={{ flex: 1, minWidth: 0 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;
