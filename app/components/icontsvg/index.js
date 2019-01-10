import React, { Component } from 'react'
import Svg, { Path } from 'react-native-svg'
import DefaultSvg from './iconfontSvg'

console.log(DefaultSvg)
export default class IcontSvg extends Component {
  /**
     * 默认静态属性
     */
    static defaultProps = {
      width: 22,
      height: 22,
      viewBox: '0 0 1024 1024',
      type: 'wenjianjia',
      fill: 'yellow',
    }

    render() {
      const { width, height, viewBox, style, fill, type } = this.props
      return (
        <Svg height={height} width={width} viewBox={viewBox} style={{ ...style }}>
          {DefaultSvg[type] && DefaultSvg[type].map((path, i) => {
            return <Path key={i} d={path.d} fill={fill} />
          })}
        </Svg>
      )
    }
}
