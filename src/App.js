import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import './App.css';

// бул жерден озубуз INIT_DATE ачып массивке данныйларды салып бердик
const INIT_DATE = [
  {
    id: "1",
    title: "Car insurance",
    amount: 200,
    date: new Date(2023, 6, 20),
  },
  {
    id: "2",
    title: "online course",
    amount: 50,
    date: new Date(2022, 5, 20),
  },
  {
    id: "3",
    title: "Kinder carden",
    amount: 150,
    date: new Date(2020, 3, 20),
  },
  {
    id: "4",
    title: "Toilet Pouer",
    amount: 5,
    date: new Date(2021, 1, 20),
  },
];


function App() {

  // рендер кылыш учун useState чакырып текуший значеннясына INIT_DATE данный бердик
  const [expenses, setExpenses] = useState(INIT_DATE)


  
  const getExpenseHandler = (newExpens) => {
    console.log("new",newExpens);
    setExpenses((prevState) => {
      return [newExpens,  ...prevState]

    })
  }


  return (
    <div className="App">
      <NewExpenses onGet={getExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
