/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './pages/home'
import UserScreen from './pages/user'

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  User:UserScreen
});

export default TabNavigator;
