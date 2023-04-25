function ExpenseDetails(props){
    return(
        <div>
            <p>{props.title}</p>
        <p>{props.amount}</p>
        <p>{props.loc}</p>
        </div>
    )
}
export default ExpenseDetails;