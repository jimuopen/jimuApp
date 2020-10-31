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

export default class ProductCard extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    let item = this._data
    return (
        <View style={{
          flex:1,
          flexDirection: 'column',
          alignItems:'center',
          justifyContent: 'center'}}>
          <Image style={{width: screenWidth/2 -16, height: screenWidth/2 -16}} source={{ uri: item.imgUrl }}/>
          <View style={{
            width: screenWidth/2,
            flexDirection: 'column',
            alignItems:'flex-start',
            justifyContent: 'center',
            marginLeft:16,
            marginTop: px2dp(20),
            marginBottom: px2dp(20)}}>
            <Text allowFontScaling={false} style={{ fontSize: px2sp(16), color: '#333',}} numberOfLines={2}>{item.desc}</Text>
            <Text allowFontScaling={false} style={{ fontSize: px2sp(16), color: 'red'}} numberOfLines={1}>{item.price}</Text>
          </View >
        </View >
    )
  }
}

