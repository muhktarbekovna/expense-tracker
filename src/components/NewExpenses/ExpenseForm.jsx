import React, { useState } from 'react';
import "./ExpenseForm.css"


const ExpenseForm = (props) => {
    
    // 5-Вариянты  1-useState(состояние)(object)  1-Handler(обработчик) менен
    //   const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // })

    //  const imputChangeHandler = (event) => {
    //     const currentInputName = event.target.name
    //     setUserInput({
    //         ...userInput,
    //         [currentInputName]: event.target.value
    //     })
    // }

//-------------------------------------------------------------------------------------------------------------

    // 4-Вариянты предыдущий(prevState) состояниесин(версасын) кайтарып беруу менен
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // })

    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             title: event.target.value
    //         }
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             amount: event.target.value
    //         }
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return {
    //             ...prevState,
    //             date: event.target.value
    //         }
    //     })
    // }

//-----------------------------------------------------------------------------------------------------------------

    // 3-Вариянты 1-useState(состояние)(object)  3-Handler(обработчик) менен
    // const [userInput, setUserInput] = useState({
    //     title: "",
    //     amount: "",
    //     date: "",
    // })

    // const titleChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         title: event.target.value
    //     })
    // }

    // const amountChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         amount: event.target.value
    //     })
    // }

    // const dateChangeHandler = (event) => {
    //     setUserInput({
    //         ...userInput,
    //         date: event.target.value
    //     })
    // }

    // const addExpense = (event) => {
    //     event.preventDefault()
    //     console.log(useState);
    // }

//---------------------------------------------------------------------------------------------------------------

    // 2-Вариянты 3-useState(состояние) 1-Handler(обработчик) менен
    // const [title, setTitle] = useState("")
    // const [amount, setAmount] = useState("")
    // const [date, setDate] = useState("")

    // const imputChangeHandler = (event) => {
    //     const currentInputName = event.target.name
    //     if (currentInputName === "title") {
    //         setTitle(event.target.value)
    //     } else if (currentInputName === "amount") {
    //         setAmount(event.target.value)
    //     } else if (currentInputName === "date") {
    //         setDate(event.target.value)
    //     }
    // }

//-----------------------------------------------------------------------------------------------------------

    // 1-Вариянты 3-useState(состояние) 3-Handler(обработчик) менен
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [date, setDate] = useState("")

    const titleChangeHandler = (event) => {
        setTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setDate(event.target.value)
    }

//-------------------------------------------------------------

    const addExpense = (event) => {
        event.preventDefault()
        // console.log(userInput);
        console.log(title);
        console.log(amount);
        console.log(date);

        const currentExpense = {
            title: title,
            amount: Number(amount),
            date: new Date(date),
        }
        props.onServer(currentExpense)
    }

    return (
        <form onSubmit={addExpense}>
            <div className='new-expense__controls'>
                <div onChange={titleChangeHandler} className='new-expense__control'>
                    <table hidden="">Title</table>
                    <input value={title} name='title' type="text" />
                </div>
                <div onChange={amountChangeHandler} className='new-expense__control'>
                    <table hidden="">Amount</table>
                    <input value={amount} name='amount' type="number" min="1" step={"1"} />
                </div>
                <div onChange={dateChangeHandler} className='new-expense__control'>
                    <table hidden="">Date</table>
                    <input value={date} name='date' type="date" min={"2022-01-01"} step={"2026-01-01"} />
                </div>
            </div>
            <button className='new-expense__actions' type='submit'>Add Expenses</button>
        </form>
    );
};

export default ExpenseForm;