import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Dimensions, Image,
} from 'react-native'
import { px2sp, px2dp } from '../utils/ScreenUtils'
import BaseCard from "./base/BaseCard";

// 获得屏幕宽高
const screenWidth = Dimensions.get('window').width

export default class ImageCard extends BaseCard {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.wrapper}>
          <Image style={styles.swiperImage} source={{ uri: this._data.imgUrl }}/>
        </View >
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth,
    height: (screenWidth - px2dp(32)) * 130 / 343,
  },
  swiperImage: {
    width: screenWidth,
    height: screenWidth * 120 / 375
  }
})

