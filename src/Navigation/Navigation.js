import React from 'react';
import { View, Text, Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoriteNavigation from './FavoriteNavigation';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';


const Tab = createBottomTabNavigator();

export default function Navigation() {
  
    return (
      <Tab.Navigator>
        <Tab.Screen 
        name="Favorite Navigation" 
        component={FavoriteNavigation} 
        options={{
          headerShown: false,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({color,size}) => 
          <Icon name="heart" color={color} size={size}/>
        }}/>
        <Tab.Screen name="PokedexNavigation" component={PokedexNavigation}
        
        options={{
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: () => renderPokeball(),
        }}/>
        <Tab.Screen name="AccountNavigation" component={AccountNavigation}
        options={{
          headerShown: false,
          tabBarLabel: "My Account",
          tabBarIcon: ({color,size}) => 
          <Icon name="user" color={color} size={size}/>
        }}/>
      </Tab.Navigator>
      
    );
  }

  function renderPokeball(){
    return (
      <Image
         source={require('../assets/pokeball.png')}
         style={{width: 75, height: 75, top: -15}}/>
    )
  }