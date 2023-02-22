import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList(props){
    const { pokemon } = props;

    return (
      <FlatList
         data={pokemon}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(pokemon) => String(pokemon.id)} 
         renderItem={({item}) => <PokemonCard pokemon={item}/>}
         contentContainerStyle={styles.flatListContainer}
      />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 10,
    },
});