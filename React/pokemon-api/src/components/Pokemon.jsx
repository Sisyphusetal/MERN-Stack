import React, { useState } from 'react';

const PokemonApi = () => {
    const [pokemon, setPokemon] = useState([]);
    const [fetching, setFetching] = useState(false);

    const fetchPokemon = async () => {
        setFetching(true);
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=807');
        const data = await response.json();
        setPokemon(data.results);
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
