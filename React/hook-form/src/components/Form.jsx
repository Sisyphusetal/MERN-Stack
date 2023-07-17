import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();

        if(password !== passwordConfirm) {
            alert("Passwords do not match!");
            return;
        }
    
        const newUser = { 
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password: password 
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                <p>First Name: {firstName}</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                <p>Last Name: {lastName}</p>
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
                <p>Email: {email}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
                <p>Password: {password}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setPasswordConfirm(e.target.value) } />
                <p>Confirm Password: {passwordConfirm}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;