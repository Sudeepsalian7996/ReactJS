import React,{ useState } from "react";
import UserInput from "./components/User/UserInput";
import UserList from "./components/User/UserList";

function App() {
  const [listUsers,setListUsers]=useState([])

  function userHandler(name,age,college,id){
    setListUsers((prevUsers)=>{   
      return [...prevUsers,{name:name,age:age,college:college,id:id}]
    })
  }
  return (
   <React.Fragment>
      <UserInput onAddUser={userHandler} />
      <UserList users={listUsers}/>
   </React.Fragment>
  );
}

export default App;
