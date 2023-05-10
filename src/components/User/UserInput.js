import {useState} from 'react'
import Button from "../UI/Button"
import "./UserInput.css"
import ErrorModel from '../UI/ErrorModel'

function UserInput(props){
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [error,setError]=useState()

    function nameHandler(e){
        setName(e.target.value)
    }

    function ageHandler(e){
        setAge(e.target.value)
    }

    function formSubmitHandler(e){
        e.preventDefault()
      if(name.trim().length===0 || age.trim().length===0){
        setError({
          title:"Error in input",
          message:"Enter the valid name and the age"
        })
        return;
      }
      if(+age<1){
        setError({
          title:"Error in age",
          message:"Enter the valid age (<1)"
        })
        return;
      }
      let id=Math.random().toString()
        props.onAddUser(name,age,id)
        setName("")
        setAge("")
    }

    const errorHandler=()=>{
      setError(false)
    }

    return(
      <div>
      {error && <ErrorModel title={error.title} message={error.message} onConfirm={errorHandler}/>}
       <form className='form_control'>
            <label>UserName:</label>
            <input type="text" id='username' value={name} onChange={nameHandler} placeholder="enter the name"/>
            <label>Age(in years)</label>
            <input type="number" onChange={ageHandler} value={age} placeholder="enter the age"/>
            <Button type="submit" onClick={formSubmitHandler}>Add user</Button>
       </form>
       </div>
    )
}
export default UserInput;