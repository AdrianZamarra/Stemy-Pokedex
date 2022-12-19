import React from 'react'

export const PokemonList = props => {

    const filtrar = search => props.pokemones
        .reduce((listaPokemons, pokemonActual) => (listaPokemons.concat(pokemonActual.name)), [])
        .filter(pokemon => pokemon.toLowerCase().includes(search.toLowerCase()))
        .sort()

    return (
        <>
            {filtrar(props.search)
                .map((pokemon, index) => (
                <div key={index}>{pokemon}</div>
            ))}
        </>
   )
}