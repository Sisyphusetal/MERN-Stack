import React, { useState } from 'react';

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [errors, setErrors] = useState({});

    const createUser = (e) => {
        e.preventDefault();
        
        const newErrors = {};
        if(firstName.length < 2) {
            newErrors.firstName = "First name must be at least 2 characters.";
        }

        if(lastName.length < 2) {
            newErrors.lastName = "Last name must be at least 2 characters.";
        }

        if(email.length < 5) {
            newErrors.email = "Email must be at least 5 characters.";
        }

        if(password.length < 8) {
            newErrors.password = "Password must be at least 8 characters.";
        }

        if(password !== passwordConfirm) {
            newErrors.passwordConfirm = "Passwords do not match!";
        }

        if(Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
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

    return (
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                {errors.firstName && <p>{errors.firstName}</p>}
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
                {errors.lastName && <p>{errors.lastName}</p>}
            </div>
            <div>
                <label>Email Address: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
                {errors.password && <p>{errors.password}</p>}
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={(e) => setPasswordConfirm(e.target.value)} />
                {errors.passwordConfirm && <p>{errors.passwordConfirm}</p>}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default UserForm;