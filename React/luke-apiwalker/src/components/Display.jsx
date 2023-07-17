import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Display = () => {
    const { resource, id } = useParams();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    console.log(resource, id); //Console is logging double undefined's on page load

    useEffect(() => {
        if (resource && id) {
            axios.get(`https://swapi.dev/api/${resource}/${id}/`)
                .then((res) => {
                    setData(res.data);
                    setError(null);
                })
                .catch((error) => {
                    console.log(error) //Console isn't showing any errors?
                    setError("These aren't the droids you're looking for");
                });
        }

    }, [resource, id]);

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <img src='./public/obi-wan.jpg' alt="obi-wan.jpg" />
            </div>
        );
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {resource === 'people' && (
                <>
                    <h2>{data.name}</h2>
                    <p>Height: {data.height}</p>
                    <p>Mass: {data.mass}</p>
                    <p>Hair Color: {data.hair_color}</p>
                </>
            )}
            {resource === 'planets' && (
                <>
                    <h2>{data.name}</h2>
                    <p>Rotation period: {data.rotation_period}</p>
                    <p>Orbital period: {data.orbital_period}</p>
                    <p>Diameter: {data.diameter}</p>
                </>
            )}
        </div>
    );
};

export default Display;
