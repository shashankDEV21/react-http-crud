import React from "react";
import './UserDetails.css';

function UserDetails(props){
  function clickEdit(event,user){
    props.onEdit(user)
  }
  function clickDelete(event,user){
    props.onDelete(user)
  }
    return <div className="user-details"> 
        <table className="users-table">
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Date Of Birth</th>
            <th>Gender</th>
            <th></th>
          </tr>
        
            {props.users.map((user)=>{
          return <tr> 
            <td>{user.fname+" "+user.lname }</td>
          <td>{user.email}</td>
          <td>{user.date}</td>
          <td>{user.gender}</td>
          <td>{user.country}</td>
          <td>{user.city}</td>
          <td>
              <button className="btn btn-primary" onClick={(event)=>{clickEdit(event,user)}}>Edit</button>
              <button className="btn btn-danger" onClick={(event)=>{clickDelete(event,user)}}>Delete </button>
          </td>
          </tr>
            })}
            
        
        </table>
    </div>
}

export default UserDetails;