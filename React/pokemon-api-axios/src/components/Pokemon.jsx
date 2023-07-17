import React, { useState } from 'react';
import axios from 'axios';

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);
    const [fetching, setFetching] = useState(false);

    const fetchPokemon = async () => {
        setFetching(true);
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=807');
            setPokemon(response.data.results);
        } catch (error) {
            console.error('There was an error fetching the pokemon: ', error);
        }
        setFetching(false);
    };

    return (
        <div>
            <button onClick={fetchPokemon}>Fetch Pokemon</button>
            {fetching && <p>Loading...</p>}
            {!fetching && pokemon.map((p, index) => <p key={index}>{p.name}</p>)}
        </div>
    );
};

export default PokemonApi;
