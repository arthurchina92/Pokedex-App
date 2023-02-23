import React from 'react';
import { StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList(props){
    const { pokemon, loadPokemons} = props;

    const loadMore = () => {
        loadPokemons();
    };

    return (
      <FlatList
         data={pokemon}
         numColumns={2}
         showsVerticalScrollIndicator={false}
         keyExtractor={(pokemon) => String(pokemon.id)} 
         renderItem={({item}) => <PokemonCard pokemon={item}/>}
         contentContainerStyle={styles.flatListContainer}
         onEndReached={loadMore}
         onEndReachedThreshold={0.1}
         ListFooterComponent={
            <ActivityIndicator
             size="large"
             style={styles.spinner} 
             color="#AEAEAE"
             />
         }
      />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 10,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
});