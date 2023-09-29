import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../ui/Card/Card';
import ExpenseFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
import "./Expenses.css"

const Expenses = ({expenses}) => {

    const [filteredYear, setFilteredYear] = useState("2023")

    const getSelectedYear = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = expenses.filter((expens) => {
        return expens.date.getFullYear().toString() === filteredYear
    })

   let expenseContent = <p style={{color:"red",textAlign:"center" }}>No Expenses Found</p>

    if(filteredExpenses.length > 0) {
       expenseContent = filteredExpenses.map((el) => {
            return <ExpenseItem 
            key={Math.random}
            title={el.title} 
            amount={el.amount} 
            date={el.date}/>
        })}
    

    if(filteredYear === "All") {
        expenseContent = expenses.map((el) => {
             return <ExpenseItem 
             key={Math.random}
             title={el.title} 
             amount={el.amount} 
             date={el.date}/>
         })}
     

    return (
        <Card className='expenses'>
            <ExpenseFilter filteredYear={filteredYear} onSelect={getSelectedYear}/>
            <ExpensesChart expenses={expenses}/>
            {expenseContent}
            {/* {filteredExpenses.length === 0 ? <p style={{color:"red",textAlign:"center" }}>No Expenses Found</p> : filteredExpenses.map((el) => {
                return <ExpenseItem 
                key={Math.random}
                title={el.title} 
                amount={el.amount} 
                date={el.date}/>
            })} */}

            {/* {filteredExpenses.map((el) => {
                return <ExpenseItem 
                key={Math.random}
                title={el.title} 
                amount={el.amount} 
                date={el.date}/>
            })} */}
        </Card>
    );
};

export default Expenses;