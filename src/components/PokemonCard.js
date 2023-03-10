import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, LogBox } from 'react-native';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import {useNavigation} from "@react-navigation/native";
import {capitalize} from "lodash";

export default function PokemonCard(props){
    const { pokemon } = props;
    const navigation = useNavigation();
    
    const pokemonColor = getColorByPokemonType(pokemon.type);
    const bgStyles = { backgroundColor: pokemonColor, ...styles.bgStyles};

    const goToPokemon = () => {
        console.log(pokemon.id);
        navigation.navigate("Pokemon", {id: pokemon.id, name: pokemon.name});
    }
    return (
      <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                <Text style={styles.number}>#{`${pokemon.order}`.padStart(3,0)}</Text>
                <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                <Image source={{ uri: pokemon.image }} style={styles.image} />
                </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130,
    },
    spacing: {
        flex: 1,
        padding: 5,
    },
    bgStyles: {
        Flex: 1,
        borderRadius: 15,
        padding: 40,
    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 1,
        width: 90,
        height: 90,
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: "#FFF",
        fontSize: 11,
    },
    name: {
        color: "white",
        fontWeight:'bold',
        fontSize: 15,
        paddingTop: 10,
    },
})