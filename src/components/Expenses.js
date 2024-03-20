import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseForm from "./NewExpense/ExpenseForm";
import ExpenseFilter from "./ExpensesFilter";
export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const FilterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const { expenses } = props;
  
  // Filter expenses based on the selected year
  const filteredExpenses = expenses.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
   
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={FilterChangeHandler}
      />
      {filteredExpenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            price={expense.price}
            location={expense.location}
          />
        );
      })}
    </div>
  );
} 