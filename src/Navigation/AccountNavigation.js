import React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../Screens/Account';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  
    return (
      <Stack.Navigator>
        <Stack.Screen name="Account" component={Account}/>
      </Stack.Navigator>
    );
  }
