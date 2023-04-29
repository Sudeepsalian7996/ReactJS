import ExpenseItem from "./components/Expenses/ExpenseItem";
import ExpenseForm from "./components/newExpense/ExpenseForm"

function App() {
  const expenses = [
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

  return (
    <div>
      <ExpenseForm />
      {expenses.map((ele) => {
        return <ExpenseItem title={ele.title} amount={ele.amount} date={ele.date} loc={ele.loc}></ExpenseItem>
      })
      }
    </div>
  );
}

export default App;
