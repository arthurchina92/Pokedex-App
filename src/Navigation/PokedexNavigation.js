import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pokedex from "../Screens/Pokedex";
import Pokemon from '../Screens/Pokemon';

const Stack = createNativeStackNavigator();
export default function PokedexNavigation() {
  
    return (
      <Stack.Navigator>
        <Stack.Screen 
         name="Pokedex"
         component={Pokedex} 
         options={{title: "", headerTransparent: true }}
         />
        <Stack.Screen name="Pokemon" component={Pokemon}/>
      </Stack.Navigator>
    );
  }