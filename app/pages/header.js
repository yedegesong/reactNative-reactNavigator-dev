/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import { SearchBar } from 'antd-mobile-rn'
 
export default class Header extends Component {
  render() {
   
    return (
      <View style={styles.container}>
       <View style={{ marginTop: 30 }}>
        <SearchBar defaultValue="影史上的疯魔表演" placeholder="搜索" />
        
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
