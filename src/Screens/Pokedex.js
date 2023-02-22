import React, {useState, useEffect} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {getPokemonsApi, getPokemonDetailsByUrlApi} from "../api/pokemon";
import PokemonList from '../components/PokemonList';

export default function Pokedex() {
  const [pokemon, setPokemon] = useState([]);
  console.log("pokemons--->", pokemon);

    useEffect(() =>{
        (async () => {
            await loadPokemons();
        })()
    }, [])
      
    const loadPokemons = async () =>{
        try {
            const response = await getPokemonsApi();
            
            const pokemonsArray = [];
            for await (const pokemon of response.results){
              const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
            
              pokemonsArray.push({
                id: pokemonDetails.id,
                name: pokemonDetails.name,
                type: pokemonDetails.types[0].type.name,
                order: pokemonDetails.order,
                image: pokemonDetails.sprites.other['official-artwork'].front_default
              })
            }

            setPokemon([...pokemon, ...pokemonsArray]);

        } catch (error) {
            console.error(error)
        }
    }
    return (
      <SafeAreaView>
        <PokemonList pokemon={pokemon}/>
      </SafeAreaView>
    );
  }