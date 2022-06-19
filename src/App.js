import Expenses from "./components/Expenses/expenses";

function App() {
  const expenses = [
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

  // console.log(expenses.map((expense) => expense.title));

  /*
  *This is old way of writing JSX code
  return React.createElement("div", {}, 
  React.createElemenet("h2",{} "Lets get started"),
  React.createElement(Expenses,{title:map((expense) => expense.title) })
  )
   */
  return (
    <div>
      <h2>Let's get started!</h2>

      <Expenses
        title={expenses.map((expense) => expense.title)}
        price={expenses.map((expense) => expense.price)}
        date={expenses.map((expense) => expense.date)}
      />
    </div>
  );
}

export default App;
