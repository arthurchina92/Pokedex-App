import React from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Platform } from 'react-native';
import PokemonCard from './PokemonCard';

export default function PokemonList(props){
    const { pokemon, loadPokemons, isNext} = props;

    console.log(Platform.OS);

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
         onEndReached={isNext && loadMore}
         onEndReachedThreshold={0.1}
         ListFooterComponent={
            isNext &&(
            <ActivityIndicator
             size="large"
             style={styles.spinner} 
             color="#AEAEAE"
             />
            )
         }
      />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: 5,
        marginTop: Platform.OS === "android" ? 20 : 0,
    },
    spinner: {
        marginTop: 20,
        marginBottom: 60,
    },
});