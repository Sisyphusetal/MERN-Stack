import React from 'react';

const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor} = props
    return (
        <div>
            <h1> {lastName} {firstName} </h1>
            <h2>Age : {age}</h2>
            <h2>Hair Color: {hairColor}</h2>
        </div>
    )
}

export default PersonCard;