import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [initialExpenses, setNewExpenses] = useState(INITIAL_EXPENSES);
  console.log(initialExpenses);
  const addExpenseHandler = (newExpenseData) => {
    setNewExpenses((prevExpenses) => {
      return [newExpenseData, ...prevExpenses];
    });
  };

  /*
  *This is old way of writing JSX code
  return React.createElement("div", {}, 
  React.createElemenet("h2",{} "Lets get started"),
  React.createElement(Expenses,{title:map((expense) => expense.title) })
  )
   */
  return (
    <div>
      <h2>Expense-Tracker</h2>
      <NewExpense onExpenseData={addExpenseHandler} />
      <Expenses
        // title={expenses.map((expense) => expense.title)}
        // price={expenses.map((expense) => expense.price)}
        // date={expenses.map((expense) => expense.date)}
        items={initialExpenses}
      />
    </div>
  );
}

export default App;
