function UserList(props){
    return(
        <ul>
            {props.users.map(user=>{
              return  <li key={user.id}>{user.name} ({user.age} years old)</li>
            })}
        </ul>
    )
}
export default UserList;