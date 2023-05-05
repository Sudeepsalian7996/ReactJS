import { useState } from "react";
import AllExpenses from "./components/Expenses/AllExpenses"
import NewExpense from "./components/newExpense/NewExpense"

function App() {
  const dummy = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      loc:"manglore"
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12),loc:"udupi" },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      loc:"banglore"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      loc:"chennai"
    },
  ];
const [expenses,newExpenses]=useState(dummy)
  function expenseHandler(expense){
    console.log("app.js")
    newExpenses((previousState)=>{
    return [expense,...previousState]
   })
  }

  return (
    <div>
      <NewExpense expenseAddedToApp={expenseHandler} />
      <AllExpenses items={expenses}/>
    </div>
  );
}

export default App;
