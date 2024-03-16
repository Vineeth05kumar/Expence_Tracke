import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {

    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',
    //     enteredPrice:'',
    //     enteredDate:'',
    // });


    const [enteredTitle, setEnteredTitle] = useState('');

    const titleHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredTitle:event.target.value};
        // });
    };

    const [enteredPrice,setEnteredPrice]=useState('');

    const priceHandler=(event)=>{
        setEnteredPrice(event.target.value);
        // setUserInput((prevState)=>{
        //     return{...prevState,enteredPrice:event.target.value}
        // });
    }

    const [enteredDate,setEnteredDate] = useState('');

    const dateHandler=(event)=>{
        setEnteredDate(event.target.value);
         // setUserInput((prevState)=>{
        //     return{...prevState,enteredDate:event.target.value}
        // });
    }

    const formSubmission=(event)=>{
        event.preventDefault();

        const obj={
           title:enteredTitle,
            price:enteredPrice,
            date:new Date(enteredDate),
        }
        props.onSaveExpenseData(obj);
       setEnteredDate('');
       setEnteredPrice('');
       setEnteredTitle('');
    
    }

    return (
        <form onSubmit={formSubmission}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label for="title">Title</label>
                    <input type="text" id="title" value={enteredTitle} onChange={titleHandler} />
                </div>
                <div className="new-expense__control">
                    <label for="price">Price</label>
                    <input type="number" id="price" min="0.01" step="0.01" value={enteredPrice} onChange={priceHandler} />
                </div>
                <div className="new-expense__control">
                    <label for="date">Date</label>
                    <input type="date" id="date" min="2023-08-18" max="2024-03-15" value={enteredDate} onChange={dateHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>
    );
}
