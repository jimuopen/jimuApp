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

export default class CartProductCard extends BaseCard{

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <View style={styles.wrapper}>
          <Image style={{width:px2dp(25),height:px2dp(25)}}
                 source={require('../../image/frame/radio_selected.png')} />
          <Image style={styles.image} source={{ uri: this._data.imgUrl }}/>
          <View style={{height:100,
            width: screenWidth - px2dp(160),
            paddingLeft: px2dp(12),
            justifyContent: 'space-between'}}>
           <Text allowFontScaling={false} style={{ fontSize: px2sp(16), color: '#333' }} numberOfLines={2}>
             {this._data.desc}</Text>
            <View style={{
              flexDirection: 'row',
              width: screenWidth - px2dp(180),
              justifyContent: 'space-between'}}>
              <Text allowFontScaling={false} style={{ fontSize: px2sp(18), color: 'red' }} numberOfLines={1}>{this._data.price}</Text>
              <Text allowFontScaling={false} style={{ fontSize: px2sp(18), color: '#333' }} numberOfLines={1}>- [ {this._data.count} ] +</Text>
            </View >
          </View >
        </View >
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: screenWidth,
    height: px2dp(132),
    padding:px2dp(12),
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor:'#fff'
  },
  title: {
    fontSize: px2sp(16),
    color: '#F34',
  },
  image: {
    width: px2dp(100),
    height: px2dp(100),
    marginLeft:px2dp(20),
    borderWidth:1,
    borderColor:'#cccccc',
    backgroundColor:'#fff'
  }
})

