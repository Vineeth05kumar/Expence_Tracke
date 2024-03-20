import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "1",
      date: new Date(2022, 7, 15),
      title: "Insurance",
      price: 100,
      location: "Bangalore",
    },
    {
      id: "2",
      date: new Date(2021, 3, 25),
      title: "Book",
      price: 10,
      location: "Delhi",
    },
    {
      id: "3",
      date: new Date(2023, 10, 11),
      title: "Pen",
      price: 1,
      location: "Hyderabad",
    },
    {
      id: "4",
      date: new Date(2023, 1, 14),
      title: "Laptop",
      price: 200,
      location: "Mumbai",
    },
  ]);

  const onReceiveDataHandler = (newExpenseData) => {
    const newExpense = {
      ...newExpenseData,
    };
    setExpenses((prevExpenses) => [ newExpense, ...prevExpenses]);
  };
  return (
    <div>
      <NewExpenses onReceiveData={onReceiveDataHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
