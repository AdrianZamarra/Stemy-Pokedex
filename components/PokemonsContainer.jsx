import React, { useState, useEffect } from 'react'
import { PokemonInput } from './PokemonInput';
import { PokemonList } from './PokemonList';
import axios from 'axios';

export const PokemonsContainer = () => {

    const [pokemones, setPokemones] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/')
            .then(data => {
                console.log(data.data?.results);
                setPokemones(data.data?.results);
            }).catch(error => {
                console.log(error);
            })
    }, []);
    
    return (
        <>
            <h1>Pokemons</h1>
            <PokemonInput setSearch={setSearch} />
            <PokemonList search={search} pokemones={pokemones}/>
        </>
    );
}
