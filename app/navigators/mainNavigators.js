import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer,createBottomTabNavigator } from "react-navigation";
import HomeScreen from '../pages/home'
import UserScreen from '../pages/user'
import DetailsScreen from '../pages/details'
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
const UserStack = createStackNavigator(
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

UserStack.navigationOptions = {
   tabBarLabel: '我的',
 };

 const BottomNavStack = createBottomTabNavigator({
  HomeStack,
  UserStack
})

 const RootStack = createStackNavigator({
  BottomNavStack,
  DetailsScreen
 },{
  headerMode:'none',
  initialRouteName: "BottomNavStack"
 })
export default createAppContainer(RootStack)
