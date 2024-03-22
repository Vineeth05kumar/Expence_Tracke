import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from './ExpensesChart';


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

  let expensesContent = <p>No expense found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map((expense) => (
     
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
        />
      ));
    }

    if(filteredExpenses.length === 1){
      expensesContent = filteredExpenses.map((expense) => (
        <div>
           <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          price={expense.price}
          location={expense.location}
        />
        <p> Only  One Item Present</p>
        </div>
       
        
      ));
    }
  
   
  return (
    <div className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={FilterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      {expensesContent}
    </div>
  );
} 