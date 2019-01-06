/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})

export default class User extends Component {
  static navigationOptions = {
    headerTitle: '我的',
    headerRight: (
      <Button
        onPress={() => console.log('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ width: 20, height: 30, backgroundColor: 'yellow' }}></View>
        <Text style={styles.welcome}>我是user首页</Text>
      </View>
    )
  }
}
