import { useState } from "react";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  const [listUsers,setListUsers]=useState([])

  function userHandler(name,age,id){
    setListUsers((prevUsers)=>{   
      return [...prevUsers,{name:name,age:age,id:id}]
    })
  }
  console.log(listUsers)
  return (
   <div>
      <UserInput onAddUser={userHandler} />
      <UserList users={listUsers}/>
   </div>
  );
}

export default App;
