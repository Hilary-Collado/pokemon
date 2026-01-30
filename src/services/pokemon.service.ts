import { getRandomNumber } from "../lib/random-numbers";
import type { Pokemon } from "../types/pokemon.interface";

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon/';
const MAX_POKEMON_COUNT = 500;
  
export const getPokemon = async() : Promise<Pokemon> => {
    const randomId = getRandomNumber(1, MAX_POKEMON_COUNT);
    const response = await fetch(`${POKEMON_API_URL}/${randomId}`);

    if(!response.ok){ 
        throw new Error('Failed to fetch Pokemon data');
    }

    const data = await response.json(); 

    return{
        id: data.id,
        name: data.name,
        image: data.sprites.other["official-artwork"].front_default, 
    }
}

export const pokemonService ={
    getPokemon,
}