import React from "react"
import { View, Text } from "react-native"
import { createStackNavigator, createAppContainer, createSwitchNavigator } from "react-navigation"
import mainRouters from './mainNavigators'
import LoginScreen from '../pages/login'
const AppNavigator = createSwitchNavigator({
  Main: {
    screen: mainRouters
  },
  LoginScreen
}, {
  initialRouteName: "Main"
})

export default createAppContainer(AppNavigator);