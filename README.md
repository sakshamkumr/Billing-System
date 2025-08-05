# 🧾 Billing System

A full-stack **Billing Software** that streamlines product selection, customer details, cart summary, and payment processing using **Razorpay**.  
Built with **Spring Boot** (backend) and **React.js** (frontend), the application offers a clean UI for sales operations and integrates a secure payment gateway.

---

## 🔧 Tech Stack

### 🖥️ Frontend (Branch: `frontend`)
- React.js
- Bootstrap
- Context API
- Axios

### 🛠️ Backend (Branch: `main`)
- Spring Boot
- Spring Web
- Lombok
- Razorpay SDK
- Maven
- Java 17

---

## 📁 Project Structure

### [Backend (`main` branch)](https://github.com/sakshamkumr/Billing-System)
Billing-System/
- ├── src/
- │ ├── main/
- │ │ ├── java/com/saksham/Billing/
- │ │ │ ├── controller/ # REST Controllers
- │ │ │ ├── io/ # DTOs
- │ │ │ ├── service/ # Service Interfaces
- │ │ │ ├── service/impl/ # Service Implementations
- │ │ │ └── BillingApplication.java
- │ │ └── resources/
- │ │ └── application.properties
- ├── pom.xml

### [Frontend ('frontend' branch)](https://github.com/sakshamkumr/Billing-System/tree/Frontend)
Billing-System-Frontend(User)/

- ├── src/
- │ ├── assets/ # Images & UI Assets
- │ ├── components/
- │ │ ├── CartItems/
- │ │ ├── CartSummary/
- │ │ ├── CustomerForm/
- │ │ ├── DisplayCategory/
- │ │ └── DisplayItems/
- │ ├── context/
- │ ├── pages/
- │ │ └── Explore.jsx
- │ ├── App.js
- │ └── main.jsx
- ├── public/
-├── package.json


## ✨ Features
- 🔍 Display & filter product categories
- 🛒 Add/remove items from cart
- 👤 Enter customer details
- 💳 Razorpay payment gateway integration
- 📦 Real-time cart summary
- 📄 Clean component-based React design


## 📸 UI Snapshots

- <details>
  <summary>Click to view screenshots</summary>

  ![Explore](src/main/resources/static/assets/Screenshot%202025-08-02%20095921.png)
  ![Dashboard](src/main/resources/static/assets/Screenshot%202025-08-02%20100555.png)
  ![Payment](src/main/resources/static/assets/Screenshot%202025-08-05%20113954.png)

</details>



## 📌 Future Enhancements
- 🛍 Product management module
- Inventory management

## 📬 Contact
### Saksham Kumar
### 📧 agrawalsaksham565@gmail.com
### 📍 Mathura, India


### [LinkedIn](https://www.linkedin.com/in/saksham-kumar-51870b253/)
### [Github](https://github.com/sakshamkumr)