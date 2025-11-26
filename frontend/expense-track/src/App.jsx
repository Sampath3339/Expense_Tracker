import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddExpense from "./pages/AddExpense";
import ManageExpenses from "./pages/ManageExpenses";

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">💰 Expense Tracker</Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/add">Add Expense</Link>
          <Link className="nav-link" to="/manage">Manage Expenses</Link>
        </div>
      </nav>

      {/* Pages */}
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/manage" element={<ManageExpenses />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
