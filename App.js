import 'react-native-gesture-handler';
import React from 'react'  
import Home from './src/screens/Home/Home';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './src/screens/Details/Details';
import Gallery from './src/screens/Gallery/Gallery.js';
const stack=createStackNavigator();
const appTheme={
  ...DefaultTheme,
  colors:{
    background:'#ffffff'
  }
}
export default function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen component={Home} name='Home'></stack.Screen>
        <stack.Screen component={Details} name='Details'></stack.Screen>
        <stack.Screen component={Gallery} name='Gallery'></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  )
}
