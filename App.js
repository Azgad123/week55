
import { StyleSheet, Text, View, Image, Pressable, Span } from 'react-native';
import React from 'react';
//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens import
import ColorScreen from './ColorScreen';
import checkOutScreen from './checkOutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='checkOutScreen' component={checkOutScreen} options={{ headerShown: false }}></Stack.Screen>
        <Stack.Screen name='ColorScreen' component={ColorScreen} options={{ headerShown: false }}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer >

  );
}

