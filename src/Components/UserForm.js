import React, { useRef } from 'react';
import './UserForm.css';

function UserForm(props){
    let fnameref=useRef()
    let lnameref=useRef()
    let emailref=useRef()
    let pwdref=useRef()
    let countryref=useRef()
    let cityref=useRef()
    let dateref=useRef()
    let genderref=useRef()
function createUser(event){
    event.preventDefault()
    let user={
        fname:fnameref.current.value,
        lname:lnameref.current.value,
        email:emailref.current.value,
        pwd:pwdref.current.value,
        country:countryref.current.value,
        city:cityref.current.value,
        date:dateref.current.value,
        gender:genderref.current.value
    }
    console.log(user);
    props.onCreateUser(user)
}

    return <>
            <div id="myModal" class="modal">
                    <div class="modal-content">
                        <div class="close" onClick={props.closeForm}>&times;</div>
                        <h3>Create new user</h3>
                        <div class="user-form">
                            <form onSubmit={createUser}>
                                <div>
                                    <input type="text" placeholder="First name" ref={fnameref} defaultValue={props.editMode?props.userEdit.fname:''}/>
                                    <input type="text" placeholder="Last name" ref={lnameref} defaultValue={props.editMode?props.userEdit.lname:''}/>
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" ref={emailref} defaultValue={props.editMode?props.userEdit.email:''}/>
                                </div>
                                <div>
                                    <input type="password" placeholder="Password" ref={pwdref} />
                                    <input type="password" placeholder="Confirm Password"/>
                                </div>
                                <div>
                                    <select name="country" ref={countryref} defaultValue={props.editMode?props.userEdit.country:''}>
                                        <option value="India">India</option>
                                        <option value="Germany">Germany</option>
                                        <option value="USA">USA</option>
                                        <option value="UK">UK</option>
                                    </select>
                                    <select name="city" ref={cityref} defaultValue={props.editMode?props.userEdit.city:''}>
                                        <option value="Delhi">Delhi</option>
                                        <option value="Berlin">Berlin</option>
                                        <option value="New York">New York</option>
                                        <option value="London">London</option>
                                    </select>
                                </div>
                                <div>
                                    <input type="date" placeholder="Date of Birth" ref={dateref} defaultValue={props.editMode?props.userEdit.date:''} />
                                    <select name="gender" ref={genderref} defaultValue={props.editMode?props.userEdit.gender:''}>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Unknown">Unknown</option>
                                    </select>
                                </div>
                                <button className='add-user-button'>{props.editMode?'Update User':'Create User'}</button>
                            </form>
                        </div>
                    </div>
                </div>
            </>
}

export default UserForm;