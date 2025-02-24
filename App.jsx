
export default ExpenseManagement;
import React from "react";
import ExpenseManagement from "./ExpenseManagement";

function App() {
  return (
    <div>
      <ExpenseManagement />
    </div>
  );
}
const [expenses, setExpenses] = useState([
  { id: 1, title: "Groceries", amount: 50, category: "Food" }
]);


export default App;
