import React, { useState } from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, hairColor} = props
    const [age, setAge] = useState(props.age)

    const ageClick = () => {
        setAge(age+1)
    };

    return (
        <div>
            <h1> {lastName} {firstName} </h1>
            <h2>Age : {age}</h2>
            <h2>Hair Color: {hairColor}</h2>
            <button onClick={ageClick}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;