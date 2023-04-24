import "./ExpenseItem.css"

function ExpenseItem(props){
    return (
        <div >
        <h2 className="expense">Expense Items</h2>
        <p>{props.date.toISOString()}</p>
        <p>{props.title}</p>
        <p>{props.amount}</p>
        <p>{props.loc}</p>
        </div>
    )
}
export default ExpenseItem