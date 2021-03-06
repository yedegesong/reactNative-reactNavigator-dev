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
})

export default class User extends Component {
  static navigationOptions = {
    headerTitle: '我是登录页',
    headerRight: (
      <Button
        onPress={() => console.log('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  }

  goBack = () => {
    const { navigation } = this.props
    navigation.goBack()
    /* () => this.props.navigation.navigate('Home', {
      itemId: 86,
      otherParam: 'anything you want here',
    }) */
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          title="返回"
          onPress={this.goBack}
        />
        <Text style={styles.welcome}>我是登录页</Text>
      </View>
    )
  }
}
