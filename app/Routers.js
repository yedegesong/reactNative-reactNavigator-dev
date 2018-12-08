import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './pages/home'
import UserScreen from './pages/user'

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      User:UserScreen
    }
 )

export default createAppContainer(AppNavigator);