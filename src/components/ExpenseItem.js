import "./ExpenseItem.css"

function ExpenseItem(){
    const date=new Date(2001,12,26)
    const expense="LIC policy"
    const money=200
    return (
        <div >
        <h2 className="expense">Expense Items</h2>
        <p>{date.toISOString()}</p>
        <p>{expense}</p>
        <p>{money}</p>
        </div>
    )
}
export default ExpenseItem