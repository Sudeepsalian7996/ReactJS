function UserList(props){
    return(
        <ul>
            {props.users.map(user=>{
              return  <li key={user.id}>{user.name} ({user.age} years old) {user.college}</li>
            })}
        </ul>
    )
}
export default UserList;