import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import {getPokemonDetailsApi} from "../api/pokemon";

export default function Pokemon(props) {
  const{navigation, route: {params}}= props;

  const [pokemon,setPokemon]= useState(null);
  console.log(params.id);

  useEffect(()=>{
    (async()=>{
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })()
  }, [params])

  if (!pokemon) return null;
    return (
      <View>
        <Text>{pokemon.name}</Text>
      </View>
    );
  }