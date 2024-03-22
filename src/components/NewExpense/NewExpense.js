
import React ,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpenses(props){
    const[isEditing,setEditing]=useState(false);

    const onSaveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random.toString(),
        };
       props.onReceiveData(expenseData);
       setEditing(false);
    }

    const startEditingHandler = () =>{
        setEditing(true);
    }

    const stopEditingHandler = () =>{
        setEditing(false);
    }
    return(
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>ADD New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
        </div>
    )
}