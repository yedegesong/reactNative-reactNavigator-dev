import { Dimensions } from 'react-native'

/**
 *
 * @param {*} gap // 减去的宽度 可以有补白paadding + 图片padding
 * @param {*} count // 列数
 * @param {*} proportion // 比列默认为1:1 长方形推荐1:1.5
 */
export const calcRectSize = (gap, count, proportion = 1) => {
  const { width } = Dimensions.get('window')
  // TODO 这里为了兼容iosplus 所以多加1
  const w = (width - (gap + 1)) / count
  return { width: w, height: w * proportion, contentWidth: (width - gap), clientWidth: width }
}
