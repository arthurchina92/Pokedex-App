import React from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet } from 'react-native';
import {capitalize} from "lodash";
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header(props) {
   const {name, order, image, type} = props;
   const color = getColorByPokemonType(type);
   const bgStyle = [{backgroundColor: color, ...styles.bg}]

    return (
      <>
      <View style={bgStyle} />
        <SafeAreaView style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3,0)}</Text>
              </View>
            <View style={styles.imageContainer}>
                <Image source={{uri: image}} style={styles.image}/>
            </View> 
        </SafeAreaView>
      </>
    );
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 400,
        position:"absolute",
        borderBottomEndRadius: 300,
        borderBottomLeftRadius: 300,
        transform: [{scaleX: 2}]
    },
    content: {
        marginHorizontal: 20,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 40,
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        alignItems: "center",
        fontSize: 30,
    },
    order: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        justifyContent: 'center',
        top: 30,
    },
    image: {
        alignSelf: 'center',
        width: 250,
        height: 300,
        resizeMode: "contain",
    },
})