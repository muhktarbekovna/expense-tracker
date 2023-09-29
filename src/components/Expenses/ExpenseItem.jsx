import React from 'react';
import ExpenseDate from './ExpenseDate';
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const expenseTitle = props.title
    const expenseAmout = props.amount

    return (
        <div className='expense-item'>
            <ExpenseDate expenseDate={props.date}/> 
            <h2 className='expense-item__description'>{expenseTitle}</h2>
            <div className='expense-item__price'>${expenseAmout}</div>
        </div>
    );
};

export default ExpenseItem;