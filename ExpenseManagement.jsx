import React, { useState } from "react";

const ExpenseManagement = () => {
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ title: "", amount: "", category: "" });

  const handleAddExpense = () => {
    if (!newExpense.title || !newExpense.amount || !newExpense.category) return;
    setExpenses([...expenses, { ...newExpense, id: Date.now() }]);
    setNewExpense({ title: "", amount: "", category: "" });
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Expense Management</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          placeholder="Title"
          value={newExpense.title}
          onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
        />
        <input
          type="number"
          placeholder="Amount"
          value={newExpense.amount}
          onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category"
          value={newExpense.category}
          onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
        />
        <button onClick={handleAddExpense} style={{ padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer" }}>Add Expense</button>
      </div>
      <table style={{ width: "100%", marginTop: "20px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Title</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Amount</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Category</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{expense.title}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{expense.amount}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{expense.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
console.log(expenses);

export default ExpenseManagement;

