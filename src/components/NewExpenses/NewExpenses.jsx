import React from 'react';
import ExpenseForm from './ExpenseForm';
import "./NewExpenses.css"

const NewExpenses = (props) => {

    const serverExpenseDate = (expense) => {
        const dataWithId = {
            id: Math.random().toString(),
            ...expense
        }
        props.onGet(dataWithId)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onServer={serverExpenseDate} />
        </div>
    );
};

export default NewExpenses;