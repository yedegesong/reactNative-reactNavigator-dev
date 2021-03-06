import { StyleSheet } from 'react-native'

import { calcRectSize } from '../../utils/tool'

const ViewWidth = (15 * 2) + (10 * 2)
const calcRectSizeWidth = calcRectSize(ViewWidth, 3, 2)

export const styles = StyleSheet.create({
  viewpager: {
    flex: 1,
  },
  defaultcolor: {
    color: '#7f7f7f',
  },
  container: {},
  hedrernav: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 20,
  },
  navitem: {
    flex: 1,
    alignItems: 'center',
    height: 70,
  },
  texticon: {
    width: 45,
    height: 45,
    borderRadius: 100,
  },
  texticon1: {
    backgroundColor: '#6f97f6',
  },
  texticon2: {
    backgroundColor: '#fdae4a',
  },
  texticon3: {
    backgroundColor: '#62c961',
  },
  texticon4: {
    backgroundColor: '#8c6cd9',
  },
  navitemtext: {
    textAlign: 'center',
    marginTop: 10,
  },
  listmod: {
    marginTop: 20,
    marginBottom: 20,
  },
  listmodheader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#d0d0d0',
    marginLeft: 15,
    marginRight: 15,
  },
  listmodheadertitle: {
    flexDirection: 'row',
    flex: 1,
  },
  listmodtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titlebox: {
    width: 75,
    paddingBottom: 15,
    marginRight: 15,
  },
  titleActive: {
    borderBottomWidth: 2,
    borderStyle: 'solid',
    borderBottomColor: '#000000',
  },
  listmodtitleActive: {
    color: '#000000',
  },
  listmodcontent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
  },
  listItem: {
    marginBottom: 10,
    marginRight: 10,
    width: calcRectSizeWidth.width,
  },
  listImage: {
    width: calcRectSizeWidth.width,
    height: calcRectSize(ViewWidth, 3, 1.5).height,
    borderRadius: 5,
  },
})
