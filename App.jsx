import { useState } from "react";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const addExpense = () => {
    if (description && amount) {
      setExpenses([...expenses, { description, amount: parseFloat(amount) }]);
      setDescription("");
      setAmount("");
    }
  };

  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);

  return (
    <div style={{ maxWidth: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Finance Management </h2>

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={addExpense}>Add Expense</button>

      <h3>Expenses</h3>
      <ul>
        {expenses.map((item, index) => (
          <li key={index}>
            {item.description} - ₹{item.amount}
          </li>
        ))}
      </ul>

      <h3>Total: ₹{totalExpenses}</h3>
    </div>
  );
}

export default App;
