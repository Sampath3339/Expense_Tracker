import { useEffect, useState } from "react";
import axios from "axios";
import ExpenseList from "../components/ExpenseList";

export default function ManageExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [editData, setEditData] = useState(null);

  const fetchExpenses = async () => {
    const res = await axios.get("http://localhost:5000/api/expenses");
    setExpenses(res.data);
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const updateExpense = async (expense) => {
    await axios.put(
      `http://localhost:5000/api/expenses/${editData.id}`,
      expense
    );
    setEditData(null);
    fetchExpenses();
  };

  const deleteExpense = async (id) => {
    await axios.delete(`http://localhost:5000/api/expenses/${id}`);
    fetchExpenses();
  };

  return (
    <ExpenseList
      expenses={expenses}
      onEdit={setEditData}
      onDelete={deleteExpense}
      editData={editData}
      onUpdate={updateExpense}
    />
  );
}
