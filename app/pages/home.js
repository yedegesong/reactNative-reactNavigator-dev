/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, Button,PanResponder,StyleSheet, Text, View } from 'react-native';
import Header from './header'
export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <Header />
  };
  constructor(props) {
    super(props);
    this.state = {
      title: "我是首页控制器"
    }
  }

  render() {
   
    return (
      <View style={styles.container}>
        <Button
          title="去详情"
          onPress={() => this.props.navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <Button
          title="去登录"
          onPress={() => this.props.navigation.navigate('LoginScreen', {
            itemId: 86,
            otherParam: 'anything you want here',
          })}
        />
        <Text style={styles.welcome}>{this.state.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
