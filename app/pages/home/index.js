/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { styles } from './style'

export default class Home extends Component {
  static navigationOptions = {
    title: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      title: '我是首页控制器',
    }
  }

  render() {
    return (
      <View style={styles.viewpager}>
        <View style={styles.container}>
          <View style={styles.hedrernav}>
            <View style={styles.navitem}>
              <View style={[styles.texticon, styles.texticon1]} />
              <Text style={[styles.defaultcolor, styles.navitemtext]}>找电影</Text>
            </View>
            <View style={styles.navitem}>
              <View style={[styles.texticon, styles.texticon2]} />
              <Text style={[styles.defaultcolor, styles.navitemtext]}>豆瓣榜单</Text>
            </View>
            <View style={styles.navitem}>
              <View style={[styles.texticon, styles.texticon3]} />
              <Text style={[styles.defaultcolor, styles.navitemtext]}>豆瓣猜</Text>
            </View>
            <View style={styles.navitem}>
              <View style={[styles.texticon, styles.texticon4]} />
              <Text style={[styles.defaultcolor, styles.navitemtext]}>豆瓣片单</Text>
            </View>
          </View>
        </View>
        <View style={styles.listmod}>
          <View style={styles.listmodheader}>
            <View style={[styles.listmodheadertitle]}>
              <View><Text style={[styles.defaultcolor, styles.listmodtitle]}>影院热映</Text></View>
              <View><Text style={[styles.defaultcolor, styles.listmodtitle]}>即将上映</Text></View>
            </View>
            <Text>全部39</Text>
          </View>
          <View style={styles.listmodcontent}>
            <View style={styles.listItem}>
              <Image
                style={{ width: 105, height: 150 }}
                source={{ uri: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541662397.jpg' }}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                style={{ width: 105, height: 150 }}
                source={{ uri: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2542268337.jpg' }}
              />
            </View>
            <View style={styles.listItem}>
              <Image
                style={{ width: 105, height: 150 }}
                source={{ uri: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541280047.jpg' }}
              />
            </View>
            <View>
              <Image
                style={{ width: 105, height: 150 }}
                source={{ uri: 'https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2542867516.jpg' }}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
