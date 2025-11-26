📘 Expense Tracker – Full Stack Application

A simple and efficient Expense Management System built using:

React.js (Frontend)

Node.js + Express.js (Backend API)

MySQL (Database)

Bootstrap 5 (UI Styling)

This project allows users to add, view, update, and delete their daily expenses with a clean and professional interface.

⭐ Features
✔ Add New Expense

Users can enter:

Title

Amount

Category

Date

✔ View All Expenses

A styled Bootstrap table displays:

Title

Amount

Category

Date

Edit/Delete Actions

✔ Update Expenses

Click Edit to load the selected expense into the form and modify details.

✔ Delete Expenses

Remove unwanted expense records instantly.

✔ Dynamic Total Calculation

Automatically shows the total amount spent.

✔ Multi-Page Navigation

Routing implemented using react-router-dom:

Home

Add Expense

🧱 Project Structure
/frontend
 └── /src
      ├── /components
      │     ├── ExpenseForm.jsx
      │     └── ExpenseList.jsx
      │
      ├── /pages
      │     ├── Home.jsx
      │     ├── AddExpense.jsx
      │     └── ManageExpenses.jsx
      │
      ├── App.jsx
      ├── App.css
      └── index.js
🛠️ Tech Stack
Frontend

React.js

Axios

Bootstrap 5

React Router DOM

Backend

Node.js

Express.js

MySQL (mysql2)

CORS

📦 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/Sampath3339/Expense_Tracker.git


⚙️ Backend Setup
2️⃣ Navigate to Backend
cd backend

3️⃣ Install Dependencies
npm install express mysql2 cors

4️⃣ Create MySQL Database

Run in MySQL Workbench:
CREATE DATABASE expense_dba;
USE expense_dba;

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  amount INT,
  category VARCHAR(255),
  date DATE
);

▶️ Start Backend Server
nodemon server.js

Server URL:
http://localhost:5000

🖥️ Frontend Setup
5️⃣ Navigate to Frontend
cd frontend

6️⃣ Install Dependencies
npm install
npm install axios bootstrap react-router-dom

7️⃣ Start React App
npm start

Frontend URL:
http://localhost:3000

🚀 Future Enhancements

Expense category dropdown

Graphs & Charts visualization

Authentication (Login/Register)

Filter/Search expenses

🤝 Contributing

Contributions are welcome!
Feel free to open an issue or create a pull request.

📄 License

This project is licensed under the MIT License.

🙌 Author

E. Sampath
Passionate Full Stack Developer
Feel free to connect anytime!

