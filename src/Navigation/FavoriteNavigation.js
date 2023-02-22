import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Favorite from "../Screens/Favorite";

const Stack = createNativeStackNavigator();
export default function FavoriteNavigation() {
  
    return (
      <Stack.Navigator>
        <Stack.Screen name="Favorite" component={Favorite}/>
      </Stack.Navigator>
    );
  }
