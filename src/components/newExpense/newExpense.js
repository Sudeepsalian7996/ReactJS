import ExpenseForm from "./ExpenseForm"

function newExpense(props){
    function newExpenseAddHandler(expenseData){
        const newExpenseData={
            ...expenseData,
            id:Math.random().toPrecision(3)
        }
        props.expenseAddedToApp(newExpenseData)
    }
    
    return(
        <ExpenseForm newExpenseAdd={newExpenseAddHandler}/>
    )
}
export default newExpense