import ExpenseItem from "./ExpenseItem"
import FilterDropDown from "./FIlterDropDown"

function AllExpenses(props){
    console.log("expenses-->",props.items)
    return(
        <div>
            <FilterDropDown />
            {
                props.items.map((ele)=>{
                   return <ExpenseItem date={ele.date} amount={ele.amount} title={ele.title}/>
                })
            }
        </div>
    )
}
export default  AllExpenses;