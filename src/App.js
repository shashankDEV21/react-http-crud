
import React, {useEffect, useState} from 'react';
import UserForm from './Components/UserForm';
import './App.css';
import UserDetails from './Components/UserDetails';
import axios from 'axios';
import Loader from './Components/Loader';


function App() {
  let[showForm, setShowForm] = useState(false);

  let[userlist,setUserList]=useState([]);
let[loading, setLoading]=useState(false);
let [editMode,seEdit]=useState(false)
let [userEdit,setUser]=useState(null) 
useEffect(()=>{
getUsers()
},[])
  function addUserHandler(){
    seEdit(false)
    setShowForm(true);
  }

  function closeForm(){
    setShowForm(false)
  }

function onEdit(user){
  seEdit(true)
  setUser(user)
  setShowForm(true)
//console.log(user);
}
 
        function createUser(user){
          if(!editMode){
            fetch('https://react-http-tuts-default-rtdb.firebaseio.com/user.json',{
              method:'POST',
              body:JSON.stringify(user),
              }).then((response)=>{
              console.log(response);
              setShowForm(false)
            getUsers()
              })
          }else{
            axios.put('https://react-http-tuts-default-rtdb.firebaseio.com/user/'+userEdit.id+'.json',user)
            .then((res)=>{
              setShowForm(false)
              getUsers()
            })
            .catch((err)=>{
              console.log(err);
            })
          }
         

//     axios.post('https://react-http-tuts-default-rtdb.firebaseio.com/user.json',user)
//     .then((response)=>{
// console.log(response.data);
//     })

}
function onDelete(user){
  let del=window.confirm('Do You Really Want To Delete User '+user.fname+' '+user.lname);
  if(del){
    axios.delete('https://react-http-tuts-default-rtdb.firebaseio.com/user/'+userEdit.id+'.json',user)
    .then((res)=>{
getUsers()
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}

function getUsers(){
  setLoading(true)
  fetch('https://react-http-tuts-default-rtdb.firebaseio.com/user.json')
  .then((response)=>{
    return response.json()})
  .then((data)=>{
    let userdata=[];
    for(let key in data){
   userdata.push({...data[key], id:key})
    }

    setUserList(userdata)
    setLoading(false)
  })
}
  return (
      <div>
        <div className='page-header'>
          <button className='btn btn-success' onClick={addUserHandler}>Add User</button>
          <button className='btn btn-normal' onClick={getUsers}>Get Users</button>
        </div>
        {!loading&&<UserDetails users={userlist} onEdit={onEdit} onDelete={onDelete}></UserDetails>}
        {loading && <Loader></Loader> }
        {showForm && <UserForm closeForm={closeForm} onCreateUser={createUser} editMode={editMode} userEdit={userEdit}></UserForm>}
      </div>
  );
}

export default App;
