import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import HomeScreen from './pages/home'
import UserScreen from './pages/user'

/**
 * 书影音界面
 */
const HomeStack = createStackNavigator(
  { 
    HomeScreen:
    {
      screen:HomeScreen
    }
  }
);

/**
 * 我得界面
 */
const SettingsStack = createStackNavigator(
  { 
    UserScreen:
    {
      screen:UserScreen
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: '书影音',
};

 SettingsStack.navigationOptions = {
   tabBarLabel: '我的',
 };

export default createAppContainer(createBottomTabNavigator({
  HomeStack,
  SettingsStack
}));
