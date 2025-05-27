import React, { useState } from "react";
import "./ExpenseTracker.css";
function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && category && amount && !isNaN(amount)) {
      setExpenses((prev) => [
        ...prev,
        { description, category, amount: parseFloat(amount).toFixed(2) },
      ]);
      setDescription("");
      setCategory("");
      setAmount("");
    }
  };

  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            -- Select Category --
          </option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="Movie">Movie</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
          min="0"
          step="0.01"
        />
        <button type="submit">Add Expense</button>
      </form>

      <h3>Expense Summary</h3>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount ($)</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="3" style={{ color: "#999" }}>
                No expenses added yet.
              </td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>${expense.amount}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
export default App;
