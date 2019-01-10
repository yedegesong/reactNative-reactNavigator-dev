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
import IcontSvg from '../../components/icontsvg/index'

export default class Home extends Component {
  static navigationOptions = {
    title: null,
  }

  constructor(props) {
    super(props)
    this.state = {
      movieData: [
        {
          images: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541662397.jpg',
        },
        {
          images: 'http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2543163892.jpg',
        },
        {
          images: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541662397.jpg',
        },
        {
          images: 'http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2543163892.jpg',
        },
        {
          images: 'https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2541662397.jpg',
        },
        {
          images: 'http://img1.doubanio.com/view/photo/s_ratio_poster/public/p2543163892.jpg',
        },
      ],
    }
  }

  render() {
    const { movieData } = this.state
    return (
      <View style={styles.viewpager}>
        <View style={styles.container}>
          <View style={styles.hedrernav}>
            <View style={styles.navitem}>
              <View style={[styles.texticon, styles.texticon1]}>
                <IcontSvg type="yingpianb" />
              </View>
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
              <View style={[styles.titlebox, styles.titleActive]}><Text style={[styles.defaultcolor, styles.listmodtitle, styles.listmodtitleActive]}>影院热映</Text></View>
              <View style={[styles.titlebox]}><Text style={[styles.defaultcolor, styles.listmodtitle]}>即将上映</Text></View>
            </View>
            <Text>全部39</Text>
          </View>
          <View style={styles.listmodcontent}>
            { movieData.map((value, keys) => {
              return (
                <View style={styles.listItem} key={keys}>
                  <Image
                    style={{ width: 105, height: 150, borderRadius: 5 }}
                    source={{ uri: value.images }}
                  />
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}
